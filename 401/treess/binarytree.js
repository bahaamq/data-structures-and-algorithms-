/* eslint-disable */  
const Node = require('./node');

class BinaryTree {
    constructor(root) {
      this.root = root;
    }
    // root -> left -> right
    preOrder() {
      const result = [];
      const _traverse = (node) => {
        result.push(node.val);
        if (node.left) _traverse(node.left);
        if (node.right) _traverse(node.right);
      };
      _traverse(this.root);
      return result;
    }
  
    postOrder() {
      const result = [];
      const _traverse = (node) => {
        if (node.left) _traverse(node.left);
        if (node.right) _traverse(node.right);
        result.push(node.val);
      };
      _traverse(this.root);
      return result;
    }
    inOrder() {
      const result = [];
      const _traverse = (node) => {
        if (node.left) _traverse(node.left);
        console.log(node.val)
        result.push(node.val);
        if (node.right) _traverse(node.right);
      };
      _traverse(this.root);
      return result;
    }

    getMax()
    {
//There ia no right so the root is he biggest

if(!this.root)
{
  return "Empty Tree!"
}
if(!this.root.right)
{
  return this.root.val
}

    let max=0
      const _maximum = (node) => {
      
       max=node.val

if(node.right)
{
_maximum(node.right)

}


};
      _maximum(this.root);
return max   
 }
  }
  
  class BinarysearcheTree extends BinaryTree {
    constructor(root) {
super(root);
    }


    insert(val)
    {

let node = new Node(val)

if(!this.root)
{
this.root=node
}
console.log(this.root)
let curr= this.root;


const _isnert=(node)=>
{
  //First iteration
if(node.val > curr.val)
{
    //if tyere is a right..
    if(!curr.right)
    {
        curr.right=node
        // this.root.right=node
    }
    //keep going to the right cuzthe val is still bigger and the right always bigger untill there is no right
    else
    {
    curr=curr.right
    _isnert(node)
    }

}

else if(node.val < curr.val)
{
    if(!curr.left)
{
    curr.left=node
    // this.root.left=node

}
else
{
    curr=curr.left

    _isnert(node)
}


}
    }
_isnert(node)

    }


    search(val)
    {
      // console.log(this)
return this.inOrder().includes(val)
    }


    // getMax()
    // {
    //   return(this.inOrder()[this.inOrder().length-1])
    // }
  }
  module.exports = {BinaryTree,BinarysearcheTree};