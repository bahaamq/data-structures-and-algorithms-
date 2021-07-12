'use strict';
/* eslint-disable */
const Stack = require('./stack');

class Pseudoqueue {
    constructor() {
     
        this.stack1 = new Stack();
        this.stack2 = new Stack();

    }
    enqueue(value) {
this.stack1.push(value)

console.log(this.stack1.top.value)
    }

    dequeue() {
        // console.log(this.stack2.top)
        if (!this.stack2.top) {

            console.log('tst')
        while(this.stack1.top)
        {
            this.stack2.push(this.stack1.pop())
            console.log(this.stack2);

        }
    }
  
    return this.stack2.pop()

}
}
module.exports = Pseudoqueue;
