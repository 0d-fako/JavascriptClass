class Shape{
    #name;
    
    constructor(name){
        this.name = name;
    }
   
    set name(name){
        this.#name = name;
    }

    get name(){
        return this.#name;
    }
}


class Rectangle extends Shape{
    side1;
    side2;

    constructor(name,side1, side2){
        super(name);
        this.side1 = side1;
        this.side2 = side2;
    }

    area(){
        return this.side1 * this.side2;
    }

    perimeter(){
        return 2 * (this.side1 + this.side2);
    }

    isSquare(){
        return this.side1 === this.side2;
    }
}

module.exports = {Shape, Rectangle};