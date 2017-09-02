// Wrap everything in a function to keep your stuff private.
//(function () {

    // JavaScript strict mode is a good thing.
    "use strict";

    // Define a unique global namespace for your stuff.
    // You should change this to a namespace that is appropriate for your project.
    fluid.registerNamespace("partThree");

    var environment = flock.init();

    // Expose any public functions or constructors as properties on your namesapce.
    partThree.play = function () {


        var mySynthGest1_p3 = flock.synth({
            synthDef: {
            id:"playbuf",
                ugen: "flock.ugen.playBuffer",
                buffer: {
                    id: "g1_p3_trumpet",
                    url: "snd/gests-3/1.mp3"
                },
                loop: 1,
                start: 0,
                trigger:0
            },
            addToEnvironment: true
        });

        var mySynthGest2_p3 = flock.synth({
            synthDef: {
            id:"playbuf",
                ugen: "flock.ugen.playBuffer",
                buffer: {
                    id: "g2_p3_drums",
                    url: "snd/gests-3/2.mp3"
                },
                loop: 1,
                start: 0,
                trigger:0

            },
            addToEnvironment: true
        });

        var mySynthGest3_p3 = flock.synth({
            synthDef: {
            id:"playbuf",
                ugen: "flock.ugen.playBuffer",
                buffer: {
                    id: "g3_p3_piano",
                    url: "snd/gests-3/3.mp3"
                },
                loop: 1,
                start: 0,
                trigger:0

            },
            addToEnvironment: true
        });

        window.synths = [mySynthGest1_p3, mySynthGest2_p3, mySynthGest3_p3];

        // If you're on iOS, you will need to call in a listener for
        // some kind of user input action, such a button click or touch handler.
        // This is because iOS will only play sound if the user initiated it.
        //environment.start();
        document.addEventListener('touchstart', touchStart, false);
    };

    function touchStart(event) {
      environment.start();
    }

//}());
