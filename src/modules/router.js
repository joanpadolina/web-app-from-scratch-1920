import { filterData } from "./filterData";
import {detailPage } from './detailPage.js'


export function router(data) {

    let findData = data

    // console.log(findData)

    routie({
        'article': () => {
            console.log('article')
        },
        'article/:id': (id) => {
          let article = findData.filter(item => {
                if(item.id === id){
                  return item
                }
            })  
            detailPage(article)

        },
        'home': () => {
            console.log('home')
        },
        'about': () => {
            console.log('about')
        },
        'error': () => {}
    })
}