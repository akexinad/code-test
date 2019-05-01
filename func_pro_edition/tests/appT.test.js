const functions = require('./appT.js');

// est('to return log Amount Needed', () => {
//     expect(vendingMachineTest.amountCheck(0)).toBeFalsy();
// });

test('Should return 250', () => {
    expect(functions.fixedAmountInCents(2.50)).toEqual(250);
})

test('Should not return 2.4999999', () => {
    expect(functions.fixedAmountInCents).not.toEqual(2.499999999);
})
