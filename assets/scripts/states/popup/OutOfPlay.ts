const { ccclass, property } = cc._decorator;

import {GameDefine} from '../../game/GameDefine';
import StateManager from '../Manager';

@ccclass
export default class OutOfPlay extends cc.Component {

    @property(cc.Node)
    btnClickHere: cc.Node = null;

    // LIFE-CYCLE CALLBACKS:

    onLoad() { 
        let width = window.innerWidth;
        let height = window.innerHeight;
        let ctx = this.getComponent(cc.Graphics);
        ctx.fillRect(-width/2, -height/2, width, height)

        this.btnClickHere.on(cc.Node.EventType.TOUCH_END, function (event) {
            StateManager.Instance.PopState();
            StateManager.Instance.PushState(GameDefine.STATE_POPUP_MORE_INFO);
        }, this);
    }

    start() {

    }

    // update (dt) {}
}
