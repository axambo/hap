    fluid.registerNamespace("adminTwo");
    var environment = flock.init();

    adminTwo.play = function () {

      var bgSynth1 = flock.synth({
          synthDef: {
              id:"playbuf",
              ugen: "flock.ugen.playBuffer",
              buffer: {
                  id: "1",
                  url: "snd/bg/part3.mp3"
              },
              loop: 1,
              start: 0,
              speed: 1,
              mul:0.8
          },
      });


      var bgSynth2 = flock.synth({
          synthDef: {
              id:"playbuf2",
              ugen: "flock.ugen.playBuffer",
              buffer: {
                  id: "2",
                  url: "snd/bg/part3.mp3"
              },
              loop: 1,
              start: 0,
              speed: 2,
              mul:0.7
          },
      });

      var bgSynth3 = flock.synth({
          synthDef: {
              id:"playbuf3",
              ugen: "flock.ugen.playBuffer",
              buffer: {
                  id: "2",
                  url: "snd/bg/part3.mp3"
              },
              loop: 1,
              start: 0,
              speed: 4,
              mul:0.4
          },
      });

        console.log("start env");
        environment.start();

    };
adminTwo.play();
