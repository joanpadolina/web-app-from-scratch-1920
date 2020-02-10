export function generateArticle(data) {

    let containerEl = document.querySelector('.containinfo')
    let htmlElement = data.map(item => {

        containerEl.insertAdjacentHTML('afterbegin', `
        <div class="article"> 
            <img src="${item.img}"> 
            <div class="contentwrap">
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

function createElement(typeOfElement, options) {
    if (typeOfElement === "img") {
        return createImg(options)
    }
}

function createImg(src) {
    let newImg = document.createElement('img')
    newImg.src = src
    return newImg
}

function renderElement(element, parent) {
    parent.appendChild(element)
}

function detailPage(){
    
}