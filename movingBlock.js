function movingBlock(){
  this.x;
  this.y;
  this.size;
  this.waypoint1;
  this.waypoint2;
  this.movingRight;
  this.speed = 2;
}

Block.prototype.moveBlock = function(){
  if(this.x === this.waypoint1){
    this.movingRight = true;
  }else if(this.x === this.waypoint2){
    this.movingRight = false;
  }
  if(this.movingRight){
    this.x += 1;
  }else{
    this.x -= 1;
  }
}

Block.prototype.render = function(){
  this.ctx.fillRect(this.x, this.y, this.size, this.size);
}

Game.prototype.createMovingBlocks = function(){
  this.movingBlock1 = new Block();
  this.movingBlock1.x = 500;
  this.movingBlock1.y = 400;
  this.movingBlock1.waypoint1 = 400;
  this.movingBlock1.waypoint2 = 600;
  this.movingBlock1.size = 50;
}