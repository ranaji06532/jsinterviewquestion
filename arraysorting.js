// let arr = [1, 100, 200, 2, 32, 10, 5, null, undefined, , 8]

// console.log(arr.sort())

// console.log(arr.sort( (a,b ) => a -b ))

// console.log(arr.sort( (a,b ) => b - a ))



// let offers = [{
//     "meal_type": "breakfast",
//     "price": "400"
// },
// {
//     "location": "room only",
//     "price": "150"
// },
// {
//     "location": "all inclusive",
//     "price": "700"
// }
// ]


// console.log(offers.sort( (a, b) => a.price - b.price))


// var items = [
//     { name: 'Edward', value: 21 },
//     { name: 'Sharpe', value: 37 },
//     { name: 'And', value: 45 },
//     { name: 'The', value: -12 },
//     { name: 'Magnetic', value: 13 },
//     { name: 'Zeros', value: 37 }
//   ];
  

//  items.sort( (a, b) => {
//     let nameA = a.name.toUpperCase();
//     let nameB = b.name.toUpperCase();

//     if(nameA < nameB) {
//         return -1
//     }
//     if(nameA > nameB) {
//         return 1
//     }
//     return 0
//  } )
//  console.log(items);

let items1 = [1, 10, 100, 102, 2, 3, 4, 5, undefined, null, , , 200];

let items2 = items1.filter( items => items)

console.log(items2.sort( (a, b) => a - b))
