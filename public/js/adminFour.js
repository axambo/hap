    fluid.registerNamespace("adminFour");
    var environment = flock.init();

    adminFour.play = function () {

      var bgSynth1 = flock.synth({
          synthDef: {
              id:"playbuf",
              ugen: "flock.ugen.playBuffer",
              buffer: {
                  id: "1",
                  url: "snd/bg/part4.mp3"
              },
              loop: 1,
              start: 0,
              speed: {
                ugen:"flock.ugen.sin",
                freq:0.1,
                mul:0.2,
                add:0.8
              }
          },
      });
      var bgSynth2 = flock.synth({
          synthDef: {
              id:"playbuf",
              ugen: "flock.ugen.playBuffer",
              buffer: {
                  id: "1",
                  url: "snd/bg/part4.mp3"
              },
              loop: 1,
              start: 0,
              speed: {
                ugen:"flock.ugen.sin",
                freq:0.1,
                mul:0.2,
                add:-1
              }
          },
      });



        console.log("start env");
        environment.start();

    };
adminFour.play();
