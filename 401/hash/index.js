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

      return found ? curr.value[key]: false
      }

      else
      {
        return false ? "not Found":false
      }

  }

   static repeatedWord(string) {
 
    let array = string.split(" "); //O(N)
    // convert each word to array element ,,, convert all words to lower to avoid case sensitive
    const hashmap = new Hashmap(4000);

for(let i =0 ; i < array.length ; i++)
{

  //Format text
  array[i]=array[i].toLowerCase()
  array[i]=array[i].replace(',','')
  array[i]=array[i].replace("",'')
  array[i]=array[i].replace('.','')
// End of format

//Check if there is an index
  if(hashmap.contains(array[i]))
  {
//Check if the values are the same
    if(hashmap.get(array[i]))
    {
      return array[i]

    }
  }
// set key as value Always add all values  so that it can be accesed directly by key once there is a match 
hashmap.set(array[i],array[i])

}
return "no Repeted words"
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

console.log(hashmap.contains('nsame'));


console.log(Hashmap.repeatedWord("Once upon a time, there was a brave princess who..."	))


console.log(Hashmap.repeatedWord("It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair, we had everything before us, we had nothing before us, we were all going direct to Heaven, we were all going direct the other way – in short, the period was so far like the present period, that some of its noisiest authorities insisted on its being received, for good or for evil, in the superlative degree of comparison only..."))


console.log(Hashmap.repeatedWord("It was a queer, sultry summer, the summer they electrocuted the Rosenbergs, and I didn’t know what I was doing in New York..."))



console.log(Hashmap.repeatedWord("abc cba"))

console.log(Hashmap.repeatedWord("abcde ecbda"))
  module.exports = Hashmap