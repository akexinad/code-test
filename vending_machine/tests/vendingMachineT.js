function amountCheck(myAmount) {
    if (myAmount === 0) {
        return console.log('Amount needed!');
    } else if ((myAmount * 100) % 10 !== 0) {
        console.log(`Sorry, no 5c coins, current balance is $${ (myAmount - 0.05).toFixed(2) }`);
        myAmount -= 0.05
        return myAmount;
    }

    return myAmount;
};

function selectionCheck(myAmount, mySelection) {
    const chocolateBars = {
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
    };

    if (chocolateBars[mySelection] === undefined) {
        return console.log('Incorrect selection!')
    } else if (chocolateBars[mySelection].price > myAmount) {
        return console.log(`Insufficient funds! Missing $${ (chocolateBars[mySelection].price - myAmount).toFixed(2) }`);
    } else if (chocolateBars[mySelection].price < myAmount) {
        change = Number((myAmount - chocolateBars[mySelection].price).toFixed(2));
        console.log(`Please collect your change of $${ change }`);
        return change;
    } else {
        change = Number((myAmount - chocolateBars[mySelection].price).toFixed(2));
        console.log('*various vending machine noises of success')
        return change;
    }
};

selectionCheck(3.10, 'a2');

module.exports = {
    amountCheck,
    selectionCheck
}
