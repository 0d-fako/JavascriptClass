class Human{
    #name;
    #age;
    
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    display(){
     console.log(this.name, this.age);
    }
}


module.exports = Human;