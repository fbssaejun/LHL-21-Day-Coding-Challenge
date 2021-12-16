/*

Instructions

Your task is to write a function that takes in the temperature, weather condition, wind speed, and direction as parameters and store them inside a structure that holds each value as properties.

There's a small and important detail for this one, you must convert the temperature from Fahrenheit to Celsius and convert the wind speed from miles/hour to meters/second, and round both of them before storing them.

The information that LARRY gave you about temperature conversions are in the hint section.

Examples
Input:

    const temperature = 32
    const condition = "Sunny with small clouds"
    const windSpeed = 20
    const windDirection = "NNE
    
Output:

    {
      temperature:0,
      windSpeed:9,
      windDirection:"NNE",
      condition:"Sunny with small clouds"
    }
    
*/

const storeWeatherConditions = (temperature, condition, windSpeed, windDirection) => {
  //Create an empty object to store different key/value pairs from input and after calculations
  let obj = {};
  //convert the temperature from Fahrenheit to Celsius
  obj['temperature'] = Math.round((temperature - 32 ) / 1.8)
  obj['condition'] = condition
  //convert the wind speed from miles/hour to meters/second
  obj['windSpeed'] = Math.floor(windSpeed * 0.45 ) 
  obj['windDirection'] = windDirection
  
  return obj
}