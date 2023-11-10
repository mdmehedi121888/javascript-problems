// 3. Write a JavaScript program to get the current date.
// Expected Output :
// mm-dd-yyyy, mm/dd/yyyy or dd-mm-yyyy, dd/mm/yyyy

const d = new Date();
console.log(d.getMonth() + 1 + "-" + d.getDate() + "-" + d.getFullYear());
