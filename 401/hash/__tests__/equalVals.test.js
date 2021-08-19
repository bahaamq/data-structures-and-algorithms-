'use strict';
/* eslint-disable */ 

const equalVals = require('../equalVals.js');
const Node = require('../../treess/node');

const BTree= require("../../treess/binarytree").BinaryTree
const Hashmap = require('../index.js');

describe('make sure to define a hashmap', () => {
  it('some equal values', () => {

let tree;
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
    tree = new BTree(ten);

let tree2;
const h1 = new Node(8);
    const h2 = new Node(14);
    const h3 = new Node(11);
    h1.left=h2
    h1.right=h3

    tree2=new BTree(h1)
   equalVals(tree,tree2)

    expect(equalVals(tree,tree2)).toEqual([ 8, 14, 11 ])
})

it('no equal values', () => {

    let tree;
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
        tree = new BTree(ten);
    
    let tree2;
    const h1 = new Node(66);
        const h2 = new Node(4444);
        const h3 = new Node(3333);
        h1.left=h2
        h1.right=h3
    
        tree2=new BTree(h1)
        equalVals(tree,tree2)
    
        expect(equalVals(tree,tree2)).toEqual([])
    })
    

    it('adding string between numbers', () => {

        let tree;
        const ten = new Node(10);
            const eight = new Node(8);
            const forten = new Node(14);
            const eleven = new Node(11);
            const seventen = new Node(17);
            const six = new Node(6);
            const seven = new Node(7);
            const four = new Node(4);
            const eight2 = new Node("bahaa");
            ten.left = eight;
            ten.right = forten;
            eight.left = six;
            forten.left = eleven;
            forten.right = seventen;
            six.right = seven;
            seven.left = four;
            seven.right = eight2;
            tree = new BTree(ten);
        
        let tree2;
        const h1 = new Node(66);
            const h2 = new Node("bahaa");
            const h3 = new Node(3333);
            h1.left=h2
            h1.right=h3
        
            tree2=new BTree(h1)
            equalVals(tree,tree2)
        
            expect(equalVals(tree,tree2)).toEqual(["bahaa"])
        })
        
})