var MakeBlueDancer = function(top, left, timeBetweenSteps){
  MakeDancer.call(this, top, left, timeBetweenSteps);
};

MakeBlueDancer.prototype = Object.create(MakeDancer.prototype);
MakeBlueDancer.prototype.constructor = MakeBlueDancer;

MakeBlueDancer.prototype.step = function(){
  MakeDancer.prototype.step.call(this);
  this.$node.addClass("blueDancer");
  this.$node.toggleClass("smallBlueDancer");
};

MakeBlueDancer.prototype.lineUp =  function(){
  MakeDancer.prototype.setPosition.call(this, 200);
}
