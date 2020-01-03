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
        return `<h1>${this.title}</h1>
                <p>${this.content}</p>
                <p>${this.author}</p>
                <p>${this.tipUrl}</p>`
    }

    // renderTipFront() {
    //     return `<h1>${this.title}</h1>`
    // }

    // renderTipBack() {
    //     return `<p>${this.content}</p>
    //             <p>${this.author}</p>
    //             <p>${this.tipUrl}</p>`
    // }
}