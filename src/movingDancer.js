var MakeMovingDancer = function(top, left, timeBetweenSteps){
  MakeDancer.call(this, top, left, timeBetweenSteps);
};

MakeMovingDancer.prototype = Object.create(MakeDancer.prototype);
MakeMovingDancer.prototype.constructor = MakeMovingDancer;

MakeMovingDancer.prototype.step = function(){
  MakeDancer.prototype.step.call(this);
  this.$node.addClass("movingdancer");
  this.move();
};

MakeMovingDancer.prototype.lineUp =  function(){
  MakeDancer.prototype.setPosition.call(this, 600);
}
MakeMovingDancer.prototype.move = function () {
  var context = this;

  var distances = [];
  for (var i = 0; i < (window.dancers.length - 1); i++){
    var xDifference = context.left - window.dancers[i].left;
    var yDifference = context.top - window.dancers[i].top;

    if (xDifference < 0){
      xDifference = xDifference * (-1);
    }
    if (yDifference < 0){
      yDifference = yDifference * (-1);
    } 

    distances.push(Math.sqrt((yDifference*yDifference) + (xDifference*xDifference)));
  }

  var closestNode = distances[0];
    var closestIndex = window.dancers[0];
    for (var j = 0; j < distances.length; j++){ 
      if(distances[j] < closestNode){
        closestNode = distances[j];
        closestIndex = window.dancers[j];
      }
    }
  console.log("left before", context.left);
  console.log("top before", context.top);
  
  var newLeft = closestIndex.left + 2;
  var newTop = closestIndex.top + 2;
  console.log("newLeft", newLeft);
  console.log("newTop", newTop);

    var styleSettings = {
      top: newTop,
      left: newLeft
    };

  context.$node.css(styleSettings);

  //MakeDancer.prototype.setPosition.call(context, newLeft, newTop);
  console.log("left", context.left);
  console.log("top", context.top);
  
  //context.step.call(context)
}
