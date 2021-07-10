const Queue = require('../queue');
/* eslint-disable */
    describe('Queue Testing', () => {
        let queue;
        beforeEach(() => {
          //Initialize an instance befoore each test
           queue = new Queue();
        });

        it('Creates an instance of the Queue', () => {

            //Checking if an instance has been created correctly
            expect(queue instanceof Queue).toBeTruthy();
          });



        
          describe('peek', () => {
            //Peek Method returns the top of the queue
          it('return null on empty queue', () => {
            expect(queue.peek()).toBeNull();
          });
          it('return first item added on the queue', () => {
      
            queue.enqueue(1);
            expect(queue.peek()).toEqual(1);
            queue.enqueue(2);
            expect(queue.peek()).toEqual(1);
          });
          it('does not alter the queue', () => {
            queue.enqueue(1);
            expect(queue.peek()).toEqual(1);
            expect(queue.peek()).toEqual(1);
          });
          it('point to the correct item after dequeue() on the queue', () => {
            queue.enqueue(1);
            queue.enqueue(2);
            expect(queue.dequeue()).toEqual(1);
            expect(queue.peek()).toEqual(2);
          });
        });


        describe('Eneque', () => {
            it('add items to the top of the queue', () => {
              queue.enqueue(1);
              queue.enqueue(2);
              queue.enqueue(3);
              expect(queue.peek()).toEqual(1);
            });
          });

          describe('dequeue', () => {
            it('add items to the top of the queue', () => {
              queue.enqueue(1);
              queue.enqueue(2);
              queue.enqueue(3);
              expect(queue.dequeue()).toEqual(1);
              expect(queue.dequeue()).toEqual(2);
              expect(queue.dequeue()).toEqual(3);
              expect(queue.peek()).toBeNull();
            });

});
});

