class Cuadrado extends FiguraGeometrica {
    constructor(x, y) {
        super(x, y);
    }
    pintar() {
        fill(200, 200, 0);
        rectMode(CENTER);
        rect(this.x, this.y, 50, 50);
        rectMode(CORNER);
    }
}