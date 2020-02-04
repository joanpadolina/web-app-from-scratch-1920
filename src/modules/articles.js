export function renderData(data) {
    console.log(data)

    data.map(d => {
        let template = document.querySelector('.containinfo'),
            dataTitle = d.title,
            info = d.abstract,
            urlArticle = d.url,
            img = d.multimedia[0].url,
            date = d.published_date

        template.insertAdjacentHTML('afterbegin', `
        <div class="article"> 
        <img src="${img}"> 
        <div class="contentwrap">
        <p>${d.section} ${d.subsection}</p>
        <h2>${dataTitle}
        </h2>
        <p>${info}</p>
        <a href="${urlArticle}" target="_blank">read</a>
        <p>release date: <span>${date}</span></br>
        <span>${d.byline}</span></p>
        </div>
        </div>`);

    })
}

export function generateArticle(){
    
}

//renderdata() //voor elk data element, call generateArticle
//generateArticle() //returned html voor een article
//renderHTML(generateArticle(), template)
//renderHTML(htmlElement, sourceElement) //sourceElement.insertAdjacentHTML(htmlElement)