import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ReactGA from 'react-ga4';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import ErrorPage from './components/ErrorPage';
import Home from './components/Home';
import Calculator from './components/Calculator';
import Quote from './components/quote';

ReactGA.initialize('G-EY4G1HZ766');
ReactGA.send({
  hitType: 'pageview',
  page: window.location.pathname,
});

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'calculator',
        element: <Calculator />,
      },
      {
        path: 'quote',
        element: <Quote />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
