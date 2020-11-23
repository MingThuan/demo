const { ccclass, property } = cc._decorator;

import Card from './Card';

@ccclass
export default class CardMgr extends cc.Component {
    public static Instance: CardMgr;

    @property(cc.Prefab)
    prefab: cc.Prefab = null;

    private listCards : Array<Card>;

    // LIFE-CYCLE CALLBACKS:

    onLoad() {
        CardMgr.Instance = this;
        this.listCards = [];

        for (let i = 0; i < this.node.children.length; i++) {
            let card = cc.instantiate(this.prefab);
            card.active = true;
            card.parent = this.node.children[i];

            let cardScript = card.getComponent('Card');
            cardScript.Init(i);

            this.listCards.push(cardScript);
        }
    }

    start() {

    }

    ShowGift(isShow: boolean) {
        if(isShow)
        {
            for (let child of this.listCards) {
                if(child.IsChosen())
                {
                    child.ShowReward();
                }
                else
                {
                    child.ShowGift();
                }
            }
        }
        else
        {
            for (let child of this.listCards) {
                child.HideGift();
            }
        }
        
    }

    ResetForNewTurn()
    {
        this.ShowGift(false);
    }

    // update (dt) {}

    add() {
        let card = cc.instantiate(this.prefab);
        card.active = true;
        // card.parent
    }
}
