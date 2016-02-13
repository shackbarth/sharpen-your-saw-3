import _ from "lodash";
import React from "react";

const Fibonacci = React.createClass({
  propTypes: {
    length: React.PropTypes.number.isRequired
  },

  render: function () {
    let twoBack = 0;
    let oneBack = 0;
    let current = 1;
    return (
      <div>
        { _.times(this.props.length, (n) => {
          twoBack = oneBack;
          oneBack = current;
          current = current + twoBack;
          return (
            <div key={n}>{current}</div>
          );
        })}
      </div>
    );
  }
});

export default Fibonacci;
