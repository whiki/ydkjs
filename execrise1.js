const TAX_RATE = 0.05;
const price = 200;
const ASSOR_PRICE = 15;

var unit = 0;
var SPEND_THESH = prompt("What's your buying threshold");

var bank_balance = prompt ("What's your account balance?");
var amount = 0;

function calculateTax(amount){
    return amount * TAX_RATE;
}

function formatPrice(amount){
    return "$" +amount.toFixed(2)
}

while (amount < bank_balance){
    //buy the phone
    amount+=price;
    console.log(amount);
    unit++

    if (amount<SPEND_THESH){
        amount = amount + ASSOR_PRICE;
        console.log('Plus Assor price ' + amount);
    }

}

amount = amount + calculateTax(amount);

console.log(
    "Total cost is = "+ formatPrice(amount) + " and " + unit + " phones"
);

if (amount > bank_balance){
    console.log(
        "You don't have enough capital"
    );
}