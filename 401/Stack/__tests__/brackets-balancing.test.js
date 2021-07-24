/* eslint-disable */
const Balanced = require('../brackets-balancing');


describe('barrackets Testing', () => {
    let stackbracket;
    beforeEach(() => {
      //Initialize an instance befoore each test
      stackbracket = new Balanced();
    });

    it('Creates an instance of the bracket balance', () => {

        //Checking if an instance has been created correctly
        expect(stackbracket instanceof Balanced).toBeTruthy();
      });


    describe('check true', () => {


        it('return true when there is a simple brackets expression', () => {
            expect(stackbracket.isBalanced("{}")).toEqual(true);
          });

          it('return true when there is a mid  brackets expression', () => {
            expect(stackbracket.isBalanced("(){}[[]]")).toEqual(true);
          });

          it('return true when there is a brackets expression with extrea letters or anything rather than brackets', () => {
            expect(stackbracket.isBalanced("{}{Code}[Fellows](())efe")).toEqual(true);
          });
    
      });
      describe('check false', () => {


        it('return false when there is a wrong simple brackets expression', () => {
            expect(stackbracket.isBalanced("{)")).toEqual(false);
          });

          it('return true when there is a wrong mid  brackets expression at the end', () => {
            expect(stackbracket.isBalanced("(){}[[]])")).toEqual(false);
          });


          it('return false when there is a wrong mid  brackets expression at the first', () => {
            expect(stackbracket.isBalanced("}(){}[[]]")).toEqual(false);
          });

          it('return false when there are multi mistakes  brackets expression', () => {
            expect(stackbracket.isBalanced(")}(){}[[]]{{})()))(")).toEqual(false);
          });

          it('return true when there is a brackets expression with extrea letters or anything rather than brackets', () => {
            expect(stackbracket.isBalanced("{(})")).toEqual(false);
          });
    
      });





});
