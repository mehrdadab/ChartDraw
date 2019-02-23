import { Shape } from "./shape";
import { Svg } from "../svg";

export class Connector extends Shape{
    constructor(svg: Svg) {
        super(svg);
    }
    private _beginObject: Shape = null;
    private _endObject: Shape = null;
    public get beginObject():Shape {
       return this._beginObject;
    }
    public set beginObject(obj: Shape) {
        this._beginObject = obj;
    }
    public get endObject(): Shape {
        return this._endObject;
    }
    public set endObject(obj: Shape) {
        this._endObject = obj;
    }
    public draw(): void {
        //let svg = this._beginObject.getSVG();
        let line = document.createElementNS(this.ns, 'line');
       
        //this._beginObject
        line.setAttributeNS(null, 'x1', (this._beginObject.rectangularPosition.centerX).toString());
        line.setAttributeNS(null, 'y1', (this._beginObject.rectangularPosition.centerY).toString());
        line.setAttributeNS(null, 'x2', this._endObject.rectangularPosition.centerX.toString());
        line.setAttributeNS(null, 'y2', this._endObject.rectangularPosition.centerY.toString());
        //line.setAttributeNS(null, 'x1', (10).toString());
        //line.setAttributeNS(null, 'y1', (10).toString());
        //line.setAttributeNS(null, 'x2', '100');
        //line.setAttributeNS(null, 'y2', '100');
        line.setAttributeNS(null, 'stroke', 'black');
        line.setAttributeNS(null, 'stroke-width', '1');
        this.svg.appendChild(line);

    }
}