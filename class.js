class Parent{
    constructor(){
        this.fatherName = "Md Elias";
    }
}

class Child extends Parent{
    constructor(name){
        super();
        this.name=name;
    }
}
const baby = new Child("Alamin");
console.log(baby);
