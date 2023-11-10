// 1. Write a JavaScript program to display the current day and time in the following format.
// Sample Output : Today is : Tuesday.
// Current time is : 10 PM : 30 : 38

const d = new Date();
const days = [
  "Saturday",
  "Sunday",
  "Monday",
  "Tuesday",
  "WednesDay",
  "Thursday",
  "Friday",
];
console.log("Today is : " + days[d.getDay()]);
let hour = d.getHours();
if (hour > 12) {
  hour = hour - 12 + "PM";
} else {
  hour = hour + "AM";
}
console.log(
  "current time is : " + hour + " : " + d.getMinutes() + " : " + d.getSeconds()
);
