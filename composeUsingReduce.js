// SELF

const compose =
  (...fns) =>
  (x) =>
    fns.reduceRight((acc, curr) => curr(acc), x);
