//initalize the serevice api 
const apiService = new ApiService()
let main = document.getElementById('main')

let init = () => {
    bindEventListiners()
    renderAuthors()
}

function bindEventListiners() {
    document.getElementById("author-form").addEventListener("click", displayCreateForm)
    document.getElementById("authors").addEventListener("click", renderAuthors)

}

async function renderAuthors() {
    let authors = await apiService.fetchAuthors()
    main.innerHTML = ""
    authors.map(author => {
        //instanciate new object 
        let newAuthor = new Author(author)

        //add to the page using the instance method 
        main.innerHTML += newAuthor.render()
    })
    attachClickAuthorLinks()
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


init()