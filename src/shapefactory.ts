import { fromEvent } from "rxjs";
import { Rect } from "./models/rect";
export class ShapeFactory {
    private info: Rect;
    private postNewPointFunc: any;
    constructor() {

        let down = fromEvent(document, 'mousedown');
        let up = fromEvent(document, 'mouseup');
        let move = fromEvent(document, 'mousemove');

        down.subscribe((d: any) => this.mouseDown(d));
        up.subscribe((d: any) => this.mouseUp(d));
        //let drag$ = down$.pipe(
        //    switchMap(start => move$.pipe(
        //        map(move => move.clientX - start.clientX),
        //        takeUntil(up$);
        //    )
        //    )
        //)}
    }
    private mouseDown(event: MouseEvent): void {
        console.log(`Hello ${event.clientX} ${event.clientY}`);
        this.info = new Rect();
        this.info.left = event.clientX;
        this.info.top = event.clientY;

    }
    private mouseUp(event: MouseEvent): void {
        console.log("Bye");
        this.info.right = event.clientX;
        this.info.bottom = event.clientY;
        this.postNewPointFunc(this.info);
    }
    public setExportFunction(callback: (info: Rect) => void): void {
        this.postNewPointFunc = callback;
    }
}