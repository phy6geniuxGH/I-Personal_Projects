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
    this.boundfactor_x = 1.0
    this.boundfactor_y = 1.0
  }
  display(){
    if (this.flickering){
      stroke(random(this.strokeRGBA[3]))
      fill(this.fillRGBA);
      ellipse(this.loc[0], this.loc[1], this.dim_size[0], this.dim_size[1]);
      /*
      beginShape();
      vertex(-10+this.loc[0],0+this.loc[1]);
      vertex(0+this.loc[0], 10+this.loc[1]);
      vertex(10+this.loc[0],0+this.loc[1]);
      vertex(0+this.loc[0],-10+this.loc[1]);
      endShape();
      */
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
      if(this.loc[0] >width/2 || this.loc[0]< -width/2){
        this.boundfactor_x=this.boundfactor_x*-1;
      }
    if(this.loc[1] >height/2 || this.loc[1]< -height/2){
        this.boundfactor_y=this.boundfactor_y*-1;
      }
      this.loc[0]+=this.stepsize[0]*this.boundfactor_x;
      this.loc[1]+=this.stepsize[1]*this.boundfactor_y;
    } else {
      // Random Gaussian Distribution
    this.loc[0]+=this.stepsize[0]*randomGaussian(5,5);
    this.loc[1]+=this.stepsize[1]*randomGaussian(5,5);
    }
  }
}
