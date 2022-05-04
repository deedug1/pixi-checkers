import { Draggable } from "./draggable.js";
import * as PIXI from "./pixi.js";



export class Piece extends PIXI.Graphics {

    constructor(board, player) {
        super();
        this.player = player;
        this.board = board;
        Draggable.addDragInteraction(this);
        this._makeGeometry();
    }

    onDragEnd() {
        this.board.handleMove(this, this.dragObjStart, this.position);
    }

    onDragStart() {
        // Drag start is already recorded by the Draggable class
        // We would otherwise save that info off here
    }

    _makeGeometry() {
        const color = this.player == 1 ? 0xFF0000 : 0x0000FF;
        this.beginFill(color);
        this.drawCircle(0, 0, 25);
        this.endFill();
    }




}