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

function fail(msg) {
    console.log(`ERROR: ${ msg }`);
}

function warn(msg) {
    console.log(`WARNING: ${ msg }`);
}

function success(msg) {
    console.log(`SUCCESS: ${ msg }`);
}

function fixedAmountInCents(amount) {
    return Number((amount * 100).toFixed());
}

function returnFiveCents(amount) {
    return Number((amount - 0.05).toFixed(1));
}

function fixedAmount(amount) {
    return Number(amount.toFixed(1));
}

function fixedChange(amountProvided, commodityPrice) {
    return Number((amountProvided - commodityPrice).toFixed(2));
}

function vendingMachineSelection(coords) {
    selection = coords.trim();
    return vendingMachine[selection];
}

function selectionCheck(amount, selection) {

    selection = vendingMachineSelection(selection);

    if ( selection === undefined ) {
        fail(`${ selection } is invalid.`)
        return false;
    } else if ( selection.price > amount ) {
        fail(`Sorry you insufficient funds to buy ${ selection.name }`);
        return false;
    } else if ( selection.price < amount ) {
        let change = fixedChange(amount, selection.price);
        success(`Please collect your ${ selection.name } and your $${ change } in change.`);
        return selection;
    } else {
        success(`Please collect your ${ selection.name }`);
        return selection;
    }
}

function main(amount) {

    if ( fixedAmountInCents(amount) % 5 !== 0 ) {
        fail('Incorrent curreny!');
        return false;
    }
    else if ( fixedAmountInCents(amount) % 10 !== 0) {
        amount = returnFiveCents(amount);
        warn(`Sorry, 5c coins not accepted. Current balance is $${ amount }0`);
        return amount;
    } else {
        return true;
    }
}

module.exports = {
    success,
    warn,
    fail,
    vendingMachine,
    fixedAmountInCents,
    fixedAmount,
    fixedChange,
    vendingMachineSelection,
    selectionCheck,
    main
}
