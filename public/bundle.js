(function () {
    'use strict';

    function renderData(data) {
        console.log(data);

        data.map(d => {
            let template = document.querySelector('.containinfo'),
                dataTitle = d.title,
                info = d.abstract,
                urlArticle = d.url,
                img = d.multimedia[0].url,
                date = d.published_date;

            template.insertAdjacentHTML('afterbegin', `
        <div class="articles"> 
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

        });
    }

    let dataChoices = ['home', 'arts', 'world'];

    function randomData(set) {
        let items = Array.from(set);
        return items[Math.floor(Math.random() * items.length)]
    }
    let dataFill = randomData(dataChoices);
    let url = `https://api.nytimes.com/svc/topstories/v2/${dataFill}.json?api-key=`,
        key = "v3DhvEF1nEsrFnSSRFi2hKNf21OANMMd";

    async function fetchData() {
        let data = await fetch(url + key)
            .then(response => response.json())
            .then(data => data)
            .then(results => renderData(results.results))
            .catch(err => console.log(err));
        return data
    }

    fetchData();

}());
