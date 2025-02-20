//Randomicity based on Gaussian Distribution 

let RandWalker = [];
let amountWalker = 200;
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
      step = [random(-step[0],step[0]),random(-step[1],step[1])];
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
