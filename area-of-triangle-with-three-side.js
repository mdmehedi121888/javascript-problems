// 4. Write a JavaScript program to find the area of a triangle where three sides are 5, 6, 7.
const s = (5 + 6 + 7) / 2;
const res = Math.sqrt(s * (s - 5) * (s - 6) * (s - 7));
console.log(res.toFixed(2));
