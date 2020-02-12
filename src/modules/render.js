import {filterData} from './data.js'


export function generateArticle(data) {
    const generateData = data

    let containerEl = document.querySelector('.containinfo')
    let htmlElement = generateData.map(item => {

        containerEl.insertAdjacentHTML('afterbegin', `
        <div class="article"> 
        <a href="#article/${item.id}"><img src="${item.img}"> </a>
    <!--        <div class="contentwrap">
            <p>${item.section} ${item.subsection}</p>
            <h2>${item.dataTitle}
            </h2>
            <p>${item.info}</p>
            <a href="#article/${item.id}">read</a>
            <p>release date: <span>${item.date}</span></br>
            <span>${item.author}</span></p>
            </div> -->
        </div>`)
    })
    return htmlElement
}

export function detailPage(data){
    let containerEl = document.querySelector('.detail-page')
    let htmlElement = data.map(item => {
        containerEl.insertAdjacentHTML('afterbegin', `
        <div class="detail"> 
            <img src="${item.img}">
            <div class="detail-content">
            <p>${item.section} ${item.subsection}</p>
            <h2>${item.dataTitle}
            </h2>
            <p>${item.info}</p>
            <a href="#article/${item.id}">read</a>
            <p>release date: <span>${item.date}</span></br>
            <span>${item.author}</span></p>
            </div>
        </div>`)
    })
    return htmlElement
}

// function createElement(typeOfElement, options) {
//     if (typeOfElement === 'img') {
//         return createImg(options)
//     }
// }

// function createImg(src) {
//     let newImg = document.createElement('img')
//     newImg.src = src
//     return newImg
// }

// function renderElement(element, parent) {
//     parent.appendChild(element)
// }

// function detailPage(){
    
// }