let particleBuffer;
let noiseMap;
const particleBufferSize = 30;

class CircularBuffer {
  constructor(size) {
    this.buffer = new Array(size);
    this.size = size;
    this.head = 0;
    this.tail = 0;
    this.length = 0;
  }

  push(value) {
    this.buffer[this.tail] = value;
    this.tail = (this.tail + 1) % this.size;
    if (this.length < this.size) {
      this.length++;
    } else {
      this.head = (this.head + 1) % this.size;
    }
  }

  getItemsReverse() {
    const result = [];
    for (let i = 1; i <= this.length; i++) {
      const index = (this.tail - i + this.size) % this.size;
      result.push(this.buffer[index]);
    }
    return result;
  }
}

class Particle {
  constructor(xp, yp) {
    this.x = xp;
    this.y = yp;
  }
}

class NoiseMap {
  constructor() {
    this.nextX = 0;
    this.nextY = 90000;
    this.x = map(noise(this.nextX), 0, 0.2, 0, width);
    this.y = map(noise(this.nextY), 0, 0.2, 0, height);
    this.px = 0;
    this.py = 0;
  }

  step() {
    this.px = this.x;
    this.py = this.y;
    this.x = map(noise(this.nextX), 0, 1, 0, width);
    this.y = map(noise(this.nextY), 0, 1, 0, height);
    this.nextX += 0.02;
    this.nextY += 0.02;
    particleBuffer.push(new Particle(this.x, this.y));
  }
}


function setup() {
  createCanvas(400, 400);
  background(0);
  particleBuffer = new CircularBuffer(particleBufferSize);
  noiseMap = new NoiseMap();
  noiseMap.step();
  strokeWeight(2);
}

function draw() {
  background(0);
  noiseMap.step();
  alphaval = 255;
  redval = 0;
  greenval = 255;
  size = 30;
  particles = particleBuffer.getItemsReverse();
  for (let i = 0; i < particles.length; i++) {
    particle = particles[i];
    if (i === 0) {
      strokeWeight(0);
      fill(120, 120, 255);
      circle(particle.x, particle.y, size);
      strokeWeight(2);
      continue;
    }
    alphaval -= 7;
    redval += 10;
    greenval -= 10;
    size -= 1;
    fill(redval, greenval, 0, alphaval);
    circle(particle.x, particle.y, size);
  }
}
