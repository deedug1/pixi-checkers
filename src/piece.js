import { Draggable } from "./draggable.js";
import * as PIXI from "./pixi.js";

const pieceTemplate = new PIXI.Graphics();
pieceTemplate.beginFill(0x0000FF);
pieceTemplate.drawCircle(0, 0, 25);
pieceTemplate.endFill();


export class Piece extends PIXI.Graphics {

    constructor(geometry) {
        super(geometry);
        Draggable.addDragInteraction(this);
    }


}