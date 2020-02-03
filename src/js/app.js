const dataChoices = ['home', 'arts', 'world']

function randomData(set) {
    let items = Array.from(set)
    return items[Math.floor(Math.random() * items.length)]
}
let dataFill = randomData(dataChoices)
const url = `https://api.nytimes.com/svc/topstories/v2/${dataFill}.json?api-key=`
const key = "v3DhvEF1nEsrFnSSRFi2hKNf21OANMMd"

function fetchData(url, key) {
    let data = fetch(url + key)
        .then(response => response.json())
        .then(data => data)
        .then(results => renderData(results.results))
        .catch(err => console.log(err))
    return data
}

function renderData(data) {
    console.log(data)

    data.map(d => {
        let d1 = document.querySelector('.containinfo');
        let create = document.createElement('p')
        let data = d.title
        d1.insertAdjacentHTML('afterend', `<p>${data}</p>`);
    })
}
fetchData(url, key)