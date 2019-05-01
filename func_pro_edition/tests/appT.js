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

function fixedAmountInCents(amount) {
    return Number((amount * 100).toFixed());
}

function fixedAmount(amount) {
    return Number(amount.toFixed(1));
}

function fixedChange(amountProvided, commodityPrice) {
    return Number((amountProvided - commodityPrice).toFixed(2));
}

function vendingMachineSelection() {
    const selection = request('Enter coordinates: ').trim();
    return vendingMachine[selection];
}

module.exports = {
    fixedAmountInCents,
    fixedAmount,
    fixedChange,
    vendingMachineSelection
}
