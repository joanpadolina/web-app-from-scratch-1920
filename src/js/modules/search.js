import {
    generateArticle
} from './render';

export function searchBar(data) {
    const searchValue = document.querySelector('input').value
    console.log(searchValue)
    let filterOnValue = data.filter(item => {
        if (item.dataTitle.includes(searchValue) || item.info.includes(searchValue) || item.section.includes(searchValue) || item.subsection.includes(searchValue)) {
            return item
        }
    })
    return generateArticle(filterOnValue)
}

export function searchValue() {
    let searchValue = document.querySelector('input').value
    return searchValue
}