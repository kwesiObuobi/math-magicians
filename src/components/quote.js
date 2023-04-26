import React, { useState, useEffect } from 'react';
import { API_KEY, API_URL } from '../config/api';
import './quote.css';

const Quote = () => {
  const [quote, setQuote] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    let subscribed = true;
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch(API_URL, {
          method: 'GET',
          headers: {
            'X-Api-Key': API_KEY,
          },
        });
        const result = await response.json();

        if (subscribed) {
          setQuote(result[0]);
        }
      } catch (error) {
        setError(true);
      }
      setLoading(false);
    };

    fetchData();

    return () => {
      subscribed = false;
    };
  }, []);

  if (error) return <div>Something went wrong</div>;

  if (loading) return <div>Loading...</div>;

  return (
    <div className="quote">
      {`"${quote.quote}"`}
    </div>
  );
};

export default Quote;
