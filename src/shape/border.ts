import { Shape } from "./shape";
import { Svg } from "../svg";

export class Border extends Shape {
    constructor(svg: Svg) {
        super(svg);
    }
    public draw(): void {

        let rect = document.createElementNS(this.ns, 'rect');
        let result = this.extractRectanglePos(this._rectangularPosition);
        rect.setAttributeNS(null, 'x', result.left.toString());
        rect.setAttributeNS(null, 'y', top.toString());
        rect.setAttributeNS(null, 'width', Math.abs(result.right - result.left).toString());
        rect.setAttributeNS(null, 'height', Math.abs(result.bottom - result.top).toString());
        rect.setAttributeNS(null, 'fill', 'none');
        rect.setAttributeNS(null, 'stroke', 'black');
        rect.setAttributeNS(null, 'stroke-dasharray', '4 1');
        rect.setAttributeNS(null, 'stroke-dashoffset', '2');
        this.svg.appendChild(rect)

    }
}