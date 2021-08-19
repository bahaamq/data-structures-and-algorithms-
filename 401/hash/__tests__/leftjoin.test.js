'use strict';
/* eslint-disable */ 

const leftjoin = require('../leftjoin.js');
const Node = require('../../treess/node');

const Hashmap = require('../index.js');

describe('Differnt values , equal keys , differnt length ', () => {


    it('empty hashtables', () => {

        const hashmap = new Hashmap(4000);
    const hashmap2 = new Hashmap(4000);
    
    expect(leftjoin(hashmap,hashmap2)).toEqual([])
    
    })
    

    it('same table , same length , differnt values, Same order ', () => {

        const hashmap = new Hashmap(4000);
    const hashmap2 = new Hashmap(4000);
    
    hashmap.setWithouthash('name', 'bahaa');
    hashmap.setWithouthash('age', '24');
    hashmap.setWithouthash('topic', 'hashmap');
    
    
    hashmap2.setWithouthash('name', 'mhmd');
    hashmap2.setWithouthash('age', '26');
    hashmap2.setWithouthash('topic', 'OS');
    expect(leftjoin(hashmap,hashmap2)).toEqual([ '[name,bahaa,mhmd]', '[age,24,26]', '[topic,hashmap,OS]' ])
    
    })

    it('same table , same length , differnt values, DIFFERENT ORDER  order ', () => {

        const hashmap = new Hashmap(4000);
    const hashmap2 = new Hashmap(4000);
    
    hashmap.setWithouthash('name', 'bahaa');
    hashmap.setWithouthash('age', '24');
    hashmap.setWithouthash('topic', 'hashmap');
    
    hashmap2.setWithouthash('topic', 'OS');
    hashmap2.setWithouthash('age', '26');
    hashmap2.setWithouthash('name', 'mhmd');

    expect(leftjoin(hashmap,hashmap2)).toEqual([ '[name,bahaa,mhmd]', '[age,24,26]', '[topic,hashmap,OS]' ])
    
    })


  it('Differnt values , equal keys , differnt length', () => {

    const hashmap = new Hashmap(4000);
const hashmap2 = new Hashmap(4000);

hashmap.setWithouthash('name', 'bahaa');
hashmap.setWithouthash('age', '24');
hashmap.setWithouthash('topic', 'hashmap');


hashmap2.setWithouthash('topic', 'Math');
hashmap2.setWithouthash('name', 'mhmd');

expect(leftjoin(hashmap,hashmap2)).toEqual([ '[name,bahaa,mhmd]', '[age,24,NULL]', '[topic,hashmap,Math]' ])

})
        
})