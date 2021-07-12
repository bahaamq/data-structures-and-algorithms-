
/* eslint-disable */
const Pseudoqueue = require('../pseudoqueue');

    describe('Pseudoqueue Testing', () => {
        let stackqueue;
        beforeEach(() => {
          //Initialize an instance befoore each test
          stackqueue = new Pseudoqueue();
        });

        it('Creates an instance of the Pseudoqueue', () => {

            //Checking if an instance has been created correctly
            expect(stackqueue instanceof Pseudoqueue).toBeTruthy();
          });



        describe('Eneque', () => {
            it('add items to the top of the Pseudoqueue', () => {
                stackqueue.enqueue(1);
                stackqueue.enqueue(2);
                stackqueue.enqueue(3);
              expect(stackqueue.dequeue()).toEqual(1);

            //   expect(Pseudoqueue.peek()).toEqual(1);
            });
          });

          describe('dequeue', () => {
            it('add items to the top of the Pseudoqueue', () => {
                stackqueue.enqueue(1);
                stackqueue.enqueue(2);
                stackqueue.enqueue(3);
              expect(stackqueue.dequeue()).toEqual(1);
              expect(stackqueue.dequeue()).toEqual(2);
              expect(stackqueue.dequeue()).toEqual(3);
            //   expect(Pseudoqueue.peek()).toBeNull();
            });

});


describe('Expected Failure', () => {
    it('add items to the top of the Pseudoqueue check falsy value', () => {
        stackqueue.enqueue(1);
        stackqueue.enqueue(2);
        stackqueue.enqueue(3);
      expect(stackqueue.dequeue()).not.toEqual(3);

    //   expect(Pseudoqueue.peek()).toEqual(1);
    });
  });
});

