 /* eslint-disable */ 

 const Hashmap = require("./index.js");
 const Node = require('../treess/node');

const BTree= require("../treess/binarytree").BinaryTree

function equalvals(tree,tree2)
{
const hashmap= new Hashmap(4000)
let arr1= tree.BFS()
let arr2 =tree2.BFS()
let newArr=[]

for(let i=0 ; i < arr1.length; i++)
{

hashmap.set(arr1[i].toString() , arr1[i])

}


for(let i=0 ; i < arr2.length; i++)
{

if(hashmap.contains(arr2[i].toString()))
{
    newArr.push(arr2[i])
}
  
}

return newArr
}

module.exports = equalvals
