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
