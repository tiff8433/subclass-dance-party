
var MakeDancer = function(top, left, timeBetweenSteps){
  this.top = top;
  this.left = left;
  this.timeBetweenSteps = timeBetweenSteps;
  this.$node = $('<span class="dancer"></span>');
  console.log(this);
  this.step();
  this.setPosition(top, left);
}

MakeDancer.prototype.step = function(){
  var context = this;
  setTimeout(function(){context.step.call(context)}, context.timeBetweenSteps);
}
MakeDancer.prototype.setPosition = function(top, left){
      var styleSettings = {
      top: top,
      left: left
    };
    this.$node.css(styleSettings);
}

// var makeDancer = function(top, left, timeBetweenSteps){
//   this.top = top;
//   this.left = left;
//   this.timeBetweenSteps = timeBetweenSteps;
//   this.$node = $('<span class="dancer"></span>');
//   // this.step();
//   // this.setPosition(top, left);
// }

// makeDancer.prototype.step = function(){
//   setTimeout(this.step.bind(this), timeBetweenSteps);
// };

// makeDancer.prototype.setPosition = function(top, left){
//   var styleSettings = {
//     top: top,
//     left: left
//   };
//   this.$node.css(styleSettings);
// };

