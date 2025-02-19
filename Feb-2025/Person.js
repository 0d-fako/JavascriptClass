const Human = require('./Human');


class Student extends Human{
    #grade

    constructor(name, age, grade){
        super(name, age);
        this.#grade = grade;
    }


    set grade(grade){
        this.#grade = grade;
    }

    get grade(){
        return this.#grade;
    }


    speak(){
        return `${this.name} is speaking Chinese`;  
    }  
}

let student = new Student("John", 25, "A");
console.log(student.grade);
console.log(student.name, student.age);
console.log(student.speak());