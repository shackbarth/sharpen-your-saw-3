const assert = require("chai").assert;
const model = require("../lib/backbone-ish-model");

describe("The backbone-ish model", () => {
  beforeEach(() => {
    model.resetAttributes();
  });

  it("Can set an attribute", () => {
    model.setAttribute("age", 58);
    assert.deepEqual(model.attributes, { age: 58 });
  });

  it("Can set two attributes", () => {
    model.setAttribute("weight", 12);
    model.setAttribute("color", "purple");
    assert.deepEqual(model.attributes, { weight: 12, color: "purple" });
  });
});
