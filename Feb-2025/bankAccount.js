const bankAccount ={
    accountNumber: 123456,
    accountHolder: 'John Doe',
    balance: 1000,
    deposit: function(amount){
        this.balance += amount;
        return this.balance;
    },

    withdraw: function(amount){
        if(amount > this.balance){
            return 'Insufficient Funds';
        }
        this.balance -= amount;
        return this.balance;
    }
}