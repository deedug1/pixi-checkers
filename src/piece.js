import * as PIXI from "./pixi.js";
import { ReusableGraphic } from "./reusableGraphic.js";


export class Piece extends ReusableGraphic {

    constructor() {
        super();

    }

    generateGraphic() {
        const pieceGraphic = new PIXI.Graphics();

        pieceGraphic.beginFill(0xFF0000);
        pieceGraphic.drawCircle(0, 0, 20);
        pieceGraphic.endFill();

        return pieceGraphic;

    }
}