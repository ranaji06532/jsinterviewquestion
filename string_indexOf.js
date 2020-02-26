let num = (15).toString(2);

let newArr = [] ;
let diffArr = [] ;
let ind = 1;

for(i = 0; i < num.toString().length; i++){
    ind = num.toString().indexOf('1', i);

    if( ind !== -1 ){
        newArr.push(ind);
     }
}

let rd = Array.from(new Set(newArr));

rd.sort( (a, b) => {
    diffArr.push( a - b )
} )
let ddd = diffArr.sort( (a, b ) => b - a)
console.log(ddd)

if(ddd.length > 0 ){
console.log( Math.abs(ddd[0] - 1) );
}
