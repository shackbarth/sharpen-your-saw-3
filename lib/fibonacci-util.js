"use strict";

const _ = require("lodash");

function getFibonacciArray (length) {
  let twoBack = 0;
  let oneBack = 0;
  let current = 1;
  return _.map(_.times(length), (n) => {
    if (n > 0) {
      twoBack = oneBack;
      oneBack = current;
      current = current + twoBack;
    }
    return current;
  });
}

module.exports = getFibonacciArray;
