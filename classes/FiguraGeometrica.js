class FiguraGeometrica {

    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    validarClick(destX, destY) {
        if (dist(this.x, this.y, destX, destY) <= 25) {
            return true;
        }
        return false;
    }

    arrastrar(destX, destY) {
        this.x = destX;
        this.y = destY;
    }
}