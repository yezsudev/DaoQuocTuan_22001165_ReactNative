class User{
    private name: string;

    constructor(name: string) {
        this.name = name;
    }

    getName(): string {
        return this.name;
    }

    setName(name: string): void {
        this.name = name;
    }

}
const user = new User("Dao Quoc Tuan");
console.log(`Bai 7: User Name: ${user.getName()}`);
user.setName("Dao Quoc Toan");
console.log(`Bai 7: Updated User Name: ${user.getName()}`);