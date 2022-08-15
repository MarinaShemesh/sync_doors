console.log("Hello test console");



function setup() {
    createCanvas(1280, 800, WEBGL);

}

let angle = 0;
let num;


function draw() {
    console.log("frameRate:", frameCount);

    let num1 = 0.01;
    let num2 = 0;

    background(170);



    push();

    let stroke1 = color(0);
    let stroke2 = color('pink');


    spinRect(num1, stroke1);
    spinRect(num2, stroke1);

    if (frameCount >= 952) {

        num == 0;
    }

    if (frameCount > 960) {
        background(170);
        stroke1 = color(125);
    }
    pop();

    push();

    if (frameCount > 970) {
        secondRec();
        spinRect(num,stroke2);

    }

    pop();

    push();

    if (frameCount > 972) {
       noStroke();
       fill(75);       
       quad(-100, -256, -10, -200, -10, 200, -100, 250);
       
       //quad(x1, y1, x2, y2, x3, y3, x4, y4)
    }

    pop();


}

function spinRect(num, strokes) {

    rectMode(CENTER);
    stroke(strokes);
    strokeWeight(4);
    noFill();
    rotateY(angle);
    rect(0, 0, 200, 500);

    angle += num;
}

function secondRec() {
    rectMode(CENTER);
    background(170);
    fill('pink');
    stroke(0);
    strokeWeight(4);
    rect(0, 0, 200, 500);


}