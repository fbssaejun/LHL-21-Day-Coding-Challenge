/*

Instructions

Your task is to write a function that will take in a list of data entries in the shape of an array of objects. The function will then organize and return the entries by type and store each bit of data (string) in each list, in the shape of an object containing arrays.

Examples
Input:

const listOfReceivedData = [
  {type: "astro", data: "Saturn Data"},
  {type: "bio", data: "Space Potatoes"},
  {type: "physics", data: "Lagrange Points"},
  {type: "bio", data: "OMG Tardigrades"},
  {type: "physics", data: "Material reflectivity"},
  {type: "astro", data: "Mercury is not the hottest"},
]
    
Output:

{
  "astro":  ["Saturn Data", "Mercury is not the hottest"],
  "bio": ["Space Potatoes", "OMG Tardigrades"],
  "physics": ["Lagrange Points", "Material reflectivity"],
}

*/

const organizeData = (receivedData) => {
  //Intialize empty object to store key value pairs from input array
  let obj = {};

  for (let data of receivedData) {
    //Check if current key exists in obj object, if not, add value as a first value in an empty array
    if (!obj[data.type]) {
      obj[data.type] = [data.data];
    } else {
      //If it does exist, push the second value to the value array
      obj[data.type].push(data.data);
    }
  }

  return obj;
};
