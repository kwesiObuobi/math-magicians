import React from 'react';
import PropTypes from 'prop-types';

const Calculator = () => (
  <div>
    <div className="result">
      <span>0</span>
    </div>
    <div className="row">
      <Key name="AC" />
      <Key name="+/-" />
      <Key name="%" />
      <Key name="÷" />
    </div>
  </div>
);

const Key = ({ name }) => <div className="key">{ name }</div>;

Key.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Calculator;
