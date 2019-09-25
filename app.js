console.log('worked');
// simple - 1%
// increased - 5%
// special - 30%
// but cashback should not exceed 3000 rubles
const amount = 70000;
const maxCashback = 3000

const simple = amount > 300000 ? maxCashback : amount * 0.01;

const increased = amount > 60000 ? maxCashback : amount * 0.05;

const special = amount > 10000 ? maxCashback : amount * 0.3;

console.log(simple);
console.log(increased);
console.log(special);