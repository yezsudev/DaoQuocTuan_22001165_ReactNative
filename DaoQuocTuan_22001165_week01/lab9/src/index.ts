interface Animal{
    name: string;
    sound(): void;
}

class Dog implements Animal {
    name: string;

    constructor(name: string) {
        this.name = name;
    }

    sound(): void {
        console.log(`${this.name} sua gau gau`);
    }
}

class Cat implements Animal {
    name: string;

    constructor(name: string) {
        this.name = name;
    }

    sound(): void {
        console.log(`${this.name} keu meo meo`);
    }
}

const dog = new Dog("Cho");
const cat = new Cat("Meo");
dog.sound();
cat.sound();