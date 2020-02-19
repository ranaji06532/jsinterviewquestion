console.log("a");

let timer = setTimeout( () => {
    console.log("b")
}, 2)

let timers = setTimeout( () => {
    console.log("c")
}, 10)

let timersTest = setTimeout( () => {
    console.log("d")
}, 0)

console.log("e")