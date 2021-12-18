"use strict";

// Container with somewhere to store value(s)
// Some way of applying a function to value(s)
// Must return value(s) in the same context

let Maybe = {
  map: function (f) {
    return isNothing(this.value) ? Nothing.of() : Just.of(f(this.value));
  },
  of: function (x) {
    let newFunctor = Object.assign({}, Maybe);
    newFunctor.value = x;
    return newFunctor;
  },
};

let Just = {
  map: function (f) {
    return Just.of(f(this.value));
  },
  of: function (x) {
    let newFunctor = Object.assign({}, Just);
    newFunctor.value = x;
    return newFunctor;
  },
  log: function () {
    console.log(`Just ${this.value}`);
  },
};

let Nothing = {
  map: function (f) {
    return Nothing.of();
  },
  of: function (x) {
    return Object.assign({}, Nothing);
  },
  log: function () {
    console.log("Nothing");
  },
};

let input;

//  transform :: Number -> Number
let transform = compose(map(add1), map(add1));
let app2 = compose(log, transform, Maybe.of); // Maybe Number
let app = compose(app2, transform, Maybe.of); // Maybe Number
app(input);

function add1(x) {
  return x + 1;
}

function map(f) {
  return (context) => context.map(f);
}
function log(context) {
  context.log !== undefined ? context.log() : console.log(context);
}

function isNothing(x) {
  return x === null || x === undefined;
}

function compose(...funcs) {
  return (x) => funcs.reduceRight((y, f) => f(y), x);
}
Raw;
start.js;
("use strict");

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
/* function log (context) {
  context.log !== undefined ? context.log() : console.log(context)
} */

/* function isNothing (x) {
  return x === null || x === undefined
} */

/* function compose (...funcs) {
  return x => funcs.reduceRight((y, f) => f(y), x)
} */
