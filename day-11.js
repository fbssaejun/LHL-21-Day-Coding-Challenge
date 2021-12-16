/*

Instructions

Your task is to write a function that will take in a list of platforms and a date as a string. That function will update the date property on the first platform with an empty date and then return the platform list.

In other terms, for each platform of the platform list array, update the date of the first free one and then return the updated platform list.

Examples
Input:

    const missionDate = "2021-12-12"
    const platformList = [
      {
        name:"Platform A",
        bookDate:"2021-12-11"
      },
      {
        name:"Platform B",
        bookDate:undefined
      },
      {
        name:"Platform C",
        bookDate:undefined
      },
    ] 
    
Output:

    const platformList = [
      {
        name:"Platform A",
        bookDate:"2021-12-11"
      },
      {
        name:"Platform B",
        bookDate:"2021-12-12"
      },
      {
        name:"Platform C",
        bookDate:undefined
      },
    ] 
*/

const bookFreePlatform = (platformList, missionDate) => {
  //Loop through platform objects from list array
  for (let platform of platformList) {
    //If the bookDate property is undefined, assign missionDate input to its value
    if (!platform.bookDate) {
      platform.bookDate = missionDate;
      //Since the function only requires to update the FIRST object with an undefined value of missiondate, when undefined missiondate is found, return the list right away
      return platformList;
    }
  }
};
