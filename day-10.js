/*

Instructions

Your task is to create a function that will take in an array of weather objects and will return a rounded average of the wind speed.

Since we work with an unknown amount of entries, you will need to calculate the average wind speed using loops.

Examples
Input:

    const exampleEntries = [
      { 
        temperature:0, 
        weather:"sunny", 
        windDirection: "NNE", 
        windSpeed:24
      },
      { 
        temperature:10, 
        weather:"cloudy", 
        windDirection: "NNE", 
        windSpeed:9 
      }
    ] 
    
Output:

    17

*/

const averageWindSpeed = (weatherEntries) => {
  //Create a variable with a default value of 0 to store the final total speed 
  let speed = 0;

  for (let weather of weatherEntries) {
    //Loop through weatherEntries, add up all the speed
    speed += weather.windSpeed;
  }
  //Return the rounded average speed 
  return Math.round(speed / weatherEntries.length);
};
