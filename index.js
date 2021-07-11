//dimensions of the canvas in pixels
const height = 480;
const width = 640;

let img;
let btn;

//P5.JS setup function
function setup()
{
    createCanvas(width,height);
    img = loadImage("./CheatSheet.png");
    btn = createButton("Back to Main");
}

function draw() {
    image(img, 0, 0, width, height);
    btn.position(width/100*2, height/75*56);
}