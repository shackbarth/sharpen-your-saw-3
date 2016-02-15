## Sharpen Your Saw 3

NorfolkJS February 2016

### Mocha

#### Testing pure functions is easy

The code:
```
function reverseAndFoo (str) {
  return str.split("").reverse().join("") + "Foo";
}
```

The test:
```
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
```

The result: 
```
$ npm test

  The reverseAndFoo function
    ✓ can reverse a string and add foo
    ✓ can reverse the empty string and add foo
    ✓ errors out when passed null

```

#### Testing async code is easy, too

The code:
```
function reverseOnOne (str, callback) {
  setTimeout(() => {
    callback(null, str.split("").reverse().join(""));
  }, 1000)
}
```

The test:
```
describe("The reverseOnOne function", () => {
  it("reverses a string after a while", (done) => {
    reverser.reverseOnOne("Tutankhamun", (err, result) => {
      assert.isNull(err);
      assert.equal(result, "numahknatuT");
      done();
    });
  })
});
```

### The tests get uglier as the code gets uglier

#### Testing for side-effects

The code:
```
const model = {
  attributes: {},

  setAttribute: function (key, value) {
    this.attributes[key] = value;
  },

  resetAttributes: function () {
    this.attributes = {};
  }
}
```

The test:
```
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
```

#### Mocking hairy dependencies

The code:
```
const oracledb = require("oracledb");

function queryOracle (sql, params, callback) {
  oracledb.getConnection((connectionErr, connection) => {
    if (connectionErr) {
      callback(connectionErr);
      return;
    }

    oracledb.executeQuery(sql, params, connection, (queryErr, results) => {
      if (queryErr) {
        callback(queryErr);
        return;
      }

      callback(null, results);
    });
  })
}

module.exports = queryOracle;
```

The test:
```
const assert = require("chai").assert;
const proxyquire = require("proxyquire").noCallThru();

const oracleMock = {
  getConnection: function (callback) {
    callback(null, {});
  },
  executeQuery: function (sql, params, connection, callback) {
    callback(null, { rows: [{ sum: 999 }]});
  }
}

const queryOracle = proxyquire("../lib/hairy-database", {
  oracledb: oracleMock
});

describe("The queryOracle function", () => {
  it("can execute a query", (done) => {
    queryOracle("select 17 + :1 as sum from dual", [7], (err, results) => {
      assert.isNull(err);
      assert.deepEqual(results, { rows: [{ sum: 999 }]});
      done();
    })
  });
});
```
