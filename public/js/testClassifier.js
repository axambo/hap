var wSize = 128;
var sr = 60;
var fft = new FFT(wSize, sr);
var net;
var currentGesture = 0;
var currentTimer;
var currentPlayer;
var playing = false;
var phase = 1;
var playerId = 0;


var prevX = 0;
var prevY = 0;

var lastPainted;

var gestureNames = ["Horizontal brush", "Vertical brush", "Splash"];

function argmax(arr){
    maxVal = 0;
    maxIdx = null;
    for(var i in arr){
        if (arr[i] > maxVal){
            maxIdx = i;
            maxVal = arr[i]
        }
    }
    return maxIdx;
}
function xl2color(val){return parseInt(127*(1+(val/20)))}

function getPrediction(data){
    var point = Array();
    var x = Array();
    var y = Array();
    var z = Array();

    for (var i = 0;i < data.length; i ++){
            var accelPoint = data[i];
            x.push(accelPoint[0]);
            y.push(accelPoint[1]);
            z.push(accelPoint[2]);
    }

    fft.forward(x);
    point = point.concat(Array.prototype.slice.call(fft.spectrum));
    fft.forward(y);
    point = point.concat(Array.prototype.slice.call(fft.spectrum));
    fft.forward(z);
    point = point.concat(Array.prototype.slice.call(fft.spectrum));

    var vol = new convnetjs.Vol(point);
    var result = net.forward(vol, false);
    var pred = argmax(result.w);
    return [pred, result.w[pred]]
}


function touchStart(event) {
  if(playing)return;
  environment.start();
  currentPlayer = synths[0];
  currentPlayer.play();
  playing = true;
}

function getNN(){
    $.getJSON("js/nnet.json", function( data ) {
        net = new convnetjs.Net();
        net.fromJSON(data);
        $("#display").text("Touch screen to start...");
        document.addEventListener('touchstart', touchStart, false);
        document.addEventListener('click', touchStart, false);
    })
}

function isFlat(x,y,z){
    var th = 0.1;
    var result =
        (Math.abs(x) < th ) &&
        (Math.abs(y) < th ) &&
        Math.abs(0.98 - z) < th;
    return result;
}

var isStill = function(x,y,z){
    var th = 0.3;
    var result =
        (Math.abs(x - prevX) < th) &&
        (Math.abs(y - prevY) < th) &&
        (Math.abs(z - prevZ) < th)
    return result;
}

var isFast = function(x,y,z){
  var threshold = 2;
  var result =
    (Math.abs(x - prevX) > threshold) ||
    (Math.abs(y - prevY) > threshold) ||
    (Math.abs(z - prevZ) > threshold);
  return result;
}

$(function(){
    //if (!phoneOK()) return;
    var accelWin = [];
    $("#display").text("loading, please wait...");
    //getId(getNN);
    getNN();
    var k = 0;
    var prevX =0, prevY=0, prevZ=0;
    lastPainted = Date.now();

    window.ondevicemotion = function(e) {
        if (net==null || !playing) return;
        var x = e.accelerationIncludingGravity.x;
        var y = e.accelerationIncludingGravity.y;
        var z = e.accelerationIncludingGravity.z;
        accelWin.push([x, y, z]);

        if(accelWin.length > wSize){
              accelWin.shift();
              pred = getPrediction(accelWin);
              var xMult = 1 + 0.01*x;
              var yMult = 1 + 0.01*y;
              var zMult = 1 + 0.01*(9.8 - z);

              var gesture;

              var fast =
                  (Math.abs(x - prevX) > 2) ||
                  (Math.abs(y - prevY) > 2) ||
                  (Math.abs(z - prevZ) > 2);

              if (pred[1] < 0.7 || !fast || isFlat(x,y,z) ){
                gesture = -1;
                currentPlayer.set("playbuf.trigger",0);
                $("#display").text(" ");
              }
              else gesture = parseInt(pred[0]);
              var elapsed = (Date.now() - lastPainted)/1000.0;
              if (gesture != currentGesture && gesture >= 0) {
                    //$("#display").text(pred+" / "+ isFast(x,y,x) +"/"+isFlat(x,y,x));
                    /*var text = Math.abs(x - prevX) + " " + Math.abs(y - prevY) + " "+Math.abs(z - prevZ);
                    text = text +" "+isFast(x,y,z);
                    text = text +" "+(Math.abs(x - prevX) > 2);
                    text = text +" "+(Math.abs(y - prevY) > 2);
                    text = text +" "+(Math.abs(z - prevZ) > 2);

                    $("#display").text(text);*/
                    //currentPlayer.pause();
                    currentPlayer.set("playbuf.trigger",0);
                    currentPlayer = synths[gesture];
                    //currentPlayer.set("playbuf.trigger",0);

                    currentPlayer.set("playbuf.trigger",1);




                    //currentPlayer.play();
                    if( elapsed > 1){
                      $.get( "/paint/"+gesture, function(data) {
                          console.log( data );
                      });
                      lastPainted = Date.now();
                    }
                    if(gesture >=0) $("#display").text(gestureNames[gesture]);

                }

                currentGesture = gesture;
                //$("#display").text(Math.abs(x - prevX) + " " + Math.abs(y - prevY) + " "+Math.abs(z - prevZ));
                //$("#display").text("X:"+x);

                if (gesture == 0) currentPlayer.set("playbuf.speed",xMult);
                else if (gesture == 1) currentPlayer.set("playbuf.speed",yMult);
                else if (gesture == 2) currentPlayer.set("playbuf.speed",zMult);


        } else {
            $("#display").text(wSize - accelWin.length);
        }
        prevX = x;
        prevY = y;
        prevZ = z;
    }
});
