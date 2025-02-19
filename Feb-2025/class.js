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

class Student extends Human{
    #grade;
    constructor(name, age, grade){
        super(name, age);
        this.grade = grade;
    }
    display(){
        super.display();
        console.log(this.grade);
    }
}