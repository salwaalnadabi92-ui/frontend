  //Optional Chaining	

  console.log (employee.manager?.name);


//Nullish Coalescing ??
const theme = settings.theme ?? "light";

console.log(theme);//output light


const discount = 0;

console.log(discount || 10);//output :10

console.log(discount ?? 10);//output :0


//Classes

class employee {

    constructor(name,role){

    this.name =name;
 
    this.role=role;
}

getgreeting()
{

         return ` my name is ${this.name} and I am a ${this.role}.`;
}

}


