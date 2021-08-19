 /* eslint-disable */ 

 const Hashmap = require("./index.js");
 const Node = require('../treess/node');

function leftJoin(hash1,hash2)
{

let hash1Keys=Object.keys(hash1.storage) // Return hash1 keys 
let hash2Keys=Object.keys(hash2.storage) // Return hash2 keys 

let newArr=[]; 
// To save in an object 
let firstElement;
let secElement;
let thirdElement;
let container=''
let index='';
for(let i = 0 ; i < hash1Keys.length; i++)
{
    firstElement = Object.keys(hash1.storage[hash1Keys[i]].head.value).toString()

    secElement = Object.values(hash1.storage[hash1Keys[i]].head.value).toString()

if(hash2Keys.includes(hash1Keys[i]))
{
    index= hash2Keys.indexOf(hash1Keys[i])
    thirdElement = Object.values(hash2.storage[hash2Keys[index]].head.value).toString()
}

else{
    thirdElement = "NULL"
}

container=`[${firstElement},${secElement},${thirdElement}]`
newArr.push(container)
}
return newArr

}

const hashmap = new Hashmap(4000);
const hashmap2 = new Hashmap(4000);

hashmap.setWithouthash('name', 'bahaa');
hashmap.setWithouthash('age', '24');
hashmap.setWithouthash('topic', 'hashmap');


hashmap2.setWithouthash('topic', 'Math');
hashmap2.setWithouthash('name', 'mhmd');


console.log(Object.values( leftJoin(hashmap,hashmap2)))
module.exports = leftJoin
