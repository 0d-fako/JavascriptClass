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
    #length;
    #width;

    constructor(name,length, width){
        super(name);
        this.length = length;
        this.width = width;
    }

    set length(length){
        this.#length = length;
    }

    get length(){
        return this.#length;
    }

    set width(width){
        this.#width = width;
    }

    get width(){
        return this.#width;
    }

    area(){
        return this.length * this.width;
    }

    perimeter(){
        return 2 * (this.length + this.width);
    }

    isSquare(){
        return this.length === this.width;
    }
}