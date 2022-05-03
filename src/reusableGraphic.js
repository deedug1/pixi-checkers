import * as PIXI from "./pixi.js";



export class ReusableGraphic {

    constructor() {
        this.graphic = null;    
    }

    getGraphic() {
        
        if(!this.graphic) {
            this.graphic = this.generateGraphic();
        }
        
        
        return new PIXI.Graphics(this.graphic.geometry);
    }

    generateGraphic() {
        throw new Error("Generate Graphic not implemented");
    }

}