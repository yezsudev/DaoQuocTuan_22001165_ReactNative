class Rectangle{
    private width: number;
    private height: number;

    constructor(width: number, height: number) {
        this.width = width;
        this.height = height;
    }

    public getArea(): number {
        return this.width * this.height;
    }

    public getPerimeter(): number {
        return 2 * (this.width + this.height);
    }
}

const rectangle = new Rectangle(5, 10);
console.log(`Area: ${rectangle.getArea()}`); 
console.log(`Perimeter: ${rectangle.getPerimeter()}`);