import * as PIXI from "./pixi.js";
import { Piece } from "./piece.js";

export class Board extends PIXI.Graphics {

    constructor(cellSize=50, color1=0xFFFFFF, color2=0x77DD77, pieceColor1=0xFF7F7F, pieceColor2=0xC39B77, pieceSize=25) {
        super();
        this.piece1Template = this._createPieceTemplate(pieceColor1, pieceSize);
        this.piece2Template = this._createPieceTemplate(pieceColor2, pieceSize);
        this._generateBoard(color1, color2, cellSize);
        this._generatePieces();
    }

    _generateBoard(color1, color2, cellSize) {
        let count = 0;
        for(let i = 0; i < 8; i++) {
            for(let x = 0; x < 8; x++) {
                count++;
                if(count % 2 == 0) {
                    this.beginFill(color1);
                } else {
                    this.beginFill(color2);
                }
                this.drawRect(cellSize * x, cellSize * i, cellSize, cellSize);
                this.endFill();
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
                const piece = new Piece(this.piece1Template.geometry);
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
                const piece = new Piece(this.piece2Template.geometry);
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
    destroy() {
        this.piece1Template.destroy();
        this.piece2Template.destroy();
        super.destroy();
    }
}