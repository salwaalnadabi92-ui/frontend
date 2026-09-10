//Typed Array

const orderTotals: number[] = [25.5, 40, 75.99, 120];


//a tuple

const product: [string, number] = ["Laptop", 899.99];

//Type Inference

const customerName = "Salwa";

//using unknown 

let uncertainValue: unknown = "Salwa";
if (typeof uncertainValue === "string") {
    console.log(uncertainValue.toUpperCase());
}

//Union  Types

function processValue(value: string | number): void {
    if (typeof value === "string") {
        console.log(value.toUpperCase());
    } else {
        console.log(value * 2);
    }
}


//Intersection  type 

//two small object types
type ProductInfo = {
    name: string;
    price: number;
};


type InventoryInfo = {
    quantity: number;
};

//combain :
 type ProductRecord = ProductInfo & InventoryInfo;

// Typed Functions

//Optional
function greetCustomer(
    name: string,
    message?: string
): string {
    if (message) {
        return `${message}, ${name}`;
    }

    return `Hello, ${name}`;
}


console.log(greetCustomer("Ali"));
console.log(greetCustomer("Ali", "Welcome"));


//Default Parameter
function calculateTotal(
    price: number,
    tax: number = 0.05
): number {
    return price + price * tax;
}

console.log(calculateTotal(100));
console.log(calculateTotal(100, 0.10));


//Classes	&	Access	Modifiers

//private -readonly field& constructor parameter-property shorthand
class Order {
    private total: number;

    readonly orderId: number;

    constructor(
        orderId: number,
        public customerName: string
    ) {
        this.orderId = orderId;
        this.total = 0;
    }

    addAmount(amount: number): void {
        this.total += amount;
    }

    getTotal(): number {
        return this.total;
    }
}

const order = new Order(1, "Ali");

order.addAmount(100);

console.log(order.customerName);
console.log(order.orderId);
console.log(order.getTotal());




//—	Interfaces	&	Structural	Typing

interface Customer {
    id: number;
    name: string;
}

const customer = {
    id: 1,
    name: "Ali",
    email: "ali@example.com"
};

function printCustomer(customer: Customer): void {
    console.log(customer.id);
    console.log(customer.name);
}

printCustomer(customer);


// Inheritance & 
// Abstract Classes
abstract class Payment {
    abstract pay(amount: number): void;//no implementation

    processPayment(amount: number): void {//Concrete method
        console.log("Processing payment...");
        this.pay(amount);
    }
}

class CreditCardPayment extends Payment {//Subclass
    pay(amount: number): void {
        console.log(`Paid ${amount} using credit card.`);
    }
}

const payment = new CreditCardPayment();//Instantiate
payment.processPayment(100);



//Generic Function

function getLast<T>(items: T[]): T {
    return items[items.length - 1];
}

const lastNumber = getLast([10, 20, 30]);
const lastName = getLast(["Ali", "Sara", "Omar"]);
const lastResult = getLast([true, false, true]);
console.log(lastNumber);
console.log(lastName);
console.log(lastResult);

//Generic Class + Constraint

interface HasId {
    id: number;
}



interface HasId {
    id: number;
}

class Repository<T extends HasId> {
    private items: T[] = [];

    add(item: T): void {
        this.items.push(item);
    }

    getById(id: number): T | undefined {
        return this.items.find(item => item.id === id);
    }

    getAll(): T[] {
        return this.items;
    }
}


interface Product {
    id: number;
    name: string;
    price: number;
}

const productRepository = new Repository<Product>();

productRepository.add({
    id: 1,
    name: "Laptop",
    price: 900
});

productRepository.add({
    id: 2,
    name: "Phone",
    price: 500
});

console.log(productRepository.getAll());

console.log(productRepository.getById(1));


