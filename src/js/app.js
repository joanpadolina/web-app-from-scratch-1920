const dataChoices = ['home', 'arts', 'world']

function randomData(set) {
    let items = Array.from(set)
    return items[Math.floor(Math.random() * items.length)]
}
let dataFill = randomData(dataChoices)
const url = `https://api.nytimes.com/svc/topstories/v2/${dataFill}.json?api-key=`
const key = "v3DhvEF1nEsrFnSSRFi2hKNf21OANMMd"

function fetchData(url, key) {
    let data = fetch(url + key)
        .then(response => response.json())
        .then(data => data)
        .then(results => renderData(results.results))
        .catch(err => console.log(err))
    return data
}

function renderData(data) {
    console.log(data)

    data.map(d => {
        let title = document.querySelector('.containinfo');
        let dataTitle = d.title
        let info = d.abstract
        let urlArticle = d.url
        let img = d.multimedia[0].url
        let date = d.published_date

        title.insertAdjacentHTML('afterbegin', `
        <div class="articles"> 
        <img src="${img}"> 
        <div class="contentwrap">
        <p>${d.section} ${d.subsection}</p>
        <h2>${dataTitle}
        </h2>
        <p>${info}</p>
        <a href="${urlArticle}" target="_blank">read</a>
        <p>release date: <span>${date}</span></br>
        <span>${d.byline}</span></p>
        </div>
        </div>`);

    })
}
fetchData(url, key)

// hover testing

let redirectLink = document.querySelector('a')
console.log(redirectLink)