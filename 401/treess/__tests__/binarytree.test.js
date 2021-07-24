/* eslint-disable */  

const BinaryTree = require('../binarytree').BinaryTree;
// const BinarysearcheTree = require('../binarytree').BinarysearcheTree;

const Node = require('../node');



describe('Binary Tree', () => {
  let tree;
//   let search;
  beforeAll(() => {
    const ten = new Node(10);
    const eight = new Node(8);
    const forten = new Node(14);
    const eleven = new Node(11);
    const seventen = new Node(17);
    const six = new Node(6);
    const seven = new Node(7);
    const four = new Node(4);
    const eight2 = new Node(8);
    ten.left = eight;
    ten.right = forten;
    eight.left = six;
    forten.left = eleven;
    forten.right = seventen;
    six.right = seven;
    seven.left = four;
    seven.right = eight2;
    tree = new BinaryTree(ten);
    // search=new BinarysearcheTree()
  });





  describe('instantiate ', () => {

    it('Can successfully instantiate an empty tree    ', () => {
        
        expect(tree instanceof BinaryTree).toBeTruthy();
    });
    
    it('Can successfully instantiate tree with a single root node    ', () => {
        console.log(tree.root.toString())
        expect(tree.root).toBeTruthy();
    });

 
});





  // root - left - right
  it('Can successfully return a collection from a preorder traversal', () => {
    let expectedArr = [10,8,6,7,4,8,14,11,17];
    expect(tree.preOrder()).toEqual(expectedArr);
  });
  // left - root - right
  it('Can successfully return a collection from a inorder traversal', () => {
    let expected = [6,4,7,8,8,10,11,14,17];
    expect(tree.inOrder()).toEqual(expected);
  });
  // left - right -root
  it('Can successfully return a collection from a postorder traversal', () => {
    let expected = [4,8,7,6,8,11,17,14,10];
    expect(tree.postOrder()).toEqual(expected);
  });


});
