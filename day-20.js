/*

Instructions

Your task is to write a function that will take in speed (number), missionData (object) and checks (object) as parameters. The goal is to make sure that the speed is within the limits and that the amount of entries per type matches with the checks. If one of the values is a mismatch, return false, if everything is fine, return true.

Speed will be compared against maxSpeed and minSpeed inclusively and the length of each array inside missionData will be compared to the values inside the dataEntries object values.

Examples
Input:

  const speed = 40
  const missionData = {
    astro:["...","..."], 
    bio:["..."], 
    physics:["..."]
  }

  const checks = {
    maxSpeed:50,
    minSpeed:20,
    dataEntries:{
      astro:3,
      bio:1,
      physics:1
    }
  }
    
Output:

  false // Not the same amount of entries
    
*/

const confirmReentryPlans = (speed, missionData, checks) => {
  //Initialize a variable with a boolean value default to true as a checker
  let checker = true;

  //Loop through missionData input
  for (let key in missionData) {
    //If missionData's key's length match the checks's dataentries attribute's key's value, keep checker as true
    if (missionData[key].length === checks.dataEntries[key]) {
      checker = true;
    } else {
      //Else, toggle checker's value as false
      checker = false;
    }

    //If speed is within the range, return the checker's value since all criteria matches
    if (speed <= checks.maxSpeed && speed >= checks.minSpeed) {
      return checker;
    } else {
      //Else, toggle checker's value as false
      checker = false;
    }
  }

  return checker;
};
