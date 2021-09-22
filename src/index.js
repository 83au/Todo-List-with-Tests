import React from 'react';
import ReactDOM from 'react-dom';
import { ServicesProvider }  from './services/models';
import App from './components/App/App';
import './index.css';

ReactDOM.render(
  <ServicesProvider>
    <App />
  </ServicesProvider>,
  document.getElementById('root')
);

