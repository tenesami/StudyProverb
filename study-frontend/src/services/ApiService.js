class ApiService {
    constructor() {
        this.BASE_URL = 'http://localhost:3000'
    }

    async fetchAuthors() {
        let res = await fetch(this.BASE_URL + '/authors')
        let data = await res.json()

        data.sort(function (a, b) {
            if (a.name < b.name) {
                return - 1;
            }
        })
        return data
    }

    async fetchAuthor(id) {
        let res = await fetch(this.BASE_URL + `/authors/${id}`)
        let data = await res.json()
        return data
    }


    async fetchCreateAuthor(authorData) {
        let configObj = {
            method: 'POST',
            body: JSON.stringify(authorData),
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
        }
        let res = await fetch(this.BASE_URL + `/authors`, configObj)
        let data = await res.json()
        return data
    }


    async fetchRemoveAuthor(id) {
        let configObj = {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
        }
        
        await fetch(this.BASE_URL + `/authors/${id}`, configObj)
    }



    async fetchProverbs() {
        let res = await fetch(this.BASE_URL + `/proverbs`)
        let data = await res.json()
        return data
    }

    async fetchProverb(id) {
        let res = await fetch(this.BASE_URL + `/proverbs/${id}`)
        let data = await res.json()
        return data
    }


    async fetchCreateProverb(proverbData) {
        let configObj = {
            method: 'POST',
            body: JSON.stringify(proverbData),
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
        }
        let res = await fetch(this.BASE_URL + `/proverbs`, configObj)
        let data = await res.json()
        return data
    }

}