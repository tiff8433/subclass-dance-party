var MakeSpinningDancer = function(top, left, timeBetweenSteps){
  MakeDancer.call(this, top, left, timeBetweenSteps);
};

MakeSpinningDancer.prototype = Object.create(MakeDancer.prototype);
MakeSpinningDancer.prototype.constructor = MakeSpinningDancer;

MakeSpinningDancer.prototype.step = function(){
  MakeDancer.prototype.step.call(this);
  this.$node.addClass("spinningDancer");
};