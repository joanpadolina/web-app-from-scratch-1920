import {
    renderData
} from '../modules/articles.js'

let dataChoices = ['home', 'arts', 'world']

function randomData(set) {
    let items = Array.from(set)
    return items[Math.floor(Math.random() * items.length)]
}

let dataFill = randomData(dataChoices)
let url = `https://api.nytimes.com/svc/topstories/v2/${dataFill}.json?api-key=`,
    key = "v3DhvEF1nEsrFnSSRFi2hKNf21OANMMd"

async function fetchData() {
    let data = await fetch(url + key)
        .then(response => response.json())
        .then(data => data)
        .then(results => renderData(results.results))
        .catch(err => console.log(err))
    return data
}

fetchData()
