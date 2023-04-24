import React from 'react';
import PropTypes from 'prop-types';

const Calculator = () => (
  <div className="calculator">
    <div className="result">
      <span>0</span>
    </div>
    <div className="row">
      <Key name="AC" />
      <Key name="+/-" />
      <Key name="%" />
      <Key name="÷" className="yellow" />
    </div>
    <div className="row">
      <Key name="7" />
      <Key name="8" />
      <Key name="9" />
      <Key name="X" className="yellow" />
    </div>
    <div className="row">
      <Key name="4" />
      <Key name="5" />
      <Key name="6" />
      <Key name="-" className="yellow" />
    </div>
    <div className="row">
      <Key name="1" />
      <Key name="2" />
      <Key name="3" />
      <Key name="+" className="yellow" />
    </div>
    <div className="row">
      <Key name="0" className="zero" />
      <Key name="." />
      <Key name="=" className="yellow" />
    </div>
  </div>
);

const Key = ({ name }) => <div className="key">{ name }</div>;

Key.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Calculator;
