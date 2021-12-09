/*

Instructions

Your task is to write a function that will take in two position objects. Calculate the average speed from the two positions and return the average speed rounded to the first decimal point.

Each object contains the altitude in meters, and a time stamp in seconds.

Examples
Input:

  const firstPosition = {
    time: 1637074462,
    altitude: 1100
  }
  const secondPosition = {
    time: 1637074558,
    altitude: 2200
  }
    
Output:

  11.5

*/


const getAverageSpeed = (firstPosition, secondPosition) => {
  //Get difference in time between two positions
  let distance = secondPosition.altitude - firstPosition.altitude;
  //Get difference in time between two positions
  let time = secondPosition.time - firstPosition.time;
  //Return the average time rounded to the first decimal point
  return  Number((distance / time).toFixed(1))
    
}