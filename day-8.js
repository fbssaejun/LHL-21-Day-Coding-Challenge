/*

Instructions

Your task is to create a function that takes in a roster array, and will calculate the amount of astronauts in the given roster list and return said amount.

Sometimes things are just simple, code doesn't need to be complicated!

Examples
Input:

    const exampleRoster = [
      {
        firstName:"Chris",
        lastName: "Hadfield",
        nickname:"Space Oddity",
        prefix:"Astronaut",
        job:"Shuttle DJ"
      }
    ]
    
Output:

    1

*/

const countActiveAstronauts = (roster) => {
  return roster.length
}