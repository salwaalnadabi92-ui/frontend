/*—	Variables	&	Dynamic	Typing*/


const name="salwa";
let value=0;

value=20;
console.log(typeof(value))

value="ali";
console.log(typeof(value))



/* Operators & Comparisons*/

  const looseEqual = "10" == 10;   // true — type coercion happens
  const strictEqual = "5" === 5; // false — no coercion, types differ



//	falsy	value

const fullName= "";
if(!fullName)
{
console.log(" fullname is empty ")
}


	/* Control	Flow*/

/* for _ of*/

const	grades	=	[85,	92,	58,	73,	40]; 

for (const grade of grades)

    if(grade >=60)
    {
        console.log("pass")
    }
    else
     {
    console.log("fail")

       }






  // switch
  const score = 80;
     switch (score) 
  {
    case   score >=90:
      console.log("A");
      break;

 case   score >=80:

      console.log("B");
      break;


case   score >=70:

      console.log("c");
      break;

    default:
      console.log("F");
      break;
  }





    /*	Functions,	All	Four	Ways*/


//1. Function declaration

function isEvenNumber(a) {
  return a % 2==0;
}

console.log(isEvenNumber(6));


//2. Function expression — a function stored in a variable

const isEvenNumberexpression  = function (a) {
  return a % 2==0;
};

console.log(isEvenNumberexpression(6));



//3. Arrow function 


const isEvenArrow = (a) =>  {a  % 2==0; }

   
console.log(isEvenArrow(6));



//4. Default & rest parameters

  // default parameter
function greet(name = "Guest") {
  return `Hello, ${name}`;
}


  // rest parameter

function sum(...numbers) {

  return numbers.reduce((total, n) => total + n, 0);
}



