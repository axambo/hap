# HAP

Copyright (c) 2017 [Anna Xambó](anna.xambo@gatech.edu) and [Gerard Roma](gerard.roma@gatech.edu)

## Introduction

This code has been presented as a performance piece at the Web Audio Conference 2017 in London. This code builds upon the framework [Handwaving](https://github.com/g-roma/handwaving) by Gerard Roma. Documentation of the performance can be found here: [http://crowdj.net/HAP](http://crowdj.net/HAP)

## Setup

Before launching the code, make sure to install the node_modules folder:

> npm install

Also, make sure to install the following 3rd party JS libraries and store them in the folder `js/3rdparty`:

- [Flocking.js](http://flockingjs.org/) for generation of sounds.
- [P5.js](https://p5js.org/) for visualization.
- [ConvNet.js](http://cs.stanford.edu/people/karpathy/convnetjs/): for training Deep Learning models (Neural Networks) needed to make Handwaving work.
- [DSP.js](https://github.com/corbanbrook/dsp.js/): for signal analysis and generation used by Handwaving.
- [jquery.js](https://jquery.com/) for enhanced JavaScript code.


## Application Start

### Terminal (server)

Go to the directory and start the server:

> node app.js

Or if you want to close the command shell:

> nohup ./start.sh

To kill the process, go to Activity Monitor, search for “node” and kill the job.

### Browser Admin

To start (music background):

> http://SERVER:4000/start-admin

To reset:

> http://SERVER:4000/_reset_

To paint (projection): 

> http://SERVER:4000/hap

### Browser User (mobile device)

Instructions: 

> http://SERVER:4000/start

To start part 1:

> http://SERVER:4000/1


## License

The ISC License: http://opensource.org/licenses/ISC


## Sound credits

The sounds used come from FreeSound.org and are published under CC licenses. Here is a [full sound credit list](sound_credits_WAC17.md). The sounds have been coverted to MP3 stereo. The sample rate of sounds has been set to 44.1Hz and the bitrate to 256 kb/s.

