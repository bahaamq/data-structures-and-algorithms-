'use strict';
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

    let truthy =ll.includes('a')
    expect(truthy).toEqual(true);

    let falsy=ll.includes("hee")
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
    ll.insertAfter('b',1)

    expect(ll.head.value).toEqual('a');
    expect(ll.head.next.next.value).toEqual(1);


  });


  it('Add string in specific place after ', () => {
    const ll = new LinkedList();
    ll.append('a');
    ll.append('b');
    ll.append('c');
    ll.append('d');
    ll.insertAfter('b',1)

    expect(ll.head.value).toEqual('a');
    expect(ll.head.next.next.value).toEqual(1);


  });


  it('Add string in specific place before ', () => {
    const ll = new LinkedList();
    ll.append('a');
    ll.append('b');
    ll.append('c');
    ll.append('d');
    ll.insertBefore('b',1)

    expect(ll.head.value).toEqual('a');
    expect(ll.head.next.value).toEqual(1);


  });
});
