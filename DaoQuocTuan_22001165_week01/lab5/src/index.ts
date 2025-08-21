class BankAccount {
    balance: number;

    constructor(initialBalance: number) {
        this.balance = initialBalance;
    }

    deposit(amount: number): void {
        if (amount > 0) {
            this.balance += amount;
            console.log(`Deposited: ${amount}. New balance: ${this.balance}`);
        } else {
            console.log("Deposit amount must be greater than 0.");
        }
    }

    withdraw(amount: number): void {
        if (amount > 0 && amount <= this.balance) {
            this.balance -= amount;
            console.log(`Withdrew: ${amount}. New balance: ${this.balance}`);
        } else if (amount > this.balance) {
            console.log("Insufficient balance.");
        } else {
            console.log("Withdraw amount must be greater than 0.");
        }
    }

    displayInfo(): void {
        console.log(`Bai 5: Current balance: ${this.balance}`);
    }
}

const account = new BankAccount(1000);
account.displayInfo();
account.deposit(500);
account.withdraw(200);
account.withdraw(2000);
