import {
    cleanData
} from './cleandata.js'

export function fetcher() {
    let newsData = {}
    let categories = ['home', 'arts', 'world']
    
    function randomData(set) {
        let items = Array.from(set)
        return items[Math.floor(Math.random() * items.length)]
    }
    
    let dataFill = randomData(categories)
    let url = `https://api.nytimes.com/svc/topstories/v2/${dataFill}.json?api-key=`,
        key = 'v3DhvEF1nEsrFnSSRFi2hKNf21OANMMd'

    let fetchedData = fetch(url + key)
        .then(response => response.json())
        .then(data => data)
        .then(results => {
            newsData = cleanData(results.results)
        })
        .catch(err => console.log(err))

    return newsData
}