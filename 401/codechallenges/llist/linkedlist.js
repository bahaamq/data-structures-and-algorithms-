'use strict';
/* eslint-disable */
const Node = require('./node');
class LinkedList {
    constructor() {
        this.head = null;
        this.tail=null
        this.llLength=0
    }
    insert(value) {
        // this.head = new Node(value, this.head);
        // longer way
        const node = new Node(value);
        if (!this.head) {
            this.head = node;
        } else {
            node.next = this.head;
            this.head = node;
        }
        this.llLength++
    }


    includes(value) {

        if (this.head) {
            let currentNode = this.head;
            let flag = false
            while (currentNode) {
                if (currentNode.value === value) {
                    return true
                }

                currentNode = currentNode.next;

            }

            return false



        }
    }

    tostring() {
let c=0;
        if (this.head) {
            let currentNode = this.head;
            let str = ""

            while (currentNode) {
                str = str + `{${currentNode.value}} ->`
c++;
                this.tail=currentNode
                currentNode = currentNode.next;

            }
            str = str + "NULL"
            // console.log(str)
console.log('hhh'+this.tail.value)
this.llLength=c
            return str
        }
    }
    append(value) {
        const node = new Node(value);

        if (!this.head) {
            this.head = node;
        }

else
{
        let currentNode = this.head;
        while (currentNode.next) {


            currentNode = currentNode.next;
        }
        currentNode.next = node;
    }

    this.llLength++
    }

    insertAfter(value, newValue)
    {
  
   let node = new Node(newValue);

     let currentNode = this.head;
     while (currentNode) {

       if (currentNode.value === value) {
       node.next=currentNode.next
       currentNode.next=node
 break;
       }

    //    console.log(currentNode.value)
       currentNode = currentNode.next;
 
   }

   this.llLength++
}

    insertBefore(val, newVal) {

        const node = new Node(newVal)

            let cureentNode = this.head;
            while (cureentNode) {
        
                if (cureentNode.next.value == val) {
                    node.next = cureentNode.next;
                    cureentNode.next = node;
                    break;
                }
              console.log(cureentNode.value)

              cureentNode = cureentNode.next;
        
            }
            
       this.llLength++
          }
//Reverse

      kthelement(pos)
      {

          let getnumofloop=this.llLength-pos

          let currentNode = this.head;
        let counter=0;
let value='Exception';
          while (currentNode && getnumofloop >=0) {
        counter++
        if(counter === getnumofloop)
        {
value=currentNode.value
break
        }
              
              currentNode = currentNode.next;

          }
console.log(value)
          return value
      }

      isBalindrome()
      {
          let str=""
//Estblaish current node to point to head
          let currentNode = this.head;

          //Convert LL TO STRing
while(currentNode!=null)
{

str=str+currentNode.value
currentNode=currentNode.next

}
// end of convert ll to string

let strLengthall=str.length // taking the length of string
let strLength=strLengthall

if(strLength%2==1) // check if its odd as it always +0.5 returns real number when dividision by /2
{
    strLength=strLength/2-0.5
}
else
{
    strLength=strLength/2
}
let strReverse=""
let cc=0;
let strForward=""

//strReverse A result of contaction  loop that starts from the end of the str till the middle
// strForward A result of containing from zero till the middle
for(let i=strLengthall-1 ; i >=strLength ; i--)
{
    strReverse=strReverse+str[i]
 
    strForward=strForward+str[cc]
    cc++
}
//if they are equal thenthey are Balindrome!
if(strReverse==strForward)
{
    return true
}
else{
    return false
}

      }



}
module.exports = LinkedList;
