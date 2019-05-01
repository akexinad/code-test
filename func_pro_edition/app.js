const rl = require('readline-sync');

const vendingMachine = {
    a1: {
        name: 'chocolate',
        price: 2.00
    },
    a2: {
        name: 'hazelnut',
        price: 2.50,
    },
    a3: {
        name: 'vanilla',
        price: 3.10
    }
}

// MESSAGE FUNCTIONS
function fail(msg) {
    console.log(`ERROR: ${ msg }`);
}

function warn(msg) {
    console.log(`WARNING: ${ msg }`);
}

function success(msg) {
    console.log(`SUCCESS: ${ msg }`);
}

// User input function
function request(input) {
    const userInput = rl.question(input);
    return userInput;
}

function requestAmount(input) {
    return Number(request(input));
}

// JS is terrible at math sometimes. I need to fix the amount to check if the correct curreny has been inserted.
function fixedAmountInCents(amount) {
    return (amount * 100).toFixed();
}


function amountCheck() {
    let amount = requestAmount('Enter Amount: ');

    if ( fixedAmountInCents(amount) % 5 !== 0 ) {
        fail('Incorrent curreny!')
        return amountCheck()
    }
    else if ( fixedAmountInCents(amount) % 10 !== 0) {
        amount -= 0.05;
        warn(`Sorry, 5c coins not accepted. Current balance is $${ amount }0`);
    } else {
        return console.log(amount);
    }
}

amountCheck();
