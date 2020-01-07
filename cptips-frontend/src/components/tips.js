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
        this.tipForm = document.getElementById("new-tip-form")
        this.tipForm.addEventListener('submit', this.createTip.bind(this))
        // this.tipsContainer.addEventListener('click', function () {
                // console.log("clicked")
        // this.tipEditButton = document.querySelector(".tip button")
        // this.tipEditButton.addEventListener('click', function () {
        //     console.log("clicked")
        // })
    }

    // method to create a new tip 
    // look at https://stackoverflow.com/questions/11563638/how-do-i-get-the-value-of-text-input-field-using-javascript?rq=1 for grabbing each input field
    createTip(e) {
        e.preventDefault()
        // const id = parseInt(e.target.dataset.id);
        const title = e.target.querySelector('#title').value;
        const content = e.target.querySelector('#content').value;
        const author = e.target.querySelector('#author').value;
        const url = e.target.querySelector('#tip-url').value;

        this.adapter.createTip(title, content, author, url).then(tip => {
            this.tips.push(new Tip(tip))
            title.reset() 
            content.reset()
            author.reset()
            url.reset()
            this.renderTips()
        })
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

    // function to render tips, markup is in tip.js 
    renderTips() {
        this.tipsContainer.innerHTML = this.tips.map(tip => tip.renderTip()).join("");
        
    }
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
