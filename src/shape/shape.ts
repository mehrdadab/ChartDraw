export class Shape {
    private svgArea: HTMLElement;
    private ns: string = 'http://www.w3.org/2000/svg';
    private svg: Element;
    constructor(svgId: string) {
       // this.svgArea = document.getElementById(svgId);
        let div = document.getElementById(svgId);
        this.svg = document.createElementNS(this.ns, 'svg');
        this.svg.setAttributeNS(null, 'width', '100%');
        this.svg.setAttributeNS(null, 'height', '100%');
        div.appendChild(this.svg);
    }
    public draw(): void {

        var rect = document.createElementNS(this.ns, 'rect');
        rect.setAttributeNS(null, 'width', "100");
        rect.setAttributeNS(null, 'height', "100");
        rect.setAttributeNS(null, 'fill', '#f06');
        this.svg.appendChild(rect)
    }
}