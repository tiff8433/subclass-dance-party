
var MakeDancer = function(top, left, timeBetweenSteps){
  this.top = top;
  this.left = left;
  this.timeBetweenSteps = timeBetweenSteps;
  this.$node = $('<span class="dancer"></span>');
  this.step();
  this.setPosition(top, left);
};

MakeDancer.prototype.step = function(){
  var context = this;
  setTimeout(function(){context.step.call(context)}, context.timeBetweenSteps);
};
MakeDancer.prototype.setPosition = function(left, top){
  if (arguments.length < 2){
    var styleSettings = {
      left: left
    }
  } else {
    var styleSettings = {
      top: top,
      left: left
    }
  };
  this.$node.css(styleSettings);
};

