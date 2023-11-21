import React, { useState, useEffect } from 'react';
import ReactGA from 'react-ga4';
import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import '../styles/calculator.css';
import calculate from '../logic/calculate';

const Calculator = () => {
  const [object, setObject] = useState({
    total: 0,
    next: null,
    operation: null,
  });

  const handleClick = (button) => {
    setObject(calculate(object, button));
  };

  const calculatorBoard = [
    ['AC', '+/-', '%', '÷'],
    ['7', '8', '9', 'x'],
    ['4', '5', '6', '-'],
    ['1', '2', '3', '+'],
    ['0', '.', '='],
  ];

  const location = useLocation();

  useEffect(() => {
    // Analytics
    ReactGA.send({
      hitType: 'pageview',
      page: location.pathname,
      title: 'Calculator page',
    });

    ReactGA.event({
      category: 'Navigation',
      action: 'Open Calculator Page',
      label: 'Calculator',
    });
  }, [location]);

  return (
    <div className="calculator-container">
      <h1 className="calc-header">{'Let\'s do some math!'}</h1>
      <div className="calculator">
        <div className="result">
          <span>
            {object?.total}
            {' '}
            {object?.operation}
            {' '}
            {object?.next}
          </span>
        </div>

        {
          calculatorBoard.map((row) => (
            <div key={`line${row[0]}`} className="row">
              {row.map((button) => (
                <Key
                  key={button}
                  name={button}
                  clickHandle={() => handleClick(button)}
                  tag={button === '0' ? 'zero' : ''}
                />
              ))}
            </div>
          ))
        }
      </div>
    </div>
  );
};

const Key = ({ name, clickHandle, tag }) => <button onClick={clickHandle} type="button" className={`key ${tag}`}>{ name }</button>;

Key.defaultProps = {
  tag: '',
};

Key.propTypes = {
  name: PropTypes.string.isRequired,
  clickHandle: PropTypes.func.isRequired,
  tag: PropTypes.string,
};

export default Calculator;
