const { ccclass, property } = cc._decorator;

import { GameDefine } from '../game/GameDefine'
import StateManager from '../states/Manager'
import CardMgr from '../game/CardMgr'

@ccclass
export default class InGame extends cc.Component {
    public static Instance: InGame;

    @property(cc.Label)
    tfAttempt: cc.Label = null;
    @property(cc.Node)
    showReward: cc.Node = null;
    @property(cc.Node)
    hideReward: cc.Node = null;

    @property(cc.Node)
    btnGetMore: cc.Node = null;
    @property(cc.Node)
    btnPrizePool: cc.Node = null;
    @property(cc.Node)
    btnRuleGame: cc.Node = null;

    @property(cc.Node)
    btnPlayMore: cc.Node = null;
    @property(cc.Node)
    btnShare: cc.Node = null;

    private numOfTurn: number;

    // LIFE-CYCLE CALLBACKS:

    onLoad() {
        InGame.Instance = this;

        this.numOfTurn = 3;
        this.tfAttempt.string = 'Attempt: ' + this.numOfTurn;

        this.ShowReward(false);

        this.btnPlayMore.on(cc.Node.EventType.TOUCH_END, function (event) {
            if (StateManager.Instance.GetCurrentState() == GameDefine.STATE_INGAME && this.showReward.active) {
                if (this.numOfTurn > 0) {
                    this.ResetForNewTurn();
                }
                else {
                    StateManager.Instance.PushState(GameDefine.STATE_POPUP_OUT_OF_PLAY);
                }

            }
        }, this);

        this.btnGetMore.on(cc.Node.EventType.TOUCH_END, function (event) {
            if (StateManager.Instance.GetCurrentState() == GameDefine.STATE_INGAME && !this.showReward.active) {
                StateManager.Instance.PushState(GameDefine.STATE_POPUP_MORE_INFO);
            }
        }, this);

        this.btnPrizePool.on(cc.Node.EventType.TOUCH_END, function (event) {
            if (StateManager.Instance.GetCurrentState() == GameDefine.STATE_INGAME && !this.showReward.active) {
                StateManager.Instance.PushState(GameDefine.STATE_POPUP_REDEEM);
            }
        }, this);

        console.log('onLoad InGame');
    }

    start() {

    }

    ReduceTurn() {
        this.numOfTurn--;
        this.tfAttempt.string = 'Attempt: ' + this.numOfTurn;
    }

    GetNumOfTurn()
    {
        return this.numOfTurn;
    }

    ShowReward(isShow: boolean) {
        this.showReward.active = isShow;
        this.hideReward.active = !isShow;
    }

    ResetForNewTurn() {
        this.ShowReward(false);
        CardMgr.Instance.ResetForNewTurn();
    }

    // update (dt) {}
}
