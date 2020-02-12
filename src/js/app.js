import {router} from '../modules/router.js'


console.log('app.js')

router()



















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