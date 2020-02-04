export function cleanData(data) {

    const newData = data.map(d => {
        return {
            dataTitle: d.title,
            info: d.abstract,
            urlArticle: d.url,
            img: d.multimedia[0].url,
            date: d.published_date,
            section: d.section,
            subsection: d.subsection,
            author: d.byline
        }
    })
    return newData
}


//renderdata() //voor elk data element, call generateArticle
//generateArticle() //returned html voor een article
//renderHTML(generateArticle(), template)
//renderHTML(htmlElement, sourceElement) //sourceElement.insertAdjacentHTML(htmlElement)
