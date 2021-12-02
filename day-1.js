/* Instructions

Our latest testing indicates a malfunctioning component in our communications apparatus. For some reason, messages from mission control are not being correctly displayed on board the shuttle. While the message is being displayed on the shuttle’s terminal, the sender’s name is not displayed beside it.

Your first task is to write a function that will take two string parameters and return a string containing the sender name and the message in the form specified in the instructions.

Examples
Input:

    parseMessage("Mission Control", "Hello there!")
    
Output:

    Mission Control: Hello there!
*/

const parseMessage = (origin, message) => {
  return `${origin}: ${message}`
}

    