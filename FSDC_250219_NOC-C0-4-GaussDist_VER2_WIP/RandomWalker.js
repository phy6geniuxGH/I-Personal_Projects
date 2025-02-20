class RandomWalker{
  constructor(loc,step,fRGBA,sRGBA,sW,dimSize){
    this.loc = loc;
    this.stepsize = step;
    this.fillRGBA = fRGBA;
    this.strokeRGBA = sRGBA;
    this.strokeW = sW;
    this.dim_size = dimSize;
  }
  display(){
    stroke(120);
    fill(255);
    ellipse(this.loc[0], this.loc[1], this.dim_size[0], this.dim_size[1]);
    
  }
  movement(){
    this.loc[0]+=1;
    this.loc[1]+=1;
  }
}