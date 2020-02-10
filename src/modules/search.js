import {
    generateArticle
} from "./createelement";

export function searchBar(filter, data) {
    let searchValue = document.querySelector('input').value
    let filterOnValue = data.filter(item => {
        if (item.dataTitle.includes(searchValue) || item.info.includes(searchValue) || item.section.includes(searchValue) || item.subsection.includes(searchValue)) {
            return item
        }
    })
    console.log('serachbarModule', filterOnValue)
    return generateArticle(filterOnValue)
}

export function searchValue() {
    let searchValue = document.querySelector('input').value
    return searchValue
}