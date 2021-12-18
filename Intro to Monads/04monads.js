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
  mjoin: function () {
    return this.value;
  },
  chain: function (f) {
    return this.map(f).mjoin();
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
  mjoin: function () {
    return this.value;
  },
  chain: function (f) {
    return this.map(f).mjoin();
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
  mjoin: function () {
    return Nothing.of();
  },
  chain: function (f) {
    return this.map(f).mjoin();
  },
};

let input = 5;
//  Chain :: M a -> (a -> M b) -> M b
//  transform :: Number -> Just Number
let transform = compose(Just.of, add1, add1);
let app = compose(log, chain(transform), chain(transform), Maybe.of);
app(input);

Maybe.of(input).chain(transform).chain(transform).log();

function add1(x) {
  return x + 1;
}

function map(f) {
  return (context) => context.map(f);
}
function mjoin(context) {
  return context.mjoin();
}
function chain(f) {
  return compose(mjoin, map(f));
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
