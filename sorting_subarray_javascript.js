var arr = [{
    "name": "Hilton Dubai",
    "city": "Dubai",
    "offers": [{
            "meal_type": "breakfast",
            "price": "400"
        },
        {
            "location": "room only",
            "price": "150"
        },
        {
            "location": "all inclusive",
            "price": "700"
        }
    ]
},
{
    "name": "Rush Hotel Dubai",
    "city": "Dubai",
    "offers": [{
            "meal_type": "breakfast",
            "price": "250"
        },
        {
            "location": "room only",
            "cash": "200"
        },
        {
            "location": "all inclusive",
            "price": "350"
        }
    ]
},
{
    "name": "Pride In Dubai",
    "city": "Dubai",
    "offers": [{
            "meal_type": "breakfast",
            "price": "300"
        },
        {
            "location": "room only",
            "price": "100"
        },
        {
            "location": "all inclusive",
            "price": "500"
        }
    ]
}
]

const sortingArraySubChild = () => {
 
  let newArr = arr.map( (val, index) => {
      let sortedArr = val.offers.sort( (a, b) => {
          let priceA = parseInt(a.price);
          let priceB = parseInt(b.price);
    
          if(priceA && priceB !== NaN){
                if(priceA < priceB){
                    return -1
                }
                if(priceA > priceB){
                    return 1
                }
                return 0
          }
      })
    return {
        ...val,
        offers: sortedArr
    }
  })

 console.dir(newArr);
}

sortingArraySubChild()