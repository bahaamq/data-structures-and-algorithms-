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


  //hash2 repeatedwords

  describe('can successfuly return first repeted word', () => {
    it('first test case ignore "" and ignore casesensitive', () => {
  //Static function
        let data= Hashmap.repeatedWord("It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair, we had everything before us, we had nothing before us, we were all going direct to Heaven, we were all going direct the other way – in short, the period was so far like the present period, that some of its noisiest authorities insisted on its being received, for good or for evil, in the superlative degree of comparison only...")
        
        
        expect(data).toBe("it")
  })


  it('sec test case no special cases ', () => {
    //Static function
          let data= Hashmap.repeatedWord("Once upon a time, there was a brave princess who...")
          
          
          expect(data).toBe("a")
    })


    it('third test case  ', () => {
        //Static function
              let data= Hashmap.repeatedWord("It was a queer, sultry summer, the summer they electrocuted the Rosenbergs, and I didn’t know what I was doing in New York...")
              
              
              expect(data).toBe("summer")
        })

        it('adding a random string with  multi dublicates', () => {
            //Static function
                  let data= Hashmap.repeatedWord("a a b b cc")
                  
                  
                  expect(data).toBe("a")
            })


        it('adding a random string without dublicate', () => {
            //Static function
                  let data= Hashmap.repeatedWord("abc ab")
                  
                  
                  expect(data).toBe("no Repeted words")
            })

// Since contains function look for the key and the key could have multi values 
        it('making sure it doesnt return words that differs but have the same asci code', () => {
            //Static function
                  let data= Hashmap.repeatedWord("abc cba")
                  
                  
                  expect(data).toBe("no Repeted words")
            })
  })
  