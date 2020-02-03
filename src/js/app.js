const url = 'https://www.themealdb.com/api/json/v1/'
const key = '1'
const apilink ="/list.php?i=list"

fetch(url + key + apilink)
    .then(response => response.json())
    .then(json => {
        console.log(json)
    })
    .catch(err => {
        console.log(err);
    });

