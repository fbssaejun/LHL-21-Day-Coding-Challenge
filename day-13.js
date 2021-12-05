/*

Instructions

Your task is to write a function that will take in an array of objects containing a gauge reading (min, max, current). The function will then check if the gauge current value is within spec (between min and max) and check the next gauge. If one of the values is outside the spec, return false, if they are all ok, return true.

The method the evaluate the gauge is the same as the third challenge. You may take your function, get inspired by it, or start from scratch in this challenge.

Examples
Input:

    const gaugeList = [
      {
        current:0.4,
        min:0.1,
        max:0.9
      },
      {
        current:1.2,
        min:0.1,
        max:0.6
      }
    ]
    
Output:

    false

*/

const checkAllGauges = (gaugeList) => {
  let checker = true;
  //if current gauge is not in range, switch the value of checker to false 
  for(let gauge of gaugeList) {
    if(!(gauge.min <= gauge.current && gauge.current <= gauge.max)) {
      checker = !checker
    } 
  }
  return checker;
}
