// SELF

const pipe =
  (...fns) =>
  (x) =>
    fns.reduce((acc, curr) => curr(acc), x);
