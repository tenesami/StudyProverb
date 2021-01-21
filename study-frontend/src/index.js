//initalize the serevice api 
const apiService = new ApiService()
let main = document.getElementById('main')

let init = () => {
    bindEventListeners()
    renderAuthors()
}

function bindEventListeners() {
    document.getElementById("author-form").addEventListener("click", displayCreateForm)
    document.getElementById("authors").addEventListener("click", renderAuthors)
    document.getElementById("proverb-form").addEventListener("click", displayCreateProverbForm)
}

async function renderAuthors() {
    let authors = await apiService.fetchAuthors()
    main.innerHTML = ""
    authors.forEach(author => {
        //instanciate new object 
        let newAuthor = new Author(author)

        //add to the page using the instance method
        main.innerHTML += newAuthor.render()
    })
    attachClickAuthorLinks()
}




function attachClickAuthorLinks() {
    const authors = document.querySelectorAll("li a")
    authors.forEach(author => {
        author.addEventListener("click", displayAuthor)
    })
}


async function displayAuthor(e) {
    //console.log(e.target)
    let id = e.target.dataset.id


    const data = await apiService.fetchAuthor(id)
    const author = new Author(data)

    main.innerHTML = author.renderAuthor()

    document.getElementById('create-proverb').addEventListener('click', displayCreateProverbForm)

    document.getElementById('delete-author').addEventListener('click', removeAuthor)

}


function displayCreateForm() {
    let formDiv = document.getElementById('new-author-form')
    let html = `
    <form>
        <label for="author">Author:</label>
        <input type="text" id="authors"></br></br>
        <input type="submit">
    </form>
    `
    formDiv.innerHTML = html
    document.querySelector('form').addEventListener("submit", createAuthor)
}

function clearForm() {
    let formDiv = document.getElementById('new-author-form')
    formDiv.innerHTML = ""
}

async function createAuthor(e) {
    e.preventDefault()
    let main = document.getElementById('main')
        //console.log(e)
    let author = {
        name: e.target.querySelector("#authors").value
    }

    let data = await apiService.fetchCreateAuthor(author)

    let newAuthor = new Author(data)
    main.innerHTML += newAuthor.render()

    attachClickAuthorLinks()
    clearForm()
}


function displayCreateProverbForm() {
    let formProDiv = document.getElementById('new-proverb-form')
    let html = `
    <form>
        <label for="topic">Topic:</label>
        <input type="text" id="topics"></br></br>
        <label for="content">Content:</label>
        <textarea type="text" id="contents"></textarea></br></br>
        <input type="submit">
    </form>
    `
    formProDiv.innerHTML = html
    document.querySelector('form').addEventListener("submit", createProverb)
}


async function createProverb(e) {
    e.preventDefault()

    let author = document.getElementById('create-proverb')
    let listProverb = document.querySelector('ul')

    //console.log(e)
    let proverb = {
        topic: e.target.querySelector("#topics").value,
        content: e.target.querySelector("#contents").value,
        author_id: author.dataset.id
    }

    let data = await apiService.fetchCreateProverb(proverb)

    let newProverb = new Proverb(data)
    listProverb.innerHTML += newProverb.renderProverb()

    clearProForm()
}

function clearProForm() {
    let formProDiv = document.getElementById('new-proverb-form')
    formProDiv.innerHTML = ""
}

async function removeAuthor(e) {
    let authorId = e.target.dataset.id
        //console.log(id)

    await apiService.fetchRemoveAuthor(authorId)
        .then(data => {
            renderAuthors()
        })

    
}

init()