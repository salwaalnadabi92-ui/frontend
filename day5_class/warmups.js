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


const employee1 = new Employee("Sara", "Developer");

console.log(employee1.getGreeting());

//

class Manager extends Employee {
    constructor(name, role, teamSize) {
        super(name, role);
        this.teamSize = teamSize;
    }


getgreeting()
{

         return ` my name is ${this.name} and I am a ${this.role} i am  mange  ${this.teamSize} of pepole  `;
}

}

const employee2=new employee("Sara", "Developer", 8 );
console.log(getgreeting());