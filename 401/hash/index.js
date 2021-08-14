/* eslint-disable */ 

class Node {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
  }
  
  class LinkedList {
    constructor() {
      this.head = null;
    }
    prepend(value) {
      const node = new Node(value);
      //First time to add a node
      if (!this.head) {
        this.head = node;
      } //Prepend adding 
      else {
        node.next = this.head;
        this.head = node;
      }
    }
  }
  
  class Hashmap {
    constructor(size) {
      this.size = size;
      this.storage = new Array(size);
    }

    hash(key) {
      const sumCharCode = key.split('').reduce((acc, char) => {
        return acc + char.charCodeAt(0);
      }, 0);


      const hashKey = (sumCharCode * 19) % this.size;

      return hashKey;
    }
  
    set(key, value) {
      // get an index
      const hash = this.hash(key);
      // we need to check if a value already exist in the index
      if (!this.storage[hash]) {
        const ll = new LinkedList();
        ll.prepend({ [key]: value });
        this.storage[hash] = ll; // [222] = {head:{value:{"key","value"},next:null}}
      } else {
        this.storage[hash].prepend({ [key]: value });
      }
    }

    contains(key) {
      const hash = this.hash(key);

      if (this.storage[hash]) {
        return true;
      } else {
        return false;
      }
    }

    get(key)
    {

      const hash = this.hash(key);
      if (this.storage[hash])
      {
                let curr=this.storage[hash].head
let found=false
        while(curr)
        {
          if(key in curr.value)
          {
            found=curr.value
break;
          }

          curr=curr.next
        }

      return found ? curr.value[key]:"not dound"
      }

      else
      {
        return "not dound"
      }

  }

}
const hashmap = new Hashmap(4000);

hashmap.set('name', 'bahaa');
hashmap.set('enma', 'asasdas');
hashmap.set('eman', 'asddasdas');


console.log(hashmap.get('name'))
console.log(hashmap.get('amen'))

console.log(hashmap.get('enma'))
console.log(hashmap.get('eman'))




  module.exports = Hashmap