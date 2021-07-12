'use strict';
/* eslint-disable */
const Node = require('./node');
class Queue {
    constructor() {
    this.top=null
        this.tempTop=null
    }
    enqueue(value) {
        const node = new Node(value);
if(!this.top)
{
this.top=node
}
else
{
let currentNode=this.top
while(currentNode.next)
{
    currentNode=currentNode.next
}
currentNode.next=node

}

    }

    dequeue() {
this.tempTop=this.top
this.top=this.top.next

        return this.tempTop.value
        
    }

    peek() {
        return this.top ? this.top.value: null;
    }
}

module.exports = Queue;
