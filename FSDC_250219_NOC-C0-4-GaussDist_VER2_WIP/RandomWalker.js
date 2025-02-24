class RandomWalker{
  constructor(loc,step,fRGBA,sRGBA,sW,dimSize,probSet,prob, flick){
    this.loc = loc;
    this.stepsize = step;
    this.fillRGBA = fRGBA;
    this.strokeRGBA = sRGBA;
    this.strokeW = sW;
    this.dim_size = dimSize;
    this.probSet = probSet;
    this.prob = prob;
    this.flickering = flick;
  }
  display(){
    if (this.flickering){
      stroke(random(this.strokeRGBA[3]))
      fill(this.fillRGBA);
      ellipse(this.loc[0], this.loc[1], this.dim_size[0], this.dim_size[1]);
    } else {
      stroke(this.strokeRGBA)
      fill(this.fillRGBA);
      ellipse(this.loc[0], this.loc[1], this.dim_size[0], this.dim_size[1]);
    }
  }
  movement(){
    let r = random(0,1);
    // Random Function:
    if ((r < this.prob) && this.probSet){
    this.loc[0]+=this.stepsize[0];
      this.loc[1]+=this.stepsize[1];
    } else {
      // Random Gaussian Distribution
    this.loc[0]+=this.stepsize[0]*randomGaussian(5,5);
    this.loc[1]+=this.stepsize[1]*randomGaussian(5,5);
    }
  }
}
