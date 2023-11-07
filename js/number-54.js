//#Source https://bit.ly/2neWfJ2
const isBetweenDates = (dateStart, dateEnd, date) =>
    date > dateStart && date < dateEnd;
console.log(isBetweenDates(
    new Date(2010, 11, 20),
    new Date(2010, 11, 30),
    new Date(2010, 11, 19)
));
console.log(isBetweenDates(
    new Date(2010, 11, 20),
    new Date(2010, 11, 30),
    new Date(2010, 11, 25)
));
