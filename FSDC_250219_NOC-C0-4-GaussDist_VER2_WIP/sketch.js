//Randomicity based on Gaussian Distribution 

let RandWalker = [];
let amountWalker = 3;
let fixed = false;

/**************
* Dashboard 
***************/

var loc = [0,0];
var step = [1,1];
var fRGBA = [255,255,255,255];
var sRGBA = [120,120,120,255];
var sW = 5;
var dimSize = [10,10];

/***************
Main Program
****************/

function setup() {
  createCanvas(400, 400);
  for(let i = 0; i<=amountWalker;i++){
    if (fixed){
      RandWalker[i] = new RandomWalker(loc, step, fRGBA, sRGBA, sW, dimSize);
    }
    else{
      RandWalker[i] = new RandomWalker(loc, step, fRGBA, sRGBA, sW, dimSize);
    }
  }
}

function draw() {
  background(50);
  translate(width/2, height/2);
  for(let i = 0;i <= amountWalker;i++){
     RandWalker[i].display();
     RandWalker[i].movement();
  }
}