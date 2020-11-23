const {ccclass, property} = cc._decorator;

import {GameDefine} from '../../game/GameDefine';
import StateManager from '../Manager';
import StateInGame from '../InGame';
import CardMgr from '../../game/CardMgr';

@ccclass
export default class ChooseGift extends cc.Component {

    @property(cc.Node)
    btnOk: cc.Node = null;
    @property(cc.Node)
    btnNo: cc.Node = null;
    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        let width = window.innerWidth;
        let height = window.innerHeight;
        let ctx = this.getComponent(cc.Graphics);
        ctx.fillRect(-width/2, -height/2, width, height)

        this.btnOk.on(cc.Node.EventType.TOUCH_END, function(event){
            StateManager.Instance.PopState();
            StateManager.Instance.PushState(GameDefine.STATE_POPUP_CONGRATULATIONS);

            StateInGame.Instance.ReduceTurn();

            CardMgr.Instance.ShowGift(true);
            StateInGame.Instance.ShowReward(true);
        }, this);
        this.btnNo.on(cc.Node.EventType.TOUCH_END, function(event){
            StateManager.Instance.PopState();
        }, this);
    }

    start () {

    }

    // update (dt) {}
}
