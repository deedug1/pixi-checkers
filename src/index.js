import * as PIXI from "./pixi.js";
import { Board } from "./board.js";
import { Piece } from "./piece.js";
const app = new PIXI.Application({height: 640, width: 800, backgroundColor: 0xDDDDDD});
const board = new Board(80);
app.stage.addChild(board);



document.getElementById("gameContainer").appendChild(app.view);