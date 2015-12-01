

var MakeBlinkyDancer = function(top, left, timeBetweenSteps){
  console.log(this);
  MakeDancer.call(this, top, left, timeBetweenSteps);
 // var blinkyDancer = makeDancer(top, left, timeBetweenSteps);
  // var oldStep = blinkyDancer.step;

};

MakeBlinkyDancer.prototype = Object.create(MakeDancer.prototype);
MakeBlinkyDancer.prototype.constructor = MakeBlinkyDancer;

MakeBlinkyDancer.prototype.oldStep = MakeBlinkyDancer.prototype.step;
MakeBlinkyDancer.prototype.step = function(){
  MakeBlinkyDancer.prototype.oldStep();
  this.$node.toggle();
};































// var makeBlinkyDancer = function(top, left, timeBetweenSteps){
//   makeDancer.call(this);
//   this.$node = $('<span class="blinkyDancer"></span>');
//   // this.oldStep = this.step;
// };

// makeBlinkyDancer.prototype = Object.create(makeDancer.prototype);
// makeBlinkyDancer.prototype.constructor = makeBlinkyDancer;

// makeBlinkyDancer.prototype.step = function(){
//   makeDancer.prototype.step.call(this);
//   this.$node.toggle();
// };
