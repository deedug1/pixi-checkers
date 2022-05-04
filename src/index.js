import * as PIXI from "./pixi.js";
import { generateBoardGraphic } from "./board.js";
import { Piece } from "./piece.js";
const app = new PIXI.Application({height: 640, width: 800, backgroundColor: 0xDDDDDD});
const board = generateBoardGraphic({cellSize: 80});
board.x = 80;
app.stage.addChild(board);

for(let i = 0; i < 3; i++) {
    for(let x = 0; x < 8; x++) {
        const piece = new Piece();
        piece.x = (x * 80) + 120;
        piece.y = (i * 80) + 40;
        app.stage.addChild(piece);
    }
}

document.getElementById("gameContainer").appendChild(app.view);