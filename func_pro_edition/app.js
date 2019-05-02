const rl = require('readline-sync');

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

function main() {

    let amount = requestAmount('Enter Amount: ');

    if ( fixedAmountInCents(amount) % 5 !== 0 ) {
        fail('Incorrent curreny!');
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
