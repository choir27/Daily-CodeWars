// You need to round the answer to 2 decimal places and return it as String.

// If the given value is 0 then it should return 0.00

// You will only be given Natural Numbers as arguments.

// Examples:(Input --> Output)
// 1 --> 1 --> "1.00"
// 2 --> 1 + 1/4 --> "1.25"
// 5 --> 1 + 1/4 + 1/7 + 1/10 + 1/13 --> "1.57"

function SeriesSum(n){
for(let s = 0, i = 0; i <n;i++){
s+=1/(1+i*3)
}
return s.toFixed(2)
}

function SeriesSum(n, s=0){
    return n ? SeriesSum(n-1, s+1/ (3 * n - 2)) : s.toFixed(2)
}