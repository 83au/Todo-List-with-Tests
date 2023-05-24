import React from 'react';
import { ServicesModel }  from '../services/models';
import { ThemeViewModel } from '../services/viewModels/ThemeViewModel';
import { TodosViewModel } from '../services/viewModels/TodosViewModel';

function ServicesProvider({ children }) {
  return (
    <ServicesModel>
      <ThemeViewModel>
        <TodosViewModel>
          { children }
        </TodosViewModel>
      </ThemeViewModel>
    </ServicesModel>
  )
}

export default ServicesProvider;
