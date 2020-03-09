import {
    create_id
} from '../lib/generateRandomData.js'

export function cleanData(data) {
    const newData = data.map(d => {
        return {
            id: create_id(),
            dataTitle: d.title,
            info: d.abstract,
            urlArticle: d.url,
            img: d.multimedia[0].url,
            date: new Date(d.published_date),
            section: d.section,
            subsection: d.subsection,
            author: d.byline
        }
    })
    return newData
}
export function getOneItemData(data, id) {
    let dataId = id
    let findData = data.filter(item => {
        if (item.id == dataId) {
            return item
        }
    })
    return findData[0]

}