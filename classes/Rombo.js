class Rombo extends FiguraGeometrica {
    constructor(x, y) {
        super(x, y);
    }
    pintar() {
        fill(200, 200, 0);
        quad(this.x, this.y - 25, this.x + 25, this.y, this.x, this.y + 25, this.x - 25, this.y);
    }
}