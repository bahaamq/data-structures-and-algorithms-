/* eslint-disable */

const LinkedList = require('../linkedlist');

describe('Linked List', () => {
  it('Should Instantiate', () => {
    const ll = new LinkedList();
    expect(ll).toBeDefined();
    expect(ll.head).toBeNull();
  });
});

describe('insert to the head', () => {
  it('should add to empty list', () => {
    const ll = new LinkedList();
    ll.insert('a');
    expect(ll.head.value).toEqual('a');
    expect(ll.head.next).toBeNull();
  });
  it('should addmulti nodes', () => {
    const ll = new LinkedList();
    ll.insert('a');
    ll.insert('b');
    expect(ll.head.value).toEqual('b');
    expect(ll.head.next.value).toEqual('a');
  });
});


describe('Check values', () => {

  it('should return true if value exist', () => {
    const ll = new LinkedList();
    ll.insert('a');
    ll.insert('b');
    expect(ll.head.value).toEqual('b');
    expect(ll.head.next.value).toEqual('a');
    expect(ll.head.next.next).toBeNull();

    let truthy = ll.includes('a')
    expect(truthy).toEqual(true);

    let falsy = ll.includes("hee")
    expect(falsy).toEqual(false);
  });
  it('Format string in the linked list', () => {
    const ll = new LinkedList();
    ll.insert('a');
    ll.insert('b');

    expect(ll.tostring()).toEqual("{b} ->{a} ->NULL");


  });


  it('Append string in the linked list', () => {
    const ll = new LinkedList();
    ll.append('a');
    ll.append('b');


    expect(ll.head.value).toEqual('a');
    expect(ll.head.next.value).toEqual('b');


  });

  it('Add string in specific place agter', () => {
    const ll = new LinkedList();
    ll.append('a');
    ll.append('b');
    ll.append('c');
    ll.append('d');
    ll.insertAfter('b', 1)

    expect(ll.head.value).toEqual('a');
    expect(ll.head.next.next.value).toEqual(1);


  });


  it('Add string in specific place after ', () => {
    const ll = new LinkedList();
    ll.append('a');
    ll.append('b');
    ll.append('c');
    ll.append('d');
    ll.insertAfter('b', 1)

    expect(ll.head.value).toEqual('a');
    expect(ll.head.next.next.value).toEqual(1);


  });


  it('Add string in specific place before ', () => {
    const ll = new LinkedList();
    ll.append('a');
    ll.append('b');
    ll.append('c');
    ll.append('d');
    ll.insertBefore('b', 1)

    expect(ll.head.value).toEqual('a');
    expect(ll.head.next.value).toEqual(1);


  });

  it('Happy path!', () => {
    const ll = new LinkedList();
    ll.append('a');
    ll.append('b');
    ll.append('c');
    ll.append('d');
    ll.append('e');
    ll.append('f');
    ll.append('f');

    ll.kthelement(2)
    expect(ll.head.value).toEqual('a');
    expect(ll.llLength).toEqual(7);
    expect(ll.kthelement(2)).toEqual('e')

  });
  it('Where k is greater than the length of the linked list', () => {
    const ll = new LinkedList();
    ll.append('a');
    ll.append('b');
    ll.append('c');
    ll.append('d');
    ll.append('e');
    ll.append('f');
    ll.append('f');
    ll.append('f');

    ll.kthelement(6)
    expect(ll.llLength).toEqual(8);
    expect(ll.kthelement(9)).toEqual('Exception')

  });

  it('Where k and the length of the list are the same', () => {
    const ll = new LinkedList();
    ll.append('a');
    ll.append('b');
    ll.append('c');
    ll.append('d');
    ll.append('e');
    ll.append('f');

    ll.kthelement(6)
    expect(ll.llLength).toEqual(6);
    expect(ll.kthelement(6)).toEqual('Exception')

  });


  it('Where k  is not a positive integer', () => {
    const ll = new LinkedList();
    ll.append('a');
    ll.append('b');
    ll.append('c');
  

    ll.kthelement(-4)
    expect(ll.llLength).toEqual(3);
    expect(ll.kthelement(-2)).toEqual('Exception')

  });

  it('Wherethe llist is of size 1', () => {
    const ll = new LinkedList();
    ll.append('a');

    ll.kthelement(0)
    expect(ll.llLength).toEqual(1);
    expect(ll.kthelement(0)).toEqual('a')
    expect(ll.kthelement(1)).toEqual('Exception')

  });

  // it('merge  linked lists', () => {

  //   const ll2 = new LinkedList();
  //   const ll3 = new LinkedList();

  //   ll2.append('a');
  //   ll2.append('b');
  //   ll2.append('4');
  //   ll2.append('d');
  //   ll2.append('4');
  //   ll2.append('5');

  //   ll3.append('4');
  //   ll3.append('4');
  //   ll3.append('4');

  //   LinkedList.zipLists(ll2, ll3)
  //   // expect(zipLists(ll2, ll3)).toEqual();


  // });

});
