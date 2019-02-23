export class Svg{
    private svgArea: HTMLElement;
    public ns: string = 'http://www.w3.org/2000/svg';
    public svg: Element;
   constructor(svgId: string) {
        let div = document.getElementById(svgId);
        this.svg = document.createElementNS(this.ns, 'svg');
        this.svg.setAttributeNS(null, 'width', '100%');
        this.svg.setAttributeNS(null, 'height', '100%');
        div.appendChild(this.svg);

    }
}