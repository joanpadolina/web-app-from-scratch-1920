(function () {
    'use strict';

    function generateArticle(data) {
        const generateData = data;
        const containerEl = document.querySelector('.containinfo');
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
        </article>`);
        });
    }

    function detailPage(data) {
        const containerEl = document.querySelector('.detail-page');
        data.forEach(item => {
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

    }

    function accountPage() {
        const containerEl = document.querySelector('main');
        containerEl.insertAdjacentHTML('afterbegin', `
    <div class="accountpage">
    <h1> YOO </h1>
    </div>`);

        console.log(htmlElement);

    }

    function sortCopy(arr) {
        return arr.slice().sort((a, b) => {
            return a.subsection > b.subsection ? 1 : -1
        })
    }

    function sortSection(arr) {
        return arr.slice().sort((a, b) => {
            return a.section > b.section ? 1 : -1
        })
    }

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
    function filterData(data, id) {
        let dataId = id;
        let findData = data.filter(item => {
            if (item.id == dataId) {
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

    const urlArtNews = 'https://api.nytimes.com/svc/topstories/v2/arts.json?api-key=';
    const apiCallTopNews = urlTopNews + key;
    const apiCallToArt = urlArtNews + key;


    // robin's promise mikaels resolve


    // const getTopNews = () => {
    //     return fetch(apiCallTopNews)
    //         .then((response) => {
    //             return response.json()
    //         })
    //         .then((myJson) => {
    //             let data = myJson.results
    //             return cleanData(data)
    //         })
    // }


    async function getTopNews() {
        const response = await fetch(apiCallTopNews);
        const myJson = await response.json();
        const data = myJson.results;
        return cleanData(data)
    }

    async function fetchArtNews() {
        const response = await fetch(apiCallToArt);
        const myJson = await response.json();
        const data = myJson.results;
        return cleanData(data)
    }

    // const fetchArtNews = () => {
    //     return new Promise((resolve, reject) => {
    //         fetch(apiCallToArt)
    //             .then((response) => {
    //                 return response.json()
    //             })
    //             .then((artJson) => {
    //                 let data = artJson.results
    //                 resolve(cleanData(data))
    //             })
    //             .catch(err => {
    //                 Promise.reject(new Error('fetch failed'))
    //                     .then(resolve(err))
    //             })
    //     })
    // }

    async function router() {
        const data = Object.freeze(await getTopNews());
        const dataArts = await fetchArtNews();
        routie({
            '': () => {
                generateArticle(data);
                sortByName(data);

            },
            'category': () => {
                console.log('article');
            },
            'artnews': () => {
                generateArticle(dataArts);
                sortByName(dataArts);
            },
            'article/:id': (id) => {
                let filter = filterData(data, id);
                let filter2 = filterData(dataArts, id);

                filter[0];
                filter2[0];

                detailPage(filter);
                detailPage(filter2);

            },
            'account': () => {
              accountPage();
            },
            'error': () => {}
        });
    }

    // sorting


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
            } else if (value == 'country') {
                let newData = sortSection(data);
                generateArticle(newData);

            }
        });
    }



    // page loader

    //https://stackoverflow.com/questions/25253391/javascript-loading-screen-while-page-loads

    const onReady = (callback) => {
        var intervalId = window.setInterval(function () {
            if (document.getElementsByTagName('body')[0] !== undefined) {
                window.clearInterval(intervalId);
                callback.call(this);
            }
        }, 1000);
    };

    const setVisible = (selector, visible) => {
        document.querySelector(selector).style.display = visible ? 'block' : 'none';
    };

    onReady(function () {
        setVisible('.loadingio-eclipse', true);
        setVisible('.ldio-rpinwye8j0b', false);
    });

    // start routing for the page
    router();

}());
