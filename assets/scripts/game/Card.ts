const { ccclass, property } = cc._decorator;

import { GameDefine } from '../game/GameDefine'
import StateManager from '../states/Manager'

@ccclass
export default class Card extends cc.Component {

    @property([cc.SpriteFrame])
    sprites: cc.SpriteFrame[] = [];

    @property([cc.SpriteFrame])
    listGift: cc.SpriteFrame[] = [];

    @property([cc.SpriteFrame])
    rewards: cc.SpriteFrame[] = [];

    private gift: any;
    private image: any;

    private isChosen: boolean;
    private isShowGift: boolean;
    private id: number;

    // LIFE-CYCLE CALLBACKS:

    onLoad() {
        this.node.on(cc.Node.EventType.TOUCH_END, function (event) {
            if (StateManager.Instance.GetCurrentState() == GameDefine.STATE_INGAME && !this.isShowGift) {
                StateManager.Instance.PushState(GameDefine.STATE_POPUP_CHOOSE_GIFT);

                this.isChosen = true;
            }

        }, this);

        this.gift = this.node.getChildByName('giftText');
        this.image = this.node.getChildByName('image');

        this.gift.active = false;

        this.isChosen = false;
        this.isShowGift = false;

        console.log('onLoad Card');
    }

    start() {

    }

    public Init(id: number) {
        this.id = id;
        this.image.getComponent(cc.Sprite).spriteFrame = this.sprites[id];
    }

    IsChosen() {
        return this.isChosen;
    }

    ShowGift() {
        this.gift.getComponent(cc.Sprite).spriteFrame = this.listGift[2];
        this.gift.active = true;

        this.isShowGift = true;
    }

    ShowReward() {
        this.image.getComponent(cc.Sprite).spriteFrame = this.rewards[0];

        this.isShowGift = true;
    }

    HideGift()
    {
        this.gift.active = false;
        this.image.getComponent(cc.Sprite).spriteFrame = this.sprites[this.id];
        this.isChosen = false;

        this.isShowGift = false;
    }

    // update (dt) {}
}
