let animal ={
    name: "unKnown",
    sound: "",
    move : function(){
        return `${this.name} is moving`
    }

}

let dog = Object.create(animal);

dog.name = "dog";
dog.sound = "bark";
dog.breed = "bulldog";

console.log(dog.move());



let cat = {}

Object.setPrototypeOf(cat, animal);


console.log(cat.move());

cat.name = "pussyCat";


function Animal(name, age, complexion){
    this.name = name;
    this.age = age;
    this.complexion = complexion;
}

