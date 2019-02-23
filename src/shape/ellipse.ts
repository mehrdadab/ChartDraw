import { Shape } from "./shape";
import { Svg } from "../svg";

export class Ellipse extends Shape {
    constructor(svg: Svg)
    {
        super(svg);
    }
    public draw(): void {

        let ellipse = document.createElementNS(this.ns, 'ellipse');
        let { right, left, bottom, top } = this.extractRectanglePos(this._rectangularPosition);
        let rx = (right - left) / 2;
        let ry = (bottom - top) / 2;
        ellipse.setAttributeNS(null, 'cx', (left+rx).toString());
        ellipse.setAttributeNS(null, 'cy', (top+ry).toString());
        ellipse.setAttributeNS(null, 'rx', rx.toString());
        ellipse.setAttributeNS(null, 'ry', ry.toString());
        ellipse.setAttributeNS(null, 'fill', 'none');
        ellipse.setAttributeNS(null, 'stroke', 'black');
        this.svg.appendChild(ellipse);

    }
}