const assert = require("chai").assert;
const fibonacci = require("../lib/fibonacci-util");

describe("fibonacci array creator", () => {
  it("can make a fibonacci array of length 5", () => {
    assert.deepEqual(fibonacci(5), [1, 1, 2, 3, 5]);
  })
})
