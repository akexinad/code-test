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

// USER INPUT FUNCTIONS TO SANITIZE INPUTS
function request(input) {
    const userInput = rl.question(input);
    return userInput;
}

// Return input as type Number for currency error handling.
function requestAmount(input) {
    return Number(request(input));
}

// ARITHMETIC FUNCTIONS TO CALCULATE FIXED AMOUNTS AND CHANGE.
function fixedAmountInCents(amount) {
    return (amount * 100).toFixed();
}

function fixedChange(amountProvided, commodityPrice) {
    return (amountProvided - commodityPrice).toFixed(2);
}

function vendingMachineSelection() {
    const selection = request('Enter coordinates: ').trim();
    return vendingMachine[selection];
}


function amountCheck() {

    let amount = requestAmount('Enter Amount: ');

    if ( fixedAmountInCents(amount) % 5 !== 0 ) {
        fail('Incorrent curreny!');
        return amountCheck();
    }
    else if ( fixedAmountInCents(amount) % 10 !== 0) {
        amount -= 0.05;
        warn(`Sorry, 5c coins not accepted. Current balance is $${ amount }0`);
        selectionCheck(amount);
    } else {
        selectionCheck(amount);
    }
}

function selectionCheck(amount) {

    const selection = vendingMachineSelection();

    if (selection === undefined) {
        fail(`${ selection } is invalid.`)
        return selectionCheck(amount);
    } else if (selection.price > amount) {
        fail('Insufficient funds');
        return amountCheck();
    } else if (selection.price < amount) {
        let change = fixedChange(amount, selection.price);
        success(`Please collect your $${ change } in change.`);
    } else {
        success(`Please collect your item.`)
    }
}
