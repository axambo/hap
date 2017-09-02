var points = [];
var splashes = [];
var colp1 = '#857e6c';
var colp2 = '#e9d9c2';
var colp3 = '#0b0b09';
var colp4 = '#feefae';
var colors = [colp1, colp2, colp3, colp4];
var maxcounter = 0;
var style = 0;

/*setInterval(function(){
  $.get( "/getcounter", function(data) {
    console.log("counter: " + data.counter);
    console.log("maxcounter: " + maxcounter);
    console.log("difference: " + maxcounter);
      if (data.counter > maxcounter) {
        for (var i = maxcounter; i < data.counter; i++){ // for each gesture of the session...

          var x = random (1, windowWidth); // console.log("x" + x);
          var y = random (1, windowHeight); // console.log("y" + y);
          var px = random(1,10); // console.log("xrand" + xrand);
          var py = random(1,10); // console.log("yrand" + yrand);

          style = random ([0, 1, 2]);
          console.log("style: " + style);

          if (style == 0) {
            horizontal (x, y, px, py);
          } else if (style == 1) {
            vertical (x, y, px, py);
          } else if (style == 2) {
            splat(random (1, windowWidth), random (1, windowHeight));
          }
          redraw();
        }
     };
     maxcounter = data.counter; // console.log("maxcounter" + maxcounter);
  });
}, 1000);
*/

setInterval(function(){
  $.get( "/getgestures", function(data) {
    console.log("gestures: " + data.gestures);

        for (var i = 0; i < data.gestures.length; i++){ // for each gesture of the session...
          var style = data.gestures[i];
          var x = random (1, windowWidth); // console.log("x" + x);
          var y = random (1, windowHeight); // console.log("y" + y);
          var px = random(1,10); // console.log("xrand" + xrand);
          var py = random(1,10); // console.log("yrand" + yrand);


          console.log("style: " + style);

          if (style == 1) {
            horizontal (x, y, px, py);
          } else if (style == 0) {
            vertical (x, y, px, py);
          } else if (style == 2) {
            splat(random (1, windowWidth), random (1, windowHeight));
          }
          redraw();
        }
  });
}, 1000);
function setup() {
	createCanvas(windowWidth, windowWidth);
  noLoop();
}

function draw() {

}

function horizontal(x, y, px, py) {
  noStroke();
  fill(color(random(colors)));
  for (var i = 3; i < 15; i += .35) {
    var rad = 7;
    var angle = random(0, PI);
    var splatX = x + (cos(angle))/2*i;
    var splatY = y + (cos(angle))/2*i;
    ellipse(splatX, splatY, (rad-i)/12, splatY);
  }
}

function vertical(x, y, px, py) {
  noStroke();
  fill(color(random(colors)));
  for (var i = 3; i < 15; i += .35) {
    var rad = 7;
    var angle = random(0, TWO_PI/2);
    var splatX = x + (cos(angle))/2*i;
    var splatY = y + (sin(angle))/2*i;
    ellipse(splatX, splatY, splatX, (rad-i+1.8)/12);
  }
}

function splat(x, y) {
  noStroke();
  fill(color(random(colors)), 100, 100);
  var offset = random (1,2,3,4);
  for (var i = 3; i < 29; i += .35) {
    var rad = 17;
    var angle = random(0, TWO_PI);
    var splatX = x + cos(angle)*2*i;
    var splatY = y + sin(angle)*3*i;
    ellipse(splatX, splatY, (rad-i)*offset, (rad-i+1.8)*offset);
  }
}
