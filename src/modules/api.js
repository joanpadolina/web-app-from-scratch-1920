import {
    cleanData,
    filterData
} from './data.js'
import {
    generateArticle,
    detailPage
} from './render.js'

let newsData = {}
let categories = ['home', 'arts', 'world']

export function getRandomCategorie(set) {
    let items = Array.from(set)
    return items[Math.floor(Math.random() * items.length)]
}

let randomCategorie = getRandomCategorie(categories)
const urlTopNews = `https://api.nytimes.com/svc/topstories/v2/${randomCategorie}.json?api-key=`,
    key = 'BhVpjVR9HGDaQ7JxSAyeClycD87PCRrt'
const urlLiveFeed = 'https://api.nytimes.com/svc/news/v3/content/all/all.json?api-key='
const urlWeather = 'https://weather-ydn-yql.media.yahoo.com/forecastrss'
const keyWeather = ''
const apiCallTopNews = urlTopNews + key
const urlMovieReviews = `https://api.nytimes.com/svc/movies/v2/reviews/search.json?query=godfather&api-key=`
const apiCallToMovieReviews = urlMovieReviews + key


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


export function getTopTen(params) {
    return new Promise((resolve, reject) => { // give a promise with a resolve and reject
        fetch(apiCallTopNews)
            .then((response) => {
                return response.json()
            })
            .then((myJson) => {
                let data = myJson.results
                resolve(cleanData(data))
            })
            .catch(err => {
                Promise.reject(new Error('fetch failed'))
                .then(resolve(err))
            })
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