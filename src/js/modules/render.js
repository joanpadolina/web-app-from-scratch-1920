import {
    getTopNews
} from './api.js'


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
        <a href=""></a>
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
        </div>`)
    })
    return htmlElement
}
export function accountPage() {
    console.log('acocunt')
    let containerEl = document.querySelector('main')
    let htmlElement = containerEl.insertAdjacentHTML('afterbegin', `
    <div class="accountpage">
    <h1> YOO </h1>
    </div>`
    )

    console.log(htmlElement)
    return htmlElement
}

export function moviesReviews(data){
    console.log(data)
    let containerEl = document.querySelector('main')
    let htmlElement = data.map(item => {
        containerEl.insertAdjacentHTML('afterbegin', `
        <input type="text" id="myInput" placeholder="Search for names..">
        <section class="movie-rev">
        <div class="poster">
        <img src="${item.img.src}">
        </div>
        <article>
        <h1>${item.dataTitle}</h1>
        <p>${item.summary}</p>
        </article>
        </section>`)
    })
    return htmlElement
}

export function sortCopy(arr){
    return arr.slice().sort((a, b) => { 
        return a.subsection > b.subsection ? 1 : -1
    })
}

export function sortSection(arr){
    return arr.slice().sort((a, b) => { 
        return a.section > b.section ? 1 : -1
    })
}