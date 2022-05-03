import * as PIXI from "./pixi.js";
import { generateBoardGraphic } from "./board.js";
import { Piece } from "./piece.js";
import { addInteraction } from "./draggable.js";
const app = new PIXI.Application({height: 640, width: 800, backgroundColor: 0xDDDDDD});
const board = generateBoardGraphic({cellSize: 80});
const pieceGenerator = new Piece();
board.x = 80;
app.stage.addChild(board);

for(let i = 0; i < 3; i++) {
    for(let x = 0; x < 8; x++) {
        const piece = pieceGenerator.getGraphic();
        addInteraction(piece);
        piece.x = (x * 80) + 120;
        piece.y = (i * 80) + 40;
        app.stage.addChild(piece);
    }
}

document.getElementById("gameContainer").appendChild(app.view);