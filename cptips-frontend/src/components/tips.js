// this class will have an array of tips, create a new adapater, bind event listeners
class Tips {
    constructor() {
        this.tips = [];
        this.adapter = new TipsAdapter();
        this.bindEventListeners();
        this.fetchAndLoadTips();
    }

    bindEventListeners() {
        this.tipsContainer = document.getElementById('tips-container')
    }

    // the instance of adapter will fetch the tips, which returns a promise and pass in a callback function
    fetchAndLoadTips() {
        this.adapter.getTips()
        .then(tips => {
        // console.log(tips)
           tips.forEach(tip => this.tips.push(new Tip(tip)))
        })
        .then(() => {
            this.renderTips()
        })
    }

    renderTips() {
        const tipsContainer = document.getElementById('tips-container');
        const tipDiv = document.querySelector("div.tip");
        tipDiv.innerHTML = this.tips.map(tip => tip.renderTip()).join("");
    }

    // renderTips() {
    //     const tipsContainer = document.getElementById('tips-container');
    //     const tipsFlipCard = document.querySelector("div.flip-card");
    //     const tipsFlipInner = document.querySelector("div.flip-card-inner");
    //     const tipsFlipFront = document.querySelector("div.flip-card-front");
    //     tipsFlipFront.innerHTML = this.tips.map(tip => tip.renderTipFront()).join("");
    //     tipsFlipInner.appendChild(tipsFlipFront);
    //     tipsFlipCard.appendChild(tipsFlipInner);
    //     tipsContainer.appendChild(tipsFlipCard);

    // }


}