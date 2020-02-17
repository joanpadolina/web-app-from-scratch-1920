import {
    detailPage,
    generateArticle,
    accountPage
} from './render.js'
import {
    getTopNews,
    fetchArtNews
} from './api.js'
import {
    cleanData,
    filterData,
} from './data.js'



export async function router() {
    const data = await getTopNews()
    const dataArts = await fetchArtNews()
    routie({
        '': async () => {
            generateArticle(data)
        },
        'category': () => {
            console.log('article')
        },
        'artnews':() => {
            generateArticle(dataArts)
        },
        'article/:id': async (id) => {
            let filter = filterData(data, id)
            let filter2 = filterData(dataArts, id)
           
            filter[0]
            filter2[0]
            
            detailPage(filter)
            detailPage(filter2)

        },
        'account': () => {
            accountPage()
        },
        'error': () => {}
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