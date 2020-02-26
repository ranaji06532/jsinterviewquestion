function oddOccurrencesInArray(){

    let a = [3,5,9,3,5,7,9], aLen = a.length, b = [], c = null;

    if( (aLen % 2) !== 0){
        b = a.sort( (x, y) => y - x )
        
        for(let i = 1; i < aLen; i++){
                let index = i - 1;
                b[i] !== b[index] ? c = b[index] : ++i;
        }
        
        // console.log(c);
    }
}

oddOccurrencesInArray()