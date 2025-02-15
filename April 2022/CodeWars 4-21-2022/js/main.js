// Clock shows h hours, m minutes and s seconds after midnight.

// Your task is to write a function which returns the time since midnight in milliseconds.
// Examples
// Input: [1, 5.2, 4, 0, -1]
// Output: 9.2

// Example:
// h = 0
// m = 1
// s = 1
// Input: []
// Output: 0

// result = 61000
// Input constraints:
// Input: [-2.398]
// Output: -2.398

// 0 <= h <= 23
// 0 <= m <= 59
// 0 <= s <= 59

function past(h, m, s){
    return ((h*3600)+(m*60)+s)*1000;
  }

  function past(h, m, s){
    var miliseconds = 0;
    miliseconds = miliseconds + s * 1000;
    miliseconds = miliseconds + m * 60000;
    miliseconds = miliseconds + h * 3600000;
    return miliseconds;
  } 