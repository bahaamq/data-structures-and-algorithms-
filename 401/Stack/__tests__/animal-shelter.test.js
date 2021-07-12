/* eslint-disable */
const PreAnimal = require('../animal-shelter');

    describe('queuedAnimal Testing', () => {
        let queuedAnimal;
        beforeEach(() => {
          //Initialize an instance befoore each test
           queuedAnimal = new PreAnimal();
        });

        it('Creates an instance of the queuedAnimal', () => {

            //Checking if an instance has been created correctly
            expect(queuedAnimal instanceof PreAnimal).toBeTruthy();
          });


        describe('Eneque', () => {
            it('add items to the top of the queuedAnimal', () => {
                queuedAnimal.enqueue('halapino');
                queuedAnimal.enqueue('tsttst');

              queuedAnimal.enqueue('dog');
              queuedAnimal.enqueue('cat');
              expect(queuedAnimal.dequeue('dog')).toEqual('dog');
            });
          });


          describe('Eneque ', () => {
            it('add items to the top of the queuedAnimal', () => {
                queuedAnimal.enqueue('halapino');
                queuedAnimal.enqueue('tsttst');

                queuedAnimal.enqueue('cat');
              queuedAnimal.enqueue('dog');
   
              expect(queuedAnimal.dequeue('cat')).toEqual('cat');
            });
          });

          describe('dequeue', () => {
            it('check if it return null if the given wasnt dog or cat', () => {
              queuedAnimal.enqueue(1);
              queuedAnimal.enqueue(2);
              queuedAnimal.enqueue(3);
              expect(queuedAnimal.dequeue('dog')).toEqual(null);
            
            });

});
});
