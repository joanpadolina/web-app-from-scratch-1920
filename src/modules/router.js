import {
    detailPage,
    generateArticle
} from './render.js'
import {
    getTopTen
} from './api.js'
import {
    cleanData,
    filterData
} from './data.js'
import {
    searchBar,
    searchValue
} from './search.js'




export async function router() {
    const data = await getTopTen()
    routie({
        '': async () => {
            generateArticle(data)
            searchBar(data)
        },
        'category': () => {
            console.log('article')
        },
        'article/:id': async (id) => {
            let filter = filterData(data, id)
            console.log(filter[0])
            filter[0]
            detailPage(filter)
        },
        'about': () => {
            console.log('about')
        },
        'error': () => {}
    })
}

// export function findData(data) {
//     let article = findData.filter(item => {
//         if (item.id == id) {
//             return item
//         }
//     })
//     return article
// }