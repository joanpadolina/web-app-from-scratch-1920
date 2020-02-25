export function generateArticle(data) {
    const generateData = data
    const containerEl = document.querySelector('.containinfo')
    generateData.forEach(item => {

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
}

export function detailPage(data) {
    const containerEl = document.querySelector('.detail-page')
    data.forEach(item => {
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

}

export function accountPage() {
    const containerEl = document.querySelector('main')
    containerEl.insertAdjacentHTML('afterbegin', `
    <div class="accountpage">
    <h1> YOO </h1>
    </div>`)

    console.log(htmlElement)

}

export function sortCopy(arr) {
    return arr.slice().sort((a, b) => {
        return a.subsection > b.subsection ? 1 : -1
    })
}

export function sortSection(arr) {
    return arr.slice().sort((a, b) => {
        return a.section > b.section ? 1 : -1
    })
}