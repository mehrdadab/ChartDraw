import { ShapeType } from "./shape.type";
import { Actor } from "./actor";
import { Svg } from "../svg";
import { Shape } from "./shape";
import { Ellipse } from "./ellipse";

export class ShapeFactory {
    private svg: Svg;
    constructor(svg: Svg) {
        this.svg = svg;
    }
    public createShape(shape: ShapeType):Shape {
        switch (shape) {
            case ShapeType.Actor:
                let actor = new Actor(this.svg);
                return actor;
            case ShapeType.Ellipse:
                let ell = new Ellipse(this.svg);
                return ell;
        }
    }
}