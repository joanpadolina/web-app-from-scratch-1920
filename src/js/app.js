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

// import {
//     fetcher
// } from '../modules/fetch.js'
import {
    filterData
} from '../modules/filterData.js'

import {
    router
} from '../modules/router.js'




///
let newsData = {}
let categories = ['home', 'arts', 'world']

function randomData(set) {
    let items = Array.from(set)
    return items[Math.floor(Math.random() * items.length)]
}

let dataFill = randomData(categories)
let url = `https://api.nytimes.com/svc/topstories/v2/${dataFill}.json?api-key=`,
    key = 'v3DhvEF1nEsrFnSSRFi2hKNf21OANMMd'
// let livefeed = 'https://api.nytimes.com/svc/news/v3/content/all/all.json?api-key='

// function fetchFunc(params) {
//     let data = new Promise((resolve, reject) => {
//         fetch(url + key)
//             .then((response) => {
//                 return response.json()
//             })
//             .then((myJson) => {
//                 resolve(myJson)    
//             })
//     })
//     return data
// }
// async function name(params) {
//     console.log(await fetchFunc());
// }
// name()


function fetchData() {
    let data = fetch(url + key)
        .then(response => response.json())
        .then(results => {
            newsData = cleanData(results.results);
        })
        .then(data => {
            generateArticle(newsData)
            router(newsData)
        })
        .catch(err => console.log(err))
    return data
}
fetchData()


let button = document.querySelector('.button')
button.addEventListener('click', () => {
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

// remove detailpagin
// let img = document.querySelector('section')
// console.log(img)

// function removeDetail() {
//     console.log('clicked')
//     img.classList.add('detail-remove')
// }
// img.addEventListener('click', removeDetail)