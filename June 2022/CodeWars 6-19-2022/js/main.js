// Count the number of divisors of a positive integer n.

// Random tests go up to n = 500000.

// Examples (input --> output)
// 4 --> 3 (1, 2, 4)
// 5 --> 2 (1, 5)
// 12 --> 6 (1, 2, 3, 4, 6, 12)
// 30 --> 8 (1, 2, 3, 5, 6, 10, 15, 30)

let getDivisorsCnt = n =>{
    let count = 0
      for(let i = 1;i<=n;i++){
        if(n % i === 0){
          count ++ 
        }
      }
    return count
  }
  
  //taking in an integer
  //returning interger, representing count of how many divisors n has
  //4 --> 3 (1, 2, 4)
  // 5 --> 2 (1, 5)
  // 12 --> 6 (1, 2, 3, 4, 6, 12)
  // 30 --> 8 (1, 2, 3, 5, 6, 10, 15, 30)
  //for loop <= n count ++ if n % i === 0 return count