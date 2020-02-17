export function generateArticle(data) {
    const generateData = data

    let containerEl = document.querySelector('.containinfo')
    let htmlElement = generateData.map(item => {

        containerEl.insertAdjacentHTML('afterbegin', `
        <article> 
        <a href="#article/${item.id}"><img id="img" src="${item.img}"> </a>
           <div class="contentwrap" id="content">
            <p>${item.section} ${item.subsection}</p>
            <h2>${item.dataTitle}
            </h2>
            <!-- 
            <p>${item.info}</p>
            <a href="#article/${item.id}">read</a>
            <p>release date: <span>${item.date}</span></br>
            <span>${item.author}</span></p>
            -->
            </div> 
        </article>`)
    })
    return htmlElement
}

export function detailPage(data) {
    let containerEl = document.querySelector('.detail-page')
    let htmlElement = data.map(item => {
        console.log(item)
        containerEl.insertAdjacentHTML('afterbegin', `
        <div class="detail"> 
        <a href="">back</a>
            <img src="${item.img}">
            <div class="detail-content">
            <p>${item.section} ${item.subsection}</p>
            <h2>${item.dataTitle}
            </h2>
            <p>${item.info}</p>
            <a href="${item.urlArticle}" target="_blank">read</a>
            <p>release date: <span>${item.date}</span></br>
            <span>${item.author}</span></p>
            </div>
            <button id="localSt" value="${item.id}" ></button> 
        </div>`)
    })
    return htmlElement
}
export function accountPage() {
    console.log('acocunt')
    let containerEl = document.querySelector('main')
    console.log(containerEl)
    let htmlElement = containerEl.insertAdjacentElement('afterbegin', `
    <h1> YOO </h1>`)

    console.log(htmlElement)
    return htmlElement
}


// function createElement(typeOfElement, options) {
//     if (typeOfElement === 'img') {
//         return createImg(options)
//     }
//     // if(typeOfElement === 'p'){
//     //     return createParagraph(optionss)
//     // }
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