    fluid.registerNamespace("adminOne");
    var environment = flock.init();

    adminOne.play = function () {
        var bgSynth1 = flock.synth({
            synthDef: {
                id:"playbuf",
                ugen: "flock.ugen.playBuffer",
                buffer: {
                    id: "1",
                    url: "snd/bg/part1.mp3"
                },
                loop: 1,
                start: 0,
                speed: {
                  ugen:"flock.ugen.sin",
                  freq:0.1,
                  mul:0.2,
                  add:1
                }
            },
        });

        var bgSynth2 = flock.synth({
            synthDef: {
                id:"playbuf",
                ugen: "flock.ugen.playBuffer",
                buffer: {
                    id: "1",
                    url: "snd/bg/part1.mp3"
                },
                loop: 1,
                start: 0,
                speed: {
                  ugen:"flock.ugen.sin",
                  freq:0.01,
                  mul:0.1,
                  add:0.5
                }
            },
        });


        var bgSynth3 = flock.synth({
            synthDef: {
                id:"playbuf",
                ugen: "flock.ugen.playBuffer",
                buffer: {
                    id: "1",
                    url: "snd/bg/part1.mp3"
                },
                loop: 1,
                start: 0,
                speed: {
                  ugen:"flock.ugen.sin",
                  freq:0.03,
                  mul:0.1,
                  add:-0.3
                }
            },
        });

        console.log("start env");
        environment.start();

    };
//adminOne.play();
