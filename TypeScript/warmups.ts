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

//Default Parameter
function calculateTotal(
    price: number,
    tax: number = 0.05
): number {
    return price + price * tax;
}

//