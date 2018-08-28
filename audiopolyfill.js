"use strict";

function getPolyfillAudioContext() {
	window.AudioContext = window.AudioContext || window.webkitAudioContext;
	var ctx = new AudioContext();
	if (ctx)   {
		//-- fill in certain things we like
		if (!ctx.createConstantSource) {		//-- like an AudioNode that with an offset AudioParam that can automate a parameter input to any audio node
			ctx.createConstantSource = function() {		//-- the polyfilled constant source is fully operational!
				var retObj = { };
				retObj.gainNode = ctx.createGain();
				retObj.offset = retObj.gainNode.gain;	// our "offset" audioParam is really the gain param of the inner gain node.
				retObj.buffer = ctx.createBuffer(1,1,44100);  // a buffer with one sample
				var bufferArray = retObj.buffer.getChannelData(0); bufferArray[0] = 1.0;    // whose value is 1, which is multiplied by the gain to pass on to other things.
				retObj.bufferSource = ctx.createBufferSource();
				retObj.bufferSource.buffer = retObj.buffer; retObj.bufferSource.connect(retObj.gainNode);
				retObj.bufferSource.loop = true;
				retObj.connect = function(n) { retObj.gainNode.connect(n); }  // to connect the constant source, connect its inner gain node.
				retObj.start = function(when,offset,duration) { return retObj.bufferSource.start(when,offset,duration); }
				retObj.stop = function(when) { return retObj.bufferSource.stop(when); }
				return retObj;
			};
		}
		return ctx;
	}
	else {
		//--- no audio context at all--- we'll have to make one	
		return null;		// not implemented yet
	}
}

