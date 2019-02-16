import {fromEvent} from "rxjs";
export class ShapeFactory {
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
    }
    private mouseUp(event: MouseEvent): void {
        console.log("Bye");
    }
}