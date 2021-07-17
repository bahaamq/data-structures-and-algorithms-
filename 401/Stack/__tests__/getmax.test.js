/* eslint-disable */
const Getmax = require('../getmax.js');

describe('stack Testing', () => {
    let stack;
    beforeEach(() => {
        //Initialize an instance befoore each test
        stack = new Getmax();
    });

    it('return max value', () => {

        //Checking if an instance has been created correctly
        expect(stack instanceof Getmax).toBeTruthy();
    });


    describe('max', () => {
        it('checkmax', () => {
            stack.push(1);
            stack.push(2);

            stack.push(3);

            stack.push(4);

            expect(stack.getmax()).toEqual(4);
        });
    });


    describe('max at  position 1', () => {
        it('checkmax', () => {
            stack.push(5);

            stack.push(1);

            stack.push(2);

            stack.push(3);

            expect(stack.getmax()).toEqual(5);
        });
    });

    describe('max at  the middle ', () => {
        it('checkmax', () => {
            stack.push(20);

            stack.push(40);

            stack.push(60);

            stack.push(15);
            
            stack.push(30);

            stack.push(50);

            expect(stack.getmax()).toEqual(60);
        });
    });

});
