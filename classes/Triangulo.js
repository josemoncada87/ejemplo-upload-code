class Triangulo extends FiguraGeometrica {
    constructor(x, y) {
        super(x, y);
    }
    pintar() {
        fill(200, 200, 0);
        triangle(this.x - 25, this.y + 18, this.x + 25, this.y + 18, this.x, this.y - 20);
    }
}