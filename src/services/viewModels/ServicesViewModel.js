import React from 'react';
import { ThemeViewModel } from '../services/viewModels/ThemeViewModel';
import { TodosViewModel } from '../services/viewModels/TodosViewModel';

function ServicesViewModel({ children }) {
  return (
      <ThemeViewModel>
        <TodosViewModel>
          { children }
        </TodosViewModel>
      </ThemeViewModel>
  )
}

export default ServicesViewModel;