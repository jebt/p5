// KeppieAnt2

let metaLoop = 1000;
let presetIndex = 3;
// [0]: LR...............Original Langton's ant. Simplicity. Chaos. Emergent order. (MIRRORED)
// [1]: RLR..............Grows chaotically. It is not known whether this ant ever produces a highway.
// [2]: LLRR.............Grows symmetrically.
// [3]: LRRRRRLLR........Fills space in a square around itself.
// [4]: LLRRRLRLRLLR.....Creates a convoluted highway.
// [5]: RRLLLRLLLRRR.....Creates a filled triangle shape that grows and moves.
// [6]: RLLR.............One of the simplest examples of a keppie ant that produces patterns that become symmetric over and over again.
// RRLRR The smallest square-filling "highway"
// RLRLRLRLRLRLR Creates a nice highway.
// RRRRRRRRRRLRRRRRRRRRLRRRRRRRRRR Surprising, check it out!
// RLRLRLRLRLRLR is a nice one
// RLRRRRRLR sure is an interesting one.
// manual input
// make starting direction right
// make state 0 right, eg. LR should maybe be RL, (original)
// handeling presets and manual input better (setting string of character, reading string characters with for loop for position in string)
// changing 0 for dir-- to L, changing 1 for dir++ to R
// hexagonal grid, presets, NORTH, EAST, SOUTH, WEST,
// Art
// zoom/pan bug preset 5
// Always start with R or L and then
// the rest so it's easier to compare different ants
// multiple ants
// 4 ants sick repetitive symetry! loading icon!

let grid;
let x;
let y;
let dir;
let img;

const NORTH = 0;
const EAST = 1;
const SOUTH = 2;
const WEST = 3;

let scale = 1;
let xPan;
let yPan;
let zoomIn = false;
let zoomOut = false;
let panUp = false;
let panDown = false;
let panLeft = false;
let panRight = false;
let panSpeed = 10;
let zoomSpeed = 1.1;

// Rules:
let directions = 4;
let states = 12;
let s0 = 1;
let s1 = 1;
let s2 = 0;
let s3 = 0;
let s4 = 0;
let s5 = 1;
let s6 = 0;
let s7 = 0;
let s8 = 0;
let s9 = 1;
let s10 = 1;
let s11 = 1;

function setup() {
    frameRate(2147483647);
    createCanvas(600, 600);
    xPan = windowWidth * 8;
    yPan = windowHeight * 4.5;
    preset(presetIndex);
    img = createImage(width, height);
    img.loadPixels();
    img.updatePixels();
    image(img, 0, 0);
    grid = new Array(width).fill().map(() => new Array(height).fill(0));
    x = width / 2;
    y = height / 2;
    dir = NORTH;
}

function preset(psi) {
    switch (psi) {
        case 0:
            states = 2;
            s0 = 0;
            s1 = 1;
            break;
        case 1:
            states = 3;
            s0 = 1;
            s1 = 0;
            s2 = 1;
            break;
        case 2:
            states = 4;
            s0 = 0;
            s1 = 0;
            s2 = 1;
            s3 = 1;
            break;
        case 3:
            states = 9;
            s0 = 0;
            s1 = 1;
            s2 = 1;
            s3 = 1;
            s4 = 1;
            s5 = 1;
            s6 = 0;
            s7 = 0;
            s8 = 1;
            break;
        case 4:
            states = 12;
            s0 = 0;
            s1 = 0;
            s2 = 1;
            s3 = 1;
            s4 = 1;
            s5 = 0;
            s6 = 1;
            s7 = 0;
            s8 = 1;
            s9 = 0;
            s10 = 0;
            s11 = 1;
            break;
        case 5:
            states = 12;
            s0 = 1;
            s1 = 1;
            s2 = 0;
            s3 = 0;
            s4 = 0;
            s5 = 1;
            s6 = 0;
            s7 = 0;
            s8 = 0;
            s9 = 1;
            s10 = 1;
            s11 = 1;
            break;
        case 6:
            states = 4;
            s0 = 1;
            s1 = 0;
            s2 = 0;
            s3 = 1;
            break;
    }
}

function turn() {
    switch (grid[x][y]) {
        case 0:
            dirChange(s0);
            break;
        case 1:
            dirChange(s1);
            break;
        case 2:
            dirChange(s2);
            break;
        case 3:
            dirChange(s3);
            break;
        case 4:
            dirChange(s4);
            break;
        case 5:
            dirChange(s5);
            break;
        case 6:
            dirChange(s6);
            break;
        case 7:
            dirChange(s7);
            break;
        case 8:
            dirChange(s8);
            break;
        case 9:
            dirChange(s9);
            break;
        case 10:
            dirChange(s10);
            break;
        case 11:
            dirChange(s11);
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
    if (grid[x][y] >= states) {
        grid[x][y] = 0;
    }
}

function changePixel() {
    switch (grid[x][y]) {
        case 0:
            img.set(x, y, color(0, 0, 255));
            break;
        case 1:
            img.set(x, y, color(0, 255, 0));
            break;
        case 2:
            img.set(x, y, color(255, 0, 0));
            break;
        case 3:
            img.set(x, y, color(255, 255, 0));
            break;
        case 4:
            img.set(x, y, color(0, 255, 255));
            break;
        case 5:
            img.set(x, y, color(255, 0, 255));
            break;
        case 6:
            img.set(x, y, color(127, 255, 255));
            break;
        case 7:
            img.set(x, y, color(0, 0, 0));
            break;
        case 8:
            img.set(x, y, color(127, 127, 127));
            break;
        case 9:
            img.set(x, y, color(127, 255, 0));
            break;
        case 10:
            img.set(x, y, color(127, 0, 255));
            break;
        case 11:
            img.set(x, y, color(255, 255, 255));
            break;
    }
}

function move() {
    switch (dir) {
        case NORTH:
            y--;
            break;
        case EAST:
            x++;
            break;
        case SOUTH:
            y++;
            break;
        case WEST:
            x--;
            break;
    }
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

function visionControl() {
    translate(width / 2, height / 2);
    scale(scale);
    translate(-xPan, -yPan);
    if (zoomIn) {
        scale *= zoomSpeed;
    }
    if (zoomOut) {
        scale /= zoomSpeed;
    }
    if (panUp) {
        yPan -= panSpeed;
    }
    if (panDown) {
        yPan += panSpeed;
    }
    if (panLeft) {
        xPan -= panSpeed;
    }
    if (panRight) {
        xPan += panSpeed;
    }
}

function feedBack() {
    console.log("\r\n\r\n\r\nStep#:          " + frameCount + " M");
    console.log("Steps/s:        " + frameRate() + " M");
}

function draw() {
    for (let i = 0; i < metaLoop; i++) {
        turn();
        changeState();
        changePixel();
        move();
    }

    img.set(x, y, color(255, 0, 0));
    img.updatePixels();
    image(img, 0, 0);

    if (frameCount % 100 == 0) {
        feedBack();
    }
}

function mouseClicked() {
    console.log("Saving frame!");
    saveFrame();
}

function keyPressed() {
    if (keyCode === UP_ARROW) {
        zoomIn = true;
        zoomOut = false;
    }
    if (keyCode === DOWN_ARROW) {
        zoomOut = true;
        zoomIn = false;
    }
    if (key === 'w' || key === 'W') {
        panUp = true;
        panDown = false;
    }
    if (key === 's' || key === 'S') {
        panDown = true;
        panUp = false;
    }
    if (key === 'a' || key === 'A') {
        panLeft = true;
        panRight = false;
    }
    if (key === 'd' || key === 'D') {
        panRight = true;
        panLeft = false;
    }
}

function keyReleased() {
    if (keyCode === UP_ARROW) {
        zoomIn = false;
    }
    if (keyCode === DOWN_ARROW) {
        zoomOut = false;
    }
    if (key === 'w' || key === 'W') {
        panUp = false;
    }
    if (key === 's' || key === 'S') {
        panDown = false;
    }
    if (key === 'a' || key === 'A') {
        panLeft = false;
    }
    if (key === 'd' || key === 'D') {
        panRight = false;
    }
}
