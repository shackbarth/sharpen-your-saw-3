const model = {
  attributes: {},

  setAttribute: function (key, value) {
    this.attributes[key] = value;
  },

  resetAttributes: function () {
    this.attributes = {};
  }
}

module.exports = model;
