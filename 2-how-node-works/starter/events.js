const EventEmitter = require('events');

// ES5
//const myEmitter = new EventEmitter();
//
//myEmitter.on('newSale', () => {
//    console.log('There was a new sale');
//});
//
//myEmitter.on('newSale', () => {
//    console.log('customer name: jonas');
//});
//
//myEmitter.on('newSale', stock => {
//    console.log(`${stock} items left in stock`)
//});
//
//myEmitter.emit('newSale', 9);

// ES6 - Classes
class Sales extends EventEmitter {
    constructor(){
        super()
    }
}

const myEmitter = new Sales();

myEmitter.on('newSale', () => {
    console.log('There was a new sale');
});

myEmitter.on('newSale', () => {
    console.log('customer name: jonas');
});

myEmitter.on('newSale', stock => {
    console.log(`${stock} items left in stock`)
});

myEmitter.emit('newSale', 9);

////////////////////

const server = http.createServer();

// see final file