"use strict";

// Container with somewhere to store value(s)
// Some way of applying a function to value(s)
// Must return value(s) in the same context

//  myFunctor :: { value: Number }
let myFunctor = {
  map: function (f) {
    return myFunctor.of(f(this.value));
  },
  of: function (x) {
    let newFunctor = Object.assign({}, myFunctor);
    newFunctor.value = x;
    return newFunctor;
  },
};

let myFirstFunctor = myFunctor.of(41);
let mySecondFunctor = Array.of(1, 2, 3, 4, 5);

let result = map(add1, map(add1, myFirstFunctor));
let result2 = map(add1, mySecondFunctor);

console.log(result);
console.log(result2);

function add1(x) {
  return x + 1;
}

function map(f, context) {
  return context.map(f);
}
