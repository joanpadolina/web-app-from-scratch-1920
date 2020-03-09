import {
    detailPage,
    generateArticle,
    accountPage,
    sortCopy,
    sortSection
} from './render.js'
import {
    getTopNews,
    fetchArtNews
} from './api.js'
import {
    getOneItemData
} from './data.js'

export async function router() {
    const data = Object.freeze(await getTopNews())
    const dataArts = await fetchArtNews()
    routie({
        '': () => {
            generateArticle(data)
            sortByName(data)

        },
        'category': () => {
            console.log('article')
        },
        'artnews': () => {
            generateArticle(dataArts)
            sortByName(dataArts)
        },
        'article/:id': (id) => {

            // variable naam news detail en filter niet
            // reduce one item

            let getOneItem = getOneItemData(data, id)
            let getOneItem2 = getOneItemData(dataArts, id)
            // console.log(getOneItem)
            // getOneItem[0]
            // getOneItem2[0]

            detailPage(getOneItem)
            detailPage(getOneItem2)

        },
        'account': () => {
          accountPage()
        },
        'error': () => {}
    })
}

// sorting


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
        } else if (value == 'country') {
            let newData = sortSection(data)
            generateArticle(newData)

        }
    })
}



// page loader

//https://stackoverflow.com/questions/25253391/javascript-loading-screen-while-page-loads
// functie in variabelen.


function onReady(callback) {
    let intervalId = window.setInterval(function () {
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