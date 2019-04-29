const vendingMachine = {
    chocolateBars: {
        a1: {
            name: 'Caramel',
            price: 2.50
        }, a2: {
            name: 'Hazelnut',
            price: 3.10
        }, a3: {
            name: 'Organic Raw',
            price: 2.00
        }
    },

    amount: 0,

    // To make sure that only denominations of 10c, 20c, 50c, $1 and $2 are accepted.
    // Amount minus the 5c is returned to user.
    amountCheck: function() {
        const amountEntered = prompt("Enter amount: ");
        vendingMachine.amount += Number(amountEntered);

        if (vendingMachine.amount === 0) {
            return alert('Amount needed!')
        } else if ((vendingMachine.amount * 100) % 10 !== 0) {
            alert(`Sorry, no 5c coins, current balance is $${ (vendingMachine.amount - 0.05).toFixed(2) }`);
            vendingMachine.amount -= 0.05
        }
    },

    // check if amount is correct, too much or too little
    selectionCheck: function() {
        const selection = prompt("Please select chocolate bar:\nA1 - Caramel: $2.50\nA2 - Hazelnut: $3.10 \nA3 - Organic Raw: $2.00");

        if (vendingMachine.chocolateBars[selection] === undefined) {
            return alert('Incorrect selection!')
        } else if (vendingMachine.chocolateBars[selection].price > vendingMachine.amount) {
            return alert(`Insufficient funds! Missing $${ (vendingMachine.chocolateBars[selection].price - vendingMachine.amount).toFixed(2) }`);
        } else if (vendingMachine.chocolateBars[selection].price < vendingMachine.amount) {
            return alert(`Please collect your change of $${ (vendingMachine.amount - vendingMachine.chocolateBars[selection].price).toFixed(2) }`);
        } else {
            return alert('*various vending machine noises of success')
        }
    }
}

vendingMachine.amountCheck();
vendingMachine.selectionCheck();

module.exports = vendingMachine;
