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
        result.push(node.val);
        if (node.right) _traverse(node.right);
      };
      _traverse(this.root);
      return result;
    }
  }
  
  class BinarysearcheTree extends BinaryTree {
    constructor(root) {
        super(root);
    }

    insert(value)
    {
let node = new Node(value)
let curr=this.root

const _isnert=(node)=>
{
if(node.value > curr.value)
{
    //if tyere is a right..
    if(!curr.right)
    {
        curr.right=node
    }
    //keep going to the right cuzthe value is still bigger and the right always bigger untill there is no right
    else
    {
    curr=curr.right
    _isnert(node)
    }
}

else if(node.value < curr.value)
{
    if(!curr.left)
{
    curr.left=node
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


    search(value)
    {
return this.inOrder().includes(value)
    }
  }
  module.exports = {BinaryTree,BinarysearcheTree};