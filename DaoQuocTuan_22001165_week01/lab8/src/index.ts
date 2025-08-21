class Product{
    name: string;
    price: number;
    constructor(name: string, price: number) {
        this.name = name;
        this.price = price;
    }

    displayInfo(): void {
        console.log(`Name: ${this.name}, Price: ${this.price}`);
    }

}

const products: Product[] = [
    new Product("Product1", 100),
    new Product("Product2", 99),
    new Product("Product3", 300),
    new Product("Product4", 730),
    new Product("Product5", 560),
    new Product("Product6", 604),
];

const filterPrice = products.filter(product => product.price > 100);
filterPrice.forEach(product => product.displayInfo());
