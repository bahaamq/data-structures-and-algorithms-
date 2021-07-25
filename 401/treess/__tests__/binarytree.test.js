/* eslint-disable */  

const BinaryTree = require('../binarytree').BinaryTree;
const BinarysearcheTree = require('../binarytree').BinarysearcheTree;

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
    add=new BinarysearcheTree()
  });





  describe('instantiate ', () => {

    it('Can successfully instantiate an empty tree    ', () => {
        
        expect(tree instanceof BinaryTree).toBeTruthy();
    });
    
    it('Can successfully instantiate tree with a single root node    ', () => {
        console.log(tree.root.toString())
        expect(tree.root).toBeTruthy();
    });

    
    it('initialize BST', () => {
        
      expect(add instanceof BinarysearcheTree).toBeTruthy();
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


  describe('Traversals,binarysearchtree ', () => {

    
    it('search item to the tree', () => {
      add.insert(1)
      add.insert(2)
      add.insert(0)

    
      expect(add.root.val).toEqual(1);
      expect(add.root.right.val).toEqual(2);
      expect(add.root.left.val).toEqual(0);
      expect(add.search(1)).toEqual(true);
      expect(add.search(9)).toEqual(false);

    });


    it('check if inorder sort the array', () => {
      add.insert(1)
      add.insert(2)
      add.insert(0)
      add.insert(4)
      add.insert(5)
      add.insert(6)
      let expectedArr = [0,1,2,4,5,6];

      expect(add.inOrder()).toEqual(expectedArr);
  
    });




    it('get Maximum', () => {
      add.insert(1)
      add.insert(2)
      add.insert(0)
      add.insert(77)
      add.insert(115)

      add.insert(15)
      add.insert(0)

      expect(add.getMax()).toEqual(115);

    });



    it('get Maximum when the biggest is the root', () => {
      let add2=new BinarysearcheTree()
      add2.insert(10)
      add2.insert(8)
      add2.insert(5)
      add2.insert(9)
 

      expect(add2.getMax()).toEqual(10);

    });

    it('handling if nothing added ', () => {
      let add3=new BinarysearcheTree()


      expect(add3.getMax()).toEqual("Empty Tree!");

    });


    it('if all elements are in the right of the tree ', () => {

      let add4=new BinarysearcheTree()
      add4.insert(10)
      add4.insert(12)
      add4.insert(14)
      add4.insert(16)
 

      expect(add4.getMax()).toEqual(16);
    });
 
});

});
