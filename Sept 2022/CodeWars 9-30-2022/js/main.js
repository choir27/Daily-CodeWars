// Looking for a benefictor

// DESCRIPTION:
// The accounts of the "Fat to Fit Club (FFC)" association are supervised by John as a volunteered accountant. The association is funded through financial donations from generous benefactors. John has a list of the first n donations: [14, 30, 5, 7, 9, 11, 15] He wants to know how much the next benefactor should give to the association so that the average of the first n + 1 donations should reach an average of 30. After doing the math he found 149. He thinks that he could have made a mistake.

// if dons = [14, 30, 5, 7, 9, 11, 15] then new_avg(dons, 30) --> 149

// Could you help him?

// Task
// The function new_avg(arr, navg) should return the expected donation (rounded up to the next integer) that will permit to reach the average navg.

// Should the last donation be a non positive number (<= 0) John wants us:

// to return:

// Nothing in Haskell, Elm
// None in F#, Ocaml, Rust, Scala
// -1 in C, D, Fortran, Nim, PowerShell, Go, Pascal, Prolog, Lua, Perl, Erlang
// or to throw an error (some examples for such a case):

// IllegalArgumentException() in Clojure, Java
// ArgumentException() in C#
// echo ERROR in Shell
// argument-error in Racket
// std::invalid_argument in C++
// ValueError in Python
// So, he will clearly see that his expectations are not great enough. In "Sample Tests" you can see what to return.

// Notes:
// all donations and navg are numbers (integers or floats), arr can be empty.
// See examples below and "Sample Tests" to see which return is to be done.
// new_avg([14, 30, 5, 7, 9, 11, 15], 92) should return 645
// new_avg([14, 30, 5, 7, 9, 11, 15], 2) 
// should raise an error (ValueError or invalid_argument or argument-error or DomainError or ... ) 
// or return `-1` or ERROR or Nothing or None depending on the language.


function newAvg(arr, newavg) {
    let sum = arr.reduce((prev,curr)=>prev+curr,0)
    let count = newavg
    while(true){
    count++
    sum++
    if(findAverage(arr,sum)===newavg){break}
    }
     return count
    }
    
    function findAverage(arr,sum){
    return Math.floor(sum/arr.length)
    }
    
    //array of integers
    //if dons = [14, 30, 5, 7, 9, 11, 15] then new_avg(dons, 30) --> 149
    //how much more do they need to give so that the average is equal to newavg
    
    function newAvg(arr, newavg) {
        let out = 0
        if(arr.length !== 0){
          let temp = newavg * (arr.length + 1) - arr.reduce((a,b)=> a + b, 0)
          out = Math.ceil(temp)
        }else{
          out = newavg
        }
        let error = 'Expected New Average is too low'
        if(out <= 0){
          throw new Error (error)
      }else{
        return out
      }
      }