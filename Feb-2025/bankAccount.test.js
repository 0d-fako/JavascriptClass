const bankAccount = require('./bankAccount.js');


test('Deposit 200', () => {
    let result = bankAccount.deposit(200);
    let answer = 1200;

    expect(result).toBe(answer);
})

test('Withdraw 200', () => {
    let result = bankAccount.withdraw(200);
    let answer = 1000;

    expect(result).toBe(answer);
})