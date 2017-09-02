// Wrap everything in a function to keep your stuff private.
//(function () {

    // JavaScript strict mode is a good thing.
    "use strict";

    // Define a unique global namespace for your stuff.
    // You should change this to a namespace that is appropriate for your project.
    fluid.registerNamespace("partFour");

    var environment = flock.init();

    // Expose any public functions or constructors as properties on your namesapce.
    partFour.play = function () {


        var mySynthGest1_p4 = flock.synth({
            synthDef: {
            id:"playbuf",
                ugen: "flock.ugen.playBuffer",
                buffer: {
                    id: "g1_p4_drums",
                    url: "snd/gests-4/1.mp3"
                },
                loop: 1,
                start: 0,
                trigger:0

            },
            addToEnvironment: true
        });

        var mySynthGest2_p4 = flock.synth({
            synthDef: {
            id:"playbuf",
                ugen: "flock.ugen.playBuffer",
                buffer: {
                    id: "g1_p4_trumpet",
                    url: "snd/gests-4/2.mp3"
                },
                loop: 1,
                start: 0,
                trigger:0

            },
            addToEnvironment: true
        });

        var mySynthGest3_p4 = flock.synth({
            synthDef: {
            id:"playbuf",
                ugen: "flock.ugen.playBuffer",
                buffer: {
                    id: "g1_p4_doublebass",
                    url: "snd/gests-4/3.mp3"
                },
                loop: 1,
                start: 0,
                trigger:0
            },
            addToEnvironment: true
        });

        window.synths = [mySynthGest1_p4, mySynthGest2_p4, mySynthGest3_p4];

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
