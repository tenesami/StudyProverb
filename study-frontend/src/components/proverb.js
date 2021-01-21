class Proverb {
    constructor(data) {
        this.id = data.id;
        this.topic = data.topic;
        this.content = data.content;
        this.author_id = data.author.id;
    }

    renderProverb() {
        return `   
        <h2>${this.topic}</h2>
        ${this.content}
            <hr>
            </br> 
        `
    }

}