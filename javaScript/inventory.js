const products = [
    {
        name: "T-Shirt",
        price: 15,
        stock: 5,
        category: "Clothing"
    },
    {
        name: "Jeans",
        price: 30,
        stock: 15,
        category: "Clothing"
    },
    {
        name: "Jacket",
        price: 50,
        stock: 8,
        category: "Clothing"
    },
    {
        name: "Sofa",
        price: 300,
        stock: 12,
        category: "Furniture"
    },
    {
        name: "Dining Table",
        price: 200,
        stock: 4,
        category: "Furniture"
    },
    {
        name: "Curtains",
        price: 40,
        stock: 20,
        category: "Home"
    }
];




//  Create Product Card
const renderProductCard = (product) => {
    return `
        <div class="col-md-4 mb-3">
            <div class="card">
                <div class="card-body">
                    <h5 class="card-title">${product.name}</h5>
                    <p>Price: $${product.price}</p>
                    <p>Stock: ${product.stock}</p>
                    <p>Category: ${product.category}</p>
                </div>
            </div>
        </div>
    `;
};
