import { Shape } from "./shape";

export class Ellipse extends Shape {
    constructor(svgId: string)
    {
        super(svgId);
    }
    public draw<T>(shapeInfo: T): void {

        let info: any = shapeInfo;
        let rect = document.createElementNS(this.ns, 'ellipse');
        let left = info.left < info.right ? info.left : info.right;
        let top = info.top < info.bottom ? info.top : info.bottom;
        let right = info.right > info.left ? info.right : info.left;
        let bottom = info.bottom > info.top ? info.bottom : info.top;
        let rx = (right - left) / 2;
        let ry = (bottom - top) / 2;
        rect.setAttributeNS(null, 'cx', (left+rx).toString());
        rect.setAttributeNS(null, 'cy', (top+ry).toString());
        rect.setAttributeNS(null, 'rx', rx.toString());
        rect.setAttributeNS(null, 'ry', ry.toString());
        rect.setAttributeNS(null, 'fill', 'none');
        rect.setAttributeNS(null, 'stroke', 'black');
         this.svg.appendChild(rect)

    }
}