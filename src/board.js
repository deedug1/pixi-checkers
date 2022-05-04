import * as PIXI from "./pixi.js";
import { Piece } from "./piece.js";

export class Board extends PIXI.Graphics {

    constructor(cellSize=50, color1=0xFFFFFF, color2=0x77DD77) {
        super();
        this.boardPositions = [];
        this._generateBoard(color1, color2, cellSize);
        this._generatePieces();
    }

    handleMove(piece, start, end) {
        if(!this.isLegalMove(start, end)) {
            piece.position = new PIXI.Point().copyFrom(start);
            return;
        }
        const nearestSquare = this.getNearestSquare(start, end);
        piece.position.set(nearestSquare.x, nearestSquare.y);
    }

    isLegalMove(start, end) {
        return true;
    }

    getNearestSquare(start, end) {
        let newPoint = start;
        let minDist = 50;
        for(const boardPos of this.boardPositions) {
            const newDist = Board.getPointDistance(end, boardPos);
            if(newDist < minDist){
                minDist = newDist;
                newPoint = boardPos;
            }
        }
        return newPoint;
    }

    _generateBoard(color1, color2, cellSize) {
        let count = 0;
        for(let y = 0; y < 8; y++) {
            for(let x = 0; x < 8; x++) {
                count++;
                if(count % 2 == 0) {
                    this.beginFill(color1);
                } else {
                    this.beginFill(color2);
                }
                this.drawRect(cellSize * x, cellSize * y, cellSize, cellSize);
                this.endFill();
                const xMid = (cellSize * x) + (cellSize/2);
                const yMid = (cellSize * y) + (cellSize/2);
                this.boardPositions.push(new PIXI.Point(xMid, yMid));

            }
            count++;
        }
    }

    _generatePieces() {
        let count = 1;
        for(let i = 0; i < 3; i++) {
            for(let x = 0; x < 8; x++) {
                count++;
                if(count % 2 == 0) {
                    continue;
                }
                const piece = new Piece(this, 1);
                piece.x = (x * 80) + 40;
                piece.y = (i * 80) + 40;

                this.addChild(piece);
            }
            count++;
        }

        count = 0;
        for(let i = 5; i < 8; i++) {
            for(let x = 0; x < 8; x++) {
                count++;
                if(count % 2 == 0) {
                    continue;
                }
                const piece = new Piece(this, 2);
                piece.x = (x * 80) + 40;
                piece.y = (i * 80) + 40;
                this.addChild(piece);
            }
            count++;
        }
    }

    _createPieceTemplate(pieceColor, pieceSize) {
        const pieceTemplate = new PIXI.Graphics();
        pieceTemplate.beginFill(pieceColor);
        pieceTemplate.drawCircle(0, 0, pieceSize);
        pieceTemplate.endFill();
        return pieceTemplate;
    }

    static getPointDistance(point1, point2) {
        const diffX = point1.x - point2.x;
        const diffY = point1.y - point2.y;
        return Math.sqrt(Math.pow(diffX, 2) + Math.pow(diffY, 2));
    }
    destroy() {
        this.piece1Template.destroy();
        this.piece2Template.destroy();
        super.destroy();
    }
}