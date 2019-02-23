import { Shape } from "./shape";
import { Rect } from "../models/rect";
import { Svg } from "../svg";

export class Actor extends Shape {
    constructor(svg: Svg) {
        super(svg);
    }
    public draw(): void {


        this.drawHead(this._rectangularPosition);

        this.drawBody(this._rectangularPosition);

    }

    private drawHead(shapeInfo: Rect): void {
        let result = this.extractRectanglePos(shapeInfo);
        let ellipse = document.createElementNS(this.ns, 'circle');
        ellipse.setAttributeNS(null, 'cx', (result.left + ((result.right - result.left) / 2)).toString());
        let headRx = (result.bottom - result.top) / 8;
        ellipse.setAttributeNS(null, 'cy', ((result.top + headRx)).toString());
        ellipse.setAttributeNS(null, 'r', headRx.toString());
        ellipse.setAttributeNS(null, 'fill', 'none');
        ellipse.setAttributeNS(null, 'stroke', 'black');
        this.svg.appendChild(ellipse)

    }
    private drawBody(shapeInfo: Rect): void {
        let result = this.extractRectanglePos(shapeInfo);
        //Body
        let ellipse = document.createElementNS(this.ns, 'line');
        let headRx = (result.bottom - result.top) /4;
        ellipse.setAttributeNS(null, 'x1', (result.left + ((result.right - result.left) / 2)).toString());
        ellipse.setAttributeNS(null, 'y1', ((result.top + headRx)).toString());
        ellipse.setAttributeNS(null, 'x2', (result.left + ((result.right - result.left) / 2)).toString());
        ellipse.setAttributeNS(null, 'y2', ((result.top + 3 * headRx)).toString());
        ellipse.setAttributeNS(null, 'stroke', 'black');
        this.svg.appendChild(ellipse);
        //left leg
        ellipse = document.createElementNS(this.ns, 'line');
        ellipse.setAttributeNS(null, 'x1', (result.left + ((result.right - result.left) / 2)).toString());
        ellipse.setAttributeNS(null, 'y1', ((result.top + 3 * headRx)).toString());
        ellipse.setAttributeNS(null, 'x2', result.left.toString());
        ellipse.setAttributeNS(null, 'y2', result.bottom.toString());
        ellipse.setAttributeNS(null, 'stroke', 'black'); this.svg.appendChild(ellipse)
        this.svg.appendChild(ellipse);
        //right leg
        ellipse = document.createElementNS(this.ns, 'line');
        ellipse.setAttributeNS(null, 'x1', (result.left + ((result.right - result.left) / 2)).toString());
        ellipse.setAttributeNS(null, 'y1', ((result.top + 3 * headRx)).toString());
        ellipse.setAttributeNS(null, 'x2', result.right.toString());
        ellipse.setAttributeNS(null, 'y2', result.bottom.toString());
        ellipse.setAttributeNS(null, 'stroke', 'black'); this.svg.appendChild(ellipse)
        this.svg.appendChild(ellipse);
        //hands
        ellipse = document.createElementNS(this.ns, 'line');
        ellipse.setAttributeNS(null, 'x1', (result.left).toString());
        ellipse.setAttributeNS(null, 'y1', ((result.top + 1.5 * headRx)).toString());
        ellipse.setAttributeNS(null, 'x2', result.right.toString());
        ellipse.setAttributeNS(null, 'y2', ((result.top + 1.5 * headRx)).toString());
        ellipse.setAttributeNS(null, 'stroke', 'black'); this.svg.appendChild(ellipse)
        this.svg.appendChild(ellipse);

    }
}