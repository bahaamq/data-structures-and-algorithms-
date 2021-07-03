'use strict';
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

}
module.exports = LinkedList;
