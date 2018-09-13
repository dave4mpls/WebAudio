//
//	A test of a Sound-Font-2-compatible note routine that can be plugged into the tinysynth to
//	offer full SF2 capabilities.  Is it possible?
//  Turns a note on or off based on the noteOn flag.  Creates and starts the audio nodes and
//	returns an array of output nodes, each of which should be connected to the gain node for the
//  note to link into the synthesizer.  Knows nothing about MIDI channels, etc., since that is
//  handled by the higher level in tinysynth.  t is the time for the events to start happening
//  according to the audio clock in the relevant audio context, ctx.  Not sure if velocity is
//  needed, that could be handled by the gain node they all get attached to???!!!
//
//	I might change it to return a structure of which the audio-nodes array is one element,
//  and parameters like release time are the rest, so that tinysynth can handle note-off itself.
//	Depends on how complex note-off turns out to be.
//
//	Returns false if the note cannot be played (e.g. no sample available).  Presumably then you
//  fall back to Quality Level 2 or 1 or something.
//

function sfProcessingClass() {	// creates sfProcessing object
	//--- UNIT CONVERSION functions for various units that are referenced in Soundfonts (there's a lot!)
	var uc = {		// Unit Conversion: For combining SF parameters, or converting to WebAudio ones.
		cent_to_semitone: function(a) { return a/100; },
		semitone_to_cent: function(a) { return a*100; },
		midikey_to_hertz: function(a) { return Math.pow(2, (a - 69) / 12) * 440.0;},
		hertz_to_midikey: function(a) { return (Math.log(a/440.0)/Math.log(2))*12+69; },
		
	};
	//--- FUNCTIONS assigned to various data types within sound fonts, so they can "handle" their own operations based on their type.
	var combineParmsAdding = function(a,b,parmName) {
		//--- The combine parms routines are different ways of putting a parameter from b into a, where b can override a (e.g. b could be a preset and a could be an instrument, etc.).  A and B are objects with multiple parameters in them.
		if (!b.hasOwnProperty(parmName)) return;
		if (b[parmName]===null) return;
		if (!a.hasOwnProperty(parmName)) a[parmName] = b[parmName];
		else a[parmName] += b[parmName];
	};
	var combineParmsSubstituting = function(a,b,parmName) {
		if (!b.hasOwnProperty(parmName)) return;
		if (b[parmName]===null) return;
		a[parmName] = b[parmName];
	};
	var combineParmsIgnoring = function(a,b,parmName) { };
	//--- DATA about SoundFont parameters!  Mostly straight from the SoundFont public implementation document!
	var typeInfo = { 		// Types of parameters have associated functions, etc., which if they exist, override those of units.
		'index': { combine: combineParmsIgnoring, },
		'range': { combine: combineParmsIgnoring, },
		'sample': { combine: combineParmsSubstituting, },		// combine is done at the unit level
		'value': { },		// combine is done at the unit level
		'substitution': { combine: combineParmsSubstituting,  },
	};
	var unitInfo = {		// Units of measure have associated combining functions, etc.
		'smpls': { combine: combineParmsAdding, },
		'32k_smpls': { combine: combineParmsAdding, },
		'cent_fs': { parent_unit: 'cent', },
		'cent': { combine: combineParmsAdding, },
		'cB': { combine: combineParmsAdding, },
		'cB_fs': { parent_unit: 'cB', },
		'cB_attn': { parent_unit: 'cB', },
		'tenth_percent': { combine: combineParmsAdding, },
		'minus_tenth_percent': { combine: combineParmsAdding, },
		'timecent': { combine: combineParmsAdding, },
		'tcent_per_key': { parent_unit: 'timecent', },
		'index': { combine: combineParmsSubstituting, },
		'range': { combine: combineParmsIgnoring, },
		'midikey': { combine: combineParmsSubstituting, },
		'midivel': { combine: combineParmsSubstituting, },
		'bitflags': { combine: combineParmsIgnoring, },
		'semitone': { combine: combineParmsAdding, },
		'cent_per_key': { parent_unit: 'cent', },
		'number': { combine: combineParmsIgnoring, },
	};
	var parmInfo = {		// For every parameter that might be returned by the parser, we need to know what to do from the SF2 spec.
      'startAddrsOffset': { unit: 'smpls',min:null,max:null,default:0,type:'sample',nonpreset:true,},
      'endAddrsOffset': { unit: 'smpls',min:null,max:null,default:0,type:'sample',nonpreset:true,},
      'startloopAddrsOffset': {unit: 'smpls',min:null,max:null,default:0,type:'sample',nonpreset:true,},
      'endloopAddrsOffset': {unit: 'smpls',min:null,max:null,default:0,type:'sample',nonpreset:true,},
      'startAddrsCoarseOffset': {unit: '32k_smpls',min:null,max:null,default:0,type:'sample',nonpreset:true,},
      'modLfoToPitch': {unit:'cent_fs',min:-12000,max:12000,default:0,type:'value',nonpreset:false,},
      'vibLfoToPitch': {unit:'cent_fs',min:-12000,max:12000,default:0,type:'value',nonpreset:false,},
      'modEnvToPitch': {unit:'cent_fs',min:-12000,max:12000,default:0,type:'value',nonpreset:false,},
      'initialFilterFc': {unit: 'cent',min:1500,max:13500,default:13500,type:'value',nonpreset:false,},
      'initialFilterQ': {unit: 'cB',min:0,max:960,default:0,type:'value',nonpreset:false,},
      'modLfoToFilterFc': {unit:'cent_fs',min:-12000,max:12000,default:0,type:'value',nonpreset:false,},
      'modEnvToFilterFc': {unit:'cent_fs',min:-12000,max:12000,default:0,type:'value',nonpreset:false,},
      'endAddrsCoarseOffset': {unit: '32k_smpls',min:null,max:null,default:0,type:'sample',nonpreset:true,},
      'modLfoToVolume': {unit: 'cB_fs',min:-960,max:960,default:0,type:'value',nonpreset:false,},
      'chorusEffectsSend': {unit: 'tenth_percent',min:0,max:1000,default:0,type:'value',nonpreset:false,},
      'reverbEffectsSend': {unit: 'tenth_percent',min:0,max:1000,default:0,type:'value',nonpreset:false,},
      'pan': {unit: 'tenth_percent',min:-500,max:500,default:0,type:'value',nonpreset:false,},
      'delayModLFO': {unit:'timecent',min:-12000,max:5000,default:-12000,type:'value',nonpreset:false,},
      'freqModLFO': {unit: 'cent',min:-16000,max:4500,default:0,type:'value',nonpreset:false,},
      'delayVibLFO': {unit:'timecent',min:-12000,max:5000,default:-12000,type:'value',nonpreset:false,},
      'freqVibLFO': {unit: 'cent',min:-16000,max:4500,default:0,type:'value',nonpreset:false,},
      'delayModEnv': {unit:'timecent',min:-12000,max:5000,default:-12000,type:'value',nonpreset:false,},
      'attackModEnv': {unit:'timecent',min:-12000,max:8000,default:-12000,type:'value',nonpreset:false,},
      'holdModEnv': {unit:'timecent',min:-12000,max:5000,default:-12000,type:'value',nonpreset:false,},
      'decayModEnv': {unit:'timecent',min:-12000,max:8000,default:-12000,type:'value',nonpreset:false,},
      'sustainModEnv': {unit:'minus_tenth_percent',min:0,max:1000,default:0,type:'value',nonpreset:false,},
      'releaseModEnv': {unit:'timecent',min:-12000,max:8000,default:-12000,type:'value',nonpreset:false,},
      'keynumToModEnvHold': {unit:'tcent_per_key',min:-1200,max:1200,default:0,type:'value',nonpreset:false,},
      'keynumToModEnvDecay': {unit:'tcent_per_key',min:-1200,max:1200,default:0,type:'value',nonpreset:false,},
      'delayVolEnv': {unit:'timecent',min:-12000,max:5000,default:-12000,type:'value',nonpreset:false,},
      'attackVolEnv': {unit:'timecent',min:-12000,max:8000,default:-12000,type:'value',nonpreset:false,},
      'holdVolEnv': {unit:'timecent',min:-12000,max:5000,default:-12000,type:'value',nonpreset:false,},
      'decayVolEnv': {unit:'timecent',min:-12000,max:8000,default:-12000,type:'value',nonpreset:false,},
      'sustainVolEnv': {unit: 'cB_attn',min:0,max:1440,default:0,type:'value',nonpreset:false,},
      'releaseVolEnv': {unit:'timecent',min:-12000,max:8000,default:-12000,type:'value',nonpreset:false,},
      'keynumToVolEnvHold': {unit:'tcent_per_key',min:-1200,max:1200,default:0,type:'value',nonpreset:false,},
      'keynumToVolEnvDecay': {unit:'tcent_per_key',min:-1200,max:1200,default:0,type:'value',nonpreset:false,},
      'instrument': {unit: 'index',min:null,max:null,default:null,type:'index',nonpreset:false,},
      'keyRange': {unit: 'range',min:null,max:null,default:null,type:'range',nonpreset:false,},
      'velRange': {unit: 'range',min:null,max:null,default:null,type:'range',nonpreset:false,},
      'startloopAddrsCoarseOffset': {unit: 'smpls',min:null,max:null,default:0,type:'sample',nonpreset:true,},
      'keynum': {unit: 'midikey',min:null,max:null,default:null,type:'substitution',nonpreset:true,},
      'velocity': {unit: 'midivel',min:null,max:null,default:null,type:'substitution',nonpreset:true,},
      'initialAttenuation': {unit: 'cB',min:0,max:1440,default:0,type:'value',nonpreset:false,},
      'endloopAddrsCoarseOffset': {unit: 'smpls',min:null,max:null,default:null,type:'sample',nonpreset:true,},
      'coarseTune': {unit: 'semitone',min:-120,max:120,default:0,type:'value',nonpreset:false,},
      'fineTune': {unit: 'cent',min:-99,max:99,default:0,type:'value',nonpreset:false,},
      'sampleID': {unit: 'index',min:null,max:null,default:null,type:'index',nonpreset:false,},
      'sampleModes': {unit: 'bitflags',min:null,max:null,default:null,type:'sample',nonpreset:true,},
      'scaleTuning': {unit: 'cent_per_key',min:0,max:1200,default:100,type:'value',nonpreset:false,},
      'exclusiveClass': {unit: 'number',min:0,max:127,default:0,type:'sample',nonpreset:true,},
      'overridingRootKey': {unit: 'midikey',min:null,max:null,default:null,type:'sample',nonpreset:true,}
	};
	var setDefaults = function() {
		// Returns a default parameter object.
		var out = { };
		for (var thisParm in parmInfo) {
			out[thisParm] = parmInfo[thisParm].default;
		}
		return out;
	}
	var getCombiner = function(thisParm) {
		// determines the combining method for a particular sound parameter.  Check type first, then unit, then parent unit.
		var thisParmInfo = parmInfo[thisParm];
		var combiningFunction = combineParmsIgnoring;		// default to ignoring parms that might be from a newer version, etc.
		if (!thisParmInfo) return combiningFunction;
		if (typeInfo[thisParmInfo.type] && typeInfo[thisParmInfo.type].combine)
			combiningFunction = typeInfo[thisParmInfo.type].combine;
		else if (unitInfo[thisParmInfo.unit] && unitInfo[thisParmInfo.unit].combine)
			combiningFunction = unitInfo[thisParmInfo.unit].combine;
		else if (unitInfo[thisParmInfo.unit] && unitInfo[thisParmInfo.unit].parent_unit) {
			var unitInfo2 = unitInfo[unitInfo[thisParmInfo.unit].parent_unit];
			if (unitInfo2.combine) combiningFunction = unitInfo2.combine;  // only one level of parents please!
		}
		return combiningFunction;
	}
	var combineParms = function(a,b,combineOverride,skipNonPreset) {
		// Combines parameters where b can override a, using the methods appropriate to each parameter's type or unit.
		// CombineOverride is optional for when you want to force a particular combining function in a situation.
		// SkipNonPreset is optional and defaults false.  You set it true, when you want to skip all parameters that aren't supposed to be in the preset (presumably b comes from the preset).
		nonPresetFlag = false;
		if (skipNonPreset===true) nonPresetFlag = true;
		for (var thisParm in b) {
			var c = { };  // we actually put the parm in here so we can remove the darn "amount" object tag
			c[thisParm] = b[thisParm];
			if (c[thisParm].hasOwnProperty("amount")) c[thisParm] = c[thisParm].amount;
			var thisParmInfo = parmInfo[thisParm];
			if (!thisParmInfo) continue;  // ignore unsupported or new parameters
			if (nonPresetFlag && parmInfo[thisParm].nonpreset) continue; 
			var f = getCombiner(thisParm);
			if (combineOverride) combineOverride = f;
			f(a,c,thisParm);	// actually run the function (on C, so it is a number not an "amount object")-- it adds, substitutes, ignores, multiplies, etc.
			//-- oh! and enforce the range limits!
			if (thisParmInfo.min !== null && a[thisParm] < thisParmInfo.min) a[thisParm] = thisParmInfo.min;
			if (thisParmInfo.max !== null && a[thisParm] > thisParmInfo.max) a[thisParm] = thisParmInfo.max;
		}
	}
	var matchRange = function(k,v,parms) {
		// Looks in the parameter or generator object and returns true if the given k>ey/v>elocity
		// range matches, false otherwise.
		if (parms.hasOwnProperty('keyRange')) {
			if (k < parms.keyRange.lo) return false;
			if ( k > parms.keyRange.hi) return false;
		}
		if (parms.hasOwnProperty('velRange')) {
			if (v < parms.velRange.lo) return false;
			if (v > parms.velRange.hi) return false;
		}
		return true;
	}
	var shallowClone = function(a) { return JSON.parse(JSON.stringify(a)); }
	//
	//	Adds the MIDI Map part to the parser, which we need to quickly look up MIDI patches.
	//
	var addMIDIMap = function (parser) {
		//-- save the results of these parser functions so we don't have to generate them again
		var presets = parser.presets = parser.getPresets();
		var instruments = parser.instruments = parser.getInstruments();
		//-- here's our new one
		var MIDIMap = parser.MIDIMap = { };
		//-- now scan all the presets
		for (var i = 0; i < presets.length; i++) {
			var thisPreset = presets[i]; var thisBank = thisPreset.header.bank;
			var thisMIDIProgram = thisPreset.header.preset;
			if (!MIDIMap.hasOwnProperty(thisBank)) MIDIMap[thisBank] = { };
			MIDIMap[thisBank][thisMIDIProgram] = i;
        }
    }
    
    var retypeSamples = function(parser) {
        //-- another thing to do at loading time: convert the Int16 array to a Float32Array.
        //-- TODO: check for OGG compressed samples and uncompress them
        for (var i = 0; i < parser.sample.length; i++) {
            var thisSample = parser.sample[i]; var thisSampleLength = thisSample.length | 0;
            var newSample = new Float32Array(thisSampleLength);
            for (var j = 0|0; j < thisSampleLength; j++) {
                newSample[j] = thisSample[j] / 32768.0;
            }
            parser.sample[i] = newSample;
        }
    }

	//
	//	Install the soundfont into this object.  Depends of course on the sound font parsing module.
	//
	var parser = null;
	this.loadSF2File = function (arrayBufferValue) {
		var byteBuffer = new Uint8Array(arrayBufferValue);
		parser = new sf2.Parser(byteBuffer);
		parser.parse();
		window.parser = parser;		// just for debugging purposes now-- what's in here exactly?
        addMIDIMap(parser);   // make sure to add the midi map.
        retypeSamples(parser);  // convert all samples to Float32.
	}
	this.getParser = function() { return parser; }
	//
	//	Process a note's related parameters before playing it.  Returns array of objects telling
	// 	the player what to play, or false if note data is not available (then the player can fallback
	// 	to a lesser quality level?)
	//
	this.processNoteSF2 = function (noteNumber, noteVelocity, programNumber, bankNumber) {
		//--- find the preset in the MIDI map
		if (!parser.MIDIMap) return false;  // need the midi map generated after loading soundfont
		if (!parser.MIDIMap[bankNumber]) return false;
		if (!parser.MIDIMap[bankNumber][programNumber]) return false;
		var presetIndex = parser.MIDIMap[bankNumber][programNumber];
		if (!parser.presets[presetIndex]) return false;
		var preset = parser.presets[presetIndex];
		//--- set default parms and look for the global generator; at the preset level, the defaults are all zero because they are just added to instrument parameters.
		var noteParms = { }; var globalIndex = -1;
		for (var i = 0; i < preset.info.length; i++) {
			if (preset.info[i].generator && !preset.info[i].generator.instrument) {
				combineParms(noteParms, preset.info[i].generator);  // global overrides defaults
				globalIndex = i; break;
			}
		}
		//--- now look for the presets matching our note and velocity.  There may be more than one, so
		//--- we add to an array.  Eventually at the sample level we have a tree of two levels of arrays,
		//--- which we can then compress back into a list of samples for the player to play.
		presetMatches = [ ];
		for (var i = 0; i < preset.info.length; i++) {
			if (i===globalIndex) continue;
			var thisGenerator = preset.info[i].generator;
			if (matchRange(noteNumber, noteVelocity, thisGenerator)) {
				var newPresetMatch = shallowClone(noteParms);	// copy the parms from global level
				combineParms(newPresetMatch, thisGenerator);
				newPresetMatch.instrument = thisGenerator.instrument.amount;  // this is an index ("Ignore") parameter, but we want it so we can link to the next level
				presetMatches.push(newPresetMatch);
			}
		}
		//--- now, for each preset match, we have to locate and process the instrument.
		var instrumentMatches = [ ];
		for (var i = 0; i < presetMatches.length; i++) {
			if (presetMatches[i].instrument && parser.instruments && parser.instruments[presetMatches[i].instrument]) {
				var instrument = parser.instruments[presetMatches[i].instrument];
				var instParms = setDefaults();  // the instrument parms start out at standard defaults.  They are absolute physical values, unlike the preset level which is offsets.
				//--- now locate the global instrument zone if it exsts.
				var globalIndex = -1;
				for (var j = 0; j < instrument.info.length; j++) {
					var thisInfo = instrument.info[j];
					if (!thisInfo.generator.hasOwnProperty('sampleID')) {
						// found global: force-override defaults by always substituting
						combineParms(instParms, thisInfo.generator, combineParmsSubstituting);
						globalIndex = j; break;
					}
				}
				//--- now that we have found the global instrument, locate and create nodes for
				//--- all the instrument samples/notes we must play (possibly multiple).  For each,
				//--- we override the instrument globals with instrument locals, then find the sample
				//--- and override with sample values, then, combine (usu. add) from the preset values
				//--- we got above.
				for (var j = 0; j < instrument.info.length; j++) {
					if (j===globalIndex) continue;
					var thisInfo = instrument.info[j]; var thisGenerator = thisInfo.generator;
					if (matchRange(noteNumber, noteVelocity, thisGenerator)) {
						var newInstrumentMatch = shallowClone(instParms);
						combineParms(newInstrumentMatch, thisGenerator, combineParmsSubstituting);  //local inst overwrites global inst
						if (thisGenerator.hasOwnProperty('sampleID')) {
							var mySampleIndex = thisGenerator.sampleID.amount;
							if (parser.sampleHeader[mySampleIndex] && parser.sample[mySampleIndex]) {
								var thisSampleHeader = parser.sampleHeader[mySampleIndex];
                                var thisSample = parser.sample[mySampleIndex];
                                for (var thisSampleProperty in thisSampleHeader) {  // Samples are a straight overwrite with properties that may not be in parmInfo.
                                    newInstrumentMatch[thisSampleProperty] = thisSampleHeader[thisSampleProperty];
                                }
								combineParms(newInstrumentMatch, presetMatches[i], null, true);		// and preset adds to inst, producing final result.
								newInstrumentMatch.sample = thisSample;
								instrumentMatches.push(newInstrumentMatch);
							} else continue;
						} else continue;
					}
				}
			} else continue;  // if instrument is not found, we just ignore that line
		}
		//--- yay, now we have a bunch of instrument matches with samples.  We can play them!
		//--- TODO: convert the units first
		if (instrumentMatches.length===0) instrumentMatches = false;
		return instrumentMatches;
    }
    
    //-- here's note ON for Soundfonts!  It will expand to handle more and more parameters.
    //-- It will start with basic notes however, and will return false if no note could be made,
    //-- or, it will connect all its audio nodes to connectTo and start them.  It will return false
    //-- if no note could be sounded, or an object that you can use to call note Off later.
	this.noteOn = function (noteNumber, noteVelocity, programNumber, bankNumber, ctx, connectTo, t) {
        var percussion = (bankNumber===128);   // Oh btw to get the standard drum kit you send bank = 128, patch = 0; and then we don't do pitch adjustments either.
        var sf2note = { noteNumber: noteNumber, noteVelocity: noteVelocity, programNumber: programNumber, bankNumber: bankNumber, connectTo: connectTo, t: t };
        var p = processNoteSF2(noteNumber, noteVelocity, programNumber, bankNumber);
        if (p===false) return false;  // can't find note, so use another sound generation method.
        sf2.outputs = [ ];
        var stereoDone = [ ];  // keep a list of samples we already did because they were part of a stereo pair
        var stereoBackReference = [ ];  // and a corresponding list of back references to the index that we already did.  ICK, STEREO!
        for (var i = 0; i < p.length; i++) {
            var tp = p[i]; var thisOutput = { bufferNodes: [ ], gainNodes: [ ] }; 
            sf2.outputs.push(thisOutput);
            //--- determine loop status: 0 = no loop, 1 = loops continuously, 2 = no loop, 3 loops till release then plays to end
            var loopStatus = thisOutput.loopStatus = (tp.hasOwnProperty("sampleModes") ? (tp.sampleModes & 3) : 0);
            //--- determine stereo status
            var stereoType = "mono";
            if (tp.hasOwnProperty("sampleType")) {
                var sampleTypeBitflag = tp.sampleType & 0x0F;
                switch(sampleTypeBitflag) {
                    case 1: stereoType = "mono"; break;
                    case 2: stereoType = "right"; stereoLink = tp.sampleLink; break;
                    case 4: stereoType = "left"; stereoLink = tp.sampleLink; break;
                    default: stereoType = "mono"; break;
                }
            }
            //--- determine and store the actual note number and velocity to use
            var actualNote = noteNumber; var actualVelocity = noteVelocity;
            if (tp.keynum && tp.keynum > 0) actualNote = tp.keynum;
            if (tp.velocity !== undefined && tp.velocity !== null) actualVelocity = tp.velocity;
            thisOutput.actualVelocity = actualVelocity; thisOutput.actualNote =actualNote;
            //--- determine the sample rate based on pitch adjustments
            actualNote += tp.coarseTune;        // add tonal adjustments
            actualNote += tp.fineTune / 100;
            var sampleNote = tp.originalPitch;      // the note for the actual sample could be this
            if (tp.hasOwnProperty("overridingRootKey")) sampleNote = tp.overridingRootKey;  // but it's probably this
            var deltaSemitones = actualNote - sampleNote;
            var freqFactor = Math.pow(2,deltaSemitones/12);
            var newRate = tp.sampleRate * freqFactor;
            //--- now determine the positions for start, end and loop, and the subarray to actually play
            var startAtSample = 0 + 32768*tp.startAddrsCoarseOffset + tp.startAddrsOffset;
            var endAtSample = tp.sample.length + 32768*tp.endAddrsCoarseOffset + tp.endAddrsOffset - 1;
            var startLoopSample = tp.startLoop  + 32768*tp.startloopAddrsCoarseOffset + tp.startloopAddrsOffset - startLoopSample;
            var endLoopSample = tp.endLoop + 32768*tp.endloopAddrsCoarseOffset + tp.endloopAddrsOffset - endLoopSample;
            var startLoopTime = startLoopSample / newRate;
            var endLoopTime = endLoopSample / newRate;
            var actualSample = tp.sample.subarray(startAtSample,endAtSample+1);
            //--- create buffer node
            var ab;
            if (stereoType==="mono") {   // mono: just copy the sample to both channels, easy!
                ab = ctx.createBuffer(2,actualSample.length,newRate);
                ab.copyToChannel(actualSample,0);
                ab.copyToChannel(actualSample,1);
            } else if (stereoType==="left" || stereoType==="right") {
                var k = stereoDone.indexOf(tp.sampleLink); 
                if (k > 0) { //-- stereo, and we need to copy to a buffer we alreaady encountered
                    ab = p[stereoBackReference[k]].bufferNode;
                    ab.copyToChannel(actualSample,1);
                } else {        // stereo, and we haven't encountered the other channel yet
                    ab = ctx.createBuffer(2,actualSample.length,newRate);
                    ab.copyToChannel(actualSample,0);
                    stereoDone.push(tp.sampleID);
                    stereoBackReference.push(i);
                }
            }
            tp.bufferNode = ab;
            var abs = ctx.createBufferSource();
            abs.buffer = ab;
            //--- set up looping on the buffer node
            if (loopStatus===1 || loopStatus===3) {     // 1 & 3 are different but only in noteoff
                abs.loop = true; abs.loopStart = startLoopTime; abs.loopEnd = endLoopTime;
            }
            //--- create gain node for volume envelope and lfo
            var g = ctx.createGain();  abs.connect(g);
            
        }
        return sf2note;
    }

    this.noteOff = function (sf2note) {

    }
}
