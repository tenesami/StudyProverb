class Author {
    constructor(data) {
        this.id = data.id
        this.name = data.name
        this.proverbs = data.proverbs
    }
   
    render() {
        return `
        <li>
        <a href="#" data-id="${this.id}">
        ${this.name}
        </a>
        </li> 
           
        `
    }

    renderAuthor() {
        let autorProverbs = this.proverbs.map(proverb => {
            return `  
        <h4>${proverb.topic}</h4>
        ${proverb.content}  
            </br>
             </br>
        
            <hr>
        `
        }).join('')

        return `
          <h2>  ${this.name} </h2>
           <hr><hr>
           <ul>
            ${autorProverbs}
            </ul>
            </br> 
            </br> 
            <button id="delete-author" data-id="${this.id}"> Delete Author </button>
            <br>
            <br>
          <button id="create-proverb" data-id="${this.id}"> Create New Proverb </button>   
        `
    }


}

//<button class="delete-proverb" data-id="${this.id}"> Delete Proverb </button>

//<button class="delete-proverb" data-id="${this.id}" onclick="removeProverb()""> Delete Proverb </button>

//<button id="delete-author" data-id="${this.id}"> Delete Proverb </button>
//afteer return the proverbs