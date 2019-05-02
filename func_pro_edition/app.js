const rl = require('readline-sync');

console.log('-----------------------');
console.log('-----------------------');
console.log('VENDING MACHINE');
console.log('-----------------------');
console.log('-----------------------\n\n');


const vendingMachine = {
    a1: {
        name: 'chocolicious',
        price: 2.00
    },
    a2: {
        name: 'purple hazelnut',
        price: 2.50,
    },
    a3: {
        name: 'vanillarama',
        price: 3.10
    }
}

// MESSAGE FUNCTIONS
function fail(msg) {
    console.log('\n--------------------------------');
    console.log(`ERROR: ${ msg }`);
    console.log('--------------------------------\n');
}

function warn(msg) {
    console.log('\n--------------------------------');
    console.log(`WARNING: ${ msg }`);
    console.log('--------------------------------\n');
}

function success(msg) {
    console.log('\n--------------------------------');
    console.log(`SUCCESS: ${ msg }`);
    console.log('--------------------------------\n');
}

// USER INPUT FUNCTIONS TO SANITIZE INPUTS
function request(input) {
    const userInput = rl.question(input);
    return userInput;
}

// Return input as type Number for currency error handling.
function requestAmount(input) {
    return Number(request(input).trim());
}

// ARITHMETIC FUNCTIONS TO CALCULATE FIXED AMOUNTS AND CHANGE.
function fixedAmountInCents(amount) {
    return (amount * 100).toFixed();
}

function fixedAmount(amount) {
    return amount.toFixed(1);
}

function returnFiveCents(amount) {
    return Number((amount - 0.05).toFixed(1));
}

function fixedChange(amountProvided, commodityPrice) {
    return (amountProvided - commodityPrice).toFixed(2);
}

function vendingMachineSelection() {
    const selection = request('Enter coordinates: ').trim();
    return vendingMachine[selection];
}


// Check if the input by the user is defined and if the amount is sufficient and/or the user needs change.

function selectionCheck(amount) {

    const selection = vendingMachineSelection();

    if ( selection === undefined ) {
        fail(`${ selection } is invalid.`)
        return selectionCheck(amount);
    } else if ( selection.price > amount ) {
        fail(`Sorry you insufficient funds to buy ${ selection.name }`);
        return main();
    } else if ( selection.price < amount ) {
        let change = fixedChange(amount, selection.price);
        return success(`Please collect your ${ selection.name } and your $${ change } in change.`);
    } else {
        return success(`Please collect your ${ selection.name }`)
    }
}

// Check if amount inserted is actually a number and ensure no 5c denominations are accepted.
function main() {

    let amount = requestAmount('Enter Amount: ');

    if ( fixedAmountInCents(amount) % 5 !== 0 ) {
        fail('Incorrent currency!');
        return main();
    }
    else if ( fixedAmountInCents(amount) % 10 !== 0) {
        amount = returnFiveCents(amount);
        warn(`Sorry, 5c coins not accepted. Current balance is $${ amount }0`);
        selectionCheck(amount);
    } else {
        selectionCheck(amount);
    }
}

main();
