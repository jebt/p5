//Spyrograph

//Gap between left ellipses and figures needs to be smaller (from 1 to 1/2?)
//Cyan dots need to be brighter?
//Add more circles. At least 1 more column.
//Figure out fases. For example all circles meet at 8th or 16th round.
//Focus on single figure (loading icon), not enough dots to fill upper mid space changes to lower mid space like waterfall spilling over.

// x-axis
let xn1;
let yn1;

let xn2;
let yn2;

let xn3;
let yn3;

let xn4;
let yn4;

// y-axis
let xw1;
let yw1;

let xw2;
let yw2;

let xw3;
let yw3;

let w_frac;
let h_frac;

let fn1;
let fn2;
let fn3;
let fn4;
let fw1;
let fw2;
let fw3;

let ex0 = 0;
let ex1 = 1.25;
let ex2 = 2.5;
let ex3 = 3.75;
let ex4 = 5;
let ex5 = 6.25;

let ey1 = 2.25;
let ey2 = 3.5;
let ey3 = 4.75;
let ey4 = 6;

let eeh = 5;
let eew = 6.25;

function setup() {
    createCanvas(745, 620);
    frameRate(60);
    noFill();

    w_frac = 100;
    h_frac = 100;

    hw_frac = w_frac / 2;
    hh_frac = h_frac / 2;

    fn1 = ((PI / 30));
    fn2 = ((PI / 30) / 2);
    fn3 = ((PI / 30) * 1.25);
    fn4 = ((PI / 30) / 4);
    fw1 = ((PI / 30) / 2);
    fw2 = ((PI / 30) / 2 * 1.2);
    fw3 = ((PI / 30) / 2 * 1.5);
}

function draw() {
    background(0);
    translate(0.6 * w_frac, -0.4 * h_frac);

    strokeWeight(0.8);
    stroke(255, 200);
    ellipse(ex1 * w_frac, h_frac, w_frac, h_frac);
    ellipse(ex2 * w_frac, h_frac, w_frac, h_frac);
    ellipse(ex3 * w_frac, h_frac, w_frac, h_frac);
    ellipse(ex4 * w_frac, h_frac, w_frac, h_frac);
    ellipse(ex0 * w_frac, ey1 * h_frac, w_frac, h_frac);
    ellipse(ex0 * w_frac, ey2 * h_frac, w_frac, h_frac);
    ellipse(ex0 * w_frac, ey3 * h_frac, w_frac, h_frac);

    ellipse(ex1 * w_frac, ey4 * h_frac, w_frac, h_frac);
    ellipse(ex2 * w_frac, ey4 * h_frac, w_frac, h_frac);
    ellipse(ex3 * w_frac, ey4 * h_frac, w_frac, h_frac);
    ellipse(ex4 * w_frac, ey4 * h_frac, w_frac, h_frac);
    ellipse(ex5 * w_frac, ey1 * h_frac, w_frac, h_frac);
    ellipse(ex5 * w_frac, ey2 * h_frac, w_frac, h_frac);
    ellipse(ex5 * w_frac, ey3 * h_frac, w_frac, h_frac);

    xn1 = ex1 * w_frac + hw_frac * sin(frameCount * (fn1));
    yn1 = h_frac + hh_frac * cos(frameCount * (fn1));
    xn2 = ex2 * w_frac + hw_frac * sin(frameCount * (fn2));
    yn2 = h_frac + hh_frac * cos(frameCount * (fn2));
    xn3 = ex3 * w_frac + hw_frac * sin(frameCount * (fn3));
    yn3 = h_frac + hh_frac * cos(frameCount * (fn3));
    xn4 = ex4 * w_frac + hw_frac * sin(frameCount * (fn4));
    yn4 = h_frac + hh_frac * cos(frameCount * (fn4));

    xw1 = ex0 * w_frac + hw_frac * sin(frameCount * (fw1));
    yw1 = ey1 * h_frac + hh_frac * cos(frameCount * (fw1));
    xw2 = ex0 * w_frac + hw_frac * sin(frameCount * (fw2));
    yw2 = ey2 * h_frac + hh_frac * cos(frameCount * (fw2));
    xw3 = ex0 * w_frac + hw_frac * sin(frameCount * (fw3));
    yw3 = ey3 * h_frac + hh_frac * cos(frameCount * (fw3));

    
    strokeWeight(2.4);
    stroke(0, 255, 255, 200);
    for (let i = 0; i < 1200; i += 17) {
        point(ex1 * w_frac + hw_frac * sin((frameCount - i) * (fn1)), ey1 * h_frac + hh_frac * cos((frameCount - i) * (fw1)));
        point(ex2 * w_frac + hw_frac * sin((frameCount - i) * (fn2)), ey1 * h_frac + hh_frac * cos((frameCount - i) * (fw1)));
        point(ex3 * w_frac + hw_frac * sin((frameCount - i) * (fn3)), ey1 * h_frac + hh_frac * cos((frameCount - i) * (fw1)));
        point(ex4 * w_frac + hw_frac * sin((frameCount - i) * (fn4)), ey1 * h_frac + hh_frac * cos((frameCount - i) * (fw1)));

        point(ex1 * w_frac + hw_frac * sin((frameCount - i) * (fn1)), ey2 * h_frac + hh_frac * cos((frameCount - i) * (fw2)));
        point(ex2 * w_frac + hw_frac * sin((frameCount - i) * (fn2)), ey2 * h_frac + hh_frac * cos((frameCount - i) * (fw2)));
        point(ex3 * w_frac + hw_frac * sin((frameCount - i) * (fn3)), ey2 * h_frac + hh_frac * cos((frameCount - i) * (fw2)));
        point(ex4 * w_frac + hw_frac * sin((frameCount - i) * (fn4)), ey2 * h_frac + hh_frac * cos((frameCount - i) * (fw2)));

        point(ex1 * w_frac + hw_frac * sin((frameCount - i) * (fn1)), ey3 * h_frac + hh_frac * cos((frameCount - i) * (fw3)));
        point(ex2 * w_frac + hw_frac * sin((frameCount - i) * (fn2)), ey3 * h_frac + hh_frac * cos((frameCount - i) * (fw3)));
        point(ex3 * w_frac + hw_frac * sin((frameCount - i) * (fn3)), ey3 * h_frac + hh_frac * cos((frameCount - i) * (fw3)));
        point(ex4 * w_frac + hw_frac * sin((frameCount - i) * (fn4)), ey3 * h_frac + hh_frac * cos((frameCount - i) * (fw3)));
    }

    // purple trail
    strokeWeight(7);
    stroke(191, 127, 255, 6);
    for (let i = 0; i < 50; i++) {
        s3 = ex1 * w_frac + hw_frac * sin((frameCount - i / 8) * (fn1));
        s5 = ex2 * w_frac + hw_frac * sin((frameCount - i / 8) * (fn2));
        s7 = ex3 * w_frac + hw_frac * sin((frameCount - i / 8) * (fn3));
        s9 = ex4 * w_frac + hw_frac * sin((frameCount - i / 8) * (fn4));

        c25 = ey1 * h_frac + hh_frac * cos((frameCount - i / 8) * (fw1));
        c40 = ey2 * h_frac + hh_frac * cos((frameCount - i / 8) * (fw2));
        c55 = ey3 * h_frac + hh_frac * cos((frameCount - i / 8) * (fw3));

        point(s3, c25);
        point(s5, c25);
        point(s7, c25);
        point(s9, c25);

        point(s3, c40);
        point(s5, c40);
        point(s7, c40);
        point(s9, c40);

        point(s3, c55);
        point(s5, c55);
        point(s7, c55);
        point(s9, c55);
    }

    //eclipse red dot
    strokeWeight(5);
    stroke(255, 0, 0, 200);
    point(xn1, yn1);
    point(xn2, yn2);
    point(xn3, yn3);
    point(xn4, yn4);
    point(xw1, yw1);
    point(xw2, yw2);
    point(xw3, yw3);

    point(xn1, yn1 + eeh * h_frac);
    point(xn2, yn2 + eeh * h_frac);
    point(xn3, yn3 + eeh * h_frac);
    point(xn4, yn4 + eeh * h_frac);
    point(xw1 + eew * w_frac, yw1);
    point(xw2 + eew * w_frac, yw2);
    point(xw3 + eew * w_frac, yw3);

    stroke(255, 0, 0, 100);
    strokeWeight(2);
    line(xn1, yn1, xn1, yn1 + eeh * h_frac);
    line(xn2, yn2, xn2, yn2 + eeh * h_frac);
    line(xn3, yn3, xn3, yn3 + eeh * h_frac);
    line(xn4, yn4, xn4, yn4 + eeh * h_frac);
    line(xw1, yw1, xw1 + eew * w_frac, yw1);
    line(xw2, yw2, xw2 + eew * w_frac, yw2);
    line(xw3, yw3, xw3 + eew * w_frac, yw3);

    //graph red dot (intersection)
    strokeWeight(3);
    stroke(255, 0, 0, 255);
    point(xn1, yw1);
    point(xn2, yw1);
    point(xn3, yw1);
    point(xn4, yw1);
    point(xn1, yw2);
    point(xn2, yw2);
    point(xn3, yw2);
    point(xn4, yw2);
    point(xn1, yw3);
    point(xn2, yw3);
    point(xn3, yw3);
    point(xn4, yw3);

    if (frameCount % 60 == 0) {
        console.log(frameRate);
    }
}

function mouseClicked() {
    console.log("Saving frame!");
    saveCanvas();
}