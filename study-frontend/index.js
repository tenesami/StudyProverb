const BASE_URL = 'http://localhost:3000'
const AUTHORS_URL = `${BASE_URL}/authors`
const PROVERB_URL = `${BASE_URL}/proverbs`


//document.getElementById("author-form").addEventListener("click", displayProverbForm)

//loadAuthor is anonomous function invockes authors fetching from trainers url 
document.addEventListener("DOMContentLoaded", () => loadAuthors())
const loadAuthors = () => {
    fetch(AUTHORS_URL)
        .then(res => res.json())
        .then(data => {
            //loop over the authors array 
            data.forEach(author => renderAuthor(author))
        })
}

const main = document.querySelector("main")

//checks for trainerHash in console 
const renderAuthor = (authorHash) => {
    //to checks for authorHash in console(authorHash) 
    const div = document.createElement("div")

    const head = document.createElement("h2")
    head.innerText = authorHash.name
    div.appendChild(head)

    const button = document.createElement("button")
    button.innerText = "Add new Proverb"
    button.addEventListener("click", displayProverbForm)

    //sets attributs on the created dom
    div.setAttribute("data-id", authorHash.id)
        //is used to retrive the author_id using the dataset & the name
    button.setAttribute("data-author-id", authorHash.id)
    div.appendChild(button)

    main.appendChild(div)

    authorHash.proverbs.forEach(proverb => renderProverb(proverb))
}

const renderProverb = (proverb) => {
    const container = document.createElement("div")

    //const div = document.querySelector(`div[data-id="${proverb.author_id}"]`)

    const topic = document.createElement("h4")
    topic.innerHTML = proverb.topic
    container.appendChild(topic)

    const content = document.createElement("p")
    content.innerText = proverb.content
    container.appendChild(content)

    const button = document.createElement("button")
    button.setAttribute("class-proverb-id", proverb.id)
    button.innerText = "Delete"
    button.addEventListener("click", deleteProverb)
    container.appendChild(button)

    main.appendChild(container)
}


function displayProverbForm() {
    let formProDiv = document.getElementById('new-proverb-form')
    let html = `
    <form>
        <label for="topic">Topic:</label>
        <input type="text" id="topics"></br></br>
        <label for="content">Content:</label>
        <textarea type="text" id="contents"></textarea></br></br>
        <input type="submit" id="submit">
    </form>
    `
    formProDiv.innerHTML = html
    document.querySelector('form').addEventListener("submit", createProverb)
}


const createProverb = (e) => {
    e.preventDefault()

    // let proverb = {
    //     topic: e.target.querySelector("#topics").value,
    //     content: e.target.querySelector("#content").checked
    // }
    const configObj = {
        method: "POST",
        headers: {
            "content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify({ author_id: e.target.dataset.authorId })
    }
    fetch(PROVERB_URL, configObj)
        .then(res => res.json())
        .then(data => {
            data: {
                topic: topic.value;
                content: content.value
            }

            //console.log("God please help me")
        })

}
const deleteProverb = (e) => {
    e.preventDefault()
}



class Proverb {
    constructor(topic, content, author, id) {
        this.topic = topic;
        this.content = content;
        this.author = author;
        this.id = id;

    }
}










// const BASE_URL = 'http://localhost:3000'

// window.addEventListener("DOMContentLoaded", () => {
//     //   document.getElementById("quote-form").addEventListener("click", displayCreateForm)
//     document.getElementById("quotes").addEventListener("click", getQuotes)
//     getQuotes()
// })

// function displayCreateForm() {
//     let formDiv = document.getElementById('new-quote-form')
//     let html = `
//     <form>
//         <label for="topic">Topic:</label>
//         <input type="text" id="topics"></br></br>
//         <label for="content">Content:</label>
//         <textarea type="text" id="contents"></textarea></br></br>
//         <label for="author">Author:</label>
//         <input type="text" id="authors"></br></br>
//         <input type="submit" id="submit">
//     </form>
//     `
//     formDiv.innerHTML = html
//         //    document.querySelector('form').addEventListener("submit", createQuote)
// }

// function clearForm() {
//     let formDiv = document.getElementById('new-quote-form')
//     formDiv.innerHTML = ""
// }

// function createQuote(e) {
//     e.preventDefault()
//     let main = document.getElementById('main')
//         //console.log(e)
//     let quote = {
//         topic: e.target.querySelector("#topics").value,
//         content: e.target.querySelector("#contents").value
//     }

//     let configObj = {
//         method: 'POST',
//         body: JSON.stringify(quote),
//         headers: {
//             'Content-Type': 'application/json',
//             'Accept': 'application/json'
//         },
//     }

//     fetch(BASE_URL + '/quotes', configObj)
//         .then(res => res.json())
//         .then(quote => {
//             main.innerHTML += `
//                     <a href="#" data-id="${quote.id}">

//                     <h3>${quote.topic}</h3>
//                    <p>${quote.content}</p></a>
//                 `
//             attachClickQuoteLinks()
//             clearForm()
//         })
// }




// function getQuotes() {
//     let main = document.getElementById('main')
//     main.innerHTML = ""
//     fetchQuotes()
//         .then(quotes => {
//             quotes.map(quote => {
//                 // console.log(quotes)
//                 main.innerHTML += `
//         <a href="#" data-id="${quote.id}">
//         <h3>${quote.topic}</h3>  
//         <p>${quote.content}</p>
//         </a> 
//         `
//             })
//             attachClickQuoteLinks()
//             clearForm()
//         })
// }

// async function fetchQuotes() {
//     let res = await fetch(BASE_URL + '/quotes')
//     let data = await res.json()
//     return data
// }

// function attachClickQuoteLinks() {
//     const quotes = document.querySelectorAll("div a")
//     quotes.forEach(quote => {
//         quote.addEventListener("click", displayQuote)
//     })
// }

// function displayQuote(e) {
//     //console.log(e.target)
//     let id = e.target.dataset.id
//     let main = document.getElementById('main')
//     main.innerHTML = ""
//     fetch(BASE_URL + `/quotes/${id}`)
//         .then(res => res.json())
//         .then(quote => {
//             main.innerHTML = `
//             <h3> ${quote.topic} </h3> 
//             ${quote.content}
//              ${author.name}
//             <hr>
//             </br>  
//             <button id="delete-quote" data-id="${quote.id}"> Delete </button>
//         `
//             document.getElementById('delete-quote').addEventListener('click', removeQuote)
//         })
// }

// function removeQuote(e) {
//     let configObj = {
//         method: 'DELETE',
//         headers: {
//             'Content-Type': 'application/json',
//             'Accept': 'application/json'
//         },
//     }

//     fetch(BASE_URL + `/quotes/${e.target.dataset.id}`, configObj)
//         .then(() => {
//             getQuotes()
//         })
// }




















// const form_input = document.getElementById("input_form")

// //fetch the api 
// fetch("http://localhost:3000/proverbs").
// then(res => res.json())

// .then((quotes) => {
//     console.log(quotes)
//     quotes.data.forEach(function(quote) {
//         const u = quotes.included.find((u) =>
//             u.id == quote.relationships.user.data.id);
//         //console.log(quotes.data)
//         const newQuote = new blogQuote(quote, u)
//     });
//     blogQuote.displayAll()
// });


// //Create a quote 
// const handleForm = (e) => {
//     e.preventDefault();
//     //debugger
//     //if (e.target.value != "") {
//     const quote = new blogQuote({
//         attributes: {
//             topic: topic.value,
//             content: content.value
//         },
//         username: username.value,
//     });
//     quote.persist();
//     // }

// }

// form_input.addEventListener("submit", handleForm);


// class blogQuote {
//     static all = [];

//     constructor({ id, username, attributes: { topic, content }, }) {
//         this.topic = topic;
//         this.content = content;
//         this.id = id;
//         this.username = username;
//         this.constructor.all.push(this);
//     }
//     static displayAll() {
//         dispQuotes.innerHTML = ""
//         this.all.forEach((q) => {
//             q.display();
//         })
//     }

//     display() {
//         const container = document.createElement('div')

//         const head = document.createElement("h2")
//         head.innerText = this.topic
//         container.appendChild(head)

//         const qut = document.createElement('p')
//         qut.innerText = this.content
//         container.appendChild(qut)

//         const del = document.createElement("button")
//         del.innerText = "Delete"
//         del.addEventListener("click", (e) => this.delete(e));
//         container.appendChild(del);

//         dispQuotes.appendChild(container);
//     }

//     persist() {
//         fetch("http://localhost:3000/quotes", {
//                 method: 'POST', // or 'PUT'
//                 headers: {
//                     'Content-Type': 'application/json',
//                 },
//                 body: JSON.stringify({
//                     quote: {
//                         topic: this.topic,
//                         content: this.content,
//                         username: this.username
//                     },
//                 }),
//             })
//             .then((res) => res.json())
//             .then((quotes) => {
//                 if (quotes.errors) {
//                     console.log(quotes.errors)
//                 } else {
//                     //e.target.reset();
//                     form_input.reset()
//                     this.id = quotes.data.id;
//                     this.constructor.displayAll()
//                 }
//             });
//     }

//     delete() {
//         fetch(`http://localhost:3000/quotes/${this.id}`, {
//             method: "DELETE",
//         }).then(() => {
//             this.constructor.all = this.constructor.all.filter((q) => {
//                 return q != this;
//             })
//             this.constructor.displayAll();
//         });
//     }
// }










// function displayCreateForm() {
//     let formDiv = document.getElementById('new-study-form')
//     let html = `
//     <form>
//         <label for="topic">Topic:</label>
//         <input type="text" id="topics">
//         <label for="content">Content:</label>
//         <input type="textarea" id="content">
//         <input type="submit">
//     </form>
//     `
//     formDiv.innerHTML = html
//     document.querySelector('form').addEventListener("submit", createProverb)
// }


///////////////////////////////////////////////////