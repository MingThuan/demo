window.__require=function e(n,w,t){function r(o,s){if(!w[o]){if(!n[o]){var a=o.split("/");if(a=a[a.length-1],!n[a]){var c="function"==typeof __require&&__require;if(!s&&c)return c(a,!0);if(i)return i(a,!0);throw new Error("Cannot find module '"+o+"'")}o=a}var h=w[o]={exports:{}};n[o][0].call(h.exports,function(e){return r(n[o][1][e]||e)},h,h.exports,e,n,w,t)}return w[o].exports}for(var i="function"==typeof __require&&__require,o=0;o<t.length;o++)r(t[o]);return r}({PointMgr:[function(e,n,w){"use strict";cc._RF.push(n,"fc568lsraxIepcHbR93Q+ki","PointMgr");var t=this&&this.__extends||function(){var e=function(n,w){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,n){e.__proto__=n}||function(e,n){for(var w in n)n.hasOwnProperty(w)&&(e[w]=n[w])})(n,w)};return function(n,w){function t(){this.constructor=n}e(n,w),n.prototype=null===w?Object.create(w):(t.prototype=w.prototype,new t)}}(),r=this&&this.__decorate||function(e,n,w,t){var r,i=arguments.length,o=i<3?n:null===t?t=Object.getOwnPropertyDescriptor(n,w):t;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,n,w,t);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(o=(i<3?r(o):i>3?r(n,w,o):r(n,w))||o);return i>3&&o&&Object.defineProperty(n,w,o),o};Object.defineProperty(w,"__esModule",{value:!0});var i=e("./utils/Timer"),o=e("./lib/dollar"),s=cc._decorator,a=s.ccclass,c=s.property,h=function(e){function n(){var n=null!==e&&e.apply(this,arguments)||this;return n.pointPf=null,n.bg=null,n.lblDebug=null,n.timeSpawn=new i.default(.05),n.libOneDollar=new o,n.arrPoints=[],n}return t(n,e),n.prototype.onLoad=function(){this.lblDebug.string="",this.bg.on(cc.Node.EventType.TOUCH_MOVE,function(e){if(this.timeSpawn.IsDone()){this.timeSpawn.Reset();var n=cc.instantiate(this.pointPf);n.x=e.getLocationX(),n.y=e.getLocationY(),n.parent=this.node}this.arrPoints.push({X:e.getLocationX(),Y:-1*e.getLocationY()})},this),this.bg.on(cc.Node.EventType.TOUCH_START,function(e){this.arrPoints=[],this.lblDebug.string=""},this),this.bg.on(cc.Node.EventType.TOUCH_END,function(e){this.lblDebug.string=this.libOneDollar.Recognize(this.arrPoints,!1).Name,console.log(this.libOneDollar.Recognize(this.arrPoints,!1))},this)},n.prototype.start=function(){},n.prototype.update=function(e){this.timeSpawn.Update(e)},r([c(cc.Prefab)],n.prototype,"pointPf",void 0),r([c(cc.Node)],n.prototype,"bg",void 0),r([c(cc.Label)],n.prototype,"lblDebug",void 0),n=r([a],n)}(cc.Component);w.default=h,cc._RF.pop()},{"./lib/dollar":"dollar","./utils/Timer":"Timer"}],Point:[function(e,n,w){"use strict";cc._RF.push(n,"8931a1H969Fc5gsnjshZ0hh","Point");var t=this&&this.__extends||function(){var e=function(n,w){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,n){e.__proto__=n}||function(e,n){for(var w in n)n.hasOwnProperty(w)&&(e[w]=n[w])})(n,w)};return function(n,w){function t(){this.constructor=n}e(n,w),n.prototype=null===w?Object.create(w):(t.prototype=w.prototype,new t)}}(),r=this&&this.__decorate||function(e,n,w,t){var r,i=arguments.length,o=i<3?n:null===t?t=Object.getOwnPropertyDescriptor(n,w):t;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,n,w,t);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(o=(i<3?r(o):i>3?r(n,w,o):r(n,w))||o);return i>3&&o&&Object.defineProperty(n,w,o),o};Object.defineProperty(w,"__esModule",{value:!0});var i=e("../utils/Timer"),o=cc._decorator,s=o.ccclass,a=(o.property,function(e){function n(){var n=null!==e&&e.apply(this,arguments)||this;return n.timeExist=new i.default(1),n}return t(n,e),n.prototype.start=function(){},n.prototype.update=function(e){this.timeExist.Update(e),this.node.opacity=255*this.timeExist.GetPercent(),this.timeExist.IsDone()&&(this.node.active=!1)},n=r([s],n)}(cc.Component));w.default=a,cc._RF.pop()},{"../utils/Timer":"Timer"}],Timer:[function(e,n,w){"use strict";cc._RF.push(n,"7823aQJ0IZPIpWgh/z+Li+J","Timer"),Object.defineProperty(w,"__esModule",{value:!0});var t=function(){function e(e){void 0===e&&(e=null),this.timer=0,this.duration=0,this.overhead=0,this.isDone=!0,this.timer=e,this.duration=e,this.overhead=0,this.isDone=!1}return e.prototype.SetDuration=function(e){this.timer=e,this.duration=e,this.overhead=0,this.isDone=!1},e.prototype.GetDuration=function(){return this.duration},e.prototype.GetTime=function(){return this.timer},e.prototype.GetPercent=function(){return this.timer/this.duration},e.prototype.Reset=function(){this.timer=this.duration,this.overhead=0,this.isDone=!1},e.prototype.IsDone=function(){return 0===this.timer},e.prototype.FirstFinished=function(){return!(this.timer>0)&&(!this.isDone&&(this.isDone=!0,!0))},e.prototype.GetOverhead=function(){return this.overhead},e.prototype.Update=function(e){0!==this.timer&&(this.timer-=e,this.timer<0&&(this.overhead=-this.timer,this.timer=0))},e}();w.default=t,cc._RF.pop()},{}],abc:[function(e,n,w){"use strict";cc._RF.push(n,"e371b/5GeBMjaw42ZZM47T8","abc"),w.__esModule=!0,w.default=void 0;w.default=function(){console.log("abcccc")},n.exports=w.default,cc._RF.pop()},{}],dollar:[function(e,n,w){"use strict";cc._RF.push(n,"6a5b3lqAYhHmbBGcyDQeYnk","dollar"),w.__esModule=!0,w.default=void 0;var t=function(e,n){this.X=e,this.Y=n},r=function(e,n,w,t){this.X=e,this.Y=n,this.Width=w,this.Height=t},i=function(e,n){for(var w=0,t=0;t<e.length;t++)w+=s(e[t],n[t]);return w/e.length},o=function(e){for(var n=0,w=1;w<e.length;w++)n+=s(e[w-1],e[w]);return n},s=function(e,n){var w=n.X-e.X,t=n.Y-e.Y;return Math.sqrt(w*w+t*t)},a=function(e,n){for(var w=o(e)/(n-1),r=0,i=new Array(e[0]),a=1;a<e.length;a++){var c=s(e[a-1],e[a]);if(r+c>=w){var h=e[a-1].X+(w-r)/c*(e[a].X-e[a-1].X),u=e[a-1].Y+(w-r)/c*(e[a].Y-e[a-1].Y),l=new t(h,u);i[i.length]=l,e.splice(a,0,l),r=0}else r+=c}return i.length==n-1&&(i[i.length]=new t(e[e.length-1].X,e[e.length-1].Y)),i},c=function(e){var n=g(e);return Math.atan2(n.Y-e[0].Y,n.X-e[0].X)},h=function(e,n){for(var w=g(e),r=Math.cos(n),i=Math.sin(n),o=new Array,s=0;s<e.length;s++){var a=(e[s].X-w.X)*r-(e[s].Y-w.Y)*i+w.X,c=(e[s].X-w.X)*i+(e[s].Y-w.Y)*r+w.Y;o[o.length]=new t(a,c)}return o},u=function(e,n){for(var w=v(e),r=new Array,i=0;i<e.length;i++){var o=e[i].X*(n/w.Width),s=e[i].Y*(n/w.Height);r[r.length]=new t(o,s)}return r},l=function(e,n){for(var w=g(e),r=new Array,i=0;i<e.length;i++){var o=e[i].X+n.X-w.X,s=e[i].Y+n.Y-w.Y;r[r.length]=new t(o,s)}return r},f=function(e){for(var n=0,w=new Array,t=0;t<e.length;t++)w[w.length]=e[t].X,w[w.length]=e[t].Y,n+=e[t].X*e[t].X+e[t].Y*e[t].Y;var r=Math.sqrt(n);for(t=0;t<w.length;t++)w[t]/=r;return w},p=function(e,n){for(var w=0,t=0,r=0;r<e.length;r+=2)w+=e[r]*n[r]+e[r+1]*n[r+1],t+=e[r]*n[r+1]-e[r+1]*n[r];var i=Math.atan(t/w);return Math.acos(w*Math.cos(i)+t*Math.sin(i))},d=function(e,n,w,t,r){for(var i=A*w+(1-A)*t,o=y(e,n,i),s=(1-A)*w+A*t,a=y(e,n,s);Math.abs(t-w)>r;)o<a?(t=s,s=i,a=o,o=y(e,n,i=A*w+(1-A)*t)):(w=i,i=s,o=a,a=y(e,n,s=(1-A)*w+A*t));return Math.min(o,a)},y=function(e,n,w){var t=h(e,w);return i(t,n.Points)},g=function(e){for(var n=0,w=0,r=0;r<e.length;r++)n+=e[r].X,w+=e[r].Y;return n/=e.length,w/=e.length,new t(n,w)},v=function(e){for(var n=1/0,w=-1/0,t=1/0,i=-1/0,o=0;o<e.length;o++)n=Math.min(n,e[o].X),t=Math.min(t,e[o].Y),w=Math.max(w,e[o].X),i=Math.max(i,e[o].Y);return new r(n,t,w-n,i-t)},_=function(e,n){this.Name=e,this.Points=a(n,P);var w=c(this.Points);this.Points=h(this.Points,-w),this.Points=u(this.Points,U),this.Points=l(this.Points,k),this.Vector=f(this.Points)},b=function(e,n,w){this.Name=e,this.Score=n,this.Time=w},m=function(e){return e*Math.PI/180},P=64,U=250,k=new t(0,0),Y=.5*Math.sqrt(U*U+U*U),M=m(45),X=m(2),A=.5*(-1+Math.sqrt(5));w.default=function(){this.Recognize=function(e,n){for(var w=Date.now(),t=new _("",e),r=-1,i=1/0,o=0;o<this.Unistrokes.length;o++){var s;(s=n?p(this.Unistrokes[o].Vector,t.Vector):d(t.Points,this.Unistrokes[o],-M,+M,X))<i&&(i=s,r=o)}var a=Date.now();return-1==r?new b("No match.",0,a-w):new b(this.Unistrokes[r].Name,n?1-i:1-i/Y,a-w)},this.AddGesture=function(e,n){this.Unistrokes[this.Unistrokes.length]=new _(e,n);for(var w=0,t=0;t<this.Unistrokes.length;t++)this.Unistrokes[t].Name==e&&w++;return w},this.DeleteUserGestures=function(){return this.Unistrokes.length=16,16},this.Unistrokes=new Array(16),this.Unistrokes[0]=new _("triangle",new Array(new t(137,139),new t(135,141),new t(133,144),new t(132,146),new t(130,149),new t(128,151),new t(126,155),new t(123,160),new t(120,166),new t(116,171),new t(112,177),new t(107,183),new t(102,188),new t(100,191),new t(95,195),new t(90,199),new t(86,203),new t(82,206),new t(80,209),new t(75,213),new t(73,213),new t(70,216),new t(67,219),new t(64,221),new t(61,223),new t(60,225),new t(62,226),new t(65,225),new t(67,226),new t(74,226),new t(77,227),new t(85,229),new t(91,230),new t(99,231),new t(108,232),new t(116,233),new t(125,233),new t(134,234),new t(145,233),new t(153,232),new t(160,233),new t(170,234),new t(177,235),new t(179,236),new t(186,237),new t(193,238),new t(198,239),new t(200,237),new t(202,239),new t(204,238),new t(206,234),new t(205,230),new t(202,222),new t(197,216),new t(192,207),new t(186,198),new t(179,189),new t(174,183),new t(170,178),new t(164,171),new t(161,168),new t(154,160),new t(148,155),new t(143,150),new t(138,148),new t(136,148))),this.Unistrokes[1]=new _("x",new Array(new t(87,142),new t(89,145),new t(91,148),new t(93,151),new t(96,155),new t(98,157),new t(100,160),new t(102,162),new t(106,167),new t(108,169),new t(110,171),new t(115,177),new t(119,183),new t(123,189),new t(127,193),new t(129,196),new t(133,200),new t(137,206),new t(140,209),new t(143,212),new t(146,215),new t(151,220),new t(153,222),new t(155,223),new t(157,225),new t(158,223),new t(157,218),new t(155,211),new t(154,208),new t(152,200),new t(150,189),new t(148,179),new t(147,170),new t(147,158),new t(147,148),new t(147,141),new t(147,136),new t(144,135),new t(142,137),new t(140,139),new t(135,145),new t(131,152),new t(124,163),new t(116,177),new t(108,191),new t(100,206),new t(94,217),new t(91,222),new t(89,225),new t(87,226),new t(87,224))),this.Unistrokes[2]=new _("rectangle",new Array(new t(78,149),new t(78,153),new t(78,157),new t(78,160),new t(79,162),new t(79,164),new t(79,167),new t(79,169),new t(79,173),new t(79,178),new t(79,183),new t(80,189),new t(80,193),new t(80,198),new t(80,202),new t(81,208),new t(81,210),new t(81,216),new t(82,222),new t(82,224),new t(82,227),new t(83,229),new t(83,231),new t(85,230),new t(88,232),new t(90,233),new t(92,232),new t(94,233),new t(99,232),new t(102,233),new t(106,233),new t(109,234),new t(117,235),new t(123,236),new t(126,236),new t(135,237),new t(142,238),new t(145,238),new t(152,238),new t(154,239),new t(165,238),new t(174,237),new t(179,236),new t(186,235),new t(191,235),new t(195,233),new t(197,233),new t(200,233),new t(201,235),new t(201,233),new t(199,231),new t(198,226),new t(198,220),new t(196,207),new t(195,195),new t(195,181),new t(195,173),new t(195,163),new t(194,155),new t(192,145),new t(192,143),new t(192,138),new t(191,135),new t(191,133),new t(191,130),new t(190,128),new t(188,129),new t(186,129),new t(181,132),new t(173,131),new t(162,131),new t(151,132),new t(149,132),new t(138,132),new t(136,132),new t(122,131),new t(120,131),new t(109,130),new t(107,130),new t(90,132),new t(81,133),new t(76,133))),this.Unistrokes[3]=new _("circle",new Array(new t(127,141),new t(124,140),new t(120,139),new t(118,139),new t(116,139),new t(111,140),new t(109,141),new t(104,144),new t(100,147),new t(96,152),new t(93,157),new t(90,163),new t(87,169),new t(85,175),new t(83,181),new t(82,190),new t(82,195),new t(83,200),new t(84,205),new t(88,213),new t(91,216),new t(96,219),new t(103,222),new t(108,224),new t(111,224),new t(120,224),new t(133,223),new t(142,222),new t(152,218),new t(160,214),new t(167,210),new t(173,204),new t(178,198),new t(179,196),new t(182,188),new t(182,177),new t(178,167),new t(170,150),new t(163,138),new t(152,130),new t(143,129),new t(140,131),new t(129,136),new t(126,139))),this.Unistrokes[4]=new _("check",new Array(new t(91,185),new t(93,185),new t(95,185),new t(97,185),new t(100,188),new t(102,189),new t(104,190),new t(106,193),new t(108,195),new t(110,198),new t(112,201),new t(114,204),new t(115,207),new t(117,210),new t(118,212),new t(120,214),new t(121,217),new t(122,219),new t(123,222),new t(124,224),new t(126,226),new t(127,229),new t(129,231),new t(130,233),new t(129,231),new t(129,228),new t(129,226),new t(129,224),new t(129,221),new t(129,218),new t(129,212),new t(129,208),new t(130,198),new t(132,189),new t(134,182),new t(137,173),new t(143,164),new t(147,157),new t(151,151),new t(155,144),new t(161,137),new t(165,131),new t(171,122),new t(174,118),new t(176,114),new t(177,112),new t(177,114),new t(175,116),new t(173,118))),this.Unistrokes[5]=new _("caret",new Array(new t(79,245),new t(79,242),new t(79,239),new t(80,237),new t(80,234),new t(81,232),new t(82,230),new t(84,224),new t(86,220),new t(86,218),new t(87,216),new t(88,213),new t(90,207),new t(91,202),new t(92,200),new t(93,194),new t(94,192),new t(96,189),new t(97,186),new t(100,179),new t(102,173),new t(105,165),new t(107,160),new t(109,158),new t(112,151),new t(115,144),new t(117,139),new t(119,136),new t(119,134),new t(120,132),new t(121,129),new t(122,127),new t(124,125),new t(126,124),new t(129,125),new t(131,127),new t(132,130),new t(136,139),new t(141,154),new t(145,166),new t(151,182),new t(156,193),new t(157,196),new t(161,209),new t(162,211),new t(167,223),new t(169,229),new t(170,231),new t(173,237),new t(176,242),new t(177,244),new t(179,250),new t(181,255),new t(182,257))),this.Unistrokes[6]=new _("zig-zag",new Array(new t(307,216),new t(333,186),new t(356,215),new t(375,186),new t(399,216),new t(418,186))),this.Unistrokes[7]=new _("arrow",new Array(new t(68,222),new t(70,220),new t(73,218),new t(75,217),new t(77,215),new t(80,213),new t(82,212),new t(84,210),new t(87,209),new t(89,208),new t(92,206),new t(95,204),new t(101,201),new t(106,198),new t(112,194),new t(118,191),new t(124,187),new t(127,186),new t(132,183),new t(138,181),new t(141,180),new t(146,178),new t(154,173),new t(159,171),new t(161,170),new t(166,167),new t(168,167),new t(171,166),new t(174,164),new t(177,162),new t(180,160),new t(182,158),new t(183,156),new t(181,154),new t(178,153),new t(171,153),new t(164,153),new t(160,153),new t(150,154),new t(147,155),new t(141,157),new t(137,158),new t(135,158),new t(137,158),new t(140,157),new t(143,156),new t(151,154),new t(160,152),new t(170,149),new t(179,147),new t(185,145),new t(192,144),new t(196,144),new t(198,144),new t(200,144),new t(201,147),new t(199,149),new t(194,157),new t(191,160),new t(186,167),new t(180,176),new t(177,179),new t(171,187),new t(169,189),new t(165,194),new t(164,196))),this.Unistrokes[8]=new _("left square bracket",new Array(new t(140,124),new t(138,123),new t(135,122),new t(133,123),new t(130,123),new t(128,124),new t(125,125),new t(122,124),new t(120,124),new t(118,124),new t(116,125),new t(113,125),new t(111,125),new t(108,124),new t(106,125),new t(104,125),new t(102,124),new t(100,123),new t(98,123),new t(95,124),new t(93,123),new t(90,124),new t(88,124),new t(85,125),new t(83,126),new t(81,127),new t(81,129),new t(82,131),new t(82,134),new t(83,138),new t(84,141),new t(84,144),new t(85,148),new t(85,151),new t(86,156),new t(86,160),new t(86,164),new t(86,168),new t(87,171),new t(87,175),new t(87,179),new t(87,182),new t(87,186),new t(88,188),new t(88,195),new t(88,198),new t(88,201),new t(88,207),new t(89,211),new t(89,213),new t(89,217),new t(89,222),new t(88,225),new t(88,229),new t(88,231),new t(88,233),new t(88,235),new t(89,237),new t(89,240),new t(89,242),new t(91,241),new t(94,241),new t(96,240),new t(98,239),new t(105,240),new t(109,240),new t(113,239),new t(116,240),new t(121,239),new t(130,240),new t(136,237),new t(139,237),new t(144,238),new t(151,237),new t(157,236),new t(159,237))),this.Unistrokes[9]=new _("right square bracket",new Array(new t(112,138),new t(112,136),new t(115,136),new t(118,137),new t(120,136),new t(123,136),new t(125,136),new t(128,136),new t(131,136),new t(134,135),new t(137,135),new t(140,134),new t(143,133),new t(145,132),new t(147,132),new t(149,132),new t(152,132),new t(153,134),new t(154,137),new t(155,141),new t(156,144),new t(157,152),new t(158,161),new t(160,170),new t(162,182),new t(164,192),new t(166,200),new t(167,209),new t(168,214),new t(168,216),new t(169,221),new t(169,223),new t(169,228),new t(169,231),new t(166,233),new t(164,234),new t(161,235),new t(155,236),new t(147,235),new t(140,233),new t(131,233),new t(124,233),new t(117,235),new t(114,238),new t(112,238))),this.Unistrokes[10]=new _("v",new Array(new t(89,164),new t(90,162),new t(92,162),new t(94,164),new t(95,166),new t(96,169),new t(97,171),new t(99,175),new t(101,178),new t(103,182),new t(106,189),new t(108,194),new t(111,199),new t(114,204),new t(117,209),new t(119,214),new t(122,218),new t(124,222),new t(126,225),new t(128,228),new t(130,229),new t(133,233),new t(134,236),new t(136,239),new t(138,240),new t(139,242),new t(140,244),new t(142,242),new t(142,240),new t(142,237),new t(143,235),new t(143,233),new t(145,229),new t(146,226),new t(148,217),new t(149,208),new t(149,205),new t(151,196),new t(151,193),new t(153,182),new t(155,172),new t(157,165),new t(159,160),new t(162,155),new t(164,150),new t(165,148),new t(166,146))),this.Unistrokes[11]=new _("delete",new Array(new t(123,129),new t(123,131),new t(124,133),new t(125,136),new t(127,140),new t(129,142),new t(133,148),new t(137,154),new t(143,158),new t(145,161),new t(148,164),new t(153,170),new t(158,176),new t(160,178),new t(164,183),new t(168,188),new t(171,191),new t(175,196),new t(178,200),new t(180,202),new t(181,205),new t(184,208),new t(186,210),new t(187,213),new t(188,215),new t(186,212),new t(183,211),new t(177,208),new t(169,206),new t(162,205),new t(154,207),new t(145,209),new t(137,210),new t(129,214),new t(122,217),new t(118,218),new t(111,221),new t(109,222),new t(110,219),new t(112,217),new t(118,209),new t(120,207),new t(128,196),new t(135,187),new t(138,183),new t(148,167),new t(157,153),new t(163,145),new t(165,142),new t(172,133),new t(177,127),new t(179,127),new t(180,125))),this.Unistrokes[12]=new _("left curly brace",new Array(new t(150,116),new t(147,117),new t(145,116),new t(142,116),new t(139,117),new t(136,117),new t(133,118),new t(129,121),new t(126,122),new t(123,123),new t(120,125),new t(118,127),new t(115,128),new t(113,129),new t(112,131),new t(113,134),new t(115,134),new t(117,135),new t(120,135),new t(123,137),new t(126,138),new t(129,140),new t(135,143),new t(137,144),new t(139,147),new t(141,149),new t(140,152),new t(139,155),new t(134,159),new t(131,161),new t(124,166),new t(121,166),new t(117,166),new t(114,167),new t(112,166),new t(114,164),new t(116,163),new t(118,163),new t(120,162),new t(122,163),new t(125,164),new t(127,165),new t(129,166),new t(130,168),new t(129,171),new t(127,175),new t(125,179),new t(123,184),new t(121,190),new t(120,194),new t(119,199),new t(120,202),new t(123,207),new t(127,211),new t(133,215),new t(142,219),new t(148,220),new t(151,221))),this.Unistrokes[13]=new _("right curly brace",new Array(new t(117,132),new t(115,132),new t(115,129),new t(117,129),new t(119,128),new t(122,127),new t(125,127),new t(127,127),new t(130,127),new t(133,129),new t(136,129),new t(138,130),new t(140,131),new t(143,134),new t(144,136),new t(145,139),new t(145,142),new t(145,145),new t(145,147),new t(145,149),new t(144,152),new t(142,157),new t(141,160),new t(139,163),new t(137,166),new t(135,167),new t(133,169),new t(131,172),new t(128,173),new t(126,176),new t(125,178),new t(125,180),new t(125,182),new t(126,184),new t(128,187),new t(130,187),new t(132,188),new t(135,189),new t(140,189),new t(145,189),new t(150,187),new t(155,186),new t(157,185),new t(159,184),new t(156,185),new t(154,185),new t(149,185),new t(145,187),new t(141,188),new t(136,191),new t(134,191),new t(131,192),new t(129,193),new t(129,195),new t(129,197),new t(131,200),new t(133,202),new t(136,206),new t(139,211),new t(142,215),new t(145,220),new t(147,225),new t(148,231),new t(147,239),new t(144,244),new t(139,248),new t(134,250),new t(126,253),new t(119,253),new t(115,253))),this.Unistrokes[14]=new _("star",new Array(new t(75,250),new t(75,247),new t(77,244),new t(78,242),new t(79,239),new t(80,237),new t(82,234),new t(82,232),new t(84,229),new t(85,225),new t(87,222),new t(88,219),new t(89,216),new t(91,212),new t(92,208),new t(94,204),new t(95,201),new t(96,196),new t(97,194),new t(98,191),new t(100,185),new t(102,178),new t(104,173),new t(104,171),new t(105,164),new t(106,158),new t(107,156),new t(107,152),new t(108,145),new t(109,141),new t(110,139),new t(112,133),new t(113,131),new t(116,127),new t(117,125),new t(119,122),new t(121,121),new t(123,120),new t(125,122),new t(125,125),new t(127,130),new t(128,133),new t(131,143),new t(136,153),new t(140,163),new t(144,172),new t(145,175),new t(151,189),new t(156,201),new t(161,213),new t(166,225),new t(169,233),new t(171,236),new t(174,243),new t(177,247),new t(178,249),new t(179,251),new t(180,253),new t(180,255),new t(179,257),new t(177,257),new t(174,255),new t(169,250),new t(164,247),new t(160,245),new t(149,238),new t(138,230),new t(127,221),new t(124,220),new t(112,212),new t(110,210),new t(96,201),new t(84,195),new t(74,190),new t(64,182),new t(55,175),new t(51,172),new t(49,170),new t(51,169),new t(56,169),new t(66,169),new t(78,168),new t(92,166),new t(107,164),new t(123,161),new t(140,162),new t(156,162),new t(171,160),new t(173,160),new t(186,160),new t(195,160),new t(198,161),new t(203,163),new t(208,163),new t(206,164),new t(200,167),new t(187,172),new t(174,179),new t(172,181),new t(153,192),new t(137,201),new t(123,211),new t(112,220),new t(99,229),new t(90,237),new t(80,244),new t(73,250),new t(69,254),new t(69,252))),this.Unistrokes[15]=new _("pigtail",new Array(new t(81,219),new t(84,218),new t(86,220),new t(88,220),new t(90,220),new t(92,219),new t(95,220),new t(97,219),new t(99,220),new t(102,218),new t(105,217),new t(107,216),new t(110,216),new t(113,214),new t(116,212),new t(118,210),new t(121,208),new t(124,205),new t(126,202),new t(129,199),new t(132,196),new t(136,191),new t(139,187),new t(142,182),new t(144,179),new t(146,174),new t(148,170),new t(149,168),new t(151,162),new t(152,160),new t(152,157),new t(152,155),new t(152,151),new t(152,149),new t(152,146),new t(149,142),new t(148,139),new t(145,137),new t(141,135),new t(139,135),new t(134,136),new t(130,140),new t(128,142),new t(126,145),new t(122,150),new t(119,158),new t(117,163),new t(115,170),new t(114,175),new t(117,184),new t(120,190),new t(125,199),new t(129,203),new t(133,208),new t(138,213),new t(145,215),new t(155,218),new t(164,219),new t(166,219),new t(177,219),new t(182,218),new t(192,216),new t(196,213),new t(199,212),new t(201,211)))},n.exports=w.default,cc._RF.pop()},{}]},{},["PointMgr","abc","dollar","Point","Timer"]);