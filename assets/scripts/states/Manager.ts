const { ccclass, property } = cc._decorator;

import { GameDefine } from '../game/GameDefine'

@ccclass
export default class Manager extends cc.Component {
    public static Instance: Manager;

    @property(cc.Node)
    preLoad: cc.Node = null;
    @property(cc.Node)
    inGame: cc.Node = null;

    timerFade: number;
    stateNext: number;
    stateDeep: number;
    stateStack: Array<number>;

    // LIFE-CYCLE CALLBACKS:

    onLoad() {
        Manager.Instance = this;

        this.stateDeep = -1;
        this.stateStack = [];

        this.timerFade = 0.5;
        this.stateNext = null;

        this.preLoad.active = true;
        this.inGame.active = false;

        for(let child of this.node.children)
        {
            child.active = false;
        }
        this.PushState(GameDefine.STATE_PRELOAD);

        console.log('onLoad Manager')
    }

    start() {

    }

    SwitchState(state: number, isFade: boolean = true) {
        let idx = this.stateStack[this.stateDeep];
        // this._GetChildAtIdx(idx).active = false;
        this.stateStack[this.stateDeep] = state;
        this._GetChildAtIdx(state).active = true;

        this.preLoad.opacity = 255;
        this.inGame.opacity = 0;

        cc.tween(this.preLoad)
        .to(1, {opacity:0})
        .call(_=>{
            this._GetChildAtIdx(idx).active = false;
            cc.tween(this.inGame)
            .to(1, {opacity:255})
            .start();
        })
        .start();

        // switch (state) {
        //     case GameDefine.STATE_PRELOAD: {

        //         break;
        //     }
        //     case GameDefine.STATE_INGAME: {
        //         break;
        //     }
        //     case GameDefine.STATE_POPUP_GET_1_ATTEMPT: {
        //         break;
        //     }
        //     case GameDefine.STATE_POPUP_CHOOSE_GIFT: {
        //         break;
        //     }
        //     case GameDefine.STATE_POPUP_CONGRATULATIONS: {
        //         break;
        //     }
        //     case GameDefine.STATE_POPUP_OUT_OF_PLAY: {
        //         break;
        //     }
        //     case GameDefine.STATE_POPUP_MORE_INFO: {
        //         break;
        //     }
        //     case GameDefine.STATE_POPUP_REDEEM: {
        //         break;
        //     }
        //     case GameDefine.STATE_POPUP_REDEEM_ZONE: {
        //         break;
        //     }
        //     case GameDefine.STATE_POPUP_GAME_RULES: {
        //         break;
        //     }
        // }

        console.log('SwitchState Manager');
    }

    PushState(state:number)
    {
        this._GetChildAtIdx(state).active = true;
        this.stateStack[++this.stateDeep] = state;
    }

    PopState()
    {
        if(this.stateDeep > 0)
        {
            let idx = this.stateStack[this.stateDeep];
            this._GetChildAtIdx(idx).active = false;
            this.stateDeep--;
        }
    }

    _GetChildAtIdx(idx)
    {
        return this.node.children[idx];
    }

    GetCurrentState()
    {
        return this.stateStack[this.stateDeep];
    }

    update(dt) {

    }
}
