import * as PIXI from "./pixi.js"

function onDragStart(event) {
    const obj = event.currentTarget;
    obj.dragData = event.data;
    obj.dragging = 1;
    obj.dragPointerStart = event.data.getLocalPosition(obj.parent);
    obj.dragObjStart = new PIXI.Point();
    obj.dragObjStart.copyFrom(obj.position);
    obj.dragGlobalStart = new PIXI.Point();
    obj.dragGlobalStart.copyFrom(event.data.global);
}

function onDragEnd(event) {
    const obj = event.currentTarget;
    if (!obj.dragging) return;

    obj.dragging = 0;
    obj.dragData = null;
    // set the interaction data to null
}

function onDragMove(event) {
    const obj = event.currentTarget;
    if (!obj.dragging) return;
    const data = obj.dragData; // it can be different pointer!
    if (obj.dragging === 1) {
    // click or drag?
        if (Math.abs(data.global.x - obj.dragGlobalStart.x)
            + Math.abs(data.global.y - obj.dragGlobalStart.y) >= 3) {
            // DRAG
            obj.dragging = 2;
        }
    }
    if (obj.dragging === 2) {
        const dragPointerEnd = data.getLocalPosition(obj.parent);
        // DRAG
        obj.position.set(
            obj.dragObjStart.x + (dragPointerEnd.x - obj.dragPointerStart.x),
            obj.dragObjStart.y + (dragPointerEnd.y - obj.dragPointerStart.y),
        );
    }
}

export function addInteraction(obj) {
    obj.interactive = true;
    obj
        .on('pointerdown', onDragStart)
        .on('pointerup', onDragEnd)
        .on('pointerupoutside', onDragEnd)
        .on('pointermove', onDragMove);
}