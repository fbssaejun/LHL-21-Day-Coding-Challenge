/*

Instructions

Your task is to write a function that will take in an array of lunch choices (strings) and return the choice as a string with the most votes.

There is always two lunch choices, and always an odd number of astronauts!

Examples
Input:

    const listOfChoices = [
      "Chicken Dinner",
      "Chicken Dinner",
      "Chicken Dinner",
      "Ice Cream Sandwich", 
      "Ice Cream Sandwich"
    ]
Output:

    Chicken Dinner

*/


const chooseLunchWinner = (listOfChoices) => {
  //Initialize an empty object to create a hash table
  let obj = {}
  //Loop through list of choices, create hash table 
  for(let choice of listOfChoices) {
    obj[choice] = obj[choice] + 1 || 1
  }
  
  //Compare keys from the hash table, return the key with the biggest value
  return Object.keys(obj).reduce((a, b) => obj[a] > obj[b] ? a : b);
}