//initalize the serevice api 
const apiService = new ApiService()
let main = document.getElementById('main')

let init = () => {
    bindEventListiners()
    renderAuthors()
}

function bindEventListiners() {

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

}


init()