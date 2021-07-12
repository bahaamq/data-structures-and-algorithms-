'use strict';
/* eslint-disable */
const Queue = require('./queue');
class PreAnimal {
    constructor() {
    this.top=null
        this.animals=new Queue
    }
    enqueue(value) {
        value=value.toString().toLowerCase()
if(value==='dog'||value==='cat')
{
this.animals.enqueue(value)
this.testIf=true
}
    }

    dequeue(pref) {
if(this.testIf && pref==='dog' ||pref==='cat')
{
return this.animals.dequeue()

}

return null
}
}

module.exports = PreAnimal;
