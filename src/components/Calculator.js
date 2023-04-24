import React from 'react';
import PropTypes from 'prop-types';
import './calculator.css';

const Calculator = () => (
  <div className="calculator">
    <div className="result">
      <span>0</span>
    </div>
    <div className="row">
      <Key name="AC" />
      <Key name="+/-" />
      <Key name="%" />
      <Key name="÷" tag="yellow" />
    </div>
    <div className="row">
      <Key name="7" />
      <Key name="8" />
      <Key name="9" />
      <Key name="X" tag="yellow" />
    </div>
    <div className="row">
      <Key name="4" />
      <Key name="5" />
      <Key name="6" />
      <Key name="-" tag="yellow" />
    </div>
    <div className="row">
      <Key name="1" />
      <Key name="2" />
      <Key name="3" />
      <Key name="+" tag="yellow" />
    </div>
    <div className="row">
      <Key name="0" tag="zero" />
      <Key name="." />
      <Key name="=" tag="yellow" />
    </div>
  </div>
);

const Key = ({ name, tag }) => <div className={`key ${tag}`}>{ name }</div>;

Key.defaultProps = {
  tag: '',
};

Key.propTypes = {
  name: PropTypes.string.isRequired,
  tag: PropTypes.string,
};

export default Calculator;
