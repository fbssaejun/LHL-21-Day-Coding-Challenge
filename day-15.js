/*

Instructions

Your task is to write a function that will take in a launch date and a mission name as strings. Calculate the difference between two dates in days and return an object containing the name of the mission and a rounded day difference.

A part of the code has been written for you, and it is important that it stays the same for the tests to work out.

Examples
Input:

    const launchDate = "2021-12-12"
    const fakeToday = "2021-12-01"
    const missionName = "Moon visit"
    
Output:

    {
      missionName = "Moon visit",
      daysRemaining = 11
    }

*/

/*=======================================================1st solution====================================================================*/

const timeRemaining = (launchDate, missionName, fakeToday) => {
  const today = fakeToday || new Date() // Do not alter this line!
  
  //Get the difference between two dates by parsing dates
  const diffDate = Math.ceil((Math.abs(Date.parse(fakeToday) - Date.parse(launchDate)))/(1000 * 60 * 60 * 24))

  //Return an object with two key/value pairs 
  return {missionName, daysRemaining: Math.abs(diffDate)}
}

/*=======================================================2nd solution====================================================================*/

const timeRemaining = (launchDate, missionName, fakeToday) => {
  const today = fakeToday || new Date() // Do not alter this line!
  
  //Get the difference between two dates by calling getDate function 
  const diffDate = new Date(launchDate).getDate() - new Date(today).getDate()

  return {missionName, daysRemaining: diffDate}
}