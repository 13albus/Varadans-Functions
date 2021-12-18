"use strict";

// Container with somewhere to store value(s)
// Some way of applying a function to value(s)
// Must return value(s) in the same context

//  myFunctor :: { value: Number }
let myFunctor = {
  value: 1,
  map: function (f) {
    let newFunctor = Object.assign({}, myFunctor);
    newFunctor.value = f(this.value);
    return newFunctor;
  },
};

let myFunctor2 = {
  value: 2,
  map: function (f) {
    let newFunctor = Object.assign({}, myFunctor);
    newFunctor.value = f(this.value);
    return newFunctor;
  },
};

let mySecondFunctor = [1, 2, 3, 4, 5];

let result = map(add1, myFunctor);
let result2 = map(add1, mySecondFunctor);

console.log(result);
console.log(result2);

function add1(x) {
  return x + 1;
}

function map(f, context) {
  return context.map(f);
}
