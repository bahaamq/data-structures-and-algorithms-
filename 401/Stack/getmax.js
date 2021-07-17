'use strict';
/* eslint-disable */
const Stack = require('./stack');
class Getmax {
    constructor() {
    this.top=null
        this.stack=new Stack
        this.maxVal=0
    }
    push(value) {

        if(this.stack.isEmpty())
        {
            this.maxVal=value
this.stack.push(value)
        }

        else
        {
            if(value > this.maxVal )
            {
                this.maxVal=value

                this.stack.push(value)
            }
        }
// console.log(this.maxVal)
    }

    getmax()
    {
        return this.stack.pop()

    }

}

module.exports = Getmax;
