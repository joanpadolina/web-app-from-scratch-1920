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
                date: d.published_date,
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
            if(item.id == dataId) {
             return item
            }
         });
        return findData

    }

    function generateArticle(data) {
        const generateData = data;

        let containerEl = document.querySelector('.containinfo');
        let htmlElement = generateData.map(item => {

            containerEl.insertAdjacentHTML('afterbegin', `
        <div class="article"> 
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
        </div>`);
        });
        return htmlElement
    }

    function detailPage(data){
        let containerEl = document.querySelector('.detail-page');
        let htmlElement = data.map(item => {
            console.log(item);
            containerEl.insertAdjacentHTML('afterbegin', `
        <div class="detail"> 
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

    // function createElement(typeOfElement, options) {
    //     if (typeOfElement === 'img') {
    //         return createImg(options)
    //     }
    // }

    // function createImg(src) {
    //     let newImg = document.createElement('img')
    //     newImg.src = src
    //     return newImg
    // }

    // function renderElement(element, parent) {
    //     parent.appendChild(element)
    // }

    // function detailPage(){
        
    // }

    let categories = ['home', 'arts', 'world'];

    function getRandomCategorie(set) {
        let items = Array.from(set);
        return items[Math.floor(Math.random() * items.length)]
    }

    let randomCategorie = getRandomCategorie(categories);
    const urlTopNews = `https://api.nytimes.com/svc/topstories/v2/${randomCategorie}.json?api-key=`,
        key = 'BhVpjVR9HGDaQ7JxSAyeClycD87PCRrt';
    const apiCallTopNews = urlTopNews + key;


    // export function getTopTen() {
    //     let data = fetch(apiCallTopNews)
    //         .then(response => response.json())
    //         .then(results => {
    //             return newsData = cleanData(results.results);
    //         })
    //         .then(data => {
    //             generateArticle(newsData)
    //             detailPage(newsData)
    //         })
    //         .catch(err => console.log(err))
    //     return data
    // }

    // export function getMovieReviews(){
    //     let data = fetch(apiCallToMovieReviews)
    //     .then(response => response.json())
    //     .then(results =>{
    //        let movie = results.results
    //        return movie
    //     }).then(data => {
    //         console.log(data)
    //     })
    //     return data
    // }
    // getMovieReviews()

    // export function getWeather(){

    // }

    // let data;

    // robin's promise mikaels resolve


    function getTopTen(params) {
        return new Promise((resolve, reject) => { // give a promise with a resolve and reject
            fetch(apiCallTopNews)
                .then((response) => {
                    return response.json()
                })
                .then((myJson) => {
                    let data = myJson.results;
                    resolve(cleanData(data));
                })
                .catch(err => {
                    Promise.reject(new Error('fetch failed'))
                    .then(resolve(err));
                });
        })
    }

    // defensive coding reject

    // getTopTen(results => {
    //    return newsData = results

    // })
    // async function name(params) {
    //     console.log(params)
    //     return await getTopTen()
    // }

    function searchBar(data) {
        const searchValue = document.querySelector('input').value;
        let filterOnValue = data.filter(item => {
            if (item.dataTitle.includes(searchValue) || item.info.includes(searchValue) || item.section.includes(searchValue) || item.subsection.includes(searchValue)) {
                return item
            }
        });
        console.log('serachbarModule', searchValue);
        return generateArticle(filterOnValue)
    }

    async function router() {
        const data = await getTopTen();
        routie({
            '': async () => {
                generateArticle(data);
                searchBar(data);
            },
            'category': () => {
                console.log('article');
            },
            'article/:id': async (id) => {
                let filter = filterData(data, id);
                console.log(filter[0]);
                filter[0];
                detailPage(filter);
            },
            'about': () => {
                console.log('about');
            },
            'error': () => {}
        });
    }

    // export function findData(data) {
    //     let article = findData.filter(item => {
    //         if (item.id == id) {
    //             return item
    //         }
    //     })
    //     return article
    // }

    console.log('app.js');

    router();



















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
