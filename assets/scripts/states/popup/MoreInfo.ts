const { ccclass, property } = cc._decorator;

import StateManager from '../Manager';
import StateInGame from '../InGame';

@ccclass
export default class MoreInfo extends cc.Component {

    @property(cc.Node)
    btnClose: cc.Node = null;
    @property(cc.Label)
    tfAttempt: cc.Label = null;

    // LIFE-CYCLE CALLBACKS:

    onLoad() {
        let width = window.innerWidth;
        let height = window.innerHeight;
        let ctx = this.getComponent(cc.Graphics);
        ctx.fillRect(-width / 2, -height / 2, width, height)

        this.btnClose.on(cc.Node.EventType.TOUCH_END, function (event) {
            StateManager.Instance.PopState();
        }, this);
        this.tfAttempt.string = 'Attempt: ' + StateInGame.Instance.GetNumOfTurn();
    }

    start() {
        
    }

    // update (dt) {}

    onEnable() {
        this.tfAttempt.string = 'Attempt: ' + StateInGame.Instance.GetNumOfTurn();
    }
}
