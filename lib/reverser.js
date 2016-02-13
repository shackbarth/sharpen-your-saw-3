function reverseAndFoo (str) {
  return str.split("").reverse().join("") + "Foo";
}

function reverseOnOne (str, callback) {
  setTimeout(() => {
    callback(null, str.split("").reverse().join(""));
  }, 1000)
}

exports.reverseAndFoo = reverseAndFoo;
exports.reverseOnOne = reverseOnOne;
