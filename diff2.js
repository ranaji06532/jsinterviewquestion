let numbers = [12,2, 2,12, 5, 9, 7, 2, 6, 5, 9, 10, 33, 99];

let difference = (function (arr) {

    if(arr.length % 2 === 0) {
        
        let newArry = arr.map( (val, ind) => {
            if(ind !== 0){
                return val - numbers[ind - 1]
            }
            else {
                return 0
            }

        } ).sort( (a,b) => b - a )
        
        console.log(newArry);
    }
    else {
        console.log("error in array is not match with expected criteria")
    }
    
    // let result =  Array.from( new Set(arr) ).sort((a,b) => b - a );
    // return result[0] - result[result.length - 1 ];

})(numbers);

difference;