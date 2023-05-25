import React from 'react';
import { ThemeViewModel } from './ThemeViewModel';
import { TodosViewModel } from './TodosViewModel';

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