export function fetcher(url, key){
    let data = fetch(url + key)
    .then(response => response.json())
    .then(data => data.results)
    .catch(err => console.log(err))

    return data
}