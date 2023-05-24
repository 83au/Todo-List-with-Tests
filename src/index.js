import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';
import ServicesProvider from './components/ServicesProvider';
import './index.css';

ReactDOM.render(
  <ServicesProvider>
    <App />
  </ServicesProvider>,
  document.getElementById('root')
);

