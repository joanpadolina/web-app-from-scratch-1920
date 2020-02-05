import {
    cleanData
} from '../modules/cleandata.js'
import {
    generateArticle
} from '../modules/createelement.js'

import {
    searchBar,
    searchValue
} from '../modules/search.js'

import {fetcher} from '../modules/fetch.js'


let newsData = {}
let dataChoices = ['home', 'arts', 'world']

function randomData(set) {
    let items = Array.from(set)
    return items[Math.floor(Math.random() * items.length)]
}

let dataFill = randomData(dataChoices)
let url = `https://api.nytimes.com/svc/topstories/v2/${dataFill}.json?api-key=`,
    key = "v3DhvEF1nEsrFnSSRFi2hKNf21OANMMd"
let livefeed = 'https://api.nytimes.com/svc/news/v3/content/all/all.json?api-key='

// fetcher(livefeed + key)

function fetcher1(url, key2){
    let data = fetch(url + key2)
    .then(response => response.json())
    .then(data => data.results)
    .catch(err => console.log(err))

    return data
}
fetcher1(livefeed+key)

function fetchData() {
    let data = fetch(url + key)
        .then(response => response.json())
        .then(data => data)
        .then(results => {
            newsData = cleanData(results.results);
            generateArticle(newsData)
        })
        .catch(err => console.log(err))
}



let button = document.querySelector('.button')
button.addEventListener("click", () => {
    searchBar(searchValue(), newsData)
})








//https://stackoverflow.com/questions/25253391/javascript-loading-screen-while-page-loads

function onReady(callback) {
    var intervalId = window.setInterval(function () {
        if (document.getElementsByTagName('body')[0] !== undefined) {
            window.clearInterval(intervalId);
            callback.call(this);
        }
    }, 1000);
}

function setVisible(selector, visible) {
    document.querySelector(selector).style.display = visible ? 'block' : 'none';
}

onReady(function () {
    setVisible('.loadingio-eclipse', true);
    setVisible('.ldio-rpinwye8j0b', false);
});

fetchData()