let canvasWidth = 100;
let canvasHeight = 100;

let xn1;
let yn1;
let fn1;
let xw1;
let yw1;
let fw1;

function setup() {
  let canvasWidth = 200;
  let canvasHeight = 200;
  createCanvas(canvasWidth, canvasHeight);
}

function draw() {
  background(0);
  translate(width/2, height/2);
  amplitude = 50;

  fn1 = (PI/20);
  fw1 = (PI/20)*1.1;

  strokeWeight(5);
  stroke(0, 255, 255, 100);
  for (let i = 0; i < 500; i++) {
    strokeWeight(6-0.012*i);
    stroke(0, 255-1.5*i, 255-1.5*i, 100-0.75*i);
    point (amplitude*sin((frameCount-i/8) * fn1), amplitude*cos((frameCount-i/8)* fw1));
  }

  strokeWeight(13);
  stroke(191, 127, 255, 50);
  for (let i = 0; i < 50; i++) {
    stroke(191-i*2, 127-i, 255-i*2, 50-i);
    point (amplitude*sin((frameCount-i/8) * fn1), amplitude*cos((frameCount-i/8)* fw1));
  }
}
