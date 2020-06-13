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
                    <p><a href="${this.tipUrl}" target="_blank">Link to Tip</a></p>
                    <button class="button-modal" data-id=${this.id}>Edit Tip</button>
                    <div class="edit-form-${this.id}"></div> 
                </div>`
    }

    renderEditTipForm() {
        return `
            <div class="modal">
                <div class="modal-content">
                    <span class="close-button">close</span>
                    <form data-id="${this.id}">
                        <label>Title:</label>
                        <input type="text" id="title" name="title" value="${this.title}">

                        <label>Content:</label>
                        <textarea id="content" name="content" cols="30" rows="5">${this.content}</textarea>

                        <label>Author:</label>
                        <input type="text" id="author" name="author" value="${this.author}">

                        <label>Link to Tip:</label>
                        <input type="url" id="tip-url" name="tip-url" value="${this.tipUrl}">

                        <input type="submit" value="Edit Tip">
                    </form>
                </div>

            </div>
       `;
    }

}