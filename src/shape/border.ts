import { Shape } from "./shape";

export class Border extends Shape {
    constructor(svgId: string)
    {
        super(svgId);
    }
    public draw<T>(shapeInfo: T): void {

        let info: any = shapeInfo;
        let rect = document.createElementNS(this.ns, 'rect');
        let left = info.left < info.right ? info.left : info.right;
        let top = info.top < info.bottom ? info.top : info.bottom;
        rect.setAttributeNS(null, 'x', (left).toString());
        rect.setAttributeNS(null, 'y', (top).toString());
        rect.setAttributeNS(null, 'width', Math.abs(info.right - info.left).toString());
        rect.setAttributeNS(null, 'height', Math.abs(info.bottom - info.top).toString());
        rect.setAttributeNS(null, 'fill', 'none');
        rect.setAttributeNS(null, 'stroke', 'black');
        rect.setAttributeNS(null, 'stroke-dasharray', '4 1');
        rect.setAttributeNS(null, 'stroke-dashoffset', '2');
        this.svg.appendChild(rect)

    }
}