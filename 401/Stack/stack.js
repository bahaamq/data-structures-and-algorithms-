'use strict';
/* eslint-disable */
const Node = require('./node');
class Stack {
    constructor() {
        this.top = null;
    
        this.tempTop=null
    }
    push(value) {
        // this.head = new Node(value, this.head);
        // longer way
        const node = new Node(value);
if(!this.top)
{
this.top=node
}
else
{
    node.next=this.top
    this.top=node
}

    }

    pop() {
this.tempTop=this.top
 this.top=this.top.next
console.log(this.tempTop.value)
        return this.tempTop.value
        
    }


    peek() {
        return this.top ? this.top.value: null;
    }
}
module.exports = Stack;
