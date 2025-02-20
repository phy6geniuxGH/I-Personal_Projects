class RandomWalker{
  constructor(loc,step,fRGBA,sRGBA,sW,dimSize,probSet,prob){
    this.loc = loc;
    this.stepsize = step;
    this.fillRGBA = fRGBA;
    this.strokeRGBA = sRGBA;
    this.strokeW = sW;
    this.dim_size = dimSize;
    this.probSet = probSet;
    this.prob = prob;
  }
  display(){
    stroke(120);
    fill(255);
    ellipse(this.loc[0], this.loc[1], this.dim_size[0], this.dim_size[1]);
    
  }
  movement(){
    let r = random(0,1);
    if ((r < this.prob) && this.probSet){
    this.loc[0]+=abs(this.stepsize[0]);
      this.loc[1]+=abs(this.stepsize[1]);
    } else {
    this.loc[0]+=this.stepsize[0]*randomGaussian(5,5);
    this.loc[1]+=this.stepsize[1]*randomGaussian(5,5);
    }
  }
}
