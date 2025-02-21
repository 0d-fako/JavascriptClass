class Queue{
    constructor(){
        this.data = [];
    }

    enqueue(element){
        this.data[this.data.length] = element;
    }

    dequeue(){
        if(this.data.length == 0) throw new Error ("Queue is empty");
        let element = this.data[0];

        for(let i = 0; i < this.data.length - 1; i++){
            this.data[i] = this.data[i + 1];
        }
        this.data.length = this.data.length - 1;
        return element;
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     

    }

    peek(){
        if(this.data.length == 0){
            return "Queue is empty";
        }
        return this.data[0];
    }

    size(){
        return this.data.length;
    }
}