//
//	Node.js program that reads all the soundfont files from MIDI.js to make corresponding binary ones to use as Quality Level 2 in my adapted Tiny Synth.
//	It won't be as tiny with a soundfont of course, but I can have the best sounds, by combining the sound font with the release envelope feature.
//

var fs = require('fs');
var atob = require('atob');

console.log("Including soundfont files");

eval(fs.readFileSync('soundfonts/accordion-mp3.js')+'');
eval(fs.readFileSync('soundfonts/acoustic_bass-mp3.js')+'');
eval(fs.readFileSync('soundfonts/acoustic_grand_piano-mp3.js')+'');
eval(fs.readFileSync('soundfonts/acoustic_guitar_nylon-mp3.js')+'');
eval(fs.readFileSync('soundfonts/acoustic_guitar_steel-mp3.js')+'');
eval(fs.readFileSync('soundfonts/agogo-mp3.js')+'');
eval(fs.readFileSync('soundfonts/alto_sax-mp3.js')+'');
eval(fs.readFileSync('soundfonts/applause-mp3.js')+'');
eval(fs.readFileSync('soundfonts/bagpipe-mp3.js')+'');
eval(fs.readFileSync('soundfonts/banjo-mp3.js')+'');
eval(fs.readFileSync('soundfonts/baritone_sax-mp3.js')+'');
eval(fs.readFileSync('soundfonts/bassoon-mp3.js')+'');
eval(fs.readFileSync('soundfonts/bird_tweet-mp3.js')+'');
eval(fs.readFileSync('soundfonts/blown_bottle-mp3.js')+'');
eval(fs.readFileSync('soundfonts/brass_section-mp3.js')+'');
eval(fs.readFileSync('soundfonts/breath_noise-mp3.js')+'');
eval(fs.readFileSync('soundfonts/bright_acoustic_piano-mp3.js')+'');
eval(fs.readFileSync('soundfonts/celesta-mp3.js')+'');
eval(fs.readFileSync('soundfonts/cello-mp3.js')+'');
eval(fs.readFileSync('soundfonts/choir_aahs-mp3.js')+'');
eval(fs.readFileSync('soundfonts/church_organ-mp3.js')+'');
eval(fs.readFileSync('soundfonts/clarinet-mp3.js')+'');
eval(fs.readFileSync('soundfonts/clavinet-mp3.js')+'');
eval(fs.readFileSync('soundfonts/contrabass-mp3.js')+'');
eval(fs.readFileSync('soundfonts/distortion_guitar-mp3.js')+'');
eval(fs.readFileSync('soundfonts/drawbar_organ-mp3.js')+'');
eval(fs.readFileSync('soundfonts/drums-mp3.js')+'');
eval(fs.readFileSync('soundfonts/dulcimer-mp3.js')+'');
eval(fs.readFileSync('soundfonts/electric_bass_finger-mp3.js')+'');
eval(fs.readFileSync('soundfonts/electric_bass_pick-mp3.js')+'');
eval(fs.readFileSync('soundfonts/electric_grand_piano-mp3.js')+'');
eval(fs.readFileSync('soundfonts/electric_guitar_clean-mp3.js')+'');
eval(fs.readFileSync('soundfonts/electric_guitar_jazz-mp3.js')+'');
eval(fs.readFileSync('soundfonts/electric_guitar_muted-mp3.js')+'');
eval(fs.readFileSync('soundfonts/electric_piano_1-mp3.js')+'');
eval(fs.readFileSync('soundfonts/electric_piano_2-mp3.js')+'');
eval(fs.readFileSync('soundfonts/english_horn-mp3.js')+'');
eval(fs.readFileSync('soundfonts/fiddle-mp3.js')+'');
eval(fs.readFileSync('soundfonts/flute-mp3.js')+'');
eval(fs.readFileSync('soundfonts/french_horn-mp3.js')+'');
eval(fs.readFileSync('soundfonts/fretless_bass-mp3.js')+'');
eval(fs.readFileSync('soundfonts/fx_1_rain-mp3.js')+'');
eval(fs.readFileSync('soundfonts/fx_2_soundtrack-mp3.js')+'');
eval(fs.readFileSync('soundfonts/fx_3_crystal-mp3.js')+'');
eval(fs.readFileSync('soundfonts/fx_4_atmosphere-mp3.js')+'');
eval(fs.readFileSync('soundfonts/fx_5_brightness-mp3.js')+'');
eval(fs.readFileSync('soundfonts/fx_6_goblins-mp3.js')+'');
eval(fs.readFileSync('soundfonts/fx_7_echoes-mp3.js')+'');
eval(fs.readFileSync('soundfonts/fx_8_scifi-mp3.js')+'');
eval(fs.readFileSync('soundfonts/glockenspiel-mp3.js')+'');
eval(fs.readFileSync('soundfonts/guitar_fret_noise-mp3.js')+'');
eval(fs.readFileSync('soundfonts/guitar_harmonics-mp3.js')+'');
eval(fs.readFileSync('soundfonts/gunshot-mp3.js')+'');
eval(fs.readFileSync('soundfonts/harmonica-mp3.js')+'');
eval(fs.readFileSync('soundfonts/harpsichord-mp3.js')+'');
eval(fs.readFileSync('soundfonts/helicopter-mp3.js')+'');
eval(fs.readFileSync('soundfonts/honkytonk_piano-mp3.js')+'');
eval(fs.readFileSync('soundfonts/kalimba-mp3.js')+'');
eval(fs.readFileSync('soundfonts/koto-mp3.js')+'');
eval(fs.readFileSync('soundfonts/lead_1_square-mp3.js')+'');
eval(fs.readFileSync('soundfonts/lead_2_sawtooth-mp3.js')+'');
eval(fs.readFileSync('soundfonts/lead_3_calliope-mp3.js')+'');
eval(fs.readFileSync('soundfonts/lead_4_chiff-mp3.js')+'');
eval(fs.readFileSync('soundfonts/lead_5_charang-mp3.js')+'');
eval(fs.readFileSync('soundfonts/lead_6_voice-mp3.js')+'');
eval(fs.readFileSync('soundfonts/lead_7_fifths-mp3.js')+'');
eval(fs.readFileSync('soundfonts/lead_8_bass__lead-mp3.js')+'');
eval(fs.readFileSync('soundfonts/marimba-mp3.js')+'');
eval(fs.readFileSync('soundfonts/melodic_tom-mp3.js')+'');
eval(fs.readFileSync('soundfonts/music_box-mp3.js')+'');
eval(fs.readFileSync('soundfonts/muted_trumpet-mp3.js')+'');
eval(fs.readFileSync('soundfonts/oboe-mp3.js')+'');
eval(fs.readFileSync('soundfonts/ocarina-mp3.js')+'');
eval(fs.readFileSync('soundfonts/orchestral_harp-mp3.js')+'');
eval(fs.readFileSync('soundfonts/orchestra_hit-mp3.js')+'');
eval(fs.readFileSync('soundfonts/overdriven_guitar-mp3.js')+'');
eval(fs.readFileSync('soundfonts/pad_1_new_age-mp3.js')+'');
eval(fs.readFileSync('soundfonts/pad_2_warm-mp3.js')+'');
eval(fs.readFileSync('soundfonts/pad_3_polysynth-mp3.js')+'');
eval(fs.readFileSync('soundfonts/pad_4_choir-mp3.js')+'');
eval(fs.readFileSync('soundfonts/pad_5_bowed-mp3.js')+'');
eval(fs.readFileSync('soundfonts/pad_6_metallic-mp3.js')+'');
eval(fs.readFileSync('soundfonts/pad_7_halo-mp3.js')+'');
eval(fs.readFileSync('soundfonts/pad_8_sweep-mp3.js')+'');
eval(fs.readFileSync('soundfonts/pan_flute-mp3.js')+'');
eval(fs.readFileSync('soundfonts/percussive_organ-mp3.js')+'');
eval(fs.readFileSync('soundfonts/piccolo-mp3.js')+'');
eval(fs.readFileSync('soundfonts/pizzicato_strings-mp3.js')+'');
eval(fs.readFileSync('soundfonts/recorder-mp3.js')+'');
eval(fs.readFileSync('soundfonts/reed_organ-mp3.js')+'');
eval(fs.readFileSync('soundfonts/reverse_cymbal-mp3.js')+'');
eval(fs.readFileSync('soundfonts/rock_organ-mp3.js')+'');
eval(fs.readFileSync('soundfonts/seashore-mp3.js')+'');
eval(fs.readFileSync('soundfonts/shakuhachi-mp3.js')+'');
eval(fs.readFileSync('soundfonts/shamisen-mp3.js')+'');
eval(fs.readFileSync('soundfonts/shanai-mp3.js')+'');
eval(fs.readFileSync('soundfonts/sitar-mp3.js')+'');
eval(fs.readFileSync('soundfonts/slap_bass_1-mp3.js')+'');
eval(fs.readFileSync('soundfonts/slap_bass_2-mp3.js')+'');
eval(fs.readFileSync('soundfonts/soprano_sax-mp3.js')+'');
eval(fs.readFileSync('soundfonts/steel_drums-mp3.js')+'');
eval(fs.readFileSync('soundfonts/string_ensemble_1-mp3.js')+'');
eval(fs.readFileSync('soundfonts/string_ensemble_2-mp3.js')+'');
eval(fs.readFileSync('soundfonts/synth_bass_1-mp3.js')+'');
eval(fs.readFileSync('soundfonts/synth_bass_2-mp3.js')+'');
eval(fs.readFileSync('soundfonts/synth_brass_1-mp3.js')+'');
eval(fs.readFileSync('soundfonts/synth_brass_2-mp3.js')+'');
eval(fs.readFileSync('soundfonts/synth_choir-mp3.js')+'');
eval(fs.readFileSync('soundfonts/synth_drum-mp3.js')+'');
eval(fs.readFileSync('soundfonts/synth_strings_1-mp3.js')+'');
eval(fs.readFileSync('soundfonts/synth_strings_2-mp3.js')+'');
eval(fs.readFileSync('soundfonts/taiko_drum-mp3.js')+'');
eval(fs.readFileSync('soundfonts/tango_accordion-mp3.js')+'');
eval(fs.readFileSync('soundfonts/telephone_ring-mp3.js')+'');
eval(fs.readFileSync('soundfonts/tenor_sax-mp3.js')+'');
eval(fs.readFileSync('soundfonts/timpani-mp3.js')+'');
eval(fs.readFileSync('soundfonts/tinkle_bell-mp3.js')+'');
eval(fs.readFileSync('soundfonts/tremolo_strings-mp3.js')+'');
eval(fs.readFileSync('soundfonts/trombone-mp3.js')+'');
eval(fs.readFileSync('soundfonts/trumpet-mp3.js')+'');
eval(fs.readFileSync('soundfonts/tuba-mp3.js')+'');
eval(fs.readFileSync('soundfonts/tubular_bells-mp3.js')+'');
eval(fs.readFileSync('soundfonts/vibraphone-mp3.js')+'');
eval(fs.readFileSync('soundfonts/viola-mp3.js')+'');
eval(fs.readFileSync('soundfonts/violin-mp3.js')+'');
eval(fs.readFileSync('soundfonts/voice_oohs-mp3.js')+'');
eval(fs.readFileSync('soundfonts/whistle-mp3.js')+'');
eval(fs.readFileSync('soundfonts/woodblock-mp3.js')+'');
eval(fs.readFileSync('soundfonts/xylophone-mp3.js')+'');

console.log("Instruments read.");
var ninst = 0;
for (thisInstrument in MIDI.Soundfont) {
	ninst++;
}
console.log("Total # of instruments read: " + ninst);
console.log("Creating note conversions");
/* note conversions
--------------------------------------------------- */
keyToNote = {} // C8  == 108
noteToKey = {} // 108 ==  C8

~(function () {
  var A0 = 0x15 // first note
  var C8 = 0x6C // last note
  var number2key = ['C', 'Db', 'D', 'Eb', 'E', 'F', 'Gb', 'G', 'Ab', 'A', 'Bb', 'B']
  for (let n = A0; n <= C8; n++) {
    var octave = (n - 12) / 12 >> 0
    var name = number2key[n % 12] + octave
    keyToNote[name] = n
    noteToKey[n] = name
  }
})()
console.log("Note conversions complete.");
console.log("Example 1: C4 = " + keyToNote["C4"]);
console.log("Example 2: Note 60 = " + noteToKey[60]);

instrumentNames = 
{
  'Piano': ['1 Acoustic Grand Piano', '2 Bright Acoustic Piano', '3 Electric Grand Piano', '4 Honky-tonk Piano', '5 Electric Piano 1', '6 Electric Piano 2', '7 Harpsichord', '8 Clavinet'],
  'Chromatic Percussion': ['9 Celesta', '10 Glockenspiel', '11 Music Box', '12 Vibraphone', '13 Marimba', '14 Xylophone', '15 Tubular Bells', '16 Dulcimer'],
  'Organ': ['17 Drawbar Organ', '18 Percussive Organ', '19 Rock Organ', '20 Church Organ', '21 Reed Organ', '22 Accordion', '23 Harmonica', '24 Tango Accordion'],
  'Guitar': ['25 Acoustic Guitar (nylon)', '26 Acoustic Guitar (steel)', '27 Electric Guitar (jazz)', '28 Electric Guitar (clean)', '29 Electric Guitar (muted)', '30 Overdriven Guitar', '31 Distortion Guitar', '32 Guitar Harmonics'],
  'Bass': ['33 Acoustic Bass', '34 Electric Bass (finger)', '35 Electric Bass (pick)', '36 Fretless Bass', '37 Slap Bass 1', '38 Slap Bass 2', '39 Synth Bass 1', '40 Synth Bass 2'],
  'Strings': ['41 Violin', '42 Viola', '43 Cello', '44 Contrabass', '45 Tremolo Strings', '46 Pizzicato Strings', '47 Orchestral Harp', '48 Timpani'],
  'Ensemble': ['49 String Ensemble 1', '50 String Ensemble 2', '51 Synth Strings 1', '52 Synth Strings 2', '53 Choir Aahs', '54 Voice Oohs', '55 Synth Choir', '56 Orchestra Hit'],
  'Brass': ['57 Trumpet', '58 Trombone', '59 Tuba', '60 Muted Trumpet', '61 French Horn', '62 Brass Section', '63 Synth Brass 1', '64 Synth Brass 2'],
  'Reed': ['65 Soprano Sax', '66 Alto Sax', '67 Tenor Sax', '68 Baritone Sax', '69 Oboe', '70 English Horn', '71 Bassoon', '72 Clarinet'],
  'Pipe': ['73 Piccolo', '74 Flute', '75 Recorder', '76 Pan Flute', '77 Blown Bottle', '78 Shakuhachi', '79 Whistle', '80 Ocarina'],
  'Synth Lead': ['81 Lead 1 (square)', '82 Lead 2 (sawtooth)', '83 Lead 3 (calliope)', '84 Lead 4 (chiff)', '85 Lead 5 (charang)', '86 Lead 6 (voice)', '87 Lead 7 (fifths)', '88 Lead 8 (bass + lead)'],
  'Synth Pad': ['89 Pad 1 (new age)', '90 Pad 2 (warm)', '91 Pad 3 (polysynth)', '92 Pad 4 (choir)', '93 Pad 5 (bowed)', '94 Pad 6 (metallic)', '95 Pad 7 (halo)', '96 Pad 8 (sweep)'],
  'Synth Effects': ['97 FX 1 (rain)', '98 FX 2 (soundtrack)', '99 FX 3 (crystal)', '100 FX 4 (atmosphere)', '101 FX 5 (brightness)', '102 FX 6 (goblins)', '103 FX 7 (echoes)', '104 FX 8 (sci-fi)'],
  'Ethnic': ['105 Sitar', '106 Banjo', '107 Shamisen', '108 Koto', '109 Kalimba', '110 Bagpipe', '111 Fiddle', '112 Shanai'],
  'Percussive': ['113 Tinkle Bell', '114 Agogo', '115 Steel Drums', '116 Woodblock', '117 Taiko Drum', '118 Melodic Tom', '119 Synth Drum'],
  'Sound effects': ['120 Reverse Cymbal', '121 Guitar Fret Noise', '122 Breath Noise', '123 Seashore', '124 Bird Tweet', '125 Telephone Ring', '126 Helicopter', '127 Applause', '128 Gunshot'],
  'Drum Channel': ['129 Drums']
};

  const clean = function (name) {
	var name2 = name.substr(instrument.indexOf(' ')+1);
	return name2.replace(/[^a-z0-9 ]/gi, '').replace(/[ ]/g, '_').toLowerCase()
  }

nameMap = { };

for (var thisCategory in instrumentNames) { 
	for (var i = 0; i < instrumentNames[thisCategory].length; i++) { 
		var instrument = instrumentNames[thisCategory][i];
		var num = parseInt(instrument.substr(0, instrument.indexOf(' ')), 10);
		var name = clean(instrument);
		nameMap[name] = num;
	}
}

console.log("Instrument map completed.");

//
//	Now the binary format we create is instead, a sound-font file for each instrument with the NUMBER, e.g. SF_0.BIN for piano.
//	And within each file, it starts out with a header of '1BSF'.  Then, 4 bytes long indicating the note number, then 4 bytes long
//	indicating the total size including padding (and excluding the header of each file), then 4 bytes for the exact file size, then
//	the actual file data padded to a four byte boundary, and then it continues until all the notes are stored.  All numbers are
//	UInt32's, so that the actual browser javascript can read them this way, then convert and multiply to extract the MP3 sample.
//

function base64ToArrayBuffer (base64) {
  var binaryString = atob(base64)
  var len = binaryString.length
  var bytes = new Uint8Array(len)
  for (var i = 0; i < len; i++) {
    bytes[i] = binaryString.charCodeAt(i)
  }
  return bytes
}

for (thisInstrument in MIDI.Soundfont) {
	thisObj = MIDI.Soundfont[thisInstrument];
	thisNum = nameMap[thisInstrument];
	//-- create the binary buffers and compute total size for the instrument file
	theseNotes = { };
	var totalSize = 4;	// starts as 4 bytes for the initial signature 1BSF.
	for (thisNote in thisObj) {
		var thisNoteImage = thisObj[thisNote];
		var base64 = thisNoteImage.split(',')[1];
		var thisNoteBinaryBuffer = base64ToArrayBuffer(base64);
		theseNotes[thisNote] = thisNoteBinaryBuffer;
		var bufferLength = thisNoteBinaryBuffer.length;
		var paddedBufferLength = bufferLength;
		if (paddedBufferLength % 4 > 0) paddedBufferLength += 4 - (paddedBufferLength % 4);
		totalSize += 4 + 4 + 4 + paddedBufferLength;   // 4 for note #, 4 for file size in Int32's, 4 for file size in bytes, then the padded buffer.
	}
	totalSize += 4+4+4;		// zeroed header at end of file
	//--- now create the ArrayBuffer with the total instrument file
	console.log("Building SF_" + thisNum + ":  the instrument " + thisInstrument + "... size of " + totalSize + " bytes...");
	var AB = new ArrayBuffer(totalSize);
	console.log("Array buffer is " + ArrayBuffer.byteLength + " bytes long");
	var Uint32View = new Uint32Array(AB);
	var ByteView = new Uint8Array(AB);
	console.log("Byte view is " + ByteView.length + " bytes long");
	ByteView.fill(0,0,ByteView.length);		// zero the buffer
	var fileSig = "1BSF"; for (var i = 0; i < fileSig.length; i++) ByteView[i] = fileSig.charCodeAt(i);  // store signature in first 32-bit word
	var wordPtr = 1;	// where to start writing binary words.
	for (thisNote in theseNotes) {
		thisNoteBuffer = theseNotes[thisNote];
		thisNoteNumber = keyToNote[thisNote];
		var bufferLength = thisNoteBuffer.length;
		var paddedBufferLength = bufferLength;
		if (paddedBufferLength % 4 > 0) paddedBufferLength += 4 - (paddedBufferLength % 4);
		Uint32View[wordPtr] = thisNoteNumber; wordPtr++;
		Uint32View[wordPtr] = paddedBufferLength >> 2;   wordPtr++; // (divide by 4-- second word of file is padded length in words)
		Uint32View[wordPtr] = bufferLength; wordPtr++;  // then exact length in bytes
		var thisByteAddr = wordPtr << 2;
		ByteView.set(thisNoteBuffer,thisByteAddr); wordPtr += paddedBufferLength>>2;
	}
	//--- now we have the whole binary contents of the file.  So we write it to disk.
	console.log("Writing to SF_" + thisNum + ":  the instrument " + thisInstrument + "...");
	fd = fs.writeFileSync("bsoundfonts_new/SF_" + thisNum + ".BIN", ByteView);
	//--- ^ synchronous would be bad in web serving, but for command line it's faster and easier!
}
