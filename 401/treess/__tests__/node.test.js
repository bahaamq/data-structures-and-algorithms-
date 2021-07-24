const Node = require('../node');

describe('Node', () => {
  it('create an instance of the Node class', () => {
    const node = new Node();
    expect(node instanceof Node).toBeTruthy();
  });

  it('create node instance with the correct properties', () => {
    const value = 'some value';
    const node = new Node(value);
    expect(node.val).toEqual(value);
    expect(node.left).toBeNull();
    expect(node.right).toBeNull();
  });


  //

  it('Can successfullyadd a left child and right child to a single root node', () => {
    const value = 10;
    const node = new Node(value);
    const node2 = new Node(value);
    const node3 = new Node(value);

    node.left=node2
    node.right=node3
    expect(node.val).toEqual(value);
    expect(node.left).toEqual(node2);
    expect(node.right).toEqual(node3);
  });

});