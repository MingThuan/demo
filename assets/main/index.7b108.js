window.__require=function t(e,n,o){function r(c,a){if(!n[c]){if(!e[c]){var s=c.split("/");if(s=s[s.length-1],!e[s]){var p="function"==typeof __require&&__require;if(!a&&p)return p(s,!0);if(i)return i(s,!0);throw new Error("Cannot find module '"+c+"'")}c=s}var f=n[c]={exports:{}};e[c][0].call(f.exports,function(t){return r(e[c][1][t]||t)},f,f.exports,t,e,n,o)}return n[c].exports}for(var i="function"==typeof __require&&__require,c=0;c<o.length;c++)r(o[c]);return r}({CardMgr:[function(t,e,n){"use strict";cc._RF.push(e,"718e2ifpYhIMauufqqF5mBY","CardMgr");var o=this&&this.__extends||function(){var t=function(e,n){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(e,n)};return function(e,n){function o(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(o.prototype=n.prototype,new o)}}(),r=this&&this.__decorate||function(t,e,n,o){var r,i=arguments.length,c=i<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,n,o);else for(var a=t.length-1;a>=0;a--)(r=t[a])&&(c=(i<3?r(c):i>3?r(e,n,c):r(e,n))||c);return i>3&&c&&Object.defineProperty(e,n,c),c};Object.defineProperty(n,"__esModule",{value:!0});var i=cc._decorator,c=i.ccclass,a=i.property,s=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.prefab=null,e}var n;return o(e,t),n=e,e.prototype.onLoad=function(){n.Instance=this,this.listCards=[];for(var t=0;t<this.node.children.length;t++){var e=cc.instantiate(this.prefab);e.active=!0,e.parent=this.node.children[t];var o=e.getComponent("Card");o.Init(t),this.listCards.push(o)}},e.prototype.start=function(){},e.prototype.ShowGift=function(t){if(t)for(var e=0,n=this.listCards;e<n.length;e++){(i=n[e]).IsChosen()?i.ShowReward():i.ShowGift()}else for(var o=0,r=this.listCards;o<r.length;o++){var i;(i=r[o]).HideGift()}},e.prototype.ResetForNewTurn=function(){this.ShowGift(!1)},e.prototype.add=function(){cc.instantiate(this.prefab).active=!0},r([a(cc.Prefab)],e.prototype,"prefab",void 0),e=n=r([c],e)}(cc.Component);n.default=s,cc._RF.pop()},{}],Card:[function(t,e,n){"use strict";cc._RF.push(e,"5b97bzoz0ZI85zKwKcQ84AH","Card");var o=this&&this.__extends||function(){var t=function(e,n){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(e,n)};return function(e,n){function o(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(o.prototype=n.prototype,new o)}}(),r=this&&this.__decorate||function(t,e,n,o){var r,i=arguments.length,c=i<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,n,o);else for(var a=t.length-1;a>=0;a--)(r=t[a])&&(c=(i<3?r(c):i>3?r(e,n,c):r(e,n))||c);return i>3&&c&&Object.defineProperty(e,n,c),c};Object.defineProperty(n,"__esModule",{value:!0});var i=cc._decorator,c=i.ccclass,a=i.property,s=t("../game/GameDefine"),p=t("../states/Manager"),f=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.sprites=[],e.listGift=[],e.rewards=[],e}return o(e,t),e.prototype.onLoad=function(){this.node.on(cc.Node.EventType.TOUCH_END,function(t){p.default.Instance.GetCurrentState()!=s.GameDefine.STATE_INGAME||this.isShowGift||(p.default.Instance.PushState(s.GameDefine.STATE_POPUP_CHOOSE_GIFT),this.isChosen=!0)},this),this.gift=this.node.getChildByName("giftText"),this.image=this.node.getChildByName("image"),this.gift.active=!1,this.isChosen=!1,this.isShowGift=!1,console.log("onLoad Card")},e.prototype.start=function(){},e.prototype.Init=function(t){this.id=t,this.image.getComponent(cc.Sprite).spriteFrame=this.sprites[t]},e.prototype.IsChosen=function(){return this.isChosen},e.prototype.ShowGift=function(){this.gift.getComponent(cc.Sprite).spriteFrame=this.listGift[2],this.gift.active=!0,this.isShowGift=!0},e.prototype.ShowReward=function(){this.image.getComponent(cc.Sprite).spriteFrame=this.rewards[0],this.isShowGift=!0},e.prototype.HideGift=function(){this.gift.active=!1,this.image.getComponent(cc.Sprite).spriteFrame=this.sprites[this.id],this.isChosen=!1,this.isShowGift=!1},r([a([cc.SpriteFrame])],e.prototype,"sprites",void 0),r([a([cc.SpriteFrame])],e.prototype,"listGift",void 0),r([a([cc.SpriteFrame])],e.prototype,"rewards",void 0),e=r([c],e)}(cc.Component);n.default=f,cc._RF.pop()},{"../game/GameDefine":"GameDefine","../states/Manager":"Manager"}],ChooseGift:[function(t,e,n){"use strict";cc._RF.push(e,"3a83amMLx5FTI8RwO2IVX3l","ChooseGift");var o=this&&this.__extends||function(){var t=function(e,n){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(e,n)};return function(e,n){function o(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(o.prototype=n.prototype,new o)}}(),r=this&&this.__decorate||function(t,e,n,o){var r,i=arguments.length,c=i<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,n,o);else for(var a=t.length-1;a>=0;a--)(r=t[a])&&(c=(i<3?r(c):i>3?r(e,n,c):r(e,n))||c);return i>3&&c&&Object.defineProperty(e,n,c),c};Object.defineProperty(n,"__esModule",{value:!0});var i=cc._decorator,c=i.ccclass,a=i.property,s=t("../../game/GameDefine"),p=t("../Manager"),f=t("../InGame"),u=t("../../game/CardMgr"),l=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.btnOk=null,e.btnNo=null,e}return o(e,t),e.prototype.onLoad=function(){var t=window.innerWidth,e=window.innerHeight;this.getComponent(cc.Graphics).fillRect(-t/2,-e/2,t,e),this.btnOk.on(cc.Node.EventType.TOUCH_END,function(t){p.default.Instance.PopState(),p.default.Instance.PushState(s.GameDefine.STATE_POPUP_CONGRATULATIONS),f.default.Instance.ReduceTurn(),u.default.Instance.ShowGift(!0),f.default.Instance.ShowReward(!0)},this),this.btnNo.on(cc.Node.EventType.TOUCH_END,function(t){p.default.Instance.PopState()},this)},e.prototype.start=function(){},r([a(cc.Node)],e.prototype,"btnOk",void 0),r([a(cc.Node)],e.prototype,"btnNo",void 0),e=r([c],e)}(cc.Component);n.default=l,cc._RF.pop()},{"../../game/CardMgr":"CardMgr","../../game/GameDefine":"GameDefine","../InGame":"InGame","../Manager":"Manager"}],Congratulation:[function(t,e,n){"use strict";cc._RF.push(e,"c923et/E2tIFabYZT5kxc8x","Congratulation");var o=this&&this.__extends||function(){var t=function(e,n){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(e,n)};return function(e,n){function o(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(o.prototype=n.prototype,new o)}}(),r=this&&this.__decorate||function(t,e,n,o){var r,i=arguments.length,c=i<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,n,o);else for(var a=t.length-1;a>=0;a--)(r=t[a])&&(c=(i<3?r(c):i>3?r(e,n,c):r(e,n))||c);return i>3&&c&&Object.defineProperty(e,n,c),c};Object.defineProperty(n,"__esModule",{value:!0});var i=cc._decorator,c=i.ccclass,a=i.property,s=t("../Manager"),p=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.btnClose=null,e}return o(e,t),e.prototype.onLoad=function(){var t=window.innerWidth,e=window.innerHeight;this.getComponent(cc.Graphics).fillRect(-t/2,-e/2,t,e),this.btnClose.on(cc.Node.EventType.TOUCH_END,function(t){s.default.Instance.PopState()},this)},e.prototype.start=function(){},r([a(cc.Node)],e.prototype,"btnClose",void 0),e=r([c],e)}(cc.Component);n.default=p,cc._RF.pop()},{"../Manager":"Manager"}],GameDefine:[function(t,e,n){"use strict";cc._RF.push(e,"be5dbpqYfpFIYKz6vg1hnGO","GameDefine"),Object.defineProperty(n,"__esModule",{value:!0}),n.GameDefine=void 0;var o=0;n.GameDefine={GAME_WIDTH:576,GAME_HEIGHT:1024,GAME_GROUND:-240,GAME_DEBUG:!1,STATE_PRELOAD:o++,STATE_INGAME:o++,STATE_POPUP_GET_1_ATTEMPT:o++,STATE_POPUP_CHOOSE_GIFT:o++,STATE_POPUP_CONGRATULATIONS:o++,STATE_POPUP_OUT_OF_PLAY:o++,STATE_POPUP_MORE_INFO:o++,STATE_POPUP_REDEEM:o++,STATE_POPUP_REDEEM_ZONE:o++,STATE_POPUP_GAME_RULES:o++},cc._RF.pop()},{}],GetOneAttempt:[function(t,e,n){"use strict";cc._RF.push(e,"ad2e7fd8SdBF7PA/HDrXWsC","GetOneAttempt");var o=this&&this.__extends||function(){var t=function(e,n){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(e,n)};return function(e,n){function o(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(o.prototype=n.prototype,new o)}}(),r=this&&this.__decorate||function(t,e,n,o){var r,i=arguments.length,c=i<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,n,o);else for(var a=t.length-1;a>=0;a--)(r=t[a])&&(c=(i<3?r(c):i>3?r(e,n,c):r(e,n))||c);return i>3&&c&&Object.defineProperty(e,n,c),c};Object.defineProperty(n,"__esModule",{value:!0});var i=cc._decorator,c=i.ccclass,a=i.property,s=t("../Manager"),p=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.btnOk=null,e}return o(e,t),e.prototype.onLoad=function(){var t=window.innerWidth,e=window.innerHeight;this.getComponent(cc.Graphics).fillRect(-t/2,-e/2,t,e),this.btnOk.on(cc.Node.EventType.TOUCH_END,function(t){s.default.Instance.PopState()},this)},e.prototype.start=function(){},r([a(cc.Node)],e.prototype,"btnOk",void 0),e=r([c],e)}(cc.Component);n.default=p,cc._RF.pop()},{"../Manager":"Manager"}],InGame:[function(t,e,n){"use strict";cc._RF.push(e,"c67ecMsKPRJraPkce+6x1AN","InGame");var o=this&&this.__extends||function(){var t=function(e,n){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(e,n)};return function(e,n){function o(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(o.prototype=n.prototype,new o)}}(),r=this&&this.__decorate||function(t,e,n,o){var r,i=arguments.length,c=i<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,n,o);else for(var a=t.length-1;a>=0;a--)(r=t[a])&&(c=(i<3?r(c):i>3?r(e,n,c):r(e,n))||c);return i>3&&c&&Object.defineProperty(e,n,c),c};Object.defineProperty(n,"__esModule",{value:!0});var i=cc._decorator,c=i.ccclass,a=i.property,s=t("../game/GameDefine"),p=t("../states/Manager"),f=t("../game/CardMgr"),u=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.tfAttempt=null,e.showReward=null,e.hideReward=null,e.btnGetMore=null,e.btnPrizePool=null,e.btnRuleGame=null,e.btnPlayMore=null,e.btnShare=null,e}var n;return o(e,t),n=e,e.prototype.onLoad=function(){n.Instance=this,this.numOfTurn=3,this.tfAttempt.string="Attempt: "+this.numOfTurn,this.ShowReward(!1),this.btnPlayMore.on(cc.Node.EventType.TOUCH_END,function(t){p.default.Instance.GetCurrentState()==s.GameDefine.STATE_INGAME&&this.showReward.active&&(this.numOfTurn>0?this.ResetForNewTurn():p.default.Instance.PushState(s.GameDefine.STATE_POPUP_OUT_OF_PLAY))},this),this.btnGetMore.on(cc.Node.EventType.TOUCH_END,function(t){p.default.Instance.GetCurrentState()!=s.GameDefine.STATE_INGAME||this.showReward.active||p.default.Instance.PushState(s.GameDefine.STATE_POPUP_MORE_INFO)},this),this.btnPrizePool.on(cc.Node.EventType.TOUCH_END,function(t){p.default.Instance.GetCurrentState()!=s.GameDefine.STATE_INGAME||this.showReward.active||p.default.Instance.PushState(s.GameDefine.STATE_POPUP_REDEEM)},this),console.log("onLoad InGame")},e.prototype.start=function(){},e.prototype.ReduceTurn=function(){this.numOfTurn--,this.tfAttempt.string="Attempt: "+this.numOfTurn},e.prototype.GetNumOfTurn=function(){return this.numOfTurn},e.prototype.ShowReward=function(t){this.showReward.active=t,this.hideReward.active=!t},e.prototype.ResetForNewTurn=function(){this.ShowReward(!1),f.default.Instance.ResetForNewTurn()},r([a(cc.Label)],e.prototype,"tfAttempt",void 0),r([a(cc.Node)],e.prototype,"showReward",void 0),r([a(cc.Node)],e.prototype,"hideReward",void 0),r([a(cc.Node)],e.prototype,"btnGetMore",void 0),r([a(cc.Node)],e.prototype,"btnPrizePool",void 0),r([a(cc.Node)],e.prototype,"btnRuleGame",void 0),r([a(cc.Node)],e.prototype,"btnPlayMore",void 0),r([a(cc.Node)],e.prototype,"btnShare",void 0),e=n=r([c],e)}(cc.Component);n.default=u,cc._RF.pop()},{"../game/CardMgr":"CardMgr","../game/GameDefine":"GameDefine","../states/Manager":"Manager"}],Manager:[function(t,e,n){"use strict";cc._RF.push(e,"149c49h1I5G55Ds5PjkIgDf","Manager");var o=this&&this.__extends||function(){var t=function(e,n){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(e,n)};return function(e,n){function o(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(o.prototype=n.prototype,new o)}}(),r=this&&this.__decorate||function(t,e,n,o){var r,i=arguments.length,c=i<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,n,o);else for(var a=t.length-1;a>=0;a--)(r=t[a])&&(c=(i<3?r(c):i>3?r(e,n,c):r(e,n))||c);return i>3&&c&&Object.defineProperty(e,n,c),c};Object.defineProperty(n,"__esModule",{value:!0});var i=cc._decorator,c=i.ccclass,a=i.property,s=t("../game/GameDefine"),p=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.preLoad=null,e.inGame=null,e}var n;return o(e,t),n=e,e.prototype.onLoad=function(){n.Instance=this,this.stateDeep=-1,this.stateStack=[],this.timerFade=.5,this.stateNext=null,this.preLoad.active=!0,this.inGame.active=!1;for(var t=0,e=this.node.children;t<e.length;t++){e[t].active=!1}this.PushState(s.GameDefine.STATE_PRELOAD),console.log("onLoad Manager")},e.prototype.start=function(){},e.prototype.SwitchState=function(t,e){var n=this;void 0===e&&(e=!0);var o=this.stateStack[this.stateDeep];this.stateStack[this.stateDeep]=t,this._GetChildAtIdx(t).active=!0,this.preLoad.opacity=255,this.inGame.opacity=0,cc.tween(this.preLoad).to(1,{opacity:0}).call(function(t){n._GetChildAtIdx(o).active=!1,cc.tween(n.inGame).to(1,{opacity:255}).start()}).start(),console.log("SwitchState Manager")},e.prototype.PushState=function(t){this._GetChildAtIdx(t).active=!0,this.stateStack[++this.stateDeep]=t},e.prototype.PopState=function(){if(this.stateDeep>0){var t=this.stateStack[this.stateDeep];this._GetChildAtIdx(t).active=!1,this.stateDeep--}},e.prototype._GetChildAtIdx=function(t){return this.node.children[t]},e.prototype.GetCurrentState=function(){return this.stateStack[this.stateDeep]},e.prototype.update=function(t){},r([a(cc.Node)],e.prototype,"preLoad",void 0),r([a(cc.Node)],e.prototype,"inGame",void 0),e=n=r([c],e)}(cc.Component);n.default=p,cc._RF.pop()},{"../game/GameDefine":"GameDefine"}],MoreInfo:[function(t,e,n){"use strict";cc._RF.push(e,"c8febaKJ8hGH7VLhV7uoRlZ","MoreInfo");var o=this&&this.__extends||function(){var t=function(e,n){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(e,n)};return function(e,n){function o(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(o.prototype=n.prototype,new o)}}(),r=this&&this.__decorate||function(t,e,n,o){var r,i=arguments.length,c=i<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,n,o);else for(var a=t.length-1;a>=0;a--)(r=t[a])&&(c=(i<3?r(c):i>3?r(e,n,c):r(e,n))||c);return i>3&&c&&Object.defineProperty(e,n,c),c};Object.defineProperty(n,"__esModule",{value:!0});var i=cc._decorator,c=i.ccclass,a=i.property,s=t("../Manager"),p=t("../InGame"),f=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.btnClose=null,e.tfAttempt=null,e}return o(e,t),e.prototype.onLoad=function(){var t=window.innerWidth,e=window.innerHeight;this.getComponent(cc.Graphics).fillRect(-t/2,-e/2,t,e),this.btnClose.on(cc.Node.EventType.TOUCH_END,function(t){s.default.Instance.PopState()},this),this.tfAttempt.string="Attempt: "+p.default.Instance.GetNumOfTurn()},e.prototype.start=function(){},e.prototype.onEnable=function(){this.tfAttempt.string="Attempt: "+p.default.Instance.GetNumOfTurn()},r([a(cc.Node)],e.prototype,"btnClose",void 0),r([a(cc.Label)],e.prototype,"tfAttempt",void 0),e=r([c],e)}(cc.Component);n.default=f,cc._RF.pop()},{"../InGame":"InGame","../Manager":"Manager"}],OutOfPlay:[function(t,e,n){"use strict";cc._RF.push(e,"9f465PsJeNBfpzadG/+BpdR","OutOfPlay");var o=this&&this.__extends||function(){var t=function(e,n){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(e,n)};return function(e,n){function o(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(o.prototype=n.prototype,new o)}}(),r=this&&this.__decorate||function(t,e,n,o){var r,i=arguments.length,c=i<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,n,o);else for(var a=t.length-1;a>=0;a--)(r=t[a])&&(c=(i<3?r(c):i>3?r(e,n,c):r(e,n))||c);return i>3&&c&&Object.defineProperty(e,n,c),c};Object.defineProperty(n,"__esModule",{value:!0});var i=cc._decorator,c=i.ccclass,a=i.property,s=t("../../game/GameDefine"),p=t("../Manager"),f=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.btnClickHere=null,e}return o(e,t),e.prototype.onLoad=function(){var t=window.innerWidth,e=window.innerHeight;this.getComponent(cc.Graphics).fillRect(-t/2,-e/2,t,e),this.btnClickHere.on(cc.Node.EventType.TOUCH_END,function(t){p.default.Instance.PopState(),p.default.Instance.PushState(s.GameDefine.STATE_POPUP_MORE_INFO)},this)},e.prototype.start=function(){},r([a(cc.Node)],e.prototype,"btnClickHere",void 0),e=r([c],e)}(cc.Component);n.default=f,cc._RF.pop()},{"../../game/GameDefine":"GameDefine","../Manager":"Manager"}],PreLoad:[function(t,e,n){"use strict";cc._RF.push(e,"de10ait0odCMrpSFU2eR0Dx","PreLoad");var o=this&&this.__extends||function(){var t=function(e,n){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(e,n)};return function(e,n){function o(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(o.prototype=n.prototype,new o)}}(),r=this&&this.__decorate||function(t,e,n,o){var r,i=arguments.length,c=i<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,n,o);else for(var a=t.length-1;a>=0;a--)(r=t[a])&&(c=(i<3?r(c):i>3?r(e,n,c):r(e,n))||c);return i>3&&c&&Object.defineProperty(e,n,c),c};Object.defineProperty(n,"__esModule",{value:!0});var i=cc._decorator,c=i.ccclass,a=i.property,s=t("../game/GameDefine"),p=t("./Manager"),f=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.stateInGame=null,e.btnPlay=null,e}return o(e,t),e.prototype.onLoad=function(){this.btnPlay.on(cc.Node.EventType.TOUCH_END,function(t){console.log("play PreLoad"),p.default.Instance.SwitchState(s.GameDefine.STATE_INGAME)},this),console.log("onLoad PreLoad")},e.prototype.start=function(){},r([a(cc.Node)],e.prototype,"stateInGame",void 0),r([a(cc.Node)],e.prototype,"btnPlay",void 0),e=r([c],e)}(cc.Component);n.default=f,cc._RF.pop()},{"../game/GameDefine":"GameDefine","./Manager":"Manager"}],Redeem:[function(t,e,n){"use strict";cc._RF.push(e,"33823WNzFtHUa9sbRh2pqYk","Redeem");var o=this&&this.__extends||function(){var t=function(e,n){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(e,n)};return function(e,n){function o(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(o.prototype=n.prototype,new o)}}(),r=this&&this.__decorate||function(t,e,n,o){var r,i=arguments.length,c=i<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,n,o);else for(var a=t.length-1;a>=0;a--)(r=t[a])&&(c=(i<3?r(c):i>3?r(e,n,c):r(e,n))||c);return i>3&&c&&Object.defineProperty(e,n,c),c};Object.defineProperty(n,"__esModule",{value:!0});var i=cc._decorator,c=i.ccclass,a=i.property,s=t("../Manager"),p=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.btnClose=null,e.btnPlayMore=null,e.btnShare=null,e.btnHistory=null,e.btnPrizes=null,e.historyContent=null,e.prizesContent=null,e}return o(e,t),e.prototype.onLoad=function(){var t=window.innerWidth,e=window.innerHeight;this.getComponent(cc.Graphics).fillRect(-t/2,-e/2,t,e),this.btnClose.on(cc.Node.EventType.TOUCH_END,function(t){s.default.Instance.PopState()},this),this.btnPlayMore.on(cc.Node.EventType.TOUCH_END,function(t){s.default.Instance.PopState()},this),this.btnHistory.on(cc.Node.EventType.TOUCH_END,function(t){this.historyContent.active=!0,this.prizesContent.active=!1},this),this.btnPrizes.on(cc.Node.EventType.TOUCH_END,function(t){this.historyContent.active=!0,this.prizesContent.active=!1},this)},e.prototype.start=function(){},r([a(cc.Node)],e.prototype,"btnClose",void 0),r([a(cc.Node)],e.prototype,"btnPlayMore",void 0),r([a(cc.Node)],e.prototype,"btnShare",void 0),r([a(cc.Node)],e.prototype,"btnHistory",void 0),r([a(cc.Node)],e.prototype,"btnPrizes",void 0),r([a(cc.Node)],e.prototype,"historyContent",void 0),r([a(cc.Node)],e.prototype,"prizesContent",void 0),e=r([c],e)}(cc.Component);n.default=p,cc._RF.pop()},{"../Manager":"Manager"}]},{},["Card","CardMgr","GameDefine","InGame","Manager","PreLoad","ChooseGift","Congratulation","GetOneAttempt","MoreInfo","OutOfPlay","Redeem"]);