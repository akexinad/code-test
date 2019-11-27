const vendingMachineTest = require('./vendingMachineT.js')

test('to return log Amount Needed', () => {
    expect(vendingMachineTest.amountCheck(0)).toBeFalsy();
});

test('to return amount minus the 5 cents', () => {
    expect(vendingMachineTest.amountCheck(2.55)).toEqual(2.50);
});

test('to return amount entered', () => {
    expect(vendingMachineTest.amountCheck(2.50)).toEqual(2.50);
});

test('to return log stating incorrect selection', () => {
    expect(vendingMachineTest.selectionCheck(2.50, 'a4')).toBeFalsy();
});

test('to return log stating Insufficient funds', () => {
    expect(vendingMachineTest.selectionCheck(2.40, 'a1')).toBeFalsy();
});

test('to return correct change', () => {
    expect(vendingMachineTest.selectionCheck(2.10, 'a3')).toEqual(0.10);
});

test('to return success log and no change', () => {
    expect(vendingMachineTest.selectionCheck(3.10, 'a2')).toEqual(0);
});
