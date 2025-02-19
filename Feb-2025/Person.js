const Human = require('./Human');


class Student extends Human{
    #grade

    constructor(name, age, grade){
        super(name, age);
        this.#grade = grade;
    }
}