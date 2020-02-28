import {
    cleanData
} from './data.js'

let categories = ['world']

function getRandomCategorie(set) {
    let items = Array.from(set)
    return items[Math.floor(Math.random() * items.length)]
}

let randomCategorie = getRandomCategorie(categories)

const urlTopNews = `https://api.nytimes.com/svc/topstories/v2/${randomCategorie}.json?api-key=`,
    key = 'BhVpjVR9HGDaQ7JxSAyeClycD87PCRrt'

const urlArtNews = 'https://api.nytimes.com/svc/topstories/v2/arts.json?api-key='
const apiCallTopNews = urlTopNews + key
const urlMovieReviews = `https://api.nytimes.com/svc/movies/v2/reviews/search.json?query=hulk&api-key=`
const apiCallToMovieReviews = urlMovieReviews + key
const apiCallToArt = urlArtNews + key


// robin's promise mikaels resolve



export async function getTopNews() {
    const response = await fetch(apiCallTopNews)
    const myJson = await response.json()
    const data = myJson.results
    return cleanData(data)
}

export async function fetchArtNews() {
    const response = await fetch(apiCallToArt)
    const myJson = await response.json()
    const data = myJson.results
    return cleanData(data)
}


// new Promise use example delete later or not because I want to use it.

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
