import * as PIXI from "./pixi.js";





export function generateBoardGraphic(options) {

    const cellSize = options.cellSize || 50;
    const color1 = options.color1 || 0xFFFFFF;
    const color2 = options.color2 || 0x77DD77;
    const boardGraphic = new PIXI.Graphics();
    let count = 0;
    for(let i = 0; i < 8; i++) {
        for(let x = 0; x < 8; x++) {
            count++;
            if(count % 2 == 0) {
                boardGraphic.beginFill(color1);
            } else {
                boardGraphic.beginFill(color2);
            }
            boardGraphic.drawRect(cellSize * x, cellSize * i, cellSize, cellSize);
            boardGraphic.endFill();
        }
        count++;
    }

    return boardGraphic;
    
}