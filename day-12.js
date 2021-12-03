/*

Instructions
Your task is to write a function that will take in an array of objects containing a sender and a message as a parameter. The function will then parse a message from each object, add it to an array then return the built array.

Each message is built exactly like the first challenge, so you can either use the function you already made, or rebuild it from scratch.

Examples
Input:

    const messages = [
      {origin:"MC", message:"Hello!"},
      {origin:"Shuttle", message:"Hey!"},
    ]
    
Output:

    [
      "MC: Hello!",
      "Shuttle: Hey!"
    ]

*/

const parseTranscripts = (messages) => {
  let parsedArr = [];

  for (let message of messages) {
    parsedArr.push(`${message.origin}: ${message.message}`);
  }

  return parsedArr;
};
