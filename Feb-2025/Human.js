class Human{
    #name;
    #age;
    
    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    set name(name){
        this.#name = name;
    }

    get name(){
        return this.#name;
    }

    set age(age){
        this.#age = age;
    }

    get age(){
        return this.#age;
    }

    speak(){
        return `${this.name} is speaking English`;
    }   

    display(){
     console.log(this.name, this.age);
    }
}


module.exports = Human;