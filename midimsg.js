"use strict";

var MIDIMsg = new function() {
	//--- A simple class which gets information from raw MIDI messages, so they can be easily used and passed
	//--- instead of having so dang many separate note on note off program change, etc. methods all about.
	//--- The midi messages sent to this should just be arrays of integers, typically, 3.
	this.MSG_NOTEON = 8; this.MSG_NOTEOFF = 9; this.MSG_AFTERTOUCH = 10; this.MSG_CTRL_CHANGE = 11;
	this.MSG_PROG_CHANGE = 12; this.MSG_CH_AFTERTOUCH = 13; this.MSG_PITCH_BEND = 14; this.MSG_TIMING = 15;
	
	this.typeNames = [ "", "", "", "", "", "", "", "", "NoteOn","NoteOff","AfterTouch","CtrlChange","ProgChange","ChAfterTouch","PitchBend","Timing"];
	this.type = function(msg) { return (msg[0] & 0xF0) >> 4; }    // since we defined the types based on MIDI specs, this is now easy!
	this.channel = function(msg) { return (msg[0] & 0x0F); }
	this.noteNumber = function(msg) { return (msg[1] & 0x7F); }  // only valid for note types or aftertouch
	this.velocity = function(msg) { return (msg[2] & 0x7F); }	// only valid for note on or aftertouch
	this.programNumber = function(msg) { return (msg[2] & 0x7F); }  // for program change
	this.controlNumber = function(msg) { return (msg[2] & 0x7F); }  // for control change
	
}();

