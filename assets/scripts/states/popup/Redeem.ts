const { ccclass, property } = cc._decorator;

import StateManager from '../Manager';

@ccclass
export default class Redeem extends cc.Component {

    @property(cc.Node)
    btnClose: cc.Node = null;
    @property(cc.Node)
    btnPlayMore: cc.Node = null;
    @property(cc.Node)
    btnShare: cc.Node = null;

    @property(cc.Node)
    btnHistory: cc.Node = null;
    @property(cc.Node)
    btnPrizes: cc.Node = null;

    @property(cc.Node)
    historyContent: cc.Node = null;
    @property(cc.Node)
    prizesContent: cc.Node = null;

    // LIFE-CYCLE CALLBACKS:

    onLoad() {
        let width = window.innerWidth;
        let height = window.innerHeight;
        let ctx = this.getComponent(cc.Graphics);
        ctx.fillRect(-width / 2, -height / 2, width, height)

        this.btnClose.on(cc.Node.EventType.TOUCH_END, function (event) {
            StateManager.Instance.PopState();
        }, this);
        this.btnPlayMore.on(cc.Node.EventType.TOUCH_END, function (event) {
            StateManager.Instance.PopState();
        }, this);

        this.btnHistory.on(cc.Node.EventType.TOUCH_END, function (event) {
            this.historyContent.active = true;
            this.prizesContent.active = false;
        }, this);
        this.btnPrizes.on(cc.Node.EventType.TOUCH_END, function (event) {
            this.historyContent.active = true;
            this.prizesContent.active = false;
        }, this);
    }

    start() {

    }

    // update (dt) {}
}
