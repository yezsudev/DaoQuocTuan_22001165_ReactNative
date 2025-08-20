class Person{
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

const p2 = new Person("Tuan", 21)
p1.displayInfo();

class Student extends Person{
    grade: number;
    constructor(name: string, age: number, grade: number){
        super(name, age);
        this.grade = grade;
    }

    displayInfo(): void{
        console.log(`Bai 2: Name: ${this.name}, Age: ${this.age}, Grade: ${this.grade}`);
        
    }
}

const s1 = new Student("Tuan", 21, 12);
s1.displayInfo()