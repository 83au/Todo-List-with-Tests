import React from 'react';
import ReactDOM from 'react-dom';
import ThemeContextProvider from './contexts/Theme.context';
import TodosContextProvider from './contexts/Todos.context';
import App from './components/App/App';
import './index.css';

ReactDOM.render(
  <ThemeContextProvider>
    <TodosContextProvider>
      <App />
    </TodosContextProvider>
  </ThemeContextProvider>,
  document.getElementById('root')
);

