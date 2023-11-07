//#Source https://bit.ly/2neWfJ2
const is_Weekday = (d = new Date()) => d.getDay() % 6 !== 0;
console.log("Is current day is Weekday?");
console.log(is_Weekday());
const is_Weekend = (d = new Date()) => d.getDay() % 6 === 0;
console.log("Is current day is Weekend?");
console.log(is_Weekend());
