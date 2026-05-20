// Abstration: is nothing but hiding implementation details and providing you only the importatnt part to the user

//ATM : show you the option Withdraw , deposite , balance check  
// not provide you details how this things are implemented 

//abstract class / interfaces 

export default abstract class Vehicle{
    abstract break():void;
    abstract accelarator():void;
    abstract gear():void;

    noOfGear():void{
        console.log('My car has 5 gears')
    }
}

//interface : is 100% abstraction 

//fps, amout update in sec , I want system alert if unauthorize access 

interface Emmployee{
    name:string;
    age:number;
    role:string
    add(a:number, b:number):number;
    mul(a:number, b:number):number;
}

interface BPOEmployee{
    add(a:number, b:number):number;
}

class Manager implements Emmployee, BPOEmployee{
    name: string;
    age: number;
    role: string;

    constructor(name:string, age:number, role:string){
        this.name= name;
        this.age = age;
        this.role = role
    }
    add(a: number, b: number): number {
        return a+b; 
     }

    mul(a: number, b: number): number {
        return a-b;
    }
}


interface Product{
    id:number;
    name:string;
    price:number
}




const Product: Product = {
    id: 0,
    name: "",
    price: 0
}

