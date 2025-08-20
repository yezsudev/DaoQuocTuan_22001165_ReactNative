class Car{
    brand: string;
    model: string;
    year: number;
                
    constructor(brand: string, model: string, year: number){
        this.brand = brand;
        this.model = model;
        this.year = year;
    }

    displayInfo(): void {
        console.log(`Bai 3: Brand: ${this.brand}, Model: ${this.model}, Year: ${this.year}`);
        
    }
}

const car = new Car("Vinfast", "VF9", 2022)
car.displayInfo()