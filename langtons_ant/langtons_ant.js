let cellSizeX = 15;
let cellSizeY = 15;
let deadHue = 240;
let liveHue = 120;
let antHue = 69;
let antStroke = 240;
let startHue = 69;
let startStrokeHue = 69;
let antDir = 1;
let newAntDir = 1;
let xCells = 60;
let yCells = 47;
let cells = new Array(xCells).fill().map(() => new Array(yCells));
let oldHue = new Array(xCells).fill().map(() => new Array(yCells));

let antX = 30;
let antY = 23;
let newAntX = 30;
let newAntY = 24;

let antLive = false;

function setup() {
  let canvasWidth = xCells * cellSizeX;
  let canvasHeight = yCells * cellSizeY;
  createCanvas(canvasWidth, canvasHeight);
  colorMode(HSB, 360);
  background(0);
  strokeWeight(2);
  stroke(255);
  frameRate(240);

  for (let i = 0; i < cells.length; i++) {
    for (let j = 0; j < cells[i].length; j++) {
      cells[i][j] = new Cell(i * cellSizeX, j * cellSizeY, cellSizeX, cellSizeY, startHue, startStrokeHue);
      oldHue[i][j] = cells[i][j].getFillHue();
    }
  }
}

function draw() {
  if (isOutOfBounds(newAntX, newAntY)) {
    resetGrid();
  } else {

    antDir = newAntDir;
    antX = newAntX;
    antY = newAntY;

    if (antDir === 1 && antY > 0) {
      if (oldHue[antX][antY - 1] === deadHue || oldHue[antX][antY - 1] === startHue) {
        newAntDir--;
        cells[antX][antY - 1].setFillHue(liveHue);
      }
      if (oldHue[antX][antY - 1] === liveHue) {
        cells[antX][antY - 1].setFillHue(deadHue);
        newAntDir++;
      }
      newAntY--;
    }

    if (antDir === 2 && antX < cells.length) {
      if (oldHue[antX + 1][antY] === deadHue || oldHue[antX + 1][antY] === startHue) {
        newAntDir--;
        cells[antX + 1][antY].setFillHue(liveHue);
      }
      if (oldHue[antX + 1][antY] === liveHue) {
        newAntDir++;
        cells[antX + 1][antY].setFillHue(deadHue);
      }
      newAntX++;
    }

    if (antDir === 3 && antY < cells[antX].length) {
      if (oldHue[antX][antY + 1] === deadHue || oldHue[antX][antY + 1] === startHue) {
        newAntDir--;
        cells[antX][antY + 1].setFillHue(liveHue);
      }
      if (oldHue[antX][antY + 1] === liveHue) {
        newAntDir++;
        cells[antX][antY + 1].setFillHue(deadHue);
      }
      newAntY++;
    }

    if (antDir === 4 && antX > 0) {
      if (oldHue[antX - 1][antY] === deadHue || oldHue[antX - 1][antY] === startHue) {
        newAntDir--;
        cells[antX - 1][antY].setFillHue(liveHue);
      }
      if (oldHue[antX - 1][antY] === liveHue) {
        newAntDir++;
        cells[antX - 1][antY].setFillHue(deadHue);
      }
      newAntX--;
    }

    if (newAntDir === 0) {
      newAntDir = 4;
    }
    if (newAntDir === 5) {
      newAntDir = 1;
    }



    for (let i = 0; i < cells.length; i++) {
      for (let j = 0; j < cells[i].length; j++) {
        cells[i][j].show();
      }
    }

    for (let i = 0; i < cells.length; i++) {
      for (let j = 0; j < cells[i].length; j++) {
        oldHue[i][j] = cells[i][j].getFillHue();
      }
    }

    cells[newAntX][newAntY].show();

    if (frameCount % 100 === 0) {
      console.log("\n\n\n");
      console.log("Generation #:   " + frameCount);
      console.log("Generations/s:  " + frameRate());
    }
  }

}

class Cell {
  constructor(xPosition, yPosition, xxWidth, yyHeight, fillHueI, strokeHueI) {
    this.x = xPosition;
    this.y = yPosition;
    this.xx = xxWidth;
    this.yy = yyHeight;
    this.fillHue = fillHueI;
    this.strokeHue = strokeHueI;
  }

  setFillHue(hue) {
    this.fillHue = hue;
  }

  getFillHue() {
    return this.fillHue;
  }

  show() {
    strokeWeight(3);
    fill(this.fillHue, 360, 270);
    stroke(this.strokeHue, 0, 0);
    if (this.fillHue === startHue) {
      fill(0, 0, 45);
    }
    if (this.x === newAntX * this.xx && this.y === newAntY * this.yy) {
      stroke(315, 360, 360);
      strokeWeight(6);
    }
    rect(this.x, this.y, this.xx, this.yy);
  }
}

function isOutOfBounds(x, y) {
  return x < 1 || y < 1 || x >= xCells - 1 || y >= yCells - 1;
}

function resetGrid() {
  background(0);
  antDir = 1;
  newAntDir = 1;
  antX = 30;
  antY = 23;
  newAntX = 30;
  newAntY = 24;

  for (let i = 0; i < cells.length; i++) {
    for (let j = 0; j < cells[i].length; j++) {
      cells[i][j] = new Cell(i * cellSizeX, j * cellSizeY, cellSizeX, cellSizeY, startHue, startStrokeHue);
      oldHue[i][j] = cells[i][j].getFillHue();
    }
  }
}
