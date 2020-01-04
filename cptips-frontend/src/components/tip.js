// just render with title and author

class Tip {
    constructor(tipJSON) {
        this.id = tipJSON.id;
        this.title = tipJSON.title;
        this.content = tipJSON.content;
        this.author = tipJSON.author;
        this.tipUrl = tipJSON.tip_url;
    }

    renderTip() {
        return `<div class="tip">
                    <h1>${this.title}</h1>
                    <p>${this.content}</p>
                    <p>${this.author}</p>
                    <p>${this.tipUrl}</p>
                </div>`
    }


    // renderTip() {
    //     const tipDiv = document.querySelector(".tip");

    //     const tipTitleH1 = document.createElement('h1');
    //     tipTitleH1.innerHTML = this.title;
    //     tipDiv.appendChild(tipTitleH1);

    //     const tipContentP = document.createElement('p');
    //     tipContentP.innerHTML = this.content;
    //     tipTitleH1.appendChild(tipContentP);

    //     const tipAuthorP = document.createElement('p');
    //     tipAuthorP.innerHTML = this.author;
    //     tipTitleH1.appendChild(tipAuthorP);

    //     const tipUrlP = document.createElement('p');
    //     tipUrlP.innerHTML = this.tipUrl;
    //     tipTitleH1.appendChild(tipUrlP);

    //     return document.getElementById("tips-container") += tipDiv;
        

    // }

    // renderTipFront() {
    //     return `<h1>${this.title}</h1>`
    // }

    // renderTipBack() {
    //     return `<p>${this.content}</p>
    //             <p>${this.author}</p>
    //             <p>${this.tipUrl}</p>`
    // }
}