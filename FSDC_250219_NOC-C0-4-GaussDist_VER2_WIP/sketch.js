//Randomicity based on Gaussian Distribution 

let RandWalker = [];
let amountWalker = 1000;
let fixed = true;
let probSet = true;

/**************
* Dashboard 
***************/

var loc = [0,0];
var step = [5,5];
var fRGBA = [255,255,255,255];
var sRGBA = [120,120,120,255];
var sW = 5;
var dimSize = [2,2];
var prob = 1;

/***************
Main Program
****************/

function setup() {
  createCanvas(400, 400);
  for(let i = 0; i <= amountWalker;i++){
    if (fixed){
      loc = [random(-width/2,width/2),random(-height/2,height/2)];
      step = [random(-1,1),random(-1,1)];
      sRGBA = [255,255,255,random(0,255)];
      fRGBA = sRGBA;
      sW = random(2,4);
      let s = random(0,5);
      dimSize = [s,s];
      RandWalker[i] = new RandomWalker(loc, step, fRGBA, sRGBA, sW, dimSize,probSet,prob);
    }
    else{
      RandWalker[i] = new RandomWalker(loc, step, fRGBA, sRGBA, sW, dimSize,probSet,prob);
    }
  }
}

function draw() {
  background(0);
  translate(width/2, height/2);
  for(let i = 0;i <= amountWalker;i++){
     RandWalker[i].display();
     RandWalker[i].movement();
  }
}
