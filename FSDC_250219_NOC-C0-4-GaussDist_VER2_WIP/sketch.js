//Randomicity based on Gaussian Distribution 

/**************
* Dashboard 
***************/

let RandWalker = [];
let amountWalker = 1000;
let probSet = true;
let flick = true;
let prob = 1.0;
let still_background = false;

/***************
Main Program
****************/

function setup() {
  createCanvas(500, 500);
  for(let i = 0; i <= amountWalker;i++){
    loc = [random(-width/2,width/2),random(-height/2,height/2)];
    step = [random(-1,1),random(-1,1)];
    sRGBA = [255,255,255,random(0,255)];
    fRGBA = sRGBA;
    sW = random(2,4);
    let s = random(0,5);
    dimSize = [s,s];
    RandWalker[i] = new RandomWalker(loc, step, fRGBA, sRGBA, sW, dimSize,probSet,prob, flick);
  }
  if(still_background){
    background(0);
  }
}

function draw() {
  if(still_background != true){
    background(0);
  }
  translate(width/2, height/2);
  for(let i = 0;i <= amountWalker;i++){
     RandWalker[i].display();
     RandWalker[i].movement();
  }
}
