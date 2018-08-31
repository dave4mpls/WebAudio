//
//	Node.js program that reads all the soundfont files from MIDI.js to make corresponding binary ones to use as Quality Level 2 in my adapted Tiny Synth.
//	It won't be as tiny with a soundfont of course, but I can have the best sounds, by combining the sound font with the release envelope feature.
//

var fs = require('fs');
var atob = require('atob');

console.log("Including soundfont files");

eval(fs.readFileSync('oggsoundfonts/accordion-ogg.js')+'');
eval(fs.readFileSync('oggsoundfonts/acoustic_bass-ogg.js')+'');
eval(fs.readFileSync('oggsoundfonts/acoustic_grand_piano-ogg.js')+'');
eval(fs.readFileSync('oggsoundfonts/acoustic_guitar_nylon-ogg.js')+'');
eval(fs.readFileSync('oggsoundfonts/acoustic_guitar_steel-ogg.js')+'');
eval(fs.readFileSync('oggsoundfonts/agogo-ogg.js')+'');
eval(fs.readFileSync('oggsoundfonts/alto_sax-ogg.js')+'');
eval(fs.readFileSync('oggsoundfonts/applause-ogg.js')+'');
eval(fs.readFileSync('oggsoundfonts/bagpipe-ogg.js')+'');
eval(fs.readFileSync('oggsoundfonts/banjo-ogg.js')+'');
eval(fs.readFileSync('oggsoundfonts/baritone_sax-ogg.js')+'');
eval(fs.readFileSync('oggsoundfonts/bassoon-ogg.js')+'');
eval(fs.readFileSync('oggsoundfonts/bird_tweet-ogg.js')+'');
eval(fs.readFileSync('oggsoundfonts/blown_bottle-ogg.js')+'');
eval(fs.readFileSync('oggsoundfonts/brass_section-ogg.js')+'');
eval(fs.readFileSync('oggsoundfonts/breath_noise-ogg.js')+'');
eval(fs.readFileSync('oggsoundfonts/bright_acoustic_piano-ogg.js')+'');
eval(fs.readFileSync('oggsoundfonts/celesta-ogg.js')+'');
eval(fs.readFileSync('oggsoundfonts/cello-ogg.js')+'');
eval(fs.readFileSync('oggsoundfonts/choir_aahs-ogg.js')+'');
eval(fs.readFileSync('oggsoundfonts/church_organ-ogg.js')+'');
eval(fs.readFileSync('oggsoundfonts/clarinet-ogg.js')+'');
eval(fs.readFileSync('oggsoundfonts/clavinet-ogg.js')+'');
eval(fs.readFileSync('oggsoundfonts/contrabass-ogg.js')+'');
eval(fs.readFileSync('oggsoundfonts/distortion_guitar-ogg.js')+'');
eval(fs.readFileSync('oggsoundfonts/drawbar_organ-ogg.js')+'');
eval(fs.readFileSync('oggsoundfonts/drums-ogg.js')+'');
eval(fs.readFileSync('oggsoundfonts/dulcimer-ogg.js')+'');
eval(fs.readFileSync('oggsoundfonts/electric_bass_finger-ogg.js')+'');
eval(fs.readFileSync('oggsoundfonts/electric_bass_pick-ogg.js')+'');
eval(fs.readFileSync('oggsoundfonts/electric_grand_piano-ogg.js')+'');
eval(fs.readFileSync('oggsoundfonts/electric_guitar_clean-ogg.js')+'');
eval(fs.readFileSync('oggsoundfonts/electric_guitar_jazz-ogg.js')+'');
eval(fs.readFileSync('oggsoundfonts/electric_guitar_muted-ogg.js')+'');
eval(fs.readFileSync('oggsoundfonts/electric_piano_1-ogg.js')+'');
eval(fs.readFileSync('oggsoundfonts/electric_piano_2-ogg.js')+'');
eval(fs.readFileSync('oggsoundfonts/english_horn-ogg.js')+'');
eval(fs.readFileSync('oggsoundfonts/fiddle-ogg.js')+'');
eval(fs.readFileSync('oggsoundfonts/flute-ogg.js')+'');
eval(fs.readFileSync('oggsoundfonts/french_horn-ogg.js')+'');
eval(fs.readFileSync('oggsoundfonts/fretless_bass-ogg.js')+'');
eval(fs.readFileSync('oggsoundfonts/fx_1_rain-ogg.js')+'');
eval(fs.readFileSync('oggsoundfonts/fx_2_soundtrack-ogg.js')+'');
eval(fs.readFileSync('oggsoundfonts/fx_3_crystal-ogg.js')+'');
eval(fs.readFileSync('oggsoundfonts/fx_4_atmosphere-ogg.js')+'');
eval(fs.readFileSync('oggsoundfonts/fx_5_brightness-ogg.js')+'');
eval(fs.readFileSync('oggsoundfonts/fx_6_goblins-ogg.js')+'');
eval(fs.readFileSync('oggsoundfonts/fx_7_echoes-ogg.js')+'');
eval(fs.readFileSync('oggsoundfonts/fx_8_scifi-ogg.js')+'');
eval(fs.readFileSync('oggsoundfonts/glockenspiel-ogg.js')+'');
eval(fs.readFileSync('oggsoundfonts/guitar_fret_noise-ogg.js')+'');
eval(fs.readFileSync('oggsoundfonts/guitar_harmonics-ogg.js')+'');
eval(fs.readFileSync('oggsoundfonts/gunshot-ogg.js')+'');
eval(fs.readFileSync('oggsoundfonts/harmonica-ogg.js')+'');
eval(fs.readFileSync('oggsoundfonts/harpsichord-ogg.js')+'');
eval(fs.readFileSync('oggsoundfonts/helicopter-ogg.js')+'');
eval(fs.readFileSync('oggsoundfonts/honkytonk_piano-ogg.js')+'');
eval(fs.readFileSync('oggsoundfonts/kalimba-ogg.js')+'');
eval(fs.readFileSync('oggsoundfonts/koto-ogg.js')+'');
eval(fs.readFileSync('oggsoundfonts/lead_1_square-ogg.js')+'');
eval(fs.readFileSync('oggsoundfonts/lead_2_sawtooth-ogg.js')+'');
eval(fs.readFileSync('oggsoundfonts/lead_3_calliope-ogg.js')+'');
eval(fs.readFileSync('oggsoundfonts/lead_4_chiff-ogg.js')+'');
eval(fs.readFileSync('oggsoundfonts/lead_5_charang-ogg.js')+'');
eval(fs.readFileSync('oggsoundfonts/lead_6_voice-ogg.js')+'');
eval(fs.readFileSync('oggsoundfonts/lead_7_fifths-ogg.js')+'');
eval(fs.readFileSync('oggsoundfonts/lead_8_bass__lead-ogg.js')+'');
eval(fs.readFileSync('oggsoundfonts/marimba-ogg.js')+'');
eval(fs.readFileSync('oggsoundfonts/melodic_tom-ogg.js')+'');
eval(fs.readFileSync('oggsoundfonts/music_box-ogg.js')+'');
eval(fs.readFileSync('oggsoundfonts/muted_trumpet-ogg.js')+'');
eval(fs.readFileSync('oggsoundfonts/oboe-ogg.js')+'');
eval(fs.readFileSync('oggsoundfonts/ocarina-ogg.js')+'');
eval(fs.readFileSync('oggsoundfonts/orchestral_harp-ogg.js')+'');
eval(fs.readFileSync('oggsoundfonts/orchestra_hit-ogg.js')+'');
eval(fs.readFileSync('oggsoundfonts/overdriven_guitar-ogg.js')+'');
eval(fs.readFileSync('oggsoundfonts/pad_1_new_age-ogg.js')+'');
eval(fs.readFileSync('oggsoundfonts/pad_2_warm-ogg.js')+'');
eval(fs.readFileSync('oggsoundfonts/pad_3_polysynth-ogg.js')+'');
eval(fs.readFileSync('oggsoundfonts/pad_4_choir-ogg.js')+'');
eval(fs.readFileSync('oggsoundfonts/pad_5_bowed-ogg.js')+'');
eval(fs.readFileSync('oggsoundfonts/pad_6_metallic-ogg.js')+'');
eval(fs.readFileSync('oggsoundfonts/pad_7_halo-ogg.js')+'');
eval(fs.readFileSync('oggsoundfonts/pad_8_sweep-ogg.js')+'');
eval(fs.readFileSync('oggsoundfonts/pan_flute-ogg.js')+'');
eval(fs.readFileSync('oggsoundfonts/percussive_organ-ogg.js')+'');
eval(fs.readFileSync('oggsoundfonts/piccolo-ogg.js')+'');
eval(fs.readFileSync('oggsoundfonts/pizzicato_strings-ogg.js')+'');
eval(fs.readFileSync('oggsoundfonts/recorder-ogg.js')+'');
eval(fs.readFileSync('oggsoundfonts/reed_organ-ogg.js')+'');
eval(fs.readFileSync('oggsoundfonts/reverse_cymbal-ogg.js')+'');
eval(fs.readFileSync('oggsoundfonts/rock_organ-ogg.js')+'');
eval(fs.readFileSync('oggsoundfonts/seashore-ogg.js')+'');
eval(fs.readFileSync('oggsoundfonts/shakuhachi-ogg.js')+'');
eval(fs.readFileSync('oggsoundfonts/shamisen-ogg.js')+'');
eval(fs.readFileSync('oggsoundfonts/shanai-ogg.js')+'');
eval(fs.readFileSync('oggsoundfonts/sitar-ogg.js')+'');
eval(fs.readFileSync('oggsoundfonts/slap_bass_1-ogg.js')+'');
eval(fs.readFileSync('oggsoundfonts/slap_bass_2-ogg.js')+'');
eval(fs.readFileSync('oggsoundfonts/soprano_sax-ogg.js')+'');
eval(fs.readFileSync('oggsoundfonts/steel_drums-ogg.js')+'');
eval(fs.readFileSync('oggsoundfonts/string_ensemble_1-ogg.js')+'');
eval(fs.readFileSync('oggsoundfonts/string_ensemble_2-ogg.js')+'');
eval(fs.readFileSync('oggsoundfonts/synth_bass_1-ogg.js')+'');
eval(fs.readFileSync('oggsoundfonts/synth_bass_2-ogg.js')+'');
eval(fs.readFileSync('oggsoundfonts/synth_brass_1-ogg.js')+'');
eval(fs.readFileSync('oggsoundfonts/synth_brass_2-ogg.js')+'');
eval(fs.readFileSync('oggsoundfonts/synth_choir-ogg.js')+'');
eval(fs.readFileSync('oggsoundfonts/synth_drum-ogg.js')+'');
eval(fs.readFileSync('oggsoundfonts/synth_strings_1-ogg.js')+'');
eval(fs.readFileSync('oggsoundfonts/synth_strings_2-ogg.js')+'');
eval(fs.readFileSync('oggsoundfonts/taiko_drum-ogg.js')+'');
eval(fs.readFileSync('oggsoundfonts/tango_accordion-ogg.js')+'');
eval(fs.readFileSync('oggsoundfonts/telephone_ring-ogg.js')+'');
eval(fs.readFileSync('oggsoundfonts/tenor_sax-ogg.js')+'');
eval(fs.readFileSync('oggsoundfonts/timpani-ogg.js')+'');
eval(fs.readFileSync('oggsoundfonts/tinkle_bell-ogg.js')+'');
eval(fs.readFileSync('oggsoundfonts/tremolo_strings-ogg.js')+'');
eval(fs.readFileSync('oggsoundfonts/trombone-ogg.js')+'');
eval(fs.readFileSync('oggsoundfonts/trumpet-ogg.js')+'');
eval(fs.readFileSync('oggsoundfonts/tuba-ogg.js')+'');
eval(fs.readFileSync('oggsoundfonts/tubular_bells-ogg.js')+'');
eval(fs.readFileSync('oggsoundfonts/vibraphone-ogg.js')+'');
eval(fs.readFileSync('oggsoundfonts/viola-ogg.js')+'');
eval(fs.readFileSync('oggsoundfonts/violin-ogg.js')+'');
eval(fs.readFileSync('oggsoundfonts/voice_oohs-ogg.js')+'');
eval(fs.readFileSync('oggsoundfonts/whistle-ogg.js')+'');
eval(fs.readFileSync('oggsoundfonts/woodblock-ogg.js')+'');
eval(fs.readFileSync('oggsoundfonts/xylophone-ogg.js')+'');

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
	fd = fs.writeFileSync("bsoundfonts_new/SFOGG_" + thisNum + ".BIN", ByteView);
	//--- ^ synchronous would be bad in web serving, but for command line it's faster and easier!
}
