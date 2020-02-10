export function filterData(data) {
    let findData = data
    findData.filter(item => {
        if(item.id === id){
          console.log(item)
          return item
        }
    })  
    return findData
}