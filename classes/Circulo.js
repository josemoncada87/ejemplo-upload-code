class Circulo extends FiguraGeometrica {
    constructor(x, y) {
        super(x, y);
    }
    pintar() {
        fill(200, 200, 0);
        circle(this.x, this.y, 50);
    }
}