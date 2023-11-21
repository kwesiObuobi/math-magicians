import React, { useState, useEffect } from 'react';
import ReactGA from 'react-ga4';
import { API_KEY, API_URL } from '../config/api';
import '../styles/quote.css';

const Quote = () => {
  const [quote, setQuote] = useState('');
  const [loading, setLoading] = useState(true);
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
          setLoading(false);
        }
      } catch (error) {
        setError(true);
      }
    };

    fetchData();

    // Analytics
    ReactGA.send({
      hitType: 'pageview',
      page: window.location.pathname,
    });

    return () => {
      subscribed = false;
    };
  }, []);

  if (error) return <div className="quote">Something went wrong</div>;

  if (loading) return <div className="quote">Loading...</div>;

  return (
    <div className="quote">
      {`"${quote.quote}"`}
    </div>
  );
};

export default Quote;
