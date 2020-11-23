const {ccclass, property} = cc._decorator;

import StateManager from '../Manager';

@ccclass
export default class Congratulation extends cc.Component {

    @property(cc.Node)
    btnClose: cc.Node = null;

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        let width = window.innerWidth;
        let height = window.innerHeight;
        let ctx = this.getComponent(cc.Graphics);
        ctx.fillRect(-width/2, -height/2, width, height)

        this.btnClose.on(cc.Node.EventType.TOUCH_END, function(event){
            StateManager.Instance.PopState();
        }, this);
    }

    start () {

    }

    // update (dt) {}
}
