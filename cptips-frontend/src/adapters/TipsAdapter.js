// will connect to backend API

class TipsAdapter {
    constructor() {
        this.baseUrl = 'http://localhost:3000/api/v1/tips'
    }

    getTips() {
        return fetch(this.baseUrl)
               .then(res => res.json())

    }

    createTip(title, content, author, url) {
        const tip = {
            title: title,
            content: content,
            author: author,
            tip_url: url
        }
        return fetch(this.baseUrl, {
            method: 'POST',
            body: JSON.stringify({ tip }),
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        }).then(res => res.json())
    }
}