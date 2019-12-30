// will connect to backend API

class TipsAdapter {
    constructor() {
        this.baseUrl = 'http://localhost:3000/api/v1/tips'
    }

    getTips() {
        return fetch(this.baseUrl)
               .then(res => res.json())

    }
}