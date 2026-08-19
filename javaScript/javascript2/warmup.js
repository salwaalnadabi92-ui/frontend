

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

