//sinus/cosinus for aan/uit
//richting hoek linksonder(ergens) minder snelle fade dan opposite en lichtpunt meer naar rechtsboven
//groter (langzamere fade) voor meer detail
//collage van 12?
//verschillende kleueren schemas proberen
//planeten met continenten door langzamere (en evt abruptere) color change en meer peridodes van dark in color stroke

let metaLoop = 100000;
let preset = 0;

let grid;
let x;
let y;
let dir;
let img;

const NORTH = 0;
const EAST = 1;
const SOUTH = 2;
const WEST = 3;

//Rules:
let directions = 4;
let states = 2;
let s0 = 0;
let s1 = 1;

let step = 0;
let R = 255;
let G = 255;
let B = 255;
let A = 255;
let dark = 0;
let bright = 0;
let dark2 = 0;
let disco;
let countDirR = true;
let countDirG = true;
let countDirB = true;
let countDirA = true;
let countDirDark = true;


function changePixel() {
  dark2 = Math.floor(dist(x, y, width / 2, height / 2));
  bright = 150 - Math.floor(dist(x, y, (width / 2), (height / 2)));

  if (step % 1 === 0) {
    if (countDirR) {
      R += 0.07;
      if (R > 400) {
        countDirR = false;
      }
    } else {
      R -= 9;
      if (R < 0) {
        countDirR = true;
      }
    }
  }

  if (step % 1 === 0) {
    if (countDirG) {
      G += 0.02;
      if (G > 450) {
        countDirG = false;
      }
    } else {
      G -= 0.03;
      if (G < 0) {
        countDirG = true;
      }
    }
  }

  if (step % 1 === 0) {
    if (countDirB) {
      B += 3;
      if (B > 50) {
        countDirB = false;
      }
    } else {
      B -= 2;
      if (B < 0) {
        countDirB = true;
      }
    }
  }

  if (step % 9 === 0) {
    if (countDirDark) {
      dark++;
      if (dark > 255) {
        countDirDark = false;
      }
    } else {
      dark--;
      if (dark < 0) {
        countDirDark = true;
      }
    }
  }

  if (step % 127 === 0) {
    if (countDirA) {
      A++;
      if (A > 150) {
        countDirA = false;
      }
    } else {
      A--;
      if (A < 0) {
        countDirA = true;
      }
    }
  }

  disco = color(Math.floor(R - (dark + dark2) + bright), Math.floor(G - (dark + dark2) + bright), Math.floor(B - (dark + dark2) + bright), A);

  switch (grid[x][y]) {
    case 0:
      img.set(x, y, disco);
      break;
    case 1:
      img.set(x, y, disco);
      break;
  }
}


function setup() {
  frameRate(30);
  createCanvas(600, 600);
  background(0)


  // preset(0);
  img = createImage(width, height);
  img.loadPixels();
  for (let i = 0; i < img.pixels.length; i++) {
    img.pixels[i] = color(0);
  }
  img.updatePixels();
  image(img, 0, 0);
  grid = new Array(width).fill().map(() => new Array(height).fill(0));
  x = width / 2;
  y = height / 2;
  dir = NORTH;
}


function turn() {
  switch (grid[x][y]) {
    case 0:
      dirChange(s0);
      break;
    case 1:
      dirChange(s1);
      break;
  }

  if (dir >= directions) {
    dir = 0;
  } else if (dir < 0) {
    dir = directions - 1;
  }
}

function dirChange(adaptation) {
  if (adaptation === 0) {
    dir--;
  } else if (adaptation === 1) {
    dir++;
  }
}

function changeState() {
  grid[x][y]++;
  // Back to the first state once a cell has gone through all of the states:
  if (grid[x][y] >= states) {
    grid[x][y] = 0;
  }
}

function move() {
  switch (dir) {
    case NORTH:
      y--;
      break;
    case 1: // EAST
      x++;
      break;
    case 2: // SOUTH
      y++;
      break;
    case 3: // WEST
      x--;
      break;
  }
  // Out of window to the other side of the window:
  if (x > width - 1) {
    x = 0;
  } else if (x < 0) {
    x = width - 1;
  }
  if (y > height - 1) {
    y = 0;
  } else if (y < 0) {
    y = height - 1;
  }
}

function feedBack() {
  console.log("\r\n\r\n\r\nStep#:      " + (step / 1000000000) + " Billion");
  console.log("fps:        " + (frameRate()));
}

function draw() {
  for (let i = 0; i < metaLoop; i++) {
    turn();
    changeState();
    changePixel();
    move();
    step++;
  }

  if (frameCount % 100 === 0) {
    // feedBack();
    console.log("fps: " + (frameRate()));
    console.log("frame number: " + frameCount);
  }

  img.updatePixels();
  image(img, 0, 0);
}

// function mouseClicked() {
//   console.log("Saving frame!");
//   saveFrame();
// }

// function keyPressed() {
//   if (key === 's') {
//     noLoop();
//   }
//   if (key === 'd') {
//     loop();
//   }
// }
