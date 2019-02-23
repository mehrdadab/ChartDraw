import { Rect } from "../models/rect";
import { Svg } from "../svg";

export class Shape {
   // private svgArea: HTMLElement;
    protected ns: string ;
    protected svg: Element;
    protected _rectangularPosition: Rect;

    public get rectangularPosition(): Rect {
        return this._rectangularPosition;
    }
    public set rectangularPosition(pos:Rect) {
        this._rectangularPosition = pos;
    }

    public getSVG(): Element {
        return this.svg;
    }
    constructor(svg: Svg) {
       // this.svgArea = document.getElementById(svgId);
        //let div = document.getElementById(svgId);
        //this.svg = document.createElementNS(this.ns, 'svg');
        //this.svg.setAttributeNS(null, 'width', '100%');
        //this.svg.setAttributeNS(null, 'height', '100%');
        //div.appendChild(this.svg);
        this.ns = svg.ns;
        this.svg = svg.svg;
    }
    public draw(): void {

        let rect = document.createElementNS(this.ns, 'rect');
        let result = this.extractRectanglePos(this._rectangularPosition);

        rect.setAttributeNS(null, 'x', (result.left).toString());
        rect.setAttributeNS(null, 'y', (top).toString());
        rect.setAttributeNS(null, 'width', Math.abs(result.right - result.left).toString());
        rect.setAttributeNS(null, 'height', Math.abs(result.bottom - result.top).toString());
        rect.setAttributeNS(null, 'fill', 'none');
        rect.setAttributeNS(null, 'stroke', 'black');
        this.svg.appendChild(rect)
       
    }
    protected extractRectanglePos(info: any): Rect {
        let result = new Rect();
        result.left = info.left < info.right ? info.left : info.right;
        result.top = info.top < info.bottom ? info.top : info.bottom;
        result.right = info.right > info.left ? info.right : info.left;
        result.bottom = info.bottom > info.top ? info.bottom : info.top;
        return result;
    }
   
}