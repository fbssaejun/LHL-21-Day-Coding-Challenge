/*

Instructions

Registering new astronauts was handled manually in previous missions but it's taking too much time. Knowing that the astronaut information is already listed in a data set, you propose to optimize that job with programming.

Your task is to automate that process by creating a function that will take in an astronaut object as a parameter and return a string using the properties of the astronaut.

Examples
Input:

    const exampleAstronaut = {
      firstName: "Yuri",
      lastName: "Gagarin",
      nickname: "First!",
      prefix: "Cosmonaut"
    }
    
Output:

    Cosmonaut: Yuri "First!" Gagarin

*/


const generateAstronautTag = (astronaut) => {
  return `${astronaut.prefix}: ${astronaut.firstName} "${astronaut.nickname}" ${astronaut.lastName}`
}