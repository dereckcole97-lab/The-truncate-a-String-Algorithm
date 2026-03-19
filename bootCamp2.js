/*
Implement the Truncate a String Algorithm
In this lab, you will practice truncating a string to a certain length.

*/

//create the truncateString
//give it two arguments: a string and a number
function truncateString(str, num) {
  //condition that checks IF the length of the string argument is greater than the number argument
  if (str.length > num) {
    return str.slice(0, num) + "...";
  } else {
    return str;
  }
}

truncateString("Hello World", 5); // this is just an example

