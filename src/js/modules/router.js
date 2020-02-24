import {
    detailPage,
    generateArticle,
    accountPage,
    sortCopy,
    sortSection,
    moviesReviews
} from './render.js'
import {
    getTopNews,
    fetchArtNews,
    fetchMovieReviews
} from './api.js'
import {
    cleanData,
    filterData,
} from './data.js'



export async function router() {
    const data = Object.freeze(await getTopNews())
    const dataArts = await fetchArtNews()
    const movieData = await fetchMovieReviews()
    routie({
        '': () => {
            generateArticle(data)
            console.log(data)
            sortByName(data)

        },
        'category': () => {
            console.log('article')
        },
        'artnews': () => {
            generateArticle(dataArts)
        },
        'article/:id': (id) => {
            let filter = filterData(data, id)
            let filter2 = filterData(dataArts, id)

            filter[0]
            filter2[0]

            detailPage(filter)
            detailPage(filter2)

        },
        'movie': () => {
            moviesReviews(movieData)
        },
        'account': () => {
          accountPage()
        },
        'error': () => {}
    })
}

// functions
// sort with select
function sortByName(data) {
    const select = document.querySelector('select')
    select.addEventListener('change', (event) => {
        let value = select.value
        console.log(value)
        if (value == 'name') {

            let sorted = sortCopy(data)
            console.log(sorted)
            generateArticle(sorted)
        } else if (value == 'default') {
            console.log(data)
            generateArticle(data)
        } else if (value == 'country'){
            let newData = sortSection(data)
            generateArticle(newData)

        }
    })
}


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