(function () {
    'use strict';

    // https://www.w3resource.com/javascript-exercises/javascript-math-exercise-23.php

    function create_id(){
        var dt = new Date().getTime();
        let randomNumber = 'xxxxxxxx'.replace(/[xy]/g, function(c) {
            let r = (dt + Math.random()*16)%16 | 0;
            dt = Math.floor(dt/16);
            return (c=='x' ? r :(r&0x3|0x8)).toString(16)
        });
        return randomNumber;
    }

    function cleanData(data) {
        const newData = data.map(d => {
            return {
                id: create_id(),
                dataTitle: d.title,
                info: d.abstract,
                urlArticle: d.url,
                img: d.multimedia[0].url,
                date: new Date(d.published_date),
                section: d.section,
                subsection: d.subsection,
                author: d.byline
            }
        });
        return newData
    }
    function cleanMovie(data){
        const newData = data.map(d => {
            return {
                id:create_id(),
                dataTitle: d.display_title,
                summary: d.summary_short,
                img: d.multimedia
            }
        });
        return newData
    }

    function filterData(data, id) {
        let dataId = id;
        let findData = data.filter(item => {
            if(item.id == dataId) {
             return item
            }
         });
        return findData

    }

    let categories = ['world'];

    function getRandomCategorie(set) {
        let items = Array.from(set);
        return items[Math.floor(Math.random() * items.length)]
    }

    let randomCategorie = getRandomCategorie(categories);

    const urlTopNews = `https://api.nytimes.com/svc/topstories/v2/${randomCategorie}.json?api-key=`,
        key = 'BhVpjVR9HGDaQ7JxSAyeClycD87PCRrt';

    const baseUrl =  new URL ('https://api.nytimes.com/svc/topstories/v2/');
    const urlArtNews = 'https://api.nytimes.com/svc/topstories/v2/arts.json?api-key=';
    const apiCallTopNews = urlTopNews + key;
    const urlMovieReviews = `https://api.nytimes.com/svc/movies/v2/reviews/search.json?query=hulk&api-key=`;
    const apiCallToMovieReviews = urlMovieReviews + key;
    const apiCallToArt = urlArtNews + key;


    // robin's promise mikaels resolve


    function getTopNews() {
        return fetch(apiCallTopNews)
            .then((response) => {
                return response.json()
            })
            .then((myJson) => {
                let data = myJson.results;
                return cleanData(data)
            })
    }

    function fetchArtNews() {
        return new Promise((resolve, reject) => {
            fetch(apiCallToArt)
                .then((response) => {
                    return response.json()
                })
                .then((artJson) => {
                    let data = artJson.results;
                    resolve(cleanData(data));
                })
                .catch(err => {
                    Promise.reject(new Error('fetch failed'))
                        .then(resolve(err));
                });
        })
    }

    function fetchMovieReviews() {
        return new Promise((resolve, reject) => {
            fetch(apiCallToMovieReviews)
                .then(response => response.json())
                .then(movieResults => {
                    let data = movieResults.results;
                    resolve(cleanMovie(data));
                });
        })
    }

    function generateArticle(data) {
        const generateData = data;

        let containerEl = document.querySelector('.containinfo');
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
        </article>`);
        });
        return htmlElement
    }

    function detailPage(data) {
        let containerEl = document.querySelector('.detail-page');
        let htmlElement = data.map(item => {
            console.log(item);
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
        </div>`);
        });
        return htmlElement
    }
    function accountPage() {
        console.log('acocunt');
        let containerEl = document.querySelector('main');
        let htmlElement = containerEl.insertAdjacentHTML('afterbegin', `
    <div class="accountpage">
    <h1> YOO </h1>
    </div>`
        );

        console.log(htmlElement);
        return htmlElement
    }

    function moviesReviews(data){
        console.log(data);
        let containerEl = document.querySelector('main');
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
        </section>`);
        });
        return htmlElement
    }

    function sortCopy(arr){
        return arr.slice().sort((a, b) => { 
            return a.subsection > b.subsection ? 1 : -1
        })
    }

    function sortSection(arr){
        return arr.slice().sort((a, b) => { 
            return a.section > b.section ? 1 : -1
        })
    }

    async function router() {
        const data = Object.freeze(await getTopNews());
        const dataArts = await fetchArtNews();
        const movieData = await fetchMovieReviews();
        routie({
            '': () => {
                generateArticle(data);
                console.log(data);
                sortByName(data);

            },
            'category': () => {
                console.log('article');
            },
            'artnews': () => {
                generateArticle(dataArts);
            },
            'article/:id': (id) => {
                let filter = filterData(data, id);
                let filter2 = filterData(dataArts, id);

                filter[0];
                filter2[0];

                detailPage(filter);
                detailPage(filter2);

            },
            'movie': () => {
                moviesReviews(movieData);
            },
            'account': () => {
              accountPage();
            },
            'error': () => {}
        });
    }

    // functions
    // sort with select
    function sortByName(data) {
        const select = document.querySelector('select');
        select.addEventListener('change', (event) => {
            let value = select.value;
            console.log(value);
            if (value == 'name') {

                let sorted = sortCopy(data);
                console.log(sorted);
                generateArticle(sorted);
            } else if (value == 'default') {
                console.log(data);
                generateArticle(data);
            } else if (value == 'country'){
                let newData = sortSection(data);
                generateArticle(newData);

            }
        });
    }


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

    // localstorage
    // click on a page give the details and if you like it click the like
    // Add article to your local storage
    // render localstorage to application

    function readLater(){
        const button = document.getElementById('#localSt');
    }

    router();
    readLater();

}());
