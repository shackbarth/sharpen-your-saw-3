const assert = require("chai").assert;
const reverser = require("../lib/reverser");

describe("The reverseAndFoo function", function () {
  it("can reverse a string and add foo", function () {
    assert.equal(reverser.reverseAndFoo("MyString"), "gnirtSyMFoo");
  });

  it("can reverse the empty string and add foo", () => {
    assert.equal(reverser.reverseAndFoo(""), "Foo");
  });

  it("errors out when passed null", () => {
    assert.throws(() => reverser.reverseAndFoo(null));
  });
});

describe("The reverseOnOne function", () => {
  it("reverses a string after a while", (done) => {
    reverser.reverseOnOne("Tutankhamun", (err, result) => {
      assert.isNull(err);
      assert.equal(result, "numahknatuT");
      done();
    });
  })
});
