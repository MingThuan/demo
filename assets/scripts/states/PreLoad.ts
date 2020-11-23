const {ccclass, property} = cc._decorator;

import {GameDefine} from '../game/GameDefine'
import StateManager from './Manager'

@ccclass
export default class PreLoad extends cc.Component {

    @property(cc.Node)
    stateInGame: cc.Node = null;

    @property(cc.Node)
    btnPlay: cc.Node = null;

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        this.btnPlay.on(cc.Node.EventType.TOUCH_END, function(event){
            console.log("play PreLoad");
            // this.node.active = false;
            // this.stateInGame.active = true;
            StateManager.Instance.SwitchState(GameDefine.STATE_INGAME);
        }, this);

        console.log('onLoad PreLoad')
    }

    start () {

    }

    // update (dt) {}
}
