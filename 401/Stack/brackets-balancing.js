'use strict';
/* eslint-disable */
const Stack = require('./stack');

class Balanced {
    constructor() {

        this.stack1 = new Stack();

    }
    isBalanced(value) {

        let str = value.length
        let i = 0;
        while (i < str) {


        //filtering (escaping) non-brackets
            if(
                  value[i]!==')' 
               &&value[i]!==']'
                &&value[i]!=='}'
                &&value[i] !=='('
                &&value[i]!=='['
                &&value[i] !== '{'
            )
            {
                console.log(value[i])
                console.log("hh")
                i++
                // escaping 
            continue;
            }
//End of filtering




        //check on order just to  push the openinng brackets
           else if (
                value[i] == '('
                || value[i] == '['
                || value[i] == '{' )
{
    this.stack1.push(value[i])
}


//Starting with the closing tags
else
{

    //O(1) ,, if we start ith closing tag...
if(this.stack1.isEmpty())
{
    console.log("itsempty")
    return false
}



// check last value , if the most recent (last in) opened bracket on the stack doesnt equal the first closed tag 
if(this.stack1.peek()=='(' && value[i] != ')' ||
this.stack1.peek()=='[' && value[i] != ']'||
this.stack1.peek()=='{' && value[i] != '}')
{
   return false 
}

//if the most recent (last in) opened bracket on the stack is equal the first closed tag 

//rhere is a match now pop to check for other bracekkets
this.stack1.pop()

}

                i++;
        }

//if its empty all open bracket has a closed bracked in the correct place
        return this.stack1.isEmpty()
    }


}
module.exports = Balanced;
