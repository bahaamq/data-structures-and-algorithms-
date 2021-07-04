'use strict';
/* eslint-disable */
const Node = require('./node');
class LinkedList {
    constructor() {
        this.head = null;
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

        if (this.head) {
            let currentNode = this.head;
            let str = ""

            while (currentNode) {
                str = str + `{${currentNode.value}} ->`

                currentNode = currentNode.next;

            }
            str = str + "NULL"
            console.log(str)

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
 
  
   }}

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
          }

        
      
}
module.exports = LinkedList;
