class Book {
    private title: string;
    private author: string;
    private year: number;

    constructor(title: string, author: string, year: number) {
        this.title = title;
        this.author = author;
        this.year = year;
    }

    displayInfo(): void {
        console.log(`Bai 3: Title: ${this.title}, Author: ${this.author}, Year: ${this.year}`);
    }
}

const book = new Book("VietNam", "QuocTuan", 2004);
book.displayInfo();
