import { Rect } from "../models/rect";

export class Shape {
    private svgArea: HTMLElement;
    protected ns: string = 'http://www.w3.org/2000/svg';
    protected svg: Element;
    constructor(svgId: string) {
       // this.svgArea = document.getElementById(svgId);
        let div = document.getElementById(svgId);
        this.svg = document.createElementNS(this.ns, 'svg');
        this.svg.setAttributeNS(null, 'width', '100%');
        this.svg.setAttributeNS(null, 'height', '100%');
        div.appendChild(this.svg);
    }
    public draw<T>(shapeInfo:T): void {

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
        this.svg.appendChild(rect)
       
    }
   
}