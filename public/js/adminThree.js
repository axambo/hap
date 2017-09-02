    fluid.registerNamespace("adminThree");
    var environment = flock.init();

    adminThree.play = function () {

      var bgSynth1 = flock.synth({
          synthDef: {
              id:"playbuf",
              ugen: "flock.ugen.playBuffer",
              buffer: {
                  id: "1",
                  url: "snd/bg/part2.mp3"
              },
              loop: 1,
              start: 0,
              speed: 1,
              mul:0.5
          },
      });


      var bgSynth2 = flock.synth({
          synthDef: {
              id:"playbuf2",
              ugen: "flock.ugen.playBuffer",
              buffer: {
                  id: "2",
                  url: "snd/bg/part2.mp3"
              },
              loop: 1,
              start: 0,
              speed: 0.5,
              mul:0.5
          },
      });

      var bgSynth3 = flock.synth({
          synthDef: {
              id:"playbuf3",
              ugen: "flock.ugen.playBuffer",
              buffer: {
                  id: "2",
                  url: "snd/bg/part2.mp3"
              },
              loop: 1,
              start: 0,
              speed: -1,
              mul:0.5
          },
      });


      var bgSynth4 = flock.synth({
          synthDef: {
              id:"playbuf3",
              ugen: "flock.ugen.playBuffer",
              buffer: {
                  id: "2",
                  url: "snd/bg/part2.mp3"
              },
              loop: 1,
              start: 0,
              speed: -0.5,
              mul:0.5
          },
      });

        console.log("start env");
        environment.start();

    };
adminThree.play();
