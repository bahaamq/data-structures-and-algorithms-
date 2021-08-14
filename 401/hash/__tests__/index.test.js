'use strict';
/* eslint-disable */ 

const Hashmap = require('../index.js');

describe('make sure to define a hashmap', () => {
  it('works', () => {

    const hashmap = new Hashmap(4000);
    expect(hashmap).toBeDefined()
})
})


describe('hash methods', () => {
    it('Adding a key/value to your hashtable results in the value being in the data structure', () => {
  
      const hashmap = new Hashmap(4000);

      hashmap.set('name', 'bahaa');

      expect(hashmap.storage[3923]).toBeDefined()


  })

  it('Retrieving based on a key returns the value stored', () => {
  
    const hashmap = new Hashmap(4000);

    hashmap.set('name', 'bahaa');
    expect(hashmap.storage[3923].head.value).toEqual({ name: 'bahaa' })


})


it('Successfully returns null for a key that does not exist in the hashtable', () => {
  
    const hashmap = new Hashmap(5454);

    hashmap.set('name', 'bahaa');
    expect(hashmap.storage[1]).toBeUndefined()


})

it('Successfully handle a collision within the hashtable', () => {
  
    const hashmap = new Hashmap(5454);

    hashmap.set('abc', 'test');
    hashmap.set('cba', 'test1');
    expect(hashmap.storage[132].head).toBeDefined()
    expect(hashmap.storage[132].head.next).toBeDefined()


})


it('Successfully retrieve a value from a bucket within the hashtable that has a collision', () => {
  
    const hashmap = new Hashmap(5454);

    hashmap.set('abc', 'test');
    hashmap.set('cba', 'test1');
    expect(hashmap.storage[132].head.value).toEqual({ cba: 'test1' })
    expect(hashmap.storage[132].head.next.value).toEqual({ abc: 'test' })


})

it('Successfully hash a key to an in-range value', () => {
  
    const hashmap = new Hashmap(5454);

expect(hashmap.hash('afdadfawp.z,mvzqi,xk7')).toBeLessThan(5454 );

})
  })