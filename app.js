console.log('worked');
// simple - 1%
// increased - 5%
// special - 30%
// but cashback should not exceed 3000 rubles
const amount = 3000;
const maxCashback = 3000;
const simlePercent = 0.01;
const increacedPercent = 0.05;
const specialPercent = 0.3;

const simple = amount * simlePercent > maxCashback ? maxCashback : amount * simlePercent;

const increased = amount * increacedPercent > maxCashback ? maxCashback : amount * increacedPercent;

const special = amount * specialPercent > maxCashback ? maxCashback : amount * specialPercent;

console.log(simple);
console.log(increased);
console.log(special);