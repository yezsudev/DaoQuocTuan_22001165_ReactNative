class Account {
    public username: string;
    private password: string;
    readonly id: number;

    constructor(id: number, username: string, password: string) {
        this.id = id;
        this.username = username;
        this.password = password;
    }

    login(password: string): boolean {
        if (this.password === password) {
            console.log("Thanh cong");
            return true;
        } else {
            console.log("That bai");
            return false;
        }
    }

    changePassword(oldPass: string, newPass: string): void {
        if (this.password === oldPass) {
            this.password = newPass;
            console.log("Doi mat khau thanh cong!");
        } else {
            console.log("Mat khau cu khong dung!");
        }
    }

    displayInfo(): void {
        console.log(`Account Info -> ID: ${this.id}, Username: ${this.username}`);
    }
}

const acc = new Account(1, "tuan972", "123456");
acc.displayInfo();

acc.login("wrong");
acc.login("123456");
acc.changePassword("123456", "newpass");
acc.login("newpass");
