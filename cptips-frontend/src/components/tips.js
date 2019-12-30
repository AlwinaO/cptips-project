// this class will have an array of tips, create a new adapater, bind event listeners
class Tips {
    constructor() {
        this.tips = [];
        this.adapter = new TipsAdapter();
        // this.bindEventListeners();
        this.fetchAndLoadTips();
    }

    // the instance of adapter will fetch the tips, which returns a promise and pass in a callback function
    fetchAndLoadTips() {
        this.adapter.getTips()
        .then(tips => {
           tips.forEach(note => this.notes.push(note))
        })
        .then(() => {
            this.renderTips()
        })
    }

    renderTips() {
        const tipsContainer = document.getElementById("tips-container");
        tipsContainer.innerHTML = "my tips here"
    }


}