import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';
import { ServicesModel } from './services/models';
import ServicesViewModel from './services/viewModels/ServicesViewModel';
import './index.css';

ReactDOM.render(
  <ServicesModel>
    <ServicesViewModel>
      <App />
    </ServicesViewModel>
  </ServicesModel>,
  document.getElementById('root')
);

