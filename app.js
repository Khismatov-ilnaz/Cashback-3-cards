console.log('worked');
// simple - 1%
// increased - 5%
// special - 30%
// but cashback should not exceed 3000 rubles
const amount = 233;

let simple = 0;
    if (amount > 300000){
        simple = 3000;
    } else {
        simple = amount * 0.01;
    }

    let increased = 0;
    if (amount > 60000) {
        increased = 3000;
    } else {
        increased = amount * 0.05;
    }

    let specialСashback = 0;
    if (amount > 10000){
        special = 3000;
    } else {
        special = amount * 0.3;
    }

console.log(simple);
console.log(increased);
console.log(special);