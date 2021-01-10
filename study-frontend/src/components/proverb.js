class Proverb {
    constructor(data) {
        this.id = data.id;
        this.topic = data.topic;
        this.content = data.content;
        this.author_id = data.author.id;
    }

}