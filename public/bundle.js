(function () {
    'use strict';

    function cleanData(data) {

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
        });
        return newData
    }


    //renderdata() //voor elk data element, call generateArticle
    //generateArticle() //returned html voor een article
    //renderHTML(generateArticle(), template)
    //renderHTML(htmlElement, sourceElement) //sourceElement.insertAdjacentHTML(htmlElement)

    function generateArticle(data) {

        let containerEl = document.querySelector('.containinfo');
        let htmlElement = data.map(item => {

            containerEl.insertAdjacentHTML('afterbegin', `
        <div class="article"> 
            <img src="${item.img}"> 
            <div class="contentwrap">
            <p>${item.section} ${item.subsection}</p>
            <h2>${item.dataTitle}
            </h2>
            <p>${item.info}</p>
            <a href="${item.urlArticle}" target="_blank">read</a>
            <p>release date: <span>${item.date}</span></br>
            <span>${item.author}</span></p>
            </div>
        </div>`);
        });
        return htmlElement
    }

    function searchBar(filter, data) {
        let searchValue = document.querySelector('input').value;
        let filterOnValue = data.filter(item => {
            if (item.dataTitle.includes(searchValue) || item.info.includes(searchValue) || item.section.includes(searchValue) || item.subsection.includes(searchValue)) {
                return item
            }
        });
        console.log('serachbarModule', filterOnValue);
        return generateArticle(filterOnValue)
    }

    function searchValue() {
        let searchValue = document.querySelector('input').value;
        return searchValue
    }

    let newsData = {};
    let dataChoices = ['home', 'arts', 'world'];

    function randomData(set) {
        let items = Array.from(set);
        return items[Math.floor(Math.random() * items.length)]
    }

    let dataFill = randomData(dataChoices);
    let url = `https://api.nytimes.com/svc/topstories/v2/${dataFill}.json?api-key=`,
        key = "v3DhvEF1nEsrFnSSRFi2hKNf21OANMMd";

    function fetchData() {
        let data = fetch(url + key)
            .then(response => response.json())
            .then(data => data)
            .then(results => {newsData = cleanData(results.results); generateArticle(newsData);})
            .catch(err => console.log(err));
    }

    let button = document.querySelector('.button');
    button.addEventListener("click", ()=>{
        searchBar(searchValue(),newsData);
    });








    //https://stackoverflow.com/questions/25253391/javascript-loading-screen-while-page-loads

    function onReady(callback) {
        var intervalId = window.setInterval(function() {
          if (document.getElementsByTagName('body')[0] !== undefined) {
            window.clearInterval(intervalId);
            callback.call(this);
          }
        }, 1000);
      }
      
      function setVisible(selector, visible) {
        document.querySelector(selector).style.display = visible ? 'block' : 'none';
      }
      
      onReady(function() {
        setVisible('.loadingio-eclipse', true);
        setVisible('.ldio-rpinwye8j0b', false);
      });

    fetchData();

}());
