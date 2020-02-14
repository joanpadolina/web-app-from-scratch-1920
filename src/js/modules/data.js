import {
    create_id
} from './generateRandomData.js'
import {detailPage} from './render.js'

export function cleanData(data) {
    const newData = data.map(d => {
        console.log(d)
        return {
            id: create_id(),
            dataTitle: d.title,
            info: d.abstract,
            urlArticle: d.url,
            img: d.multimedia[0].url,
            date: d.published_date,
            section: d.section,
            subsection: d.subsection,
            author: d.byline
        }
    })
    return newData
}

export function filterData(data, id) {
    let dataId = id
    let findData = data.filter(item => {
        if(item.id == dataId) {
         return item
        }
     })
    return findData

}

export function saveToLocalStorage() {

}