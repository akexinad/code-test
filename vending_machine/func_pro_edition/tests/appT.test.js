const fn = require('./appT.js');

// est('to return log Amount Needed', () => {
//     expect(vendingMachineTest.amountCheck(0)).toBeFalsy();
// });

test('Should return 250', () => {
    expect(fn.fixedAmountInCents(2.50)).toEqual(250);
});

test('Should not return 2.4999999', () => {
    expect(fn.fixedAmountInCents(2.50)).not.toEqual(2.499999999);
});

test('Should return 2.50', () => {
    expect(fn.fixedAmount(2.499999)).toEqual(2.50);
});

test('Should return $0.10 in change', () => {
    expect(fn.fixedChange(2.10111223, 2.00123458677)).toEqual(0.10);
});

test('Should return an object', () => {
    expect(fn.vendingMachineSelection('   a1 ')).toBeDefined();
});

test('Should return undefined', () => {
    expect(fn.vendingMachineSelection('   d4 ')).toBeUndefined();
});

test('Should return SUCCESS', () => {
    expect(fn.selectionCheck(2.00, 'a1')).toBeDefined();
});

test('Should return ERROR', () => {
    expect(fn.selectionCheck(2.10, 'a7')).toBeFalsy();
});

test('Should return ERROR insufficient funds', () => {
    expect(fn.selectionCheck(1.90, 'a1')).toBeFalsy();
});

test('Should return ERROR: Incorrect currency', () => {
    expect(fn.main('sde')).toBeFalsy();
});

test('Should return $2.00', () => {
    expect(fn.main(2.05)).toEqual(2.00)
});

test('Should return true', () => {
    expect(fn.main(2.00)).toBeTruthy();
});
