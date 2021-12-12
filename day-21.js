/*

Instructions

Your last (!) task is to write a function that will take in an array of exchanged messages and an array of organized data. The goal is to parse each message, add them to a list and return an object containing two keys, transcript with the messages, missionData with the missionData object.

Each message should be parsed using the same structure as the first challenge;

"Origin: Message"
.
You can reuse the function of the first challenge if you want!

Examples
Input:

 const exchanges = [
   {origin:"MC", message:"So how is it out there?"},
   {origin:"Shuttle", message:"Oh it's pretty nice!"},
   {origin:"MC", message:"Did you like the challenges?"},
 ]
    
 const missionData = {
   astro:["...","..."], 
   bio:["..."], 
   physics:["..."]
 }
    
Output:

 {
   transcript:
   [
     "MC: So how is it out there?",
     "Shuttle: Oh it's pretty nice!",
     "MC: Did you like the challenges?"
   ],
   missionData:{
     astro:["...","..."], 
     bio:["..."], 
     physics:["..."]
   }
 }

*/

const parseMissionSummary = (exchanges, missionData) => {
  //Initialize an empty objrct to store transcript data
  let obj = {
    transcript: [],
  };

  //Loop through exchanges input, push parsed string to obj's transcript's value
  for (let exchange of exchanges) {
    obj.transcript.push(`${exchange.origin}: ${exchange.message}`);
  }

  //Add missionData key/value to obj object
  obj["missionData"] = missionData;

  return obj;
};
