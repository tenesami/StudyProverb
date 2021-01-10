class ApiService {
    constructor() {
        this.BASE_URL = 'http://localhost:3000'
    }

    async fetchAuthors() {
        let res = await fetch(this.BASE_URL + '/authors')
        let data = await res.json()
        return data
    }

    async fetchAuthor(id) {
        let res = await fetch(this.BASE_URL + `/authors/${id}`)
        let data = await res.json()
        return data
    }

}