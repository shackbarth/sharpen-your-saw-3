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
