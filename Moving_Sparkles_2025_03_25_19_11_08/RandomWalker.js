class RandomWalker{
  constructor(loc,step,fRGBA,sRGBA,sW,dimSize,probSet,prob, flick,shine){
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
    this.shine = shine
  }
  display(){
    stroke(this.strokeRGBA);
    fill(this.fillRGBA);
    if(this.shine){
      let shine_len_x = randomGaussian(5,5);
      let shine_len_y = randomGaussian(5,5)
      beginShape();
      vertex(-shine_len_x+this.loc[0],0+this.loc[1]);
      vertex(0+this.loc[0],0+this.loc[1]);
      vertex(0+this.loc[0], shine_len_y+this.loc[1]);
      vertex(0+this.loc[0],0+this.loc[1]);
      vertex(shine_len_x+this.loc[0],0+this.loc[1]);
      vertex(0+this.loc[0],0+this.loc[1]);
      vertex(0+this.loc[0],-shine_len_y+this.loc[1]);
      vertex(0+this.loc[0],0+this.loc[1]);
      endShape();
    }
    if (this.flickering){
      ellipse(this.loc[0], this.loc[1], this.dim_size[0], this.dim_size[1]);
      fill(0,0);
      strokeWeight(0.5);
      ellipse(this.loc[0], this.loc[1], this.dim_size[0]*5*cos(PI*frameCount/60), this.dim_size[1]*5*sin(PI*frameCount/60));
      ellipse(this.loc[0], this.loc[1], this.dim_size[0]*7*cos(0.5*PI*frameCount/60), this.dim_size[1]*7*sin(0.5*PI*frameCount/60));
    
    } else {
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
   if(this.loc[0] >width/2 || this.loc[0]< -width/2){
        this.boundfactor_x=this.boundfactor_x*-1;
      }
    if(this.loc[1] >height/2 || this.loc[1]< -height/2){
        this.boundfactor_y=this.boundfactor_y*-1;
      }
     this.loc[0]+=this.stepsize[0]*randomGaussian(5,5)*this.boundfactor_x;
    this.loc[1]+=this.stepsize[1]*randomGaussian(5,5)*this.boundfactor_y;
    }
  }
}