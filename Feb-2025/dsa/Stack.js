class Stack {
  constructor() {
    this.items = [];
  }

  push(element) {
    this.items[this.items.length] = element;
  }

  pop() {
    if (this.items.length === 0) return "Stack is empty";
    let element = this.items[this.items.length - 1]
    this.items.length = this.items.length - 1;
    return element; 
  }

  peek() {
    return this.items[this.items.length - 1];
  }

  isEmpty() {
    return this.items.length === 0;
  }

  contain(element) {
    return this.items.includes(element);
  }

  size(){
    return this.items.length;
  }



  printStack() {
    let str = "";
    for (let i = 0; i < this.items.length; i++) str += this.items[i] + " ";
    return str;
  }
}


module.exports = Stack;