class Node{
    constructor(data){
        this.data = data;
        this.next = null;
    }
}


class LinkedList{
    constructor(head = null){
        super(head);
        this.head = head;
    }

    add(data){
        let node = new Node(data);
        if(!this.head){
            this.head = node;
        }else{
            let current = this.head;
            while(current.next){
                current = current.next;
            }
            current.next = node;
        }
    }


    toArray(){
        const items = [];

        let current = this.head;
        while(current){
            items.push(current.data);
            current = current.next;
        }
        return items;
    }
} 