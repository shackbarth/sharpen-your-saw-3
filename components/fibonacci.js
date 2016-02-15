import _ from "lodash";
import React from "react";
import getFibonacciArray from "../lib/fibonacci-util";

const Fibonacci = React.createClass({
  propTypes: {
    length: React.PropTypes.number.isRequired
  },

  render: function () {
    const fibonacciArray = getFibonacciArray(this.props.length);
    return (
      <div>
        { _.map(fibonacciArray, (value, i) => (<div key={i}>{value}</div>))}
      </div>
    );
  }
});

export default Fibonacci;
