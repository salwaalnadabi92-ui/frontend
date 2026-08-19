

//array basic

const city=["Muscat", "Sohar" ,"dubai ","nakla","sumail","izki " ]

city.pop();
city.push("sur");
city.shift("Muscat");
city.unshift("ibra");

console.log(city);


//duplicate and lenght
  city.push("sohar");
 console.log(city);
 console.log(city.length);


 //for loop, then again with for...of 

for( i=0; i<=city.length; i++)
{
    console.log(city[i]);
}


for( const cities of city)
{
    console.log(city)
 
}



 //Destructuring 

 //object 
 const order = { id: 101, customer: "Sara Ahmed", total: 249.99, status: "Shipped" }; 
  const{ customer , total} = order;
  console.log(customer,total);

//array

const number=[ 1,2,3,4];
const[first ,second,...everythingelse]=number;
console.log(first);
console.log(second);
console.log(everythingelse);


// function

function orderobject ({id, customer,total,status })
{
    return '${id} - ${customer} - ${total} - ${status}';
}
 console.log(orderobject(order));


 // Spread & Rest
//combin
 const onlineorders=[ 101,102,103];
const  instoreorders=[200,300,400];
const everyone=[...onlineorders,...instoreorders];
const allorder=[...onlineorders,...instoreorders];
console.log(allorder);


//spread object/update 
 //const order = { id: 101, customer: "Sara Ahmed", total: 249.99, status: "Shipped" }; 
const update={...order, status:"Cancelled" }
console.log(update);
console.log(order);


//function using a rest parameter

function getall(...total)
{
return total;
}

console.log(getall(100,200,300,400));
console.log(getall(100,200,300,400,500,600));


//Array Methods

//1. reduce
const orders = [
    {
        id: 1,
        customer: "Salwa",
        total: 250,
        status: "Shipped"
    },
    {
        id: 2,
        customer: " Fatam",
        total: 150,
        status: "Pending"
    },
    {
        id: 3,
        customer: "Mona",
        total: 300,
        status: "Shipped"
    },
    {
        id: 4,
        customer: "Ahmed",
        total: 100,
        status: "Cancelled"
    },
    {
        id: 5,
        customer: "Ali",
        total: 450,
        status: "Shipped"
    },
    {
        id: 6,
        customer: "Khalfan",
        total: 75,
        status: "Pending"
    },
    {
        id: 7,
        customer: "Balqees",
        total: 200,
        status: "Cancelled"
    },
    {
        id: 8,
        customer: "Omar",
        total: 350,
        status: "Shipped"
    }
];


const sumtotal =orders.reduce((sum,item) => sum + item.total ,0);
console.log(sumtotal);

//2.filter
const result =orders.filter(o=>o.status==="Shipped");
console.log(result);

//map
const names =orders.map(o=>o.customer);
console.log(names);


//find

const firstorder= orders.find(o=> o.total>200);
console.log(first);




//some and every

const orderstatus=orders.some(o=> o.status==="Cancelled");
console.log(orderstatus);

const ordergreather=orders.every(o=> o.total>0);
console.log(ordergreather);


//sort


