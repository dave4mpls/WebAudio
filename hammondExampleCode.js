< !doctype html > < html > < head > < meta http - equiv = "Content-Type"
content = "text/html; Charset = utf-8" > < link rel = "shortcut icon"
type = "image/png"
href = "wa.png" > < meta name = "generator"
content = "PeaNut 3.0.14" > < title > Webaudio Hammond Simulation < /title><meta name='compiler' content='Esteria 1.0.0'><style>*{box-sizing:border-box}html,body{user-select:none;-moz-user-select:-moz-none;padding:0;margin:0;width:100%;height:100%;overflow:hidden;background-color:#743b10;font-family:verdana,sans-serif;font-size:8pt;white-space:nowrap;line-height:0}div.cab{padding-top:22px;padding-bottom:22px;position:fixed;width:100%;text-align:center}div.cover{background-color:#743b10;position:fixed;height:22px;top:0;left:0;width:100%;z-index:101}div.controls{font:10px arial;display:inline-block}div.controls>div{display:inline-block;vertical-align:top;position:relative}div.panel,div.dbpanel{background-color:#27221e;display:inline-block;vertical-align:top;position:relative;border:solid 1px white;border-radius:5px;margin:0 .5em;margin-top:0;z-index:100;padding:.5em}div.dbpanel{width:280px}div.trow{font:10pt arial;font-style:italic;font-weight:bold;color:white;background-color:#27221e;text-align:center;position:relative;z-index:100}div.brow{text-align:center;white-space:pre;color:white;background-color:#27221e;position:relative;z-index:100}div.rcont{display:inline-block;padding:.5em;position:relative}div.drawb{position:relative}span.part{font:8px arial;vertical-align:top}div.key_white_released{border:solid 1px black;background-color:white}div.key_white_pressed{border-left:solid 2px black;border-top:solid 2px black;border-bottom:solid 1px #ddd;background:linear-gradient(0deg,#ddd,#fff)}div.key_black_released{border:solid 1px black;background-color:#222;border-radius:0 0 6px 6px}div.key_black_pressed{border:solid 1px white;border-top:solid 1px black;border-radius:0 0 6px 6px;background:linear-gradient(0deg,#000,#222)}label{font-size:10px;vertical-align:super}button.hpressoff,button.hpresson{border-width:1px;width:60px}button.hpressoff{color:black;background-color:#AAA}button.hpresson{color:#666;background-color:white;box-shadow:0 0 4px 4px gray}div.hswhite{background-color:#505050;border:solid 1px white}div.hswhite div{border-radius:2px;background-color:#e1e1e1}img.rotatebutton{position:absolute}</style > < script > 'use strict';
var $ID = (function() {
	var a = 0;
	return function(b) {
		if (!b) b = '#_';
		a++;
		return b + a
	}
})();

function csv(a) {
	if (typeof a == "number") return String(Math.round(a)) + "px";
	if (typeof a == "string") {
		var b = a.match(/\d+/) || [''];
		return Number(b[0])
	}
};
const gel = id => {
	return document.getElementById(id)
};

function winHeight() {
	return window.innerHeight
};

function winWidth() {
	return window.innerWidth
};

function tNode(a) {
	return document.createTextNode(a)
};
const assign = (dest, source) => {
	var pn, prop, ark = keys(source);
	for (pn = 0; pn < ark.length; pn++) {
		prop = ark[pn];
		if (source[prop] instanceof Object && !(source[prop] instanceof Function)) {
			if (!dest[prop]) dest[prop] = {};
			assign(dest[prop], source[prop])
		} else {
			dest[prop] = source[prop]
		}
	}
	return dest
};
const keys = Object.keys;
const iterate = (ar, func) => {
	Array.prototype.forEach.call(ar, func)
};
const create = (nodeName, init, apply) => {
	init = init || {};
	var e = document.createElement(nodeName);
	assign(e, init);
	if (apply && apply instanceof Object) {
		if (apply.event) e.addEventListener(apply.event[0], apply.event[1]);
		if (apply.parent) apply.parent.appendChild(e)
	}
	return e
};
const setEventListeners = (element, init) => {
	var ct;
	if (init instanceof Array) {
		for (ct = 0; ct < init.length; ct += 2) {
			element.addEventListener(init[ct], init[ct + 1])
		}
	}
	return element
};
const retFalse = () => {
	return !1
};
const insertRule = (rule, asLast) => {
	var sheet, sn, rn, rl, sl = document.styleSheets.length;
	asLast ? sn = 0 : sn = sl - 1;
	sheet = document.styleSheets[sn];
	if (sheet) {
		rl = sheet.cssRules.length;
		asLast ? rn = rl : rn = 0;
		sheet.insertRule(rule, rn)
	} else throw "Error: StyleSheet not found"
};
class EventDispatch {
	constructor() {
		this.events = {}
	};
	addEventListener(a, b) {
		var c, d;
		this.testParameters(a, b);
		d = this.events;
		if (!d[a]) d[a] = [];
		c = d[a];
		if (!c.includes(b)) c.push(b);
		return !0
	};
	removeEventListener(a, b) {
		var c, d, e, f = !1;
		this.testParameters(a, b);
		e = this.events;
		c = e[a];
		if (c) {
			d = c.indexOf(b);
			if (d > -1) {
				c.splice(d, 1);
				f = !0
			}
		}
		return f
	};
	dispatchEvent(a) {
		var b, c = this.events,
			d = !1;
		b = c[a.type];
		if (b) {
			b.forEach(e => {
				e(a)
			});
			d = !0
		}
		return d
	};
	testParameters(a, b) {
		if (!(a || typeof a == 'string')) throw "Illegal Event Type";
		if (b && !(b instanceof Function)) throw "Illegal Event Handler"
	}
}
(function() {
	var a = null;

	function b() {
		insertRule(".slidebutton{border-radius: 2px;	box-shadow: 2px 2px 2px #808080}");
		insertRule(".sliderlabel{border:none; background-color:#444;color:#ff8;width:20px;font:9px arial;padding:1px;padding-left:2px;]");
		window.removeEventListener('load', b)
	}

	function c(d, e) {
		this.set(d, e)
	};
	c.prototype.set = function(d, e) {
		if (d instanceof Object) {
			Object.assign(this, d)
		} else {
			this.x = d || 0;
			this.y = e || 0
		}
		return this
	};
	c.prototype.add = function(d, e) {
		if (d instanceof Object) {
			this.x += d.x || 0;
			this.y += d.y || 0
		} else {
			this.x += d || 0;
			this.y += e || 0
		}
		return this
	};
	class cDragObject {
		constructor(f, d, e) {
			this.element = null;
			this.dragX = 0;
			this.dragY = 0;
			this.posX = 0;
			this.posY = 0;
			this.grip = !1;
			if (arguments.length) {
				this.element = f;
				var g = this.element;
				if (g) {
					setEventListeners(g, ['mousedown', this.start, 'dragstart', retFalse]);
					g.owner = this;
					if (d || e) this.moveTo(d, e)
				}
			}
		};
		zIndex(h) {
			if (h) this.element.style.zIndex = h;
			return this.element.style.zIndex
		};
		moveTo(i, j) {
			var d, e, k;
			if (i instanceof c) {
				d = i.x;
				e = i.y
			} else {
				d = i;
				e = j
			}
			k = this.element;
			if (k) {
				k.style.left = csv(d);
				k.style.top = csv(e);
				this.posX = d;
				this.posY = e
			}
		};
		close() {
			if (this.element) {
				this.element.parentElement.removeChild(this.element);
				this.element = null
			}
		};
		start(l) {
			var m = l.target.owner,
				g;
			if (!m.grip && l.button == 0) {
				g = m.element;
				if (g.zpos) g.style.zIndex = g.zpos.m;
				m.dragX = l.clientX + scrollX - g.offsetLeft;
				m.dragY = l.clientY + scrollY - g.offsetTop;
				document.addEventListener('mousemove', m.handler);
				document.addEventListener('mouseup', m.stop);
				a = m;
				m.grip = !0
			}
		};
		stop(l) {
			var m = a,
				g;
			if (m && m.grip) {
				g = m.element;
				if (g.zpos) g.style.zIndex = g.zpos.s;
				document.removeEventListener('mousemove', m.handler);
				document.removeEventListener('mouseup', m.stop);
				a = null;
				m.grip = !1
			}
		};
		handler(l) {
			var m = a;
			if (m && m.grip) {
				m.moveTo(l.clientX + scrollX - m.dragX, l.clientY + scrollY - m.dragY)
			}
			return !1
		}
	}
	class cSliderButton extends cDragObject {
		constructor(n) {
			var o, p, q;
			n = n || {};
			if (n.button) {
				if (typeof n.button == 'string') {
					o = new Image;
					o.src = n.button
				} else o = n.button
			} else {
				o = create('div')
			}
			super(o);
			Object.defineProperty(o, 'disabled', {
				configurable: !0,
				get: function() {
					return this.owner.disabled
				},
				set: function(r) {
					this.owner.disabled = r
				}
			});
			Object.assign(this, {
				minVal: 0,
				maxVal: 100,
				actVal: 0,
				Val: 0,
				saveVal: 0,
				Log: 0,
				length: 100,
				button: null,
				buttonWidth: 20,
				buttonHeight: 20,
				buttonColor: "	#444",
				groove: null,
				grooveWidth: 2,
				grooveColor: "#000",
				x: 0,
				y: 0,
				onchange: null,
				label: null,
				labelPosition: "bottom",
				decimals: 0,
				labelMargin: 6,
				disabled: !1,
				parent: document.body
			}, n);
			p = create('div', {
				className: 'groove'
			});
			this.parent.appendChild(p);
			this.groove = p;
			p.owner = this;
			if (this.label) {
				if (!(this.label instanceof Element)) {
					q = create('div', {
						className: 'sliderlabel',
						style: {
							position: 'absolute',
							left: '-10px'
						}
					});
					p.appendChild(q);
					this.label = q
				}
				this.label.owner = this
			}
			o.className = "slidebutton";
			o.style.cursor = "pointer";
			p.appendChild(o);
			this.button = o;
			this.make()
		};
		save() {
			this.saveVal = this.value
		};
		restore() {
			this.value = this.saveVal
		};
		moveTo(d, e) {
			var r, s, t, u, v, w;
			if (e < 0) e = 0;
			if (e > this.length) e = this.length;
			this.y = e;
			u = this.length - e;
			v = this.maxVal - this.minVal;
			w = v / this.length;
			t = this.Log;
			if (t) {
				s = this.length * (Math.pow(t, u / this.length) - 1) / (t - 1);
				s = s * w + this.minVal
			} else {
				s = u / this.length * v + this.minVal
			}
			this.value = s
		};
		get value() {
			return Math.round(this.actVal * Math.pow(10, this.decimals)) / Math.pow(10, this.decimals)
		};
		set value(r) {
			var u, t, v, w;
			if (arguments.length) {
				if (r < this.minVal) r = this.minVal;
				if (r > this.maxVal) r = this.maxVal;
				this.lastVal = this.actVal;
				this.actVal = r;
				t = this.Log;
				v = this.maxVal - this.minVal;
				w = this.length / v;
				if (t) {
					u = (v * Math.log(((t - 1) * (r - this.minVal)) / v + 1)) / Math.log(t);
					u *= w
				} else {
					u = (r - this.minVal) * w
				}
				u = this.length - u;
				this.button.style.top = csv(u);
				if (this.onchange && this.lastVal != r) this.onchange(this);
				if (this.label) this.label.innerText = String(this.value)
			}
		};
		start(l) {
			var m = l.target.owner;
			if (!m.disabled && !m.grip) {
				super.start(l);
				if (m.onstart) m.onstart(m);
				return !1
			}
		};
		stop(l) {
			var m = a;
			if (m && m.grip) {
				super.stop(l);
				if (m.onstop) m.onstop(m)
			}
		};
		wheelHandler(l) {
			var x = l.target.owner,
				y = l.deltaY;
			if (!x) return;
			var z = 1 / Math.pow(10, x.decimals);
			if (y > 0) z = -z;
			x.value = x.value + z;
			if (x.onstop) x.onstop();
			l.preventDefault()
		};
		make() {
			var p = this.groove,
				aa = p.style;
			p.addEventListener('wheel', this.wheelHandler);
			aa.width = csv(this.grooveWidth);
			aa.height = csv(this.length + this.buttonHeight);
			aa.backgroundColor = this.grooveColor;
			if (this.x || this.y) {
				aa.position = 'absolute';
				aa.left = csv(this.x - this.grooveWidth / 2);
				aa.top = csv(this.y)
			}
			var ab = this.button.style;
			ab.width = csv(this.buttonWidth);
			ab.height = csv(this.buttonHeight);
			ab.backgroundColor = this.buttonColor;
			ab.position = 'absolute';
			ab.left = csv(this.grooveWidth - this.buttonWidth >> 1);
			this.value = this.actVal;
			if (this.label) {
				var q = this.label;
				this.labelPosition == 'top' ? q.style.top = csv(-(this.buttonHeight + this.label.offsetHeight + this.labelMargin)) : q.style.top = csv(this.length + this.buttonHeight + this.labelMargin)
			}
		}
	}
	window.addEventListener('load', b);
	window.cDragObject = cDragObject;
	window.cSliderButton = cSliderButton
})();
(function() {
	function a() {
		ao("button.capbut {width:24px; height:20px; margin-top:-1px; float:right; cursor:pointer; border-width:1px; border-color:inherit; background-repeat: no-repeat; background-position: center;	background-color: transparent; border-color:inherit; background-origin: content-box; background-size: auto}");
		ao("div.win_body{border:outset 2px; background-color:#7080a0; border-color:#7080a0; color:white;  box-shadow:8px 8px 4px #404040; -webkit-box-shadow:8px 8px 4px #404040; border-radius:10px; -webkit-border-radius:10px; cursor:default; white-space:nowrap; overflow:hidden}");
		ao("div.win_head{border-style: inset; border-width: 1px; padding:2px; padding-right:4px;  text-align:center; font:12px verdana; font-weight:bold; color:#efefe8; text-shadow: black 1px 1px; height:24px; border-radius:4px 4px 0px 0px; -webkit-border-radius:6px 6px 0px 0px; width:100%; line-height:1.5;	white-space:nowrap; overflow:hidden}");
		ao("div.win_status{border-style: inset; border-width: 1px; padding:2px; text-align:center; font:12px verdana; font-weight:bold; text-shadow: black 1px 1px; height:24px; border-radius:0px 0px 4px 4px; -webkit-border-radius:0px 0px 4px 4px; width:100%; line-height:1.5; white-space:nowrap; overflow:hidden}");
		ao("div.win_client{background-color:#eee; color:black; border:inset 2px; border-radius:0px 0px 6px 6px; -webkit-border-radius:0px 0px 6px 6px; width:100%; overflow:auto; cursor:default}");
		ao("div.win_head, div.win_status{ background-color: inherit; border-color: inherit;-moz-user-select: none}");
		ao("div.win_head, div.win_client, div.win_status{margin: auto;");
		ao("div.win_body, div.win_body > *{ box-sizing: border-box}");
		window.removeEventListener('load', a)
	}
	window.addEventListener('load', a);
	var b = Symbol(),
		c = null,
		d = null,
		e = !1,
		f = !1,
		g = 0,
		h = 0,
		i, j = "",
		k = null,
		l = !1;
	const m = {
		"l": "ew-resize",
		"r": "ew-resize",
		"b": "ns-resize",
		"rb": "nwse-resize",
		"lb": "nesw-resize"
	};
	const n = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAQCAYAAAAWGF8bAAAAIUlEQVQ4jWNgoBH4TyVMewMp9eGogaMGjgwDB29ephoAANKvb5FNxQyNAAAAAElFTkSuQmCC";
	const o = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAQCAYAAAAWGF8bAAAAH0lEQVQ4jWNgoBFYysDA8J9CvJSmBo6CUTAKRgEKAAB4IiJ1a0mkPQAAAABJRU5ErkJggg==";
	const p = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAQCAYAAAAWGF8bAAAAgUlEQVQ4je3RoQ6AMAwE0JOVtZNI/v8bsMjJydnJyUPAYIEtkOIIl1Rd8tK0wB+vjrM7xquy7qdhrDrHBLBn7YkA6wkiLFgQYQSYAHLF7sEW6tXZsR76CisJohfQjNU3a93UjCWA+Q3a+6Zp0yDKvCFsPCCduvzgnmzMXW970jeyACLTplj9mRoPAAAAAElFTkSuQmCC";
	const q = ['focus', 'open', 'close', 'move', 'resize', 'maximize', 'minimize', 'zindex'];

	function r(s) {
		var t;
		if (s) {
			t = s.bodyElement.style.zIndex;
			s.bodyElement.style.zIndex = t + 1;
			var u = am('div', {
				style: {
					width: '100%',
					height: '100%',
					zIndex: t,
					backgroundColor: '#000',
					opacity: '0.5',
					position: 'relative'
				}
			});
			document.body.appendChild(u);
			k = u
		}
	}

	function v() {
		if (k) {
			document.body.removeChild(k);
			k = null
		}
	}

	function w(x, y) {
		Array.prototype.forEach.call(x, y)
	}

	function z(aa) {
		var ab = aa.target.owner;
		if (ab instanceof cWindow) ab.dispatchEvent(aa)
	}

	function ac(ab, aa) {
		if (typeof aa == 'string') {
			aa = new Event(aa, {
				cancelable: !0,
				bubbles: !0
			})
		}
		if (aa.target != ab) {
			Object.defineProperty(aa, 'target', {
				configurable: !0,
				get: function() {
					return ab
				}
			});
			Object.defineProperty(aa, 'currentTarget', {
				configurable: !0,
				get: function() {
					return ab
				}
			})
		}
		return aa
	}

	function ad(ae) {
		throw "Error: " + ae
	}

	function af(ag, ah) {
		if (!(ag || typeof ag == 'string')) ad("Illegal Event Type");
		if (ah && !(ah instanceof Function)) ad("Illegal Event Handler")
	}
	if (!window.assign) {
		var ai = (dest, source) => {
			var aj, ak, al = Object.keys(source);
			for (aj = 0; aj < al.length; aj++) {
				ak = al[aj];
				if (source[ak] instanceof Object && !(source[ak] instanceof Function)) {
					if (!dest[ak]) dest[ak] = {};
					ai(dest[ak], source[ak])
				} else {
					dest[ak] = source[ak]
				}
			}
			return dest
		}
	}
	if (!window.create) {
		var am = (nodeName, cc, apply) => {
			cc = cc || {};
			var an = document.createElement(nodeName);
			ai(an, cc);
			if (apply && apply instanceof Object) {
				if (apply.event) an.addEventListener(apply.event[0], apply.event[1]);
				if (apply.parent) apply.parent.appendChild(an)
			}
			return an
		}
	}
	if (!window.insertRule) {
		var ao = (rule, asLast) => {
			var ap, aq, ar, as;
			asLast ? aq = 0 : aq = document.styleSheets.length - 1;
			ap = document.styleSheets[aq];
			if (ap) {
				as = ap.cssRules.length;
				asLast ? ar = as : ar = 0;
				ap.insertRule(rule, ar)
			}
		}
	}

	function at(au) {
		if (au == undefined) return au;
		if (isNaN(Number(au))) {
			var x = au.match(/(\d+)px/);
			if (x) {
				return Number(x[1])
			} else {
				return au
			}
		} else {
			if (typeof au == 'string' && au == '') return au;
			else return au + 'px'
		}
		return au
	};

	function av(an) {
		var ab = this.owner,
			aw = ab.focus;
		ab.focus = !0;
		if (!aw && this.focus && an.target == ab.headElement) {
			var ax = new MouseEvent('mousedown', {
				clientX: an.clientX,
				clientY: an.clientY
			});
			ab.headElement.dispatchEvent(ax)
		}
	}

	function ay(az) {
		var ba = c,
			bb = az.clientX,
			bc = az.clientY;
		if (d) d.mmHandler(az);
		if (!l) {
			if (ba && e) {
				ba.left = bb - g;
				ba.top = bc + ba.domParent.scrollTop - h
			}
			if (ba && f) {
				l = !0;
				if (j[0] == 'r') ba.width = bb - ba.left - 2;
				if (j[0] == 'l') {
					ba.width = ba.left + ba.width - bb + 2;
					if (ba.width > 20) ba.left = bb - 2
				}
				if (j[0] == 'b' || j[1] == 'b') ba.height = bc - ba.top - ba[b].barSize() + 2;
				l = !1
			}
		}
	}

	function bd(az) {
		if (az.button == 0) bg(az)
	}

	function be(az) {
		if (az.button == 0) {
			if (f) {
				j = "";
				bn();
				f = !1
			}
			e = !1;
			bo.enable();
			document.body.style.MozUserSelect = 'auto'
		}
	}

	function bf(az) {
		var an = az.target,
			ba = an.owner;
		if (ba.focus && !e && an.className == 'win_head' && az.button == 0) {
			e = !0;
			g = az.clientX - ba.left;
			h = az.clientY + ba.domParent.scrollTop - ba.top;
			c = ba
		}
		return !1
	}

	function bg(az) {
		if (j && !f) {
			var ba = d;
			if (!ba.disabled && az.button == 0) {
				bo.disable();
				bh(m[j]);
				f = !0;
				c = ba;
				document.body.style.MozUserSelect = 'none'
			}
		}
		return !1
	}

	function bh(bi) {
		var bj = document.body.querySelectorAll('*');
		var bk = document.body,
			bl = bj.length,
			bm;
		if (!(typeof bk.tmpCursor == 'string')) {
			bk.tmpCursor = bk.style.cursor;
			bk.style.cursor = bi;
			while (bl--) {
				bm = bj[bl];
				if (bm.tmpCursor) return;
				bm.tmpCursor = bm.style.cursor;
				bm.style.cursor = bi
			}
		}
	}

	function bn() {
		var bj = document.body.querySelectorAll('*');
		var bk = document.body,
			bl = bj.length,
			bm;
		if (typeof bk.tmpCursor == 'string') {
			bk.style.cursor = bk.tmpCursor;
			delete bk.tmpCursor;
			while (bl--) {
				bm = bj[bl];
				bm.style.cursor = bm.tmpCursor;
				delete bm.tmpCursor
			}
		}
	}
	var bo = {
		register: function(ab) {
			if (ab) this.stack.push(ab);
			if (d && d.option.modal) ab.enable(!1, 7);
			this.restack()
		},
		getentry: function(ab) {
			var bp = -1,
				bq;
			for (bq = 0; bq < this.stack.length; bq++) {
				if (this.stack[bq] === ab) {
					bp = bq;
					break
				}
			}
			return bp
		},
		remove: function(ab) {
			var bp = this.getentry(ab),
				br = ab.option.modal;
			if (bp >= 0) {
				this.stack.splice(bp, 1);
				if (ab == d) d = null;
				if (br) {
					this.stack.forEach(ba => {
						ba.enable(!0);
						if (!ba.focus) ba.enable(!1, 1)
					});
					this.moveFocus()
				}
			}
		},
		moveFocus(ab) {
			var bq, ba;
			for (bq = 0; bq < this.stack.length; bq++) {
				ba = this.stack[bq];
				if (ba != ab) {
					ba.focus = !0;
					if (ba.focus) break
				}
			}
		},
		requestFocus: function(ab) {
			if (ab == d) return !0;
			if (this.zEnable && !(d && d.option.modal)) {
				var bp = this.getentry(ab);
				if (bp >= 0) {
					var bs = this.stack.splice(bp, 1);
					this.stack.unshift(bs[0]);
					this.disable();
					if (d) d.focus = !1;
					this.enable();
					this.restack();
					d = ab;
					if (d.option.modal) this.disableWindows(d);
					return !0
				}
			}
			return !1
		},
		removeFocus(ab) {
			var bl = this.stack.length,
				bq, ba;
			if (ab == d && !ab.option.modal) {
				if (this.zEnable) {
					d = null;
					this.moveFocus(ab)
				}
				return !0
			}
			return !1
		},
		disableWindows(ab) {
			this.stack.forEach(ba => {
				if (ba != ab) ba.enable(!1, 7)
			})
		},
		restack: function() {
			var bq = this.stack.length,
				bp = this.firstindex;
			while (bq--) {
				this.stack[bq].zIndex = bp++
			}
		},
		closeAll: function() {
			var bq = this.stack.length;
			while (bq) this.stack[--bq].open = !1
		},
		disable() {
			this.zEnable = !1
		},
		enable() {
			this.zEnable = !0
		},
		firstindex: 200,
		zEnable: !0,
		stack: []
	};
	class cWinReg {
		constructor(bt) {
			this.window = bt;
			Object.assign(this, {
				closebutton: null,
				minbutton: null,
				maxbutton: null,
				minState: !1,
				maxState: !1,
				isOpen: !1,
				hasFocus: !1,
				isModal: !1,
				disabled: !1,
				capText: null,
				pixelWidth: 0,
				temp: {},
				events: {},
				options: {
					persistent: !0,
					drag: !1,
					resize: !1,
					min: !1,
					max: !1,
					status: !1
				},
				metrics: {
					left: 0,
					top: 0,
					width: 0,
					height: 0
				},
				minPos: {
					left: 0,
					top: 0
				}
			});
			var bu = this,
				bv = this.options,
				ab = this.window;
			this.option = {
				get modal() {
					return bu.isModal
				},
				get drag() {
					return bv.drag
				},
				set drag(u) {
					if (u != bv.drag) {
						if (u) {
							ab.headElement.addEventListener('mousedown', bf);
							ab.headElement.style.cursor = "move";
							bv.drag = !0
						} else {
							ab.headElement.removeEventListener('mousedown', bf);
							ab.headElement.style.cursor = "default";
							bv.drag = !1
						}
					}
				},
				get resize() {
					return bv.resize
				},
				set resize(bw) {
					bv.resize = bw
				},
				get max() {
					return bv.max
				},
				set max(bx) {
					if (bx != bv.max) {
						if (bx) {
							if (bv.min) bu.minButton.destroy();
							bu.maxButton = new cWinMaxButton({
								parent: ab.headElement,
								parentWin: ab
							});
							if (bv.min) bu.minButton = new cWinMinButton({
								parent: ab.headElement,
								parentWin: ab
							})
						} else {
							bu.maxButton.destroy();
							bu.maxButton = null;
							if (bv.min) {
								bu.minButton.destroy();
								bu.minButton = new cWinToggleButton({
									parent: ab.headElement,
									parentWin: ab
								})
							}
						}
						bv.max = bx
					}
				},
				get min() {
					return bv.min
				},
				set min(bx) {
					if (bx != bv.min) {
						if (bx) {
							!bv.max ? bu.minButton = new cWinToggleButton({
								parent: ab.headElement,
								parentWin: ab
							}) : bu.minButton = new cWinMinButton({
								parent: ab.headElement,
								parentWin: ab
							})
						} else {
							bu.minButton.destroy();
							bu.minButton = null
						}
						bv.min = bx
					}
				},
				get status() {
					return !!ab.statusElement && bv.status
				},
				set status(ae) {
					if (ae != bv.status) {
						if (ae) {
							if (!ab.statusElement) {
								var by = am('div', {
									className: 'win_status'
								});
								by.owner = ab;
								ab.bodyElement.appendChild(by);
								ab.statusElement = by
							}
							ab.statusElement.style.display = 'block';
							ab.clientElement.style.borderRadius = "0px";
							ab.clientElement.style.webkitBorderRadius = "0px"
						} else {
							ab.statusElement.style.display = 'none';
							ab.clientElement.style.borderRadius = "4px";
							ab.clientElement.style.webkitBorderRadius = "4px"
						}
						bv.status = ae
					}
				},
				get persistent() {
					return bv.persistent
				},
				set persistent(bz) {
					bv.persistent = bz
				}
			}
		};
		clientRect() {
			var an = this.window.bodyElement;
			return {
				width: an.offsetWidth,
				height: an.offsetHeight,
				left: an.offsetLeft,
				top: an.offsetTop + this.window.clientElement.offsetTop,
				bottom: an.offsetTop + an.offsetHeight,
				right: an.offsetLeft + an.offsetWidth
			}
		};
		barSize() {
			var ba = this.window;
			return ba.bodyElement.offsetHeight - ba.clientElement.offsetHeight
		};
		saveWinState() {
			var ba = this.window;
			Object.assign(this.metrics, {
				left: ba.left,
				top: ba.top,
				width: at(ba.clientElement.style.width),
				height: at(ba.clientElement.style.height)
			});
			this.pixelWidth = ba.width
		};
		resetWinState() {
			this.window.assign(this.metrics)
		};
		saveMinPos() {
			var ba = this.window;
			Object.assign(this.minPos, {
				left: ba.left,
				top: ba.top
			})
		};
		resetMinPos() {
			this.window.assign(this.minPos)
		}
	}
	class cWinButton {
		constructor(ca) {
			if (!ca) ca = {};
			Object.assign(this, {
				Image: null,
				parent: null,
				parentWin: null,
				tagName: 'button'
			}, ca);
			var an = am(this.tagName, {
				className: 'capbut'
			});
			an.addEventListener('click', az => {
				az.target.button.onclick(az)
			});
			an.addEventListener('dragstart', az => {
				az.preventDefault()
			});
			an.button = this;
			an.owner = this.parentWin;
			this.bodyElement = an;
			if (this.parent) {
				var cb = this.parentWin.caption;
				this.parentWin.caption = '';
				this.parent.appendChild(an);
				this.parentWin.caption = cb
			}
		};
		onclick(az) {};
		destroy() {
			this.parent.removeChild(this.bodyElement)
		}
	}
	class cWinCloseButton extends cWinButton {
		constructor(ca) {
			super(ca);
			this.Image = p;
			this.bodyElement.style.backgroundImage = 'url(' + this.Image + ')'
		};
		onclick() {
			this.parentWin.open = !1
		}
	}
	class cWinMaxButton extends cWinButton {
		constructor(ca) {
			super(ca);
			this.Image = n;
			this.bodyElement.style.backgroundImage = 'url(' + this.Image + ')'
		};
		onclick() {
			this.parentWin.max()
		}
	}
	class cWinMinButton extends cWinButton {
		constructor(ca) {
			super(ca);
			this.Image = o;
			this.bodyElement.style.backgroundImage = 'url(' + this.Image + ')'
		};
		onclick() {
			this.parentWin.min()
		}
	}
	class cWinToggleButton extends cWinButton {
		constructor(ca) {
			super(ca);
			this.minImage = o;
			this.maxImage = n;
			this.bodyElement.style.backgroundImage = 'url(' + this.minImage + ')'
		};
		onclick() {
			var ba = this.parentWin,
				bw = ba[b];
			if (bw.minState) {
				this.bodyElement.style.backgroundImage = 'url(' + this.minImage + ')';
				ba.max()
			} else {
				this.bodyElement.style.backgroundImage = 'url(' + this.maxImage + ')';
				ba.min()
			}
		}
	}
	class cWindow {
		constructor(cc) {
			var ab, cd, ce;
			if (!cc) cc = {};
			if (!(cc instanceof Object)) throw "Invalid Init parameter, expected Object";
			Object.assign(this, {
				bodyElement: null,
				headElement: null,
				clientElement: null,
				contentElement: null,
				statusElement: null,
				domParent: cc.domParent || document.body,
				clientTag: cc.clientTag || "DIV",
				onopen: null,
				onclose: null,
				onmove: null,
				onresize: null,
				onzindex: null,
				onfocus: null,
				onminimize: null,
				onmaximize: null
			});
			this[b] = new cWinReg(this);
			ab = am('div', {
				className: 'win_body'
			});
			cd = am('div', {
				className: 'win_head'
			}, {
				parent: ab
			});
			this.headElement = cd;
			this[b].closebutton = new cWinCloseButton({
				parent: cd,
				parentWin: this
			});
			ce = am(this.clientTag, {
				className: 'win_client'
			}, {
				parent: ab
			});
			this.clientElement = ce;
			this.contentElement = ce;
			ab.owner = cd.owner = ce.owner = this;
			this.domParent.appendChild(ab);
			this.bodyElement = ab;
			this.position = 'absolute';
			ab.style.display = "none";
			if (!cc.width) cc.width = 500;
			if (!cc.height) cc.height = 290;
			if (cc.modal) {
				this[b].isModal = !0;
				delete cc.modal
			}
			this.bodyElement.addEventListener('mousedown', av);
			this.assign(cc)
		};
		enable(cf, cg) {
			var ch = this.bodyElement,
				ci = this[b];
			!cg ? cg = 7 : cg &= 7;

			function cj(ck) {
				if (ck.children.length) {
					w(ck.children, cx => {
						if (typeof cx.disabled == 'boolean') {
							if (cf) {
								if (typeof cx.tmpdisabled == 'boolean') {
									cx.disabled = cx.tmpdisabled;
									delete cx.tmpdisabled
								}
							} else {
								cx.tmpdisabled = cx.disabled;
								cx.disabled = !0
							}
						}
						cj(cx)
					})
				}
			}
			if (!(ci.disabled & 8)) {
				if (cf) {
					if (ci.disabled) {
						cg &= ci.disabled;
						if (cg & 4) cj(ch);
						if (cg & 2) ch.addEventListener('mousedown', av);
						if (ci.options.drag) {
							if (cg & 1) this.headElement.style.cursor = "move"
						}
						ci.disabled ^= cg
					}
				} else {
					if (cg) {
						cg = cg & (cg ^ ci.disabled);
						if (cg & 4) cj(ch);
						if (cg & 2) ch.removeEventListener('mousedown', av);
						if (cg & 1) this.headElement.style.cursor = "default";
						ci.disabled |= cg
					}
				}
			}
			return ci.disabled
		};
		dispatchEvent(aa) {
			var cl, cm, cn = !1,
				co = 'on',
				cp = !0;
			if (!(typeof aa == 'string' || aa.target == this)) {
				cp = !1
			}
			aa = ac(this, aa);
			cm = this[b].events;
			cl = cm[aa.type];
			if (cl && cl.length) {
				cl.forEach(an => {
					an.call(this, aa)
				});
				cn = !0
			}
			co += aa.type;
			if (this[co]) this[co].call(this, aa);
			delete aa.currentTarget;
			if (cp && !aa.cancelBubble) this.domParent.dispatchEvent(aa);
			return !(aa.cancelable && aa.defaultPrevented)
		};
		addEventListener(ag, ah) {
			var cl, cm;
			af(ag, ah);
			if (!(ag in q)) {
				this.bodyElement.addEventListener(ag, z)
			}
			cm = this[b].events;
			if (!cm[ag]) cm[ag] = [];
			cl = cm[ag];
			if (!cl.includes(ah)) cl.push(ah);
			return !0
		};
		removeEventListener(ag, ah) {
			var cl, bl, cm, cn = !1;
			af(ag, ah);
			cm = this[b].events;
			cl = cm[ag];
			if (cl) {
				bl = cl.length;
				while (bl--) {
					if (cl[bl] == ah) {
						cl.splice(bl, 1);
						cn = !0;
						break
					}
				}
			}
			return cn
		};
		assign(ak) {
			try {
				Object.assign(this, ak)
			} catch (an) {
				throw "Assign Error: " + an
			}
		};
		setpos(cq, cr) {
			if (cr < 0) cr = 0;
			this.left = cq;
			this.top = cr
		};
		setsize(ba, cs) {
			this.width = ba - 4;
			this.height = cs
		};
		get disabled() {
			return this[b].disabled > 7
		};
		set disabled(u) {
			if (u) {
				this.focus = !1;
				this.enable(!1);
				this[b].disabled |= 8
			} else {
				this[b].disabled &= 7;
				this.enable(!0, 6)
			}
		};
		get position() {
			return getComputedStyle(this.bodyElement).position
		};
		set position(bz) {
			var ct = this.position,
				cu, bv, cv = !0;
			if (ct != bz) {
				cu = this[b].temp;
				bv = this.option;
				if (bz == 'reset' && cu.position) bz = cu.position;
				switch (bz) {
					case 'absolute':
					case 'fixed':
						this.headElement.style.display = 'block';
						if (bv.status) this.statusElement.style.display = 'block';
						if (cu.drag) bv.drag = cu.drag;
						if (cu.resize) bv.resize = cu.resize;
						if (ct != 'absolute' && ct != 'fixed' && cu.absWidth) this.width = cu.absWidth;
						this.disabled = !1;
						break;
					case 'relative':
					case 'static':
					case 'sticky':
						if (ct == 'absolute' || ct == 'fixed') cu.absWidth = this.width;
						cu.drag = bv.drag;
						cu.resize = bv.resize;
						this.drag = !1;
						this.resize = !1;
						this.clientElement.style.width = '100%';
						this.headElement.style.display = 'none';
						if (bv.status) this.statusElement.style.display = 'none';
						this.enable(!1, 1);
						break;
					default:
						cv = !1
				}
				if (cv) {
					cu.position = this.position;
					this.bodyElement.style.position = bz
				}
			}
		};
		set width(ba) {
			if (ba < 40) ba = 40;
			var cw = this.width;
			if (cw != ba) {
				this.clientElement.style.width = at(ba);
				this.headElement.style.width = at(ba);
				if (this.statusElement) {
					this.statusElement.style.width = at(ba)
				}
				this.dispatchEvent('resize')
			}
		};
		get width() {
			if (this.open) {
				return this.clientElement.offsetWidth
			} else {
				return this[b].lastPixelWidth
			}
		};
		set height(cs) {
			if (cs < 0 || cs == 'px') cs = 0;
			var cx = this.height;
			if (cx != cs) {
				this.clientElement.style.height = at(cs);
				this.dispatchEvent('resize')
			}
		};
		get height() {
			return at(getComputedStyle(this.clientElement).height)
		};
		set left(bl) {
			var cy = this.left;
			if (!cy || cy != bl) {
				this.bodyElement.style.left = at(bl);
				this.dispatchEvent('move')
			}
		};
		get left() {
			return this.bodyElement.offsetLeft
		};
		set top(cz) {
			var bq = this.top;
			if (!bq || bq != cz) {
				this.bodyElement.style.top = at(cz);
				this.dispatchEvent('move')
			}
		};
		get top() {
			return this.bodyElement.offsetTop
		};
		get status() {
			if (this.statusElement) return this.statusElement.textcontentElement
		};
		set status(da) {
			if (this.statusElement) {
				this.statusElement.textcontentElement = da
			}
		};
		get style() {
			return this.contentElement.style
		};
		get open() {
			return this[b].isOpen
		};
		set open(db) {
			var ci = this[b];
			if (db) {
				if (!ci.isOpen) {
					bo.register(this);
					this.bodyElement.style.display = "block";
					ci.isOpen = !0;
					this.dispatchEvent('open');
					this.focus = !0;
					this[b].saveMinPos();
					if (ci.option.modal) r(this)
				}
			} else {
				if (ci.isOpen) {
					this.focus = !1;
					if (ci.option.modal) {
						ci.hasFocus = !1;
						this.dispatchEvent('lostfocus');
						v()
					}
					ci.isOpen = !1;
					bo.remove(this);
					this.dispatchEvent('close');
					if (this.option.persistent) {
						this.bodyElement.style.display = "none"
					} else {
						this.domParent.removeChild(this.bodyElement)
					}
				}
			}
		};
		clear() {
			var cb = this.contentElement;
			if (cb.value != undefined) {
				cb.value = ""
			} else {
				while (cb.firstChild) cb.removeChild(cb.firstChild)
			}
		};
		hprint(dc, ae, dd, de) {
			if (dd) this.clear();
			var u = am(dc, {
				className: de
			});
			if (ae) u.innerHTML = ae;
			return this.appendChild(u)
		};
		write(ae) {
			var cb = this.contentElement;
			if (cb.value != undefined) {
				cb.value += ae
			} else {
				var df = document.createTextNode(ae);
				this.contentElement.appendChild(df)
			}
		};
		writeln(ae) {
			this.write(ae + "\r\n")
		};
		appendChild(ck) {
			if (ck instanceof cWindow) {
				ck.domParent = this.contentElement;
				ck = ck.bodyElement
			}
			if (typeof ck == 'string') {
				ck = am(ck)
			}
			this.contentElement.appendChild(ck);
			return ck
		};
		get caption() {
			if (this[b].capText) return this[b].capText.textContent;
			else return ""
		};
		set caption(cb) {
			var ci = this[b];
			if (ci.capText) this.headElement.removeChild(ci.capText);
			ci.capText = document.createTextNode(cb);
			this.headElement.appendChild(ci.capText)
		};
		get padding() {
			return at(this.clientElement.style.padding)
		};
		set padding(bz) {
			this.clientElement.style.padding = at(bz)
		};
		get zIndex() {
			return this.bodyElement.style.zIndex
		};
		set zIndex(bm) {
			var dg = this.zIndex;
			if (dg != bm) {
				this.bodyElement.style.zIndex = bm;
				this.dispatchEvent('zindex')
			}
		};
		get color() {
			return getComputedStyle(this.bodyElement).color
		};
		set color(cb) {
			this.bodyElement.style.color = cb
		};
		get backgroundColor() {
			return getComputedStyle(this.bodyElement).backgroundColor
		};
		set backgroundColor(cb) {
			this.bodyElement.style.backgroundColor = cb;
			this.bodyElement.style.borderColor = cb
		};
		onTop() {
			this.focus = !0
		};
		get focus() {
			return this[b].hasFocus
		};
		set focus(dh) {
			var ci = this[b],
				bv = ci.option;
			if (dh) {
				if (this.open && !this.focus && ci.disabled < 4) {
					if (bo.requestFocus(this)) {
						this.enable(!0);
						ci.hasFocus = !0;
						this.dispatchEvent('focus')
					}
				}
			} else {
				if (this.open && this.focus && !bv.modal) {
					if (bo.removeFocus(this)) {
						this.enable(!1, 1);
						ci.hasFocus = !1;
						this.dispatchEvent('lostfocus')
					}
				}
			}
		};
		set option(ck) {
			if (ck instanceof Object) {
				Object.assign(this[b].option, ck)
			}
		};
		get option() {
			return this[b].option
		};
		set style(ck) {
			if (ck instanceof Object) {
				Object.assign(this.contentElement.style, ck)
			}
		};
		get style() {
			return this.contentElement.style
		};
		get winState() {
			var ci = this[b];
			if (ci.minState) return 'min';
			if (ci.maxState) return 'max';
			return 'modal'
		};
		test() {
			return this[b].barSize()
		};
		get syReg() {
			return this[b]
		};
		max() {
			var ci = this[b],
				di = ci.maxState,
				dj = ci.minState,
				dk = !di && !dj;
			if (this.open) {
				if (dj && di) ci.saveMinPos();
				if ((dj || dk) && !di) Object.assign(ci.metrics, {
					left: this.left,
					top: this.top
				});
				this.clientElement.style.display = 'block';
				if (this.option.status) {
					this.statusElement.style.display = 'block'
				}
				if (dj && di || dk) {
					if (dk) ci.saveWinState();
					if (this.option.max) {
						ci.maxState = !0;
						this.left = 0;
						this.top = 0;
						this.width = this.domParent.offsetWidth - 4;
						this.height = this.domParent.offsetHeight - ci.barSize();
						this.dispatchEvent('maximize')
					}
				} else {
					ci.resetWinState();
					ci.maxState = !1
				}
				ci.minState = !1
			}
		};
		min() {
			var ci = this[b],
				di = ci.maxState,
				dj = ci.minState,
				dk = !di && !dj;
			if (!dj && this.open) {
				if (di) {
					ci.resetWinState();
					ci.resetMinPos()
				}
				if (dk) {
					ci.saveWinState();
					this.headElement.style.width = at(ci.pixelWidth)
				}
				this.clientElement.style.display = 'none';
				if (this.option.status) {
					this.statusElement.style.display = 'none'
				}
				ci.minState = !0;
				this.dispatchEvent('minimize')
			}
		};
		mmHandler(az) {
			if (this.focus && !f && this.option.resize && !this[b].minState) {
				var dl = this[b].clientRect();
				var cq = az.clientX,
					cr = az.clientY,
					an = az.target,
					dm = i,
					dn = "";
				if (cr < (dl.bottom + 6) && cr > dl.top && cq > (dl.left - 6) && cq < (dl.right + 6)) {
					if (Math.abs(cq - dl.left) < 10) dn = 'l';
					if (Math.abs(cq - dl.right) < 10) dn = 'r';
					if (Math.abs(cr - dl.bottom) < 10) dn += 'b'
				}
				if ((!dn || dn && an != dm) && dm) {
					dm.style.cursor = dm.resCursor;
					delete dm.resCursor;
					dm = null;
					j = ""
				}
				if (dn) {
					if (an != dm) {
						an.resCursor = an.style.cursor;
						an.style.cursor = m[dn];
						dm = an
					}
					if (dn != j) {
						an.style.cursor = m[dn]
					}
					j = dn
				} else if (!f) j = "";
				i = dm
			}
		}
	};
	document.addEventListener('mousemove', ay);
	document.addEventListener('mouseup', be);
	document.addEventListener('mousedown', bd);
	window.winManager = bo;
	window.cWindow = cWindow
})();
(function(a, b) {
	if (typeof define === 'function' && define.amd) {
		define([], b)
	} else if (typeof exports === 'object') {
		module.exports = b()
	} else {
		a.reverbGen = b()
	}
})(this, function() {
	var a = {};
	a.generateReverb = function(b, c) {
		var d = b.audioContext || new AudioContext;
		var e = b.sampleRate || 44100;
		var f = b.numChannels || 2;
		var g = b.decayTime * 1.5;
		var h = Math.round(b.decayTime * e);
		var i = Math.round(g * e);
		var j = Math.round((b.fadeInTime || 0) * e);
		var k = Math.pow(1 / 1000, 1 / h);
		var l = d.createBuffer(f, i, e);
		for (var m = 0; m < f; m++) {
			var n = l.getChannelData(m);
			for (var o = 0; o < i; o++) {
				n[o] = ba() * Math.pow(k, o)
			}
			for (var o = 0; o < j; o++) {
				n[o] *= o / j
			}
		}
		ap(l, b.lpFreqStart || 0, b.lpFreqEnd || 0, b.decayTime, c)
	};
	a.generateGraph = function(p, q, r, s, t) {
		var u = document.createElement('canvas');
		u.width = q;
		u.height = r;
		var v = u.getContext('2d');
		v.fillStyle = '#000';
		v.fillRect(0, 0, u.width, u.height);
		v.fillStyle = '#fff';
		var w = q / p.length;
		var x = r / (t - s);
		for (var m = 0; m < p.length; m++) {
			v.fillRect(m * w, r - ((p[m] - s) * x), 1, 1)
		}
		return u
	};
	a.saveWavFile = function(y, z, aa) {
		var ab = 16;
		var ac = 2;
		var e = y.sampleRate;
		var f = y.numberOfChannels;
		var ad = az(y);
		var i = ad[0].length;
		var ae = 32767;
		var t = 0;
		for (var m = 0; m < f; m++) {
			for (var o = 0; o < i; o++) {
				t = Math.max(t, Math.abs(ad[m][o]))
			}
		}
		if (t) {
			ae = 32767 / t
		}
		if (aa) {
			var af = 0;
			for (var m = 0; m < f; m++) {
				for (var o = 0; o < i; o++) {
					var ag = Math.abs(Math.round(ae * ad[m][o]));
					if (ag > aa) {
						af = o
					}
				}
			}
			i = af + 1
		}
		var ah = ac * f * i;
		var ai = ah + 44;
		var aj = new ArrayBuffer(ai);
		var ak = new DataView(aj);
		ak.setUint32(0, 1179011410, !0);
		ak.setUint32(4, ai - 8, !0);
		ak.setUint32(8, 1163280727, !0);
		ak.setUint32(12, 544501094, !0);
		ak.setUint32(16, 16, !0);
		ak.setUint16(20, 1, !0);
		ak.setUint16(22, f, !0);
		ak.setUint32(24, e, !0);
		var al = f * ac;
		ak.setUint32(28, e * al, !0);
		ak.setUint16(32, al, !0);
		ak.setUint16(34, ab, !0);
		ak.setUint32(36, 1635017060, !0);
		ak.setUint32(40, ah, !0);
		for (var o = 0; o < i; o++) {
			for (var m = 0; m < f; m++) {
				ak.setInt16(44 + (o * al) + m * ac, Math.round(ae * ad[m][o]), !0)
			}
		}
		var am = new Blob([aj], {
			'type': 'audio/wav'
		});
		var an = window.URL.createObjectURL(am);
		var ao = document.createElement('a');
		ao.href = an;
		ao.download = z;
		ao.style.display = 'none';
		document.body.appendChild(ao);
		ao.click()
	};
	var ap = function(aq, ar, as, at, c) {
			if (ar == 0) {
				c(aq);
				return
			}
			var au = az(aq);
			var av = new OfflineAudioContext(aq.numberOfChannels, au[0].length, aq.sampleRate);
			var aw = av.createBufferSource();
			aw.buffer = aq;
			var ax = av.createBiquadFilter();
			ar = Math.min(ar, aq.sampleRate / 2);
			as = Math.min(as, aq.sampleRate / 2);
			ax.type = "lowpass";
			ax.Q.value = 0.0001;
			ax.frequency.setValueAtTime(ar, 0);
			ax.frequency.linearRampToValueAtTime(as, at);
			aw.connect(ax);
			ax.connect(av.destination);
			aw.start();
			av.oncomplete = function(ay) {
				aw.disconnect();
				ax.disconnect();
				c(ay.renderedBuffer)
			};
			av.startRendering();
			window.filterNode = ax
		},
		az = function(y) {
			var ad = [];
			for (var m = 0; m < y.numberOfChannels; m++) {
				ad[m] = y.getChannelData(m)
			}
			return ad
		},
		ba = function() {
			return Math.random() * 2 - 1
		};
	return a
});

function showEvents() {}
class Counter {
	constructor() {
		this.samples = 0;
		this.total = 0;
		this.displayElement = null;
		this.precision = 0
	};
	get display() {
		return this.displayElement
	};
	set display(a) {
		this.displayElement = a
	};
	add(a) {
		if (!isNaN(a)) {
			this.total += a;
			this.samples++
		}
	};
	reset() {
		this.samples = 0;
		this.total = 0
	};
	show() {
		var a = this.total / this.samples,
			b, c, d = Math.pow(10, this.precision);
		a = Math.round(a * d) / d;
		b = parseInt(a);
		c = String(a % 1 + '00000').substr(2, this.precision);
		if (c) b += '.' + c;
		if (this.displayElement) this.displayElement.value = b;
		this.reset();
		return a
	};
	get decimals() {
		return this.precision
	};
	set decimals(a) {
		this.precision = a
	}
}
class AnalyserWindow extends cWindow {
	constructor(a) {
		super(a);
		var b = create('canvas', {
			style: {
				display: 'block',
				border: 'solid 1px black',
				width: '100%',
				height: '260px'
			}
		});
		this.appendChild(b);
		this.canvas = {
			element: b,
			ctx: b.getContext("2d")
		};
		var c = create('div', {
			style: {
				width: '100%',
				height: 'auto'
			}
		});
		this.appendChild(c);
		c.innerHTML = "<div style='display:inline-block'><div class=range><input id=trigger type=range min=0 max=256 step=1 value=128><label for=trigger>Trigger</label></div><div class=range><input id=gain type=range min=0 max=100 step=1 value=50><label for=gain>Gain</label></div><div class=range><input id=timebase type=range min=1 max=16 step=0.1 value=2><label for=timebase>Timebase</label></div></div><div style='display:inline-block; vertical-align:top;margin-left:1em;'><div class=range><input id=luminance type=range min=0 max=256 step=1 value=160><label for=luminance>Luminance</label> <input id=fmeas style='width:5em;padding-left:2px;margin-left:1em'> Hz</div><div> <input id=time name=domain type=radio checked><label for=time>TIME </label><input id=frequency name=domain type=radio><label for=frequency>FREQ </label><input id=hold type=checkbox><label for=hold>Hold </label><input id=singleShot type=checkbox><label for=singleShot>Single Shot</label></div><div><input id=showdb name=dboption type=radio checked><label for=showdb>DB </label><input id=showreal name=dboption type=radio><label for=showval>Real</label></div></div>";
		this.settings = {
			domain: 'time',
			hold: !1,
			singleShot: !1,
			dboption: 'showdb',
			trigger: 128,
			gain: 50,
			timebase: 2,
			luminance: 160,
			running: !1,
			hasnode: !1,
			buffertype: 32
		};
		this.node = null;
		this.buffer = null;
		this.counter = new Counter;
		this.counter.display = gel('fmeas');
		this.counter.decimals = 1;
		c.addEventListener('change', evt => {
			var d = evt.target,
				e = d.id;
			if (d.type == 'radio') this.settings[d.name] = e;
			if (d.type == 'checkbox') this.settings[e] = d.checked;
			if (d.type == 'range') this.settings[e] = d.value;
			if (e == 'hold' || e == 'singleShot') {
				this[e] = d.checked
			}
		})
	};
	changeHandler(a) {
		var b = a.target;
		if (b.type == 'radio') this.parameters[b.name] = b.id;
		if (b.type == 'checkbox') this.parameters[b.id] = b.checked;
		if (b.type == 'range') this.parameters[b.id] = b.value
	};
	bufferInfo(a) {
		var b = 0,
			c = 0,
			d, e, f, g;
		e = a.constructor.name;
		d = a.length;
		for (f = 0; f < d; f++) {
			g = a[f];
			if (g < b) b = g;
			if (g > c) c = g
		}
		return {
			type: e,
			length: d,
			min: b,
			max: c
		}
	};
	drawBuffer(a) {
		var b = null;
		if (a) {
			if (this.settings.running) this.hold = !0;
			switch (this.settings.domain) {
				case 'time':
					if (a instanceof AudioBuffer) {
						b = new Float32Array(a.length);
						a.copyFromChannel(b, 0)
					} else b = toFloatArray(a);
					this.drawTime(b);
					break;
				case 'frequency':
					if (!a instanceof AudioBuffer) {
						a = toAudioBuffer(a)
					}
					var c = this.node.context;
					var d = new AudioBufferSourceNode(c);
					var e = new AnalyserNode(c);
					d.buffer = a;
					d.connect(e);
					d.onended = () => {
						this.drawFreq(e)
					};
					d.start();
					break
			}
		}
		return null
	};
	drawTime(a) {
		var b = !1,
			c = !1,
			d, e, f, g, h, i, j, k = this.settings,
			l = this.canvas.element,
			m = this.canvas.ctx,
			n = l.height / 2,
			o = (n * k.gain) / 100,
			p = a || this.buffer,
			q = this.node,
			r = !Boolean(a);
		if (!r) b = !0;
		var s = p instanceof Float32Array;
		if (s) {
			j = (k.trigger - 128) / 128;
			if (r) q.getFloatTimeDomainData(p)
		} else {
			j = k.trigger;
			if (r) q.getByteTimeDomainData(p)
		}
		m.fillStyle = 'rgb(0, 0, 128)';
		m.fillRect(0, 0, l.width, l.height);
		m.lineWidth = 2;
		var t = k.luminance;
		m.strokeStyle = `rgb(${t},${t},${t})`;
		m.beginPath();
		d = (l.width * k.timebase) / p.length;
		e = 0;
		for (var h = 0; h < p.length; h++) {
			g = p[h];
			if (s) {
				f = g
			} else {
				f = g / 128.0 - 1
			}
			i = n - (f * o);
			if (!c) {
				if (g < j) c = !0
			}
			if (!b && c) {
				if (g >= j) {
					e = 0;
					if (h < 1024) b = !0;
					m.moveTo(e, i)
				}
			}
			if (b) {
				m.lineTo(e, i);
				e += d
			}
		}
		if (b) m.stroke();
		this.counter.add(measureFrequency(p));
		return b
	};
	drawFreq(a) {
		var b, c, d, e, f, g, h = -1000,
			i = this.settings,
			j = this.canvas.element,
			k = this.canvas.ctx,
			l = j.height / 2,
			m = (l * i.gain) / 100,
			n = this.buffer,
			a = a || this.node,
			o, p = this.settings.dboption == 'showdb';
		var q = n instanceof Float32Array;
		if (q) {
			a.getFloatFrequencyData(n)
		} else {
			a.getByteFrequencyData(n)
		}
		o = Math.floor(a.frequencyBinCount / i.timebase);
		k.fillStyle = 'rgb(0, 0, 128)';
		k.fillRect(0, 0, j.width, j.height);
		k.lineWidth = 1;
		var r = i.luminance;
		k.strokeStyle = `rgb(${r},${r},${r})`;
		k.beginPath();
		b = j.width / o;
		c = 0;
		for (var f = 0; f < o; f++) {
			e = n[f];
			if (e > h) h = e;
			if (q) {
				p ? d = (e + 100) / 100 : d = 10 * Math.pow(10, e / 20) - 1
			} else {
				d = e / 128.0 - 1
			}
			g = l - (d * m);
			if (f == 0) {
				c = 0;
				k.moveTo(c, g)
			}
			k.lineTo(c, g);
			c += b
		}
		k.stroke();
		this.counter.add(measureFttFrequency(n, a.frequencyBinCount));
		$R.fftBuf = n;
		return h > -200
	};
	start() {
		if (!this.settings.running && this.settings.hasnode) {
			this.settings.running = !0;
			this.counter.reset();
			this.run()
		}
	};
	run() {
		if (!this.settings.hold) {
			var a;
			switch (this.settings.domain) {
				case 'time':
					a = this.drawTime();
					break;
				case 'frequency':
					a = this.drawFreq();
					break
			}
			if (this.counter.samples > 9) this.counter.show();
			if (this.singleShot && a) this.hold = !0
		} else {
			if (this.counter.samples) this.counter.show()
		}
		this.loop = requestAnimationFrame(() => {
			this.run()
		})
	};
	stop() {
		if (this.settings.running) {
			window.cancelAnimationFrame(this.loop);
			this.settings.running = !1
		}
	};
	get hold() {
		return this.settings.hold
	};
	set hold(a) {
		gel('hold').checked = a;
		this.settings.hold = Boolean(a);
		if (a) this.singleShot = !1
	};
	get singleShot() {
		return this.settings.singleShot
	};
	set singleShot(a) {
		gel('singleShot').checked = a;
		this.settings.singleShot = Boolean(a);
		if (a) this.hold = !1
	};
	set analyserNode(a) {
		var b = this.settings.buffertype;
		this.node = a;
		var c = a.fftSize;
		if (b == 32) {
			this.buffer = new Float32Array(c)
		} else this.buffer = new Uint8Array(c);
		this.settings.hasnode = !0
	};
	get analyserNode() {
		return this.node
	}
}

function bufferInfo(a, b) {
	var c = 10000,
		d = -1000,
		e, f, g, h, i, j = null,
		k = 0,
		l = null;
	if (!a) return {};
	f = a.constructor.name;
	e = b || a.length;
	i = f.match(/Uint(\w*)Array/);
	if (i) k = Number(i[1]);
	for (g = 0; g < e; g++) {
		h = a[g];
		if (!j && Math.abs(h) > 0) j = g;
		if (h < c) c = h;
		if (h > d) {
			d = h;
			l = g
		}
	}
	return {
		type: f,
		bits: k,
		length: e,
		dataStart: j,
		min: c,
		max: d,
		maxIndex: l
	}
}

function measureFrequency(a) {
	var b = getCTX().sampleRate,
		c, d = 0,
		e = 0,
		f, g = a.length,
		h, i = [];
	for (c = 0; c < g; c++) {
		h = a[c];
		if (h > 0) {
			if (e == -1) {
				i.push(c - d);
				d = c;
				e = 1
			}
			if (e == 0) e = 1
		}
		if (h <= 0) {
			if (e == 1) {
				i.push(c - d);
				d = c;
				e = -1
			}
			if (e == 0) e = -1
		}
	}
	i.splice(0, 1);
	h = 0;
	for (c = 0; c < i.length; c++) h += i[c];
	h /= i.length;
	f = (1 / (1 / b * h)) / 2;
	if (!isNaN(f)) f = Math.round(f * 1000) / 1000;
	return f
}

function measureFttFrequency(a, b) {
	b = b || a.length;
	var c = bufferInfo(a, b),
		d = getCTX().sampleRate,
		e = (d / 2) / b * (c.maxIndex + 0.5);
	return e
}
const pulseSymbol = "data:image/png;b ase64,iVBORw0KGgoAAAANSUhEUgAAABcAAAAXCAYAAADgKtSgAAAAR0lEQVRIiWNgGAWDBhQUFPxPSEggiAsKCv6TbDgxBsMw2YZTqmbU8FHDR4ThfX19ZOU+XHr6+voQ+sg1HFf5g2L4KBgFRAEAQxO5IycRz8EAAAAASUVORK5CYII=";
const triangleSymbol = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAXCAYAAAAV1F8QAAABcElEQVRIie2RMUtCURTHy8DAogyaavQDONbW/AbHuyiPe87x3cd7Ciri6IOrw0PeJG5+nPaGloa2phwqSFAw6nkaKhApfaYu5X8853fP7w93a2uTPxkiulu7pNPp9JRSDAC8NokQIo6ID0TEAMAAMFy5RGudQMRnAAiz2eyRYRi7Usp+uVzu53K5g5VIWq3WYaVSGRIRm6a5NyEfEBG32+3HbrebWFrk+/4LInKz2RxpreNf81qttkdEI8uy2DCM3aUkmUzmGADCQqEw0FrHpvcAkASA0HXd3nf7SHEc5/Tz059+YrTWMd/3GRE5CIK7hSX1ej3lui5bljWax2qtTxzHYaXUXHb64b7neUxE44gtt23bTkkpx4h4E1lERGlEDKvV6u0C5ZJBEDARhY1G42omLITYAYBzKeUbAFxHbvYhinmely6VSqyUepgJm6Z5kc/n2bbt+0Ukk0WLxeIZIr5KKS9/c+OfRwgRn09tEjHvVRSeLtprc4sAAAAASUVORK5CYII=";
const drawscale = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAABuCAYAAAAjxeOXAAABwElEQVRoge2Zz82DMAzFO0kPvbAIcyBxYJ2qUidBsAQwAXAm90zwvpOrkJZ/7otE9SWSJVDoD8t5OHZ6SW5XJLcrAECuteYyLhEcwRF8VvA49JDRtQ0HXOQZAKDIs9n1ecHu/J5ndoOfj/tsDgCej/v34K5tYMz0ujdmWlzAQ+C6Kt88rquSL7dx6Hk63msRrJebPyhyc00+aXoojJkWNawGPx93WGv5izcO/aq3ajCwnC7V4CLPNsOgAtdVuZojvlZFBIcDy74HkBO9q2FjJs5mWlflbDOlhaJrm1nqXHvJYbA7B5B2aT8UtLrCr9doHovXQeS21yJYDzZmgjtoFb21djE/qMFbfYcaLPVEEB273lK/PH8haT2IJCGJNyXR+3KjtbxHLIK/B/vtLwUsRQsdbK3FOPRcsNQW1FAUefaCUcGfGsilDHcuVQQFb1kE68HuYROt+3e3Jv9wjxaKIGAJB/0gxH3uH9cVQY7Sj1gE68FuUUgrvLu2mcHO/4G4FuQPluS23ZapwGueqsFHMt9usJsnZARRBTUUEfzxh0F0TAfL+XwQjyP4x8F7XhzB7+A0TZGmKVhDeC8w24KB/wCtDEow2ElPPAAAAABJRU5ErkJggg==";
const brownDraw = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAZCAYAAAAiwE4nAAABfUlEQVRIie3NzS/DYBzA8cdLzNtFPL8+3dO1Jitm3RjtbEKlq22dd01UwmQLMQeJgzhLenL397gIf4W7g3C2i8PPBcFVJyL7Jt/zh5C3VFUNLWaSD7slE2sr9o+vuw6eVrdfRofBVFU1RL43FQ1fLqbHsKQnAtnRNXRNA8+Pa0+cc8X3/fYv4MQQuw4SLOkJLGeSeOQuPTPGspqmdX1giNiWUoSboEHH0PBgvdgQRTEfjUa7fwksNBhjdiQS6WmBLbAF/iHQ87yOpCTc2ukxLOqJwHYMDfdXCw3GWIFz3ksIIcSyrE7Xtm3Pzt3vFOewUpoPcBPrrvOSSaoXlNKw7/vtRFGUgfP9LawWcljJG8FvGViejCFjbI0x1kcopeH68gJuZjXcmEk05fy4ghzgRBRFILIs88Mls+mgIAhnACC2wH8DzjcVtD6DACDu2TO4nhnHNSMe7HocV/U4miMSUkpP38H+2Zh0pQ/Bw7QMj0GfluExxeEOADxJkgZfAY8AFlxqdxZtAAAAAElFTkSuQmCC";
const whiteDraw = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAbCAYAAABvCO8sAAABVUlEQVRIie3NMUsCYRzH8V8O4eTUkhC9gl5BQ1ggLkG4FUFrUNAbaIsoroYgGyIKwmg4hy4oNYUitbzHLrrQhrynju5o8K4CbSu8f0u+gbhz6b7wnT/Ab+LhzmipmCGrodHH+7MrN5smGcYTCYKwACAEoKfjBSQp6chyjpicd+0Ky1OtekWO8+UAGAIQ7IC9x1KSytdnJJfdnck5si2NAIwD6OuAQckjUC7nyHipEoApAP3dBKcBhH3QB33wn4IBAKFUao8KlydULJy6PtduCcAMgAEACDPGDphcIlVVXP9eVaher5EoigUAw+Cc77fb3/TZsqnl4Y2GQYnERga6rktv9iuZJvd0rj3Q+tpKBbquS7ZldgGskSAsKz7og38DLcsk0+CeXn+skrC6pCCdPtpU7xjdVEqefnGepfm52SwADMbjE4uxWHQ7Gh3b9epIZGQLwOQPJ3cLurE32GQAAAAASUVORK5CYII=";
const blackDraw = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAbCAYAAABvCO8sAAABU0lEQVRIie3Nv07CQBzA8Z8OhompvUsvXDikikntHaK0JVQB01L++C8OKoZEfAJfwKHvYBwcHEx8ADadHY3PxM9BfQHTc7Hf5DN/Ab6rVqv7QdDCKI4xSQaZGI8P8GIywSQZ3di2XUTEJQAASNN0uVwWC6kUKlXPlOf5OJtdLyilrhCiAAAAjuOsCFFBV0qUUmVKqTrG/T5SSg8ZYwYAAAghCkJUMp/96HS7SCm9NAzD+rMhIWTKOWf5MB/mw/84TNN02bbtohAVdF2pxV6ng6ZpXjHGOHDO2XQ6fY7iPg6GIy2Ojk8wDMM3QkgbTs/OnwbDEbbDXa2aTR8Z5y8QRdHcD1rYaOxo5UqFllV6h14UzT0/0D90FVpW6SMf5sNfDHu9uecHuNXY1mrTlV9Dx3HuarUNtNfWtRJiFQkhr2BZVplSeksIeTBN81EXQsi9YRiTTwZfR/jH+Z6jAAAAAElFTkSuQmCC";
const $R = {
	buttons: [],
	scale: 1,
	id: 0,
	getid: function() {
		var a = "000" + String(++this.id);
		a = "t" + a.substr(a.length - 3);
		return a
	},
	reverb: {
		impulsebuffer: null
	},
	controls: {},
	pedalPressed: !1
};
const keyCodes = [65, 87, 83, 69, 68, 70, 84, 71, 89, 72, 85, 74, 75, 79, 76, 80, 59, 222, 221, 220, 0, 13];
const lowKeyCodes = [90, 0, 88, 0, 67, 86, 0, 66, 0, 78, 0, 77, 188, 0, 190, 0, 191];
const positions = {
	'tune': [132, 191, 16, {
		minVal: Math.pow(2, (-2.5) / 12) - 1,
		maxVal: Math.pow(2, 2.5 / 12) - 1,
		actVal: 0,
		Log: Math.sqrt(2)
	}],
	'glide': [71, 314, 1],
	'modmix': [193, 314, 1],
	'range1': [368, 128, 3],
	'range2': [368, 251, 3],
	'range3': [368, 374, 3],
	'osc2tune': [491, 252, 2],
	'osc3tune': [491, 375, 2],
	'wave1': [614, 128, 3],
	'wave2': [614, 251, 3],
	'wave3': [614, 374, 3],
	'mixvol1': [737, 130, 16, {
		minVal: 0,
		maxVal: 1,
		actVal: 0,
		Log: 10
	}],
	'mixvol2': [737, 253, 16, {
		minVal: 0,
		maxVal: 1,
		actVal: 0,
		Log: 10
	}],
	'mixvol3': [737, 376, 16, {
		minVal: 0,
		maxVal: 1,
		actVal: 0,
		Log: 10
	}],
	'extvol': [983, 193, 16, {
		minVal: 0,
		maxVal: 1,
		actVal: 0,
		Log: 10
	}],
	'noisevol': [983, 314, 16, {
		minVal: 0,
		maxVal: 1,
		actVal: 0,
		Log: 10
	}],
	'fltfreq': [1263, 130, 16, {
		minVal: 10,
		maxVal: 10000,
		actVal: 440,
		Log: 500
	}],
	'fltattack': [1263, 245, 16, {
		minVal: 0.001,
		maxVal: 35,
		actVal: 0.1,
		Log: 500
	}],
	'lcattack': [1263, 376, 16, {
		minVal: 0.001,
		maxVal: 35,
		actVal: 0.1,
		Log: 500
	}],
	'fltemph': [1385.5, 130, 16, {
		minVal: 0,
		maxVal: 50,
		actVal: 1,
		Log: 10
	}],
	'fltdecay': [1385.5, 245, 16, {
		minVal: 0.001,
		maxVal: 35,
		actVal: 0.1,
		Log: 500
	}],
	'lcdecay': [1385.5, 376, 16, {
		minVal: 0.001,
		maxVal: 35,
		actVal: 0.1,
		Log: 500
	}],
	'contour': [1508, 130, 16, {
		minVal: 0,
		maxVal: 100,
		actVal: 0,
		Log: 10
	}],
	'fltsustain': [1508, 245, 1],
	'lcsustain': [1508, 376, 1],
	'mainvol': [1631, 130, 16, {
		minVal: 0,
		maxVal: 3,
		actVal: 0,
		Log: 10
	}],
	'phonevol': [1631, 376, 16, {
		minVal: 0,
		maxVal: 1,
		actVal: 0,
		Log: 10
	}],
	'osc3filteg': [36, 384, 4, 0],
	'noiselfo': [159, 384, 4, 0],
	'oscmod': [228, 178, 4, 0],
	'osc3ctrl': [276, 340, 5, 1],
	'mixvol1on': [824, 116, 4, 1],
	'exvolon': [824, 178, 4, 1],
	'mixvol2on': [824, 239, 4, 1],
	'noisevolon': [824, 300, 4, 1],
	'mixvol3on': [824, 362, 4, 1],
	'noiseopt': [1057, 280, 5, 1],
	'fltmod': [1122, 116, 4, 0],
	'kbctrl1': [1122, 174, 4, 0],
	'kbctrl2': [1122, 230, 4, 0],
	'mainout': [1701, 117, 4, 1],
	'A440': [1595, 239, 4, 1],
	'power': [1823, 340, 5, 3],
	'lforate': [74, 618, 16, {
		minVal: 0.001,
		maxVal: 200,
		actVal: 0.001,
		decimals: 3,
		Log: 100
	}],
	'wpglide': [142, 560, 6, 2],
	'wpdecay': [142, 639, 6, 2],
	'slpitch': [94, 700, 32, {
		minVal: Math.pow(2, (-5) / 12) - 1,
		maxVal: Math.pow(2, 5 / 12) - 1,
		actVal: 0,
		decimals: 3,
		Log: Math.sqrt(2)
	}],
	'slmod': [217, 700, 32, {
		minVal: 0,
		maxVal: 10,
		actVal: 0,
		decimals: 3,
		Log: 10
	}],
	'powerlamp': [1840, 290, 10],
	'overloadlamp': [1070, 190, 11]
};
const switchColor = ['msorange', 'msblue', 'mswhite', 'msblack'];
const buttonImages = [null, 'smallknob.png', 'bigknob.png', 'selector.png'];
const orgWidth = 1876;
var midiAccess = null;

function initMidi() {
	if (navigator.requestMIDIAccess !== undefined) {
		navigator.requestMIDIAccess().then(access => {
			midiAccess = access;
			var a = midiAccess.inputs;
			var b = a.values();
			var c = b.next().value;
			c.onmidimessage = midiInputHandler;
			generateFrequencyTable()
		}, e => {
			div.innerHTML = e.message
		})
	}
}
const midiFreq = [];

function midiInputHandler(a) {
	var b = a.data,
		c = b[0],
		d = b[1],
		a = {},
		e;
	a.number = d;
	a.frequency = mtof(d);
	e = $R.keyBoard.keys[d];
	switch (c) {
		case 144:
			$R.player.playNote(a);
			if (e) e.press();
			break;
		case 128:
			$R.player.stopNote(a);
			if (e) e.release();
			break
	}
}

function generateFrequencyTable() {
	var a;
	for (a = 0; a < 128; a++) {
		midiFreq[a] = m2f(a)
	}
}

function mtof(a) {
	return midiFreq[a]
};

function m2f(a) {
	return 440 * Math.pow(2.0, (a - 69.0) / 12.0)
};

function mtor(a) {
	return Math.pow(2.0, a / 12.0)
};
(function() {
	const a = Math.PI / 180;
	const b = () => {
		return !1
	};
	var c = null;

	function d(e) {
		var f = e.offsetLeft,
			g = e.offsetTop,
			h = e.offsetParent;
		while (h) {
			f += h.offsetLeft;
			g += h.offsetTop;
			h = h.offsetParent
		}
		return {
			x: f,
			y: g
		}
	}

	function i() {
		insertRule(".slidebutton{border-radius: 2px;	box-shadow: 2px 2px 2px #808080}");
		insertRule(".sliderlabel{border:none; background-color:#444;color:#ff8;width:20px;font:9px arial;padding:1px;padding-left:2px;]");
		window.removeEventListener('load', i)
	}

	function j(f, g) {
		var j = Math.atan(g / f) / a - 90;
		if (f >= 0) j = 180 - Math.abs(j);
		return j
	}
	class RotateButton extends EventDispatch {
		constructor(k) {
			var l;
			super();
			k = k || {};
			if (k.button) {
				if (typeof k.button == 'string') {
					l = new Image;
					l.onload = k.onload || null;
					l.src = k.button
				} else l = k.button
			} else {
				throw "RotateButton needs an image!"
			}
			delete k.onload;
			Object.defineProperty(l, 'disabled', {
				configurable: !0,
				get: function() {
					return this.owner.disabled
				},
				set: function(m) {
					this.owner.disabled = m
				}
			});
			Object.assign(this, {
				minVal: 0,
				maxVal: 1,
				actVal: 0,
				Val: 0,
				saveVal: 0,
				Log: 0,
				minAngle: 0,
				maxAngle: 300,
				startAngle: -150,
				rotation: 0,
				button: null,
				buttonWidth: 20,
				buttonHeight: 20,
				buttonColor: "	#444",
				onchange: null,
				decimals: 3,
				disabled: !1,
				parent: document.body
			}, k);
			this.parent.appendChild(l);
			l.owner = this;
			setEventListeners(l, ['mousedown', this.start, 'dragstart', b, 'wheel', this.wheelHandler]);
			l.ondragstart = b;
			l.className = "rotatebutton";
			l.style.cursor = "pointer";
			this.button = l;
			this.value = this.actVal;
			this.audioParam = null;
			this.buttonSymbol = 0
		};
		save() {
			this.saveVal = this.value
		};
		restore() {
			this.value = this.saveVal
		};
		location(f, g) {
			var n = this.button;
			var o = n.offsetWidth / 2;
			var p = n.offsetHeight / 2;
			var q = n.style;
			q.left = csv(f - o);
			q.top = csv(g - p);
			n = this.buttonSymbol;
			if (n) {
				o = n.offsetWidth / 2;
				p = n.offsetHeight / 2;
				q = n.style;
				q.left = csv(f - o);
				q.top = csv(g - p)
			}
			this.x = f;
			this.y = g
		};
		scale(q) {
			this.button.style.width = csv(this.button.orgWidth * q);
			if (this.buttonSymbol) this.buttonSymbol.style.width = csv(this.buttonSymbol.orgWidth * q)
		};
		moveTo(r) {
			var m, s, t, u, v, w;
			if (r < this.minAngle) r = this.minAngle;
			if (r > this.maxAngle) r = this.maxAngle;
			r -= this.minAngle;
			w = this.maxAngle - this.minAngle;
			u = this.maxVal - this.minVal;
			v = u / w;
			t = this.Log;
			if (t) {
				s = w * ((Math.pow(t, r / w) - 1) / (t - 1));
				s = s * v + this.minVal
			} else {
				s = r / w * u + this.minVal
			}
			this.value = s
		};
		get value() {
			return Math.round(this.actVal * Math.pow(10, this.decimals)) / Math.pow(10, this.decimals)
		};
		set value(m) {
			var x, t, u, v;
			if (arguments.length) {
				var w = this.maxAngle - this.minAngle;
				if (m < this.minVal) m = this.minVal;
				if (m > this.maxVal) m = this.maxVal;
				this.lastVal = this.actVal;
				this.actVal = m;
				t = this.Log;
				u = this.maxVal - this.minVal;
				v = w / u;
				if (t) {
					x = (u * Math.log(((t - 1) * (m - this.minVal)) / u + 1)) / Math.log(t);
					x *= v
				} else {
					x = (m - this.minVal) * v
				}
				x += this.minAngle;
				this.button.style.transform = `rotate(${x+this.startAngle}deg)`;
				if (this.buttonSymbol) this.buttonSymbol.style.transform = `rotate(${x+this.startAngle}deg)`;
				this.rotation = x;
				if (this.lastVal != m) this.dispatchEvent({
					type: 'change',
					target: this
				});
				if (this.audioParam) this.audioParam.value = m
			}
		};
		start(y) {
			var z = y.target;
			var aa = z.owner;
			if (!aa.disabled && !aa.grip && y.button == 0) {
				aa.grip = !0;
				c = aa;
				if (z.zpos) z.style.zIndex = z.zpos.m;
				document.addEventListener('mousemove', aa.handler);
				document.addEventListener('mouseup', aa.stop);
				var ab = d(z);
				aa.centerX = ab.x + z.offsetWidth / 2;
				aa.centerY = ab.y + z.offsetHeight / 2;
				aa.gripAngle = j(y.clientY - aa.centerY, y.clientX - aa.centerX);
				if (aa.onstart) aa.onstart();
				return !1
			}
		};
		stop(y) {
			var aa = c;
			if (aa && aa.grip) {
				c = null;
				aa.grip = !1;
				var z = aa.button;
				if (z.zpos) z.style.zIndex = z.zpos.s;
				document.removeEventListener('mousemove', aa.handler);
				document.removeEventListener('mouseup', aa.stop);
				if (aa.onstop) aa.onstop()
			}
		};
		get angle() {
			return this.rotation
		};
		set angle(ac) {
			this.moveTo(ac)
		};
		handler(y) {
			var aa = c;
			var ad = aa.button;
			var f = y.clientX - aa.centerX;
			var g = y.clientY - aa.centerY;
			var ae = aa.gripAngle;
			var af = j(g, f);
			aa.gripAngle = af;
			var ag = ae - af;
			if (ag > 180) ag = ag - 360;
			if (ag < -180) ag = 360 + ag;
			aa.angle = aa.angle + ag
		};
		wheelHandler(y) {
			var aa = y.target.owner;
			var ah;
			y.deltaY > 0 ? ah = 1 : ah = -1;
			if (y.shiftKey) ah *= 10;
			aa.angle = aa.angle + ah;
			if (aa.onstop) aa.onstop();
			y.preventDefault()
		};
		connect(ai) {
			this.audioParam = ai;
			ai.value = this.value
		};
		set symbol(aj) {
			var n = this.button;
			if (this.buttonSymbol) {
				document.body.removeChild(this.buttonSymbol);
				this.buttonSymbol = null
			}
			var f = n.offsetLeft + n.offsetWidth / 2;
			var g = n.offsetTop + n.offsetHeight / 2;
			var ak = create('img', {
				style: {
					position: 'absolute',
					cursor: 'pointer'
				}
			});
			ak.onload = () => {
				ak.style.left = csv(f - (ak.offsetWidth / 2));
				ak.style.top = csv(g - (ak.offsetHeight / 2));
				ak.orgWidth = ak.offsetWidth;
				ak.style.transform = `rotate(${this.rotation+this.startAngle}deg)`;
				this.scale(this.button.offsetWidth / this.button.orgWidth);
				this.location(this.x, this.y)
			};
			document.body.appendChild(ak);
			ak.src = aj;
			ak.owner = this;
			this.buttonSymbol = ak;
			ak.addEventListener('wheel', y => {
				y.target.owner.wheelHandler(y)
			});
			ak.addEventListener('mousedown', y => {
				y.target.owner.start(y)
			});
			ak.addEventListener('dblclick', y => {
				y.target.owner.button.dispatchEvent(new Event('dblclick'))
			})
		}
	}
	class SelectorButton extends RotateButton {
		constructor(k) {
			if (!k.steps || k.steps < 2) throw 'Init.steps has to be > 1';
			super(k);
			var al = this.steps;
			this.minVal = 0;
			this.maxVal = al - 1;
			this.callBack = null
		};
		get position() {
			return this.actVal + 1
		};
		get value() {
			return this.actVal
		};
		set value(m) {
			if (m < 0) m = 0;
			if (m > this.maxVal) m = this.maxVal;
			super.value = Math.round(m);
			if (this.callBack) this.callBack(m)
		};
		handler(y) {
			var aa = c;
			var ad = aa.button;
			var f = y.clientX - aa.centerX;
			var g = y.clientY - aa.centerY;
			var ae = aa.gripAngle;
			var af = j(g, f);
			var ag = ae - af;
			if (ag > 180) ag = ag - 360;
			if (ag < -180) ag = 360 + ag;
			if (ag > 10) ag = 1;
			else ag < -10 ? ag = -1 : ag = 0;
			if (ag) aa.gripAngle = af;
			aa.value = aa.value + ag
		};
		wheelHandler(y) {
			var aa = y.target.owner;
			var ah;
			y.deltaY > 0 ? ah = 1 : ah = -1;
			aa.value = aa.value + ah;
			if (aa.onstop) aa.onstop();
			y.preventDefault()
		};
		connect(am) {
			if (am instanceof Function) this.callBack = am;
			am(this.value)
		}
	}
	class HorizontalSwitch extends EventDispatch {
		constructor(f, g, an, ao, ap, aq, ar) {
			super();
			this.grip = !1;
			this.posX = f;
			this.posY = g;
			this.width = an;
			this.height = ao;
			this.indicator = null;
			aq = aq || document.body;
			this.base = create('div', {
				className: ap,
				style: {
					position: 'absolute',
					width: csv(an),
					height: csv(ao),
					left: csv(f),
					top: csv(g)
				}
			});
			if (ar) {
				this.switch = create('div', {
					style: {
						position: 'relative',
						width: '100%',
						height: '52%'
					}
				})
			} else {
				this.switch = create('div', {
					style: {
						position: 'relative',
						width: '52%',
						height: '100%'
					}
				})
			}
			this.base.appendChild(this.switch);
			aq.appendChild(this.base);
			this.off();
			this.status = 0;
			this.base.addEventListener('mousedown', y => {
				if (y.target == this.base) {
					this.status == 1 ? this.off() : this.on()
				} else {
					this.grip = !0
				}
			});
			this.base.addEventListener('mousemove', y => {
				if (y.target == this.base && this.grip) {
					this.status == 1 ? this.off() : this.on()
				}
			});
			this.base.addEventListener('mouseup', y => {
				this.grip = !1
			});
			this.base.ondragstart = b;
			this.callBack = null
		};
		on() {
			this.switch.style.left = csv(this.base.offsetWidth - this.switch.offsetWidth);
			if (this.status == 0) {
				this.status = 1;
				this.dispatchEvent({
					type: 'switch',
					target: this
				});
				if (this.indicator) this.indicator.on();
				if (this.callBack) this.callBack(1)
			}
		};
		off() {
			this.switch.style.left = '0px';
			if (this.status == 1) {
				this.status = 0;
				this.dispatchEvent({
					type: 'switch',
					target: this
				});
				if (this.indicator) this.indicator.off();
				if (this.callBack) this.callBack(0)
			}
		};
		get value() {
			return this.status
		};
		set value(m) {
			!m ? this.off() : this.on()
		};
		scale(q) {
			this.base.style.width = csv(this.width * q);
			this.base.style.height = csv(this.height * q);
			this.status == 0 ? this.off() : this.on()
		};
		location(f, g) {
			var n = this.base;
			n.style.left = csv(f);
			n.style.top = csv(g)
		};
		connect(am) {
			if (am instanceof Function) this.callBack = am;
			am(this.status)
		};
		set lamp(as) {
			this.indicator = as
		}
	}
	class VerticalSwitch extends HorizontalSwitch {
		constructor(f, g, an, ao, ap, aq) {
			super(f, g, an, ao, ap, aq, !0)
		};
		on() {
			this.switch.style.top = '0px';
			if (this.status == 0) {
				this.status = 1;
				if (this.indicator) this.indicator.on();
				this.dispatchEvent({
					type: 'switch',
					target: this
				});
				if (this.callBack) this.callBack(1)
			}
		};
		off() {
			this.switch.style.top = csv(this.base.offsetHeight - this.switch.offsetHeight);
			if (this.status == 1) {
				this.status = 0;
				if (this.indicator) this.indicator.off();
				this.dispatchEvent({
					type: 'switch',
					target: this
				});
				if (this.callBack) this.callBack(0)
			}
		}
	}
	class DrawButton extends cSliderButton {
		constructor(k) {
			Object.assign(k, {
				length: 104,
				grooveWidth: 0,
				minVal: -8,
				maxVal: 0,
				actVal: 0,
				buttonWidth: 28,
				buttonHeight: 28
			});
			super(k);
			this.orgLength = this.length;
			this.posX = k.x;
			this.posY = k.y;
			this.button.className = 'drawbutton';
			this.audioParam = null;
			var at = new Image;
			at.style.position = 'absolute';
			at.onload = y => {
				var ak = y.target,
					an = ak.offsetWidth,
					ao = ak.offsetHeight;
				ak.style.left = csv(this.grooveWidth - an >> 1);
				ak.style.top = csv(this.button.offsetTop - ao)
			};
			this.groove.appendChild(at);
			this.bscale = at;
			at.src = drawscale;
			this.button.ondragstart = b;
			this.bscale.ondragstart = b
		};
		get value() {
			return Math.round(this.actVal * Math.pow(10, this.decimals)) / Math.pow(10, this.decimals)
		};
		set value(m) {
			super.value = m;
			if (this.bscale) {
				var q = this.bscale,
					ao = q.offsetHeight;
				q.style.top = csv(this.button.offsetTop - ao)
			}
		};
		location(f, g) {
			var au = this.groove;
			au.style.left = csv(f);
			au.style.top = csv(g)
		};
		scale(q) {
			var au = this.groove;
			var n = this.button;
			var av = this.buttonHeight * q;
			var aw = this.buttonWidth * q;
			var ax = this.orgLength * q + av;
			au.style.height = csv(ax);
			au.style.width = csv(this.grooveWidth * q);
			this.button.style.width = csv(aw);
			this.button.style.height = csv(av);
			this.length = ax - av;
			this.value = this.value
		};
		connect(ai) {
			this.audioParam = ai;
			ai.value = this.value;
			this.onchange = () => {
				ai.value = this.value
			}
		}
	}
	class PressSwitch extends EventDispatch {
		constructor(ay, aq) {
			super();
			aq = aq || document.body;
			var n = create('button', {
				className: 'hpressoff',
				innerText: ay
			});
			aq.appendChild(n);
			n.addEventListener('click', y => {
				var n = y.target.owner;
				if (n) {
					n.status == 'on' ? n.off() : n.on()
				}
			});
			this.button = n;
			n.owner = this;
			this.status = 'off'
		};
		on() {
			this.button.className = 'hpresson';
			this.status = 'on';
			this.dispatchEvent({
				type: 'switch',
				target: this
			})
		};
		off() {
			this.button.className = 'hpressoff';
			this.status = 'off';
			this.dispatchEvent({
				type: 'switch',
				target: this
			})
		};
		toggle() {
			this.status == 'on' ? this.off() : this.on()
		}
	}
	window.addEventListener('load', i);
	window.RotateButton = RotateButton;
	window.SelectorButton = SelectorButton;
	window.HorizontalSwitch = HorizontalSwitch;
	window.VerticalSwitch = VerticalSwitch;
	window.DrawButton = DrawButton;
	window.PressSwitch = PressSwitch
})();
var globAudioContext = null;

function getCTX(a) {
	if (globAudioContext) {
		if (a) {
			globAudioContext.close();
			globAudioContext = null
		}
	}
	if (!globAudioContext) {
		globAudioContext = new window.AudioContext || window.webkitAudioContext
	}
	return globAudioContext
}
class LinearRamp {
	constructor(a, b, c) {
		c = c || b.value;
		this.context = a;
		this.param = b;
		this.param.setValueAtTime(c, 0);
		this.value = c;
		this.lastValue = c;
		this.startTime = 0;
		this.endTime = 0
	};
	to(a, b) {
		var c = this.value,
			d = this.startTime,
			e = this.endTime,
			f = this.context.currentTime,
			g = f + b;
		if (e > f) {
			c = this.lastValue + ((this.value - this.lastValue) * (f - d)) / (e - d);
			this.param.cancelScheduledValues(0)
		}
		this.param.setValueAtTime(c, 0);
		this.param.linearRampToValueAtTime(a, g);
		this.lastValue = c;
		this.value = a;
		this.startTime = f;
		this.endTime = g
	}
}
class AdsrTimer {
	constructor(a, b) {
		this.context = a;
		this.settings = {};
		Object.assign(this.settings, {
			attack: 0.1,
			attackVolume: 1,
			decay: 0.1,
			sustain: 0.1,
			sustainVolume: 1,
			release: 0.1,
			offset: 0,
			sustainHold: !1,
			exponential: !1,
			useDamper: !1
		}, b || {});
		this.parameter = null;
		this.time = {};
		this.running = !1
	};
	start() {
		if (!this.running && this.parameter) {
			this.running = !0;
			var a = this.settings,
				b = a.offset + a.attackVolume,
				c = a.offset + a.sustainVolume,
				d = this.time,
				e = this.context.currentTime;
			this.parameter.setValueAtTime(a.offset + 0.001, 0);
			d.attack = e;
			d.decay = e + a.attack;
			d.sustain = d.decay + a.decay;
			d.release = d.sustain + a.sustain;
			if (a.exponential) {
				this.parameter.exponentialRampToValueAtTime(b, d.decay);
				this.parameter.exponentialRampToValueAtTime(c, d.sustain)
			} else {
				this.parameter.linearRampToValueAtTime(b, d.decay);
				this.parameter.linearRampToValueAtTime(c, d.sustain)
			}
			if (!a.sustainHold) this.parameter.setTargetAtTime(a.offset, d.release, a.release)
		}
	};
	stop(a) {
		if (this.running) {
			var b = this.settings,
				c = b.offset + b.attackVolume,
				d = b.offset + b.sustainVolume,
				e = this.context,
				f = e.currentTime,
				g = 0,
				h, i, j, k, l, m = this.time,
				n;
			if (f < m.decay) {
				k = m.attack;
				l = m.decay;
				i = b.offset + 0.001;
				j = c;
				g = f - k
			} else if (f < m.sustain) {
				k = m.decay;
				l = m.sustain;
				i = c;
				j = d;
				g = f - k
			}
			if (f < m.sustain) {
				if (b.exponential) {
					h = i * Math.pow(j / i, g / (l - k))
				} else {
					h = i + (((j - i) * g) / (l - k))
				}
			} else h = d;
			if (f < m.release || b.sustainHold) {
				this.parameter.cancelScheduledValues(f);
				this.parameter.setValueAtTime(h, 0);
				this.parameter.setTargetAtTime(b.offset + 0.001, f, b.release)
			}
			if (b.useDamper) {
				this.parameter.cancelScheduledValues(f);
				if (f < m.release) this.parameter.setValueAtTime(h, 0);
				this.parameter.setTargetAtTime(b.offset + 0.001, f, 0.05);
				n = 200
			} else n = b.release * 5000;
			if (a) setTimeout(a, n);
			this.running = !1
		}
	};
	get damper() {
		return this.settings.useDamper
	};
	set damper(a) {
		this.settings.useDamper = a
	};
	set volume(a) {
		var b = a / 100;
		if (b > 1) b = 1;
		this.settings.attackVolume *= b;
		this.settings.sustainVolume *= b
	};
	connect(a) {
		if (a instanceof AudioParam) {
			this.parameter = a
		} else throw 'Error: can only connect to AudioParam'
	};
	mute() {
		var a = this.context.currentTime;
		this.parameter.cancelScheduledValues(a);
		this.parameter.setTargetAtTime(this.settings.offset + 0.001, a, 0.05)
	}
}
class AdsrGain extends GainNode {
	constructor(a, b) {
		super(a);
		this.adsrTimer = new AdsrTimer(a, b);
		this.adsrTimer.connect(this.gain);
		this.settings = this.adsrTimer.settings;
		this.gain.value = 0
	};
	start() {
		this.adsr.start()
	};
	stop(a) {
		this.adsr.stop(a)
	};
	get adsr() {
		return this.adsrTimer
	};
	get damper() {
		return this.adsr.damper
	};
	set damper(a) {
		this.adsr.damper = a
	};
	mute() {
		this.adsr.mute()
	}
}
class HammondTone extends AdsrGain {
	constructor(a, b, c) {
		super(a, {
			attack: 0.1,
			attackVolume: 1,
			decay: 0.2,
			sustain: 0.001,
			sustainVolume: 1,
			release: 0.15,
			offset: 0,
			sustainHold: !0,
			exponential: !1,
			useDamper: !1
		});
		var d, e;
		this.ondestroy = null;
		this.oscillators = [];
		this.gains = [];
		this.masterGain = new GainNode(a);
		this.masterGain.connect(this);
		var f = [0.5, 1.5, 1, 2, 3, 4, 5, 6, 8];
		f.forEach(h => {
			d = new OscillatorNode(this.context, {
				frequency: h * b,
				detune: 0,
				type: 'sine'
			});
			this.oscillators.push(d);
			e = new GainNode(this.context);
			this.gains.push(e);
			d.connect(e);
			e.connect(this.masterGain);
			e.gain.value = 0.3;
			d.start()
		});
		this.drawBar(c)
	};
	drawBar(a) {
		var b = 0,
			c = 0,
			d;
		this.gains.forEach(g => {
			a[b] != undefined ? d = Number(a[b]) : d = 0;
			if (d > 0) d = Math.pow(1.41, d - 8) / 4;
			g.gain.value = d;
			c += d;
			b++
		})
	};
	start() {
		super.start()
	};
	stop() {
		super.stop(() => {
			this.destroy()
		})
	};
	destroy() {
		this.oscillators.forEach(osc => {
			osc.stop();
			osc.disconnect()
		});
		this.gains.forEach(gain => {
			gain.disconnect()
		});
		super.disconnect();
		if (this.ondestroy) this.ondestroy(this)
	}
}
class HammondDrawbar {
	constructor() {
		this._db = [8, 8, 8, 8, 8, 8, 8, 8, 8]
	};
	handler(a, b) {
		this._db[a] = parseInt(b)
	};
	get drawBar() {
		return this._db.join('')
	}
}
class ModulatedDelay extends DelayNode {
	constructor(a, b) {
		super(a, b);
		this.delayTime.value = 0;
		this.modOsc = new OscillatorNode(this.context);
		this.modOsc.type = 'triangle';
		this.modOsc.frequency.value = 1;
		this.modGain = new GainNode(this.context);
		this.modGain.gain.value = 0;
		this.modOsc.connect(this.modGain);
		this.modGain.connect(this.delayTime);
		this.rateRamp = new LinearRamp(a, this.modOsc.frequency);
		this.depthRamp = new LinearRamp(a, this.modGain.gain);
		this.settings = {
			deltaHz: 0,
			rampTime: 0.01,
			rate: 1
		};
		this.delayTime.value = 0.05;
		this.depth = 20;
		this.rate = this.settings.rate
	};
	start() {
		this.modOsc.start()
	};
	stop() {
		this.modOsc.stop();
		this.disconnect()
	};
	get dt() {
		return this.delayTime
	};
	get rampTime() {
		return this.settings.rampTime
	};
	set rampTime(a) {
		this.settings.rampTime = a
	};
	get rate() {
		return this.settings.rate
	};
	set rate(a) {
		this.settings.rate = a;
		var b = this.depth;
		this.rateRamp.to(a, this.rampTime);
		this.depth = b
	};
	get depth() {
		return this.settings.deltaHz * this.context.sampleRate
	};
	set depth(a) {
		var b = a / this.context.sampleRate;
		var c = b;
		this.depthRamp.to(c, this.rampTime);
		this.settings.deltaHz = b
	}
}
class ChorusEffect extends GainNode {
	constructor(a, b) {
		super(a);
		this.settings = {
			rate: 6.5,
			depth: 0,
			feedback: 0.5
		};
		b = b || 3;
		this.dryGain = new GainNode(this.context);
		this.wetGain = new GainNode(this.context);
		this.output = new GainNode(a);
		super.connect(this.dryGain);
		this.dryGain.connect(this.output);
		this.wetGain.connect(this.output);
		this.delayNode = new ModulatedDelay(this.context);
		this.delayNode.connect(this.wetGain);
		super.connect(this.delayNode);
		this.delayNode.rate = this.settings.rate;
		this.delayNode.start();
		this.effect = 0;
		this.depth = 0
	};
	get effect() {
		return this.wetGain.gain.value * 100
	};
	set effect(a) {
		a = Math.min(a, 100) / 100;
		this.dryGain.gain.value = 1 - a;
		this.wetGain.gain.value = a
	};
	get delays() {
		return this.delayNodes
	};
	connect(a) {
		this.output.connect(a)
	};
	disconnect() {
		this.output.disconnect()
	};
	get depth() {
		return this.settings.depth
	};
	set depth(a) {
		this.settings.depth = a;
		this.delayNode.depth = a
	}
}
class LeslieEffect extends GainNode {
	constructor(a, b) {
		super(a, b || {});
		var c = 1.5;
		var d = new BiquadFilterNode(this.context);
		d.type = 'lowpass';
		d.frequency.value = 800;
		super.connect(d);
		this.lowpassFilter = d;
		d = new ModulatedDelay(this.context);
		d.rampTime = c;
		this.lowpassFilter.connect(d);
		d.type = 'sine';
		d.start();
		this.bassRotor = d;
		d = new BiquadFilterNode(this.context);
		d.frequency.value = 700;
		this.bassFilter = d;
		this.bassRotor.connect(this.bassFilter);
		d = new GainNode(this.context);
		d.gain.value = 1200;
		this.bassRotor.modOsc.connect(d);
		this.bassFilterGain = d;
		d.connect(this.bassFilter.detune);
		d = new BiquadFilterNode(this.context);
		d.type = 'highpass';
		d.frequency.value = 800;
		super.connect(d);
		this.highpassFilter = d;
		d = new ModulatedDelay(this.context);
		d.rampTime = c;
		this.highpassFilter.connect(d);
		d.type = 'sine';
		d.start();
		this.trebleRotor = d;
		d = new BiquadFilterNode(this.context);
		d.frequency.value = 2000;
		this.trebleFilter = d;
		this.trebleRotor.connect(this.trebleFilter);
		d = new GainNode(this.context);
		d.gain.value = 1200;
		this.trebleRotor.modOsc.connect(d);
		this.trebleFilterGain = d;
		d.connect(this.trebleFilter.detune);
		this.highPan = new StereoPannerNode(this.context);
		this.lowPan = new StereoPannerNode(this.context);
		this.highPanGain = new GainNode(this.context);
		this.lowPanGain = new GainNode(this.context);
		this.highPanDelay = new DelayNode(this.context, {
			maxDelayTime: 2
		});
		this.lowPanDelay = new DelayNode(this.context, {
			maxDelayTime: 2
		});
		this.wetGain = new GainNode(this.context);
		this.dryGain = new GainNode(this.context);
		this.bassFilter.connect(this.lowPan);
		this.trebleFilter.connect(this.highPan);
		this.highPan.connect(this.wetGain);
		this.lowPan.connect(this.wetGain);
		this.bassRotor.modOsc.connect(this.lowPanDelay);
		this.trebleRotor.modOsc.connect(this.highPanDelay);
		this.highPanDelay.connect(this.highPanGain);
		this.lowPanDelay.connect(this.lowPanGain);
		this.lowPanGain.connect(this.lowPan.pan);
		this.highPanGain.connect(this.highPan.pan);
		super.connect(this.dryGain);
		this.panGain = 0.5;
		this.effect = 0;
		this.phaseShift = 30;
		this.mode = 'chorale'
	};
	set mode(a) {
		switch (a) {
			case 'chorale':
				this.chorale();
				break;
			case 'tremolo':
				this.tremolo();
				break
		}
	};
	set panGain(a) {
		this.lowPanGain.gain.value = a;
		this.highPanGain.gain.value = a
	};
	chorale() {
		this.bassRotor.rate = 40 / 60;
		this.lowPanDelay.delayTime.value = 1 / this.bassRotor.rate * 0.25;
		this.trebleRotor.rate = 50 / 60;
		this.highPanDelay.delayTime.value = 1 / this.trebleRotor.rate * 0.25
	};
	tremolo() {
		this.bassRotor.rate = 350 / 60;
		this.lowPanDelay.delayTime.value = 1 / this.bassRotor.rate * 0.25;
		this.trebleRotor.rate = 400 / 60;
		this.highPanDelay.delayTime.value = 1 / this.trebleRotor.rate * 0.25
	};
	set filterGain(a) {
		this.bassFilterGain.gain.value = a;
		this.trebleFilterGain.gain.value = a
	};
	set phaseShift(a) {
		this.depth = a;
		this.bassRotor.depth = a;
		this.trebleRotor.depth = a
	};
	get bassFilterFreq() {
		return this.bassFilter.frequency.value
	};
	set bassFilterFreq(a) {
		this.bassFilter.frequency.value = a
	};
	get trebleFilterFreq() {
		return this.trebleFilter.frequency.value
	};
	set trebleFilterFreq(a) {
		this.trebleFilter.frequency.value = a
	};
	connect(a, b, c) {
		this.wetGain.connect(a, b, c);
		this.dryGain.connect(a, b, c)
	};
	set effect(a) {
		a = a / 100;
		this.wetGain.gain.value = a;
		this.dryGain.gain.value = 1 - a
	};
	disconnect() {
		this.wetGain.disconnect();
		this.dryGain.disconnect()
	};
	stop() {
		this.disconnect()
	}
}
class HammondOutput extends GainNode {
	constructor(a) {
		super(a);
		this.chorus = new ChorusEffect(a, 1);
		this.leslie = new LeslieEffect(a);
		this.connect(this.chorus);
		this.chorus.connect(this.leslie);
		this.analyser = new AnalyserNode(a);
		this.leslie.connect(this.analyser);
		this.analyser.connect(a.destination)
	};
	get volume() {
		return this.gain.value * 100
	};
	set volume(a) {
		this.gain.value = a / 100
	}
}
class HammondOrgan {
	constructor(a) {
		this.context = a;
		this.output = new HammondOutput(a);
		this.vibMode = 'V1';
		this.vibStatus = 0;
		this.output.gain.value = 0.3
	};
	leslie(a) {
		if (a) {
			this.output.leslie.effect = 50;
			this.output.gain.value = 0.5
		} else {
			this.output.leslie.effect = 0;
			this.output.gain.value = 0.3
		}
	};
	leslieMode(a) {
		if (a == 'chorale') this.output.leslie.chorale();
		if (a == 'tremolo') this.output.leslie.tremolo()
	};
	vibrato(a) {
		if (a) {
			this.vibStatus = 1;
			this.vibratoMode(this.vibMode)
		} else {
			this.output.chorus.effect = 0;
			this.vibStatus = 0
		}
	};
	vibratoMode(a) {
		if (this.vibStatus) {
			var b = this.output.chorus;
			switch (a) {
				case 'V1':
					b.effect = 100;
					b.depth = 4;
					break;
				case 'V2':
					b.effect = 100;
					b.depth = 8;
					break;
				case 'V3':
					b.effect = 100;
					b.depth = 16;
					break;
				case 'C1':
					b.effect = 50;
					b.depth = 4;
					break;
				case 'C2':
					b.effect = 50;
					b.depth = 8;
					break;
				case 'C3':
					b.effect = 50;
					b.depth = 16;
					break
			}
		}
		this.vibMode = a
	}
}
const Hammond = new HammondOrgan(getCTX());
var mainOutput = null;
class DrawBar {
	constructor(a, b) {
		var c, d;
		this.index = b;
		this.element = a;
		a.style.width = csv(276);
		this.bars = [];
		var e = 30,
			f = 0,
			g = 30;
		var h = {
			parent: a,
			x: e,
			y: f
		};
		var i = [1, 1, 2, 2, 3, 2, 3, 3, 2];
		for (c = 0; c < 9; c++) {
			if (i[c] == 1) h.button = brownDraw;
			if (i[c] == 2) h.button = whiteDraw;
			if (i[c] == 3) h.button = blackDraw;
			d = new DrawButton(h);
			d.id = c;
			d.onchange = b => {
				this.handler(b.id, Math.abs(b.value));
				$R.player.changeBar(this.drawBar, this.index)
			};
			this.bars.push(d);
			h.x += g
		}
		this._db = [0, 0, 0, 0, 0, 0, 0, 0, 0]
	};
	handler(a, b) {
		this._db[a] = parseInt(b)
	};
	set drawBar(a) {
		var b = 0;
		this.bars.forEach(bar => {
			var c = Number(a[b++]) || 0;
			bar.value = -c
		})
	};
	get drawBar() {
		return this._db.join('')
	}
}
class KeyEvent {
	constructor(a, b, c) {
		this.type = a;
		Object.assign(this, {
			time: getCTX().currentTime,
			number: b.number,
			note: b.note,
			frequency: b.frequency,
			voltage: b.voltage,
			pedal: c
		})
	}
}
class cKey {
	constructor(a, b, c) {
		this.number = a;
		this.frequency = b;
		this.element = c;
		this.status = 'released';
		this.pressedClass = '';
		this.releasedClass = ''
	};
	press() {
		if (this.status == 'released') {
			this.status = 'pressed';
			this.element.className = this.pressedClass
		}
	};
	release() {
		if (this.status == 'pressed') {
			this.status = 'released';
			this.element.className = this.releasedClass
		}
	}
}
class cWhiteKey extends cKey {
	constructor(a, b, c) {
		super(a, b, c);
		this.pressedClass = 'key_white_pressed';
		this.releasedClass = 'key_white_released';
		this.element.className = this.releasedClass
	}
}
class cBlackKey extends cKey {
	constructor(a, b, c) {
		super(a, b, c);
		this.pressedClass = 'key_black_pressed';
		this.releasedClass = 'key_black_released';
		this.element.className = this.releasedClass
	}
}
class KeyBoard extends EventDispatch {
	constructor(a, b, c) {
		super();
		a = a || 'c';
		b = b || 24;
		c = c || 1;
		this.keys = [];
		this.keyCodes = [];
		this.keyCount = 0;
		this.minVoltage = 0;
		this.maxVoltage = 4;
		this.pedalPressed = !1;
		var d = 8,
			e = d / 2,
			f = winWidth() - d,
			g = Math.floor(f / 28),
			h = Math.round(g * 0.7),
			i = g - (h / 2),
			j = 4 * g,
			k = 2.5 * g,
			l = j + 10,
			m = winHeight() - l,
			n, o;
		var p = ["c", "d", "e", "f", "g", "a", "b"];
		var q = ["c#", "d#", "-", "f#", "g#", "a#", "-"];
		var r = Math.floor(g / 4);
		var s = [(-r) / 1.5, r / 1.5, , -r, 0, r];
		var t;
		var u = p.indexOf(a);
		if (u == -1) u = 0;
		this.keyCount = 0;
		o = m;
		while (c--) {
			for (n = 0; n < b; n++) {
				this.makeKey(e + (n * g), o, g, j, "white", p[u % 7]);
				t = q[u % 7];
				this.keyCount++;
				if (t != "-") {
					this.makeKey(e + i + n * g + s[u % 7], o, h, k, "black", t);
					this.keyCount++
				}
				u++
			}
			o -= l
		}
		setEventListeners(document.body, ["keydown", keyHandler, "keyup", keyUpHandler])
	};
	makeKey(a, b, c, d, e, f, g) {
		var h = create('div', {
			className: 'key_' + e,
			style: {
				width: csv(c),
				height: csv(d),
				position: "absolute",
				left: csv(a),
				top: csv(b)
			}
		});
		if (e == 'white') {
			h.key = new cWhiteKey(this.keyCount, 0, h)
		} else {
			h.key = new cBlackKey(this.keyCount, 0, h);
			h.style.zIndex = 1
		}
		h.key.note = f;
		this.keys.push(h.key);
		h.title = f + g;
		setEventListeners(h, ["mousedown", mouseHandler, "mouseenter", mouseHandler, "mouseup", mouseupHandler, "mouseleave", mouseupHandler]);
		gel('kb').appendChild(h)
	};
	bindKeys(a, b) {
		var c = b || 0;
		a.forEach(keyCode => {
			if (this.keys[c]) this.keyCodes[keyCode] = this.keys[c].number;
			c++
		})
	};
	setFrequency(a, b) {
		b = b || 0;
		this.keys.forEach(key => {
			if (key.number >= b) {
				key.frequency = getFrequency(key.note, a);
				key.element.title = key.note + a;
				if (key.note == 'b') a++
			}
		})
	};
	pressKey(a) {
		var b, c;
		if (a.type == 'keydown') {
			c = a.keyCode;
			if (c == 186) c = 59;
			var d = this.keyCodes[c];
			if (d != undefined) {
				a.preventDefault();
				b = this.keys[d]
			}
		} else {
			b = a.target.key
		}
		if (b && b.status == 'released') {
			b.voltage = (this.maxVoltage - this.minVoltage) / b.number + this.minVoltage;
			this.dispatchEvent(new KeyEvent('press', b, this.pedalPressed));
			b.press()
		}
	};
	releaseKey(a) {
		var b, c;
		if (a.type == 'keyup') {
			c = a.keyCode;
			if (c == 186) c = 59;
			var d = this.keyCodes[c];
			if (d != undefined) b = this.keys[d]
		} else {
			b = a.target.key
		}
		if (b && b.status == 'pressed') {
			this.dispatchEvent(new KeyEvent('release', b, this.pedalPressed));
			b.release()
		}
	};
	pressPedal() {
		this.pedalPressed = !0;
		this.dispatchEvent(new KeyEvent('pedal', {}, !0))
	};
	releasePedal() {
		this.pedalPressed = !1;
		this.dispatchEvent(new KeyEvent('pedal', {}, !1))
	}
}
class Player {
	constructor() {
		this.notesPlaying = [];
		this.activeNotes = {}
	};
	pitchBend() {};
	noteAfterTouch() {};
	playNote(a) {
		var b, c = a.number,
			d;
		if (c < 48) {
			d = $R.drawbar1.drawBar
		} else {
			d = $R.drawbar2.drawBar
		}
		b = new HammondTone(getCTX(), a.frequency, d);
		b.connect(Hammond.output);
		if (b.damper) b.damper &= !a.pedal;
		this.notesPlaying.push(b);
		this.activeNotes[c] = b;
		b.ondestroy = b => {
			this.destroyNote(b)
		};
		b.start()
	};
	stopNote(a) {
		var b = a.number;
		if (this.activeNotes[b]) {
			this.activeNotes[b].stop();
			delete this.activeNotes[b]
		}
	};
	destroyNote(a) {
		var b = this.notesPlaying.indexOf(a);
		if (b + 1) {
			this.notesPlaying.splice(b, 0)
		}
	};
	mute() {
		this.notesPlaying.forEach(note => {
			note.mute()
		})
	};
	changeBar(a, b) {
		var c = Object.keys(this.activeNotes);
		c.forEach(key => {
			if (b) {
				if (key > 47) this.activeNotes[key].drawBar(a)
			} else if (key < 48) this.activeNotes[key].drawBar(a)
		})
	}
}

function refreshCTX() {
	var a = getCTX(1);
	mainOutput = a.destination
}

function initReverb(a) {
	if (a) {
		var b = new ReverbrationNode(getCTX());
		mainOutput.addNode(b);
		var c = $R.controls.reverbration;
		b.effect = c.reverbrationEffect / 100;
		if ($R.reverb.impulsebuffer) {
			b.buffer = $R.reverb.impulsebuffer
		}
	} else {
		mainOutput.removeNode('ReverbrationNode')
	}
	return null
}

function mouseHandler(a) {
	if (a.buttons == 1) {
		Hammond.keyboard.pressKey(a)
	}
}

function mouseupHandler(a) {
	Hammond.keyboard.releaseKey(a)
}

function keyUpHandler(a) {
	var b = a.keyCode;
	if (b == 32) {
		Hammond.keyboard.releasePedal()
	} else Hammond.keyboard.releaseKey(a)
}

function keyHandler(a) {
	var b = a.keyCode,
		c = !0;
	if (a.ctrlKey) {
		switch (b) {
			case 65:
				useAnalyser();
				break;
			default:
				c = !1
		}
	} else {
		switch (b) {
			case 27:
				break;
			case 32:
				break;
			case 112:
				Hammond.swl.toggle();
				break;
			case 113:
				$R.drawbar2.drawBar = '888888888';
				break;
			case 114:
				$R.drawbar2.drawBar = '000000000';
				break;
			case 115:
				$R.drawbar1.drawBar = '888888888';
				break;
			case 116:
				$R.drawbar1.drawBar = '000000000';
				break;
			case 117:
				Hammond.swv.toggle();
				break;
			default:
				if (b > 111 && b < 124) {
					c = !1
				} else {
					Hammond.keyboard.pressKey(a)
				}
		}
	}
	if (c) a.preventDefault()
}

function Main() {
	if (!window.mainOutput) window.mainOutput = getCTX().destination;
	makeControls();
	makeWindows();
	$R.player = new Player;
	makeKeyboard();
	$R.drawbar1 = new DrawBar(gel('drawbar1'), 0);
	$R.drawbar2 = new DrawBar(gel('drawbar2'), 1);
	$R.drawbar1.drawBar = '888888888';
	$R.drawbar2.drawBar = '888888888';
	window.addEventListener('resize', makeKeyboard);
	initMidi()
}

function makeKeyboard() {
	var a = gel('kb');
	if ($R.keyBoard) {
		a.innerHTML = '';
		delete $R.keyBoard
	}
	var a = new KeyBoard('c', 28, 2);
	a.bindKeys(keyCodes, 48);
	a.bindKeys(lowKeyCodes, 0);
	a.setFrequency(1);
	a.setFrequency(3, 48);
	Hammond.keyboard = a;
	a.addEventListener('press', evt => {
		$R.player.playNote(evt)
	});
	a.addEventListener('release', evt => {
		$R.player.stopNote(evt)
	});
	a.addEventListener('pedal', evt => {
		if (!evt.pedal) $R.player.mute()
	});
	$R.keyBoard = a
}

function reScale() {
	if (!$R.rescaling) {
		$R.rescaling = !0;
		makeKeyboard();
		$R.rescaling = !1
	}
}

function getFrequency(a, b) {
	var c = {
		"c": 8372.018,
		"c#": 8869.844,
		"db": 8869.844,
		"d": 9397.272,
		"d#": 9956.064,
		"eb": 9956.064,
		"e": 10548.084,
		"f": 11175.304,
		"f#": 11839.82,
		"gb": 11839.82,
		"g": 12543.856,
		"g#": 13289.752,
		"ab": 13289.752,
		"a": 14080,
		"a#": 14917.24,
		"bb": 14917.24,
		"b": 15804.264
	};
	if (b == undefined) b = 4;
	if (!a) a = 'c';
	if (c[a]) return c[a] / (1 << (9 - b));
	else return 0
}

function useAnalyser(a) {
	if (a instanceof Event) a = null;
	var b = $R.analyserWindow;
	if (!b.open && !a) {
		b.open = !0;
		b.analyserNode = Hammond.output.analyser;
		b.start()
	} else {
		b.stop();
		if (b.open) b.open = !1
	}
}

function deTune(a, b) {
	return a * Math.pow(2, b / 1200)
}

function makeControls() {
	var a = gel('leslie');
	a.style.width = csv(120);
	a.style.height = csv(75);
	var b = new PressSwitch('On', gel('lbut'));
	b.addEventListener('switch', evt => {
		var c = evt.target;
		if (c.status == 'on') {
			Hammond.leslie(1)
		} else {
			Hammond.leslie(0)
		}
	});
	Hammond.swl = b;
	var d = new HorizontalSwitch(15, 50, 100, 20, 'hswhite', a);
	d.connect(v => {
		if (v) {
			Hammond.leslieMode('tremolo')
		} else {
			Hammond.leslieMode('chorale')
		}
	});
	Hammond.swlm = d;
	var a = gel('vibrato'),
		e = new SelectorButton({
			posX: 60,
			posY: 60,
			button: 'vibknob.png',
			parent: a,
			steps: 6,
			maxAngle: 5 * 60,
			startAngle: -240,
			onload: () => {
				e.location(64, 61)
			}
		});
	e.connect(v => {
		var f = ['V1', 'C1', 'V2', 'C2', 'V3', 'C3'];
		Hammond.vibratoMode(f[v])
	});
	var a = gel('vbut'),
		b = new PressSwitch('On', a);
	b.addEventListener('switch', evt => {
		var c = evt.target;
		if (c.status == 'on') {
			Hammond.vibrato(1)
		} else {
			Hammond.vibrato(0)
		}
	});
	Hammond.swv = b;
	gel('vpanel').ondragstart = retFalse
}

function setReverbrationEffect(a) {
	if (typeof a == 'object') a = a.value / 100;
	var b = mainOutput.getNodeByName('ReverbrationNode');
	if (b) {
		b.effect = a
	}
}

function setReverbrationBuffer(a) {
	if (a instanceof AudioBuffer) {
		if ($R.reverb.impulsebuffer) delete $R.reverb.impulsebuffer;
		$R.reverb.impulsebuffer = a;
		var b = mainOutput.getNodeByName('ReverbrationNode');
		if (b) b.buffer = $R.reverb.impulsebuffer
	}
}

function makeWindows() {
	var a;
	a = new AnalyserWindow({
		caption: 'Analyser',
		width: '700px',
		height: 'auto',
		padding: '4px',
		position: 'fixed',
		option: {
			drag: !0,
			min: !0
		}
	});
	$R.analyserWindow = a;
	a.addEventListener('close', () => {
		useAnalyser(!0)
	});
	a.open = !1
}

function generateReverb() {
	var a = {},
		b = document.querySelectorAll('div[id=gencontrols] input');
	b.forEach(node => {
		a[node.id] = node.value
	});
	if (reverbGen) {
		reverbGen.generateReverb(a, buffer => {
			setReverbrationBuffer(buffer)
		})
	}
} < /script></head > < body onload = Main() > < div id = cover class = cover > < /div> < div id = cab class = cab > < div id = controls class = controls > < div class = panel > < div class = trow > Leslie < /div> < div id = leslie class = rcont > < /div> < div class = brow style = 'margin-bottom:25px' > Chorale Tremolo < /div> < div class = brow id = lbut > < /div> < /div> < div > < div class = dbpanel > < div class = trow > Upper Manuel < /div> < div class = brow > 16 '      5<span class=part>1/3</span>'
8 '        4'
2 < span class = part > 2 / 3 < /span>'       2'      1<span class=part>3/
5 < /span>'    1<span class=part>1/
3 < /span>'       1'</div > < /div> < div id = drawbar2 class = drawb > < /div> < /div> < div > < div class = dbpanel > < div class = trow > Lower Manuel < /div> < div class = brow > 16 '      5<span class=part>1/3</span>'
8 '        4'
2 < span class = part > 2 / 3 < /span>'       2'      1<span class=part>3/
5 < /span>'    1<span class=part>1/
3 < /span>'       1'</div > < /div> < div id = drawbar1 class = drawb > < /div> < /div> < div class = panel > < div class = trow > Vibrato & Chorus < /div> < div id = vibrato class = rcont > < img id = 'vpanel'
src = 'vibrato.png' > < /div> < div class = brow id = vbut > < /div> < /div> < /div> < div id = kb > < /div> < /div> < /body></html >