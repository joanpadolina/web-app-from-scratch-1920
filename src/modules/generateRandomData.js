// https://www.w3resource.com/javascript-exercises/javascript-math-exercise-23.php

export function create_id(){
    var dt = new Date().getTime();
    let randomNumber = 'xxxxxxxx'.replace(/[xy]/g, function(c) {
        let r = (dt + Math.random()*16)%16 | 0
        dt = Math.floor(dt/16)
        return (c=='x' ? r :(r&0x3|0x8)).toString(16)
    });
    return randomNumber;
}