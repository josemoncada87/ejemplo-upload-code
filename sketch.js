class Contenedor {
  constructor(x, y, tipo) {
    this.x = x;
    this.y = y;
    this.tipo = tipo;
    this.estado = 0;
  }
  pintar() {
    switch (this.tipo) {
      case 0: // 0 -> circulo
        noFill();
        this.dibujarEstado();
        rect(this.x, this.y, 200, 200);
        ellipse(this.x + 100, this.y + 100, 50, 50);
        break;

      case 1: // 1 -> triangulo
        noFill();
        this.dibujarEstado();
        rect(this.x, this.y, 200, 200);
        triangle(this.x + 100 - 25, this.y + 100 + 18, this.x + 100 + 25, this.y + 100 + 18, this.x + 100, this.y + 100 - 20);
        break;

      case 2: // 2 -> cuadrado
        noFill();
        this.dibujarEstado();
        rect(this.x, this.y, 200, 200);
        rectMode(CENTER);
        rect(this.x + 100, this.y + 100, 50, 50);
        rectMode(CORNER);
        break;

      case 3: // 3 -> rombo
        noFill();
        this.dibujarEstado();
        rect(this.x, this.y, 200, 200);
        quad(this.x + 100, this.y + 100 - 25, this.x + 100 + 25, this.y + 100, this.x + 100, this.y + 100 + 25, this.x + 100 - 25, this.y + 100);
        break;
    }
  }

  validarElemento(elemento) {
    let resultado = false;
    if (elemento instanceof Circulo && this.tipo === 0) {
      resultado = true;
    }
    if (elemento instanceof Triangulo && this.tipo === 1) {
      resultado = true;
    }
    if (elemento instanceof Cuadrado && this.tipo === 2) {
      resultado = true;
    }
    if (elemento instanceof Rombo && this.tipo === 3) {
      resultado = true;
    }
    return resultado;
  }

  cambiarEstado(res){
    //this.estado = res === true ? 1 : 2;
    
    if (res === true) {
      this.estado = 1;
    }else{
      this.estado = 2;
    }

    //console.log(this.estado);
  }

  dibujarEstado(){
    noFill();
    strokeWeight(5);
    if(this.estado === 1){      
      stroke(0,255,0);
    }else if(this.estado === 2){      
      stroke(255,0,0);      
    }
    rect(this.x+10, this.y+10, 180, 180);
    strokeWeight(1);
    stroke(0);      
  }
}


let circulo, triangulo, cuadrado, rombo;
let selector;
let contenedorA, contenedorB, contenedorC, contenedorD;

let figuras = [];

function setup() {
  createCanvas(400, 400);
  circulo = new Circulo(50, 100);
  triangulo = new Triangulo(120, 100);
  cuadrado = new Cuadrado(220, 100);
  rombo = new Rombo(340, 100);

  figuras.push(circulo);
  figuras.push(triangulo);
  figuras.push(cuadrado);
  figuras.push(rombo);

  selector = null;
  contenedorA = new Contenedor(0, 0, 0);
  contenedorB = new Contenedor(200, 0, 1);
  contenedorC = new Contenedor(0, 200, 2);
  contenedorD = new Contenedor(200, 200, 3);
}

function draw() {
  background(220);

  for (let i = 0 ; i < figuras.length ; i++){
    figuras[i].pintar();
  }

  //circulo.pintar();
  //triangulo.pintar();
  //cuadrado.pintar();
  //rombo.pintar();
  contenedorA.pintar();
  contenedorB.pintar();
  contenedorC.pintar();
  contenedorD.pintar();
}

function mousePressed() {
  if (circulo.validarClick(mouseX, mouseY)) {
    selector = circulo;
  }
  if (triangulo.validarClick(mouseX, mouseY)) {
    selector = triangulo;
  }
  if (cuadrado.validarClick(mouseX, mouseY)) {
    selector = cuadrado;
  }
  if (rombo.validarClick(mouseX, mouseY)) {
    selector = rombo;
  }
}


function mouseDragged() {
  if (selector !== null) {
    selector.arrastrar(mouseX, mouseY);
  }
}

function mouseReleased() {
  contenedorA.cambiarEstado(contenedorA.validarElemento(selector));
  contenedorB.cambiarEstado(contenedorB.validarElemento(selector));
  contenedorC.cambiarEstado(contenedorC.validarElemento(selector));
  contenedorD.cambiarEstado(contenedorD.validarElemento(selector));
  selector = null;
}
