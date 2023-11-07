const x = new Date('2013-05-23');
const y = new Date('2013-05-23');

// less than, greater than is fine:
console.log('x < y', x < y); // false
console.log('x > y', x > y); // false
console.log('x <= y', x <= y); // true
console.log('x >= y', x >= y); // true
console.log('x === y', x === y); // false, oops!

// anything involving '==' or '===' should use the '+' prefix
// it will then compare the dates' millisecond values

console.log('+x === +y', +x === +y); // true