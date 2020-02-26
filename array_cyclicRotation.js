let A = [3, 8, 9, 7, 6],
    K = 3;

for(let i = 0; i < K; i++){
    let le =  A.pop();
    A.unshift(le)
}

console.log(A)
