

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


//spread object


const update={...order, status:"Cancelled" }
console.log(update);