var express = require('express');
var app = express();
var start;
var counter = 0;
var durpart1 = 100;
var durpart2 = 200;
var durpart3 = 300;
var durpart4 = 400;
var gestures = [];

app.get('/', function (req, res) {
  res.send('Hello World!'); // browser
})

app.listen(4000, function () {
  console.log('Listening on port 4000!'); // terminal
})

app.get("/time", function(req, res){
   var part1 = durpart1;
   var part2 = durpart2;
   var part3 = durpart3;
   var part4 = durpart4;
   if (start == null) start = new Date();
   var now = new Date();
   var elapsed = (now.getTime() - start.getTime()) / 1000;
   console.log("time (sec.): " + elapsed.toString()); // terminal
   res.send({"elapsed":elapsed.toString(), "part1":part1, "part2":part2, "part3":part3, "part4":part4}); // browser
});

app.get("/_reset_", function(req, res){ // counter needs to be restarted from terminal
   start = new Date();
   counter = 0;
   gestures = [];
   var starttmp = start.toString();
   var countertmp = counter.toString();
   res.send({"start":starttmp, "counter":countertmp}); // browser
});

// app.get("/login", function(req, res){
//    playerId++;
//    res.send({"id":playerId.toString()});
// });

app.get("/paint/:gesture", function(req, res){
  gestures.push(req.params.gesture);
   counter++; // console.log("counter: " + counter); // TODO: for each new user who access the paint page, but who has access apart from the admin???
   res.send("OK");

});

app.get("/getcounter", function(req, res){ // # of gests
  var tmp = counter.toString();
  console.log("counter: " + tmp);
  res.send({"counter":tmp});
});


app.get("/getgestures", function(req, res){ // # of gests
  var tmp = gestures.slice();
  gestures = [];
  res.send({"gestures":tmp});
});


app.get("/start", function(req, res){
       //res.sendFile("/home/crowdj/public_html/handwaving/public/shake.html")
       res.sendFile(__dirname + "/public/intro.html")
});

app.get("/start-admin", function(req, res){
       //res.sendFile("/home/crowdj/public_html/handwaving/public/shake.html")
       res.sendFile(__dirname + "/public/intro-admin.html")
});

app.get("/admin1", function(req, res){
       res.sendFile(__dirname + "/public/admin-1.html")
});

app.get("/admin2", function(req, res){
       res.sendFile(__dirname + "/public/admin-2.html")
});

app.get("/admin3", function(req, res){
       res.sendFile(__dirname + "/public/admin-3.html")
});

app.get("/admin4", function(req, res){
       res.sendFile(__dirname + "/public/admin-4.html")
});

app.get("/intro", function(req, res){
       res.sendFile(__dirname + "/public/intro.html")
});

app.get("/1", function(req, res){
       res.sendFile(__dirname + "/public/1.html")
});

app.get("/2", function(req, res){
       res.sendFile(__dirname + "/public/2.html")
});

app.get("/3", function(req, res){
       res.sendFile(__dirname + "/public/3.html")
});

app.get("/4", function(req, res){
       res.sendFile(__dirname + "/public/4.html")
});
app.get("/end", function(req, res){
       res.sendFile(__dirname + "/public/end.html")
});

app.get("/hap", function(req, res){
       res.sendFile(__dirname + "/public/paint.html")
});

app.use(express.static('public'));
