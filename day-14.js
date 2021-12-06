/*

Instructions

Your task is to write a function that will take in an array of objects containing switches. The function will change the value of the isOn property to true for every switch in the list, and then return the updated array.

You can use the previous switchToggle function from the fourth challenge, however be careful, since we want all of them on, not toggled!

Examples
Input:

const toggleList = [
	{
		name:"Air",
		isOn:true
	},
	{
		name:"Radio",
		isOn:false
	},
]
    
Output:

[
	{
		name:"Air",
		isOn:true
	},
	{
		name:"Radio",
		isOn:true
	},
]

*/

/*=======================================================1st solution====================================================================*/

const switchAllTogglesOn = (toggleList) => {
  //Loop through input array
  for (let toggle of toggleList) {
    //If isOn attribute is false, change it to true
    if (!toggle.isOn) {
      toggle.isOn = true;
    }
  }
  //Return the changed array
  return toggleList;
};

/*=======================================================2nd solution====================================================================*/

const switchAllTogglesOn = (toggleList) => {
  //Return mapped original input array where isOn property has been updated to true, if it has been set to the value of false 
  return toggleList.map(toggle => {
  	if(!toggle.isOn) toggle.isOn = true 
    return toggle
  })
}