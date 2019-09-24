console.log('worked');
// simpleCasheback - 1%
// increasedСashback - 5%
// specialCashback - 30%
// but cashback should not exceed 3000 rubles
const purchaseAmount = 5000;

let simpleCasheback = 0;
    if (purchaseAmount > 300000){
        simpleCashebac = 3000;
    } else {
        simpleCasheback = purchaseAmount * 0.01;
    }

    let increasedСashback = 0;
    if (purchaseAmount > 60000) {
        increasedСashback = 3000;
    } else {
        increasedСashback = purchaseAmount * 0.05;
    }

let specialСashback = 0;
    if (purchaseAmount > 10000){
        specialCashback = 3000;
    } else {
        specialCashback = purchaseAmount * 0.3;
    }

console.log(simpleCasheback);
console.log(increasedСashback);
console.log(specialCashback);