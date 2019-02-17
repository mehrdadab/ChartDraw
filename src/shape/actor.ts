import { Shape } from "./shape";
import { Rect } from "../models/rect";

export class Actor extends Shape {
    constructor(svgId: string) {
        super(svgId);
    }
    public draw<T>(shapeInfo: T): void {

        let info: any = shapeInfo;
        //let actor = document.createElementNS(this.ns, 'ellipse');
        //let { right, left, bottom, top } = this.extractRectanglePos(info);
        //let rx = (right - left) / 2;
        //let ry = (bottom - top) / 2;
        //ellipse.setAttributeNS(null, 'cx', (left+rx).toString());
        //ellipse.setAttributeNS(null, 'cy', (top+ry).toString());
        //ellipse.setAttributeNS(null, 'rx', rx.toString());
        //ellipse.setAttributeNS(null, 'ry', ry.toString());
        //ellipse.setAttributeNS(null, 'fill', 'none');
        //ellipse.setAttributeNS(null, 'stroke', 'black');
        this.drawHead<T>(shapeInfo);
        this.drawBody<T>(shapeInfo);

    }

    private drawHead<T>(shapeInfo: T): void {
        let { right, left, bottom, top } = this.extractRectanglePos(shapeInfo);
        let ellipse = document.createElementNS(this.ns, 'circle');
        ellipse.setAttributeNS(null, 'cx', (left + ((right - left) / 2)).toString());
        let headRx = (bottom - top) / 8;
        ellipse.setAttributeNS(null, 'cy', ((top + headRx)).toString());
        ellipse.setAttributeNS(null, 'r', headRx.toString());
        ellipse.setAttributeNS(null, 'fill', 'none');
        ellipse.setAttributeNS(null, 'stroke', 'black');
        this.svg.appendChild(ellipse)

    }
    private drawBody<T>(shapeInfo: T): void {
        let { right, left, bottom, top } = this.extractRectanglePos(shapeInfo);
        //Body
        let ellipse = document.createElementNS(this.ns, 'line');
        let headRx = (bottom - top) /4;
        ellipse.setAttributeNS(null, 'x1', (left + ((right - left) / 2)).toString());
        ellipse.setAttributeNS(null, 'y1', ( (top + headRx)).toString());
        ellipse.setAttributeNS(null, 'x2', (left + ((right - left) / 2)).toString());
        ellipse.setAttributeNS(null, 'y2', ((top + 3 * headRx)).toString());
        ellipse.setAttributeNS(null, 'stroke', 'black');
        this.svg.appendChild(ellipse);
        //left leg
        ellipse = document.createElementNS(this.ns, 'line');
        ellipse.setAttributeNS(null, 'x1', (left + ((right - left) / 2)).toString());
        ellipse.setAttributeNS(null, 'y1', ((top + 3 * headRx)).toString());
        ellipse.setAttributeNS(null, 'x2', left.toString());
        ellipse.setAttributeNS(null, 'y2', bottom.toString());
        ellipse.setAttributeNS(null, 'stroke', 'black'); this.svg.appendChild(ellipse)
        this.svg.appendChild(ellipse);
        //right leg
        ellipse = document.createElementNS(this.ns, 'line');
        ellipse.setAttributeNS(null, 'x1', (left + ((right - left) / 2)).toString());
        ellipse.setAttributeNS(null, 'y1', ((top + 3 * headRx)).toString());
        ellipse.setAttributeNS(null, 'x2', right.toString());
        ellipse.setAttributeNS(null, 'y2', bottom.toString());
        ellipse.setAttributeNS(null, 'stroke', 'black'); this.svg.appendChild(ellipse)
        this.svg.appendChild(ellipse);
        //hands
        ellipse = document.createElementNS(this.ns, 'line');
        ellipse.setAttributeNS(null, 'x1', (left).toString());
        ellipse.setAttributeNS(null, 'y1', ((top + 1.5 * headRx)).toString());
        ellipse.setAttributeNS(null, 'x2', right.toString());
        ellipse.setAttributeNS(null, 'y2', ((top + 1.5 * headRx)).toString());
        ellipse.setAttributeNS(null, 'stroke', 'black'); this.svg.appendChild(ellipse)
        this.svg.appendChild(ellipse);

    }
}