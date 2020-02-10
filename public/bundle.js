(function () {
    'use strict';

    // https://www.w3resource.com/javascript-exercises/javascript-math-exercise-23.php

    function create_id(){
        var dt = new Date().getTime();
        var uuid = 'xxxxxxxx'.replace(/[xy]/g, function(c) {
            var r = (dt + Math.random()*16)%16 | 0;
            dt = Math.floor(dt/16);
            return (c=='x' ? r :(r&0x3|0x8)).toString(16)
        });
        return uuid;
    }

    function cleanData(data) {

        const newData = data.map(d => {
            return {
                id: create_id(),
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
            <a href="#article/${item.id}">read</a>
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

    function detailPage(data){
        let containerEl = document.querySelector('.detail-page');
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
        </div>`);
        });
        return htmlElement
    }

    function router(data) {

        let findData = data;

        // console.log(findData)

        routie({
            'article': () => {
                console.log('article');
            },
            'article/:id': (id) => {
              let article = findData.filter(item => {
                    if(item.id === id){
                      return item
                    }
                });  
                detailPage(article);

            },
            'home': () => {
                console.log('home');
            },
            'about': () => {
                console.log('about');
            },
            'error': () => {}
        });
    }

    ///
    let newsData = {};
    let categories = ['home', 'arts', 'world'];

    function randomData(set) {
        let items = Array.from(set);
        return items[Math.floor(Math.random() * items.length)]
    }

    let dataFill = randomData(categories);
    let url = `https://api.nytimes.com/svc/topstories/v2/${dataFill}.json?api-key=`,
        key = 'v3DhvEF1nEsrFnSSRFi2hKNf21OANMMd';
    // let livefeed = 'https://api.nytimes.com/svc/news/v3/content/all/all.json?api-key='

    // function fetchFunc(params) {
    //     let data = new Promise((resolve, reject) => {
    //         fetch(url + key)
    //             .then((response) => {
    //                 return response.json()
    //             })
    //             .then((myJson) => {
    //                 resolve(myJson)    
    //             })
    //     })
    //     return data
    // }
    // async function name(params) {
    //     console.log(await fetchFunc());
    // }
    // name()


    function fetchData() {
        let data = fetch(url + key)
            .then(response => response.json())
            .then(results => {
                newsData = cleanData(results.results);
            })
            .then(data => {
                generateArticle(newsData);
                router(newsData);
            })
            .catch(err => console.log(err));
        return data
    }
    fetchData();


    let button = document.querySelector('.button');
    button.addEventListener('click', () => {
        searchBar(searchValue(), newsData);
    });




    //https://stackoverflow.com/questions/25253391/javascript-loading-screen-while-page-loads

    function onReady(callback) {
        var intervalId = window.setInterval(function () {
            if (document.getElementsByTagName('body')[0] !== undefined) {
                window.clearInterval(intervalId);
                callback.call(this);
            }
        }, 1000);
    }

    function setVisible(selector, visible) {
        document.querySelector(selector).style.display = visible ? 'block' : 'none';
    }

    onReady(function () {
        setVisible('.loadingio-eclipse', true);
        setVisible('.ldio-rpinwye8j0b', false);
    });

    // remove detailpagin
    // let img = document.querySelector('section')
    // console.log(img)

    // function removeDetail() {
    //     console.log('clicked')
    //     img.classList.add('detail-remove')
    // }
    // img.addEventListener('click', removeDetail)

}());
