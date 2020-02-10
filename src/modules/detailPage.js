export function detailPage(data){
    let containerEl = document.querySelector('.detail-page')
    let htmlElement = data.filter(item => {

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