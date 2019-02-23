export class Rect {
    top: number;
    bottom: number;
    left: number;
    right: number;
    public get centerX(): number {
        return this.left + (this.right - this.left) / 2;
    }
    public get centerY(): number {
        return this.top + (this.bottom - this.top) / 2;
    }
}