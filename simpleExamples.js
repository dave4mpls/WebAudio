var ctx;
var middleCfreq = 261.6;


function loadAudioContext() {
	// browser-independent loading of audio context
	window.AudioContext = window.AudioContext || window.webkitAudioContext;
	var context = new AudioContext();
	return context;
}

function b1click(evt) {
	
}

function noteNumberToFreq(midi) { return Math.pow(2, (midi - 69) / 12) * 440.0; }

var baseVelocity = 40;

function simpleSineWave(x) {
	//--- Simple sine wave sound generator to attach to a keyboard
	x.onNoteOn = function(noteNumber, channel, velocity, keyButton) {
		keyButton.style.backgroundColor = "pink";
		x.osc = ctx.createOscillator();
		x.osc.type = 'sine'; x.osc.frequency.value = noteNumberToFreq(noteNumber);
		x.gain = ctx.createGain();
		x.osc.connect(x.gain);
		x.gain.connect(ctx.destination);
		x.gain.gain.setValueAtTime(0.01, ctx.currentTime);
		x.osc.start();
		x.gain.gain.linearRampToValueAtTime((baseVelocity/127)*velocity/127,ctx.currentTime+0.05);
	};
	x.onNoteOff = function(noteNumber, channel, keyButton) {
		keyButton.style.backgroundColor = "";
		x.gain.gain.linearRampToValueAtTime(0.001,ctx.currentTime+0.2);
		x.osc.stop(ctx.currentTime+1.0);
	};
}

function simpleHarmonicWave(x) {
	//--- Simple sine wave sound generator to attach to a keyboard
	x.onNoteOn = function(noteNumber, channel, velocity, keyButton) {
		keyButton.style.backgroundColor = "pink";
		x.osc = ctx.createOscillator();
		x.osc2 = ctx.createOscillator();
		x.osc.type = 'sine'; x.osc.frequency.value = noteNumberToFreq(noteNumber);
		x.osc2.type = 'sine'; x.osc2.frequency.value = noteNumberToFreq(noteNumber)*2;
		x.gain = ctx.createGain();
		x.gain2 = ctx.createGain();
		x.osc.connect(x.gain);
		x.osc2.connect(x.gain2);
		x.gain.connect(ctx.destination);
		x.gain2.connect(ctx.destination);
		x.gain.gain.setValueAtTime(0.01, ctx.currentTime);
		x.gain2.gain.setValueAtTime(0.01,ctx.currentTime);
		x.osc.start();
		x.osc2.start();
		x.gain.gain.linearRampToValueAtTime((baseVelocity/127)*velocity/127,ctx.currentTime+0.05);
		x.gain2.gain.linearRampToValueAtTime((baseVelocity/127)*velocity/2/127,ctx.currentTime+0.05);
	};
	x.onNoteOff = function(noteNumber, channel, keyButton) {
		keyButton.style.backgroundColor = "";
		x.gain.gain.linearRampToValueAtTime(0.001,ctx.currentTime+0.2);
		x.gain2.gain.linearRampToValueAtTime(0.001,ctx.currentTime+0.2);
		x.osc.stop(ctx.currentTime+1.0);
		x.osc2.stop(ctx.currentTime+1.0);
	};
}
