import {
    cleanData,
    cleanMovie
} from './data.js'
let newsData = {}
let categories = ['world']

export function getRandomCategorie(set) {
    let items = Array.from(set)
    return items[Math.floor(Math.random() * items.length)]
}

let randomCategorie = getRandomCategorie(categories)

const urlTopNews = `https://api.nytimes.com/svc/topstories/v2/${randomCategorie}.json?api-key=`,
    key = 'BhVpjVR9HGDaQ7JxSAyeClycD87PCRrt'


const url2 = `https://api.nytimes.com/svc/topstories/v2/`
const categorie = 0
const key2 = `.json?api-key=${key}`

const baseUrl =  new URL ('https://api.nytimes.com/svc/topstories/v2/')
const nextCategorie = categories[1]

const queries = {
    categorie: 'home',
    page_size: 10
}




const urlLiveFeed = 'https://api.nytimes.com/svc/news/v3/content/all/all.json?api-key='
const urlWeather = 'https://weather-ydn-yql.media.yahoo.com/forecastrss'
const keyWeather = ''
const urlArtNews = 'https://api.nytimes.com/svc/topstories/v2/arts.json?api-key='
const apiCallTopNews = urlTopNews + key
const urlMovieReviews = `https://api.nytimes.com/svc/movies/v2/reviews/search.json?query=hulk&api-key=`
const apiCallToMovieReviews = urlMovieReviews + key
const apiCallToArt = urlArtNews + key


// robin's promise mikaels resolve


export function getTopNews() {
    return fetch(apiCallTopNews)
        .then((response) => {
            return response.json()
        })
        .then((myJson) => {
            let data = myJson.results
            return cleanData(data)
        })
}

export function fetchArtNews() {
    return new Promise((resolve, reject) => {
        fetch(apiCallToArt)
            .then((response) => {
                return response.json()
            })
            .then((artJson) => {
                let data = artJson.results
                resolve(cleanData(data))
            })
            .catch(err => {
                Promise.reject(new Error('fetch failed'))
                    .then(resolve(err))
            })
    })
}

export function fetchMovieReviews() {
    return new Promise((resolve, reject) => {
        fetch(apiCallToMovieReviews)
            .then(response => response.json())
            .then(movieResults => {
                let data = movieResults.results
                resolve(cleanMovie(data))
            })
    })
}


