class Person1{
    name: string;
    age: number;

    constructor(name: string, age: number){
        this.name = name;
        this.age = age;
    }

    displayInfo(): void{
        console.log(`Bai 1: Name: ${this.name}, Age: ${this.age}`);
        
    }
}

const p1 = new Person1("Tuan", 21)
p1.displayInfo();