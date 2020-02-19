function f1(){
    var x = 10, y = 20;
    var z = a = 10;
}

function f2(){
    let b = 10, c = 20;
    let d = e = 10
}

f1();

f2();

console.log(e);