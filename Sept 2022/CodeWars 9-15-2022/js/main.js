// Consider an array/list of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present).

// For example,

// [true,  true,  true,  false,
//   true,  true,  true,  true ,
//   true,  false, true,  false,
//   true,  false, false, true ,
//   true,  true,  true,  true ,
//   false, false, true,  true]
// The correct answer would be 17.

// Hint: Don't forget to check for bad values like null/undefined

function countSheeps(arrayOfSheep) {
  let count = 0
    arrayOfSheep.forEach(ele=>{
    if(ele){count++}
  })
    return count
  }
  
  //taking in a array of sheep
  //return count of sheep, here true means sheep exists
  // [true,  true,  true,  false,
  //   true,  true,  true,  true ,
  //   true,  false, true,  false,
  //   true,  false, false, true ,
  //   true,  true,  true,  true ,
  //   false, false, true,  true]
  // The correct answer would be 17.
  //also keep in mind of null/undefined