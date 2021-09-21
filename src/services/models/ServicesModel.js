import { ThemeModelProvider } from './ThemeModel';
import { ThemeViewModelProvider } from '../viewModels/ThemeViewModel';
import { TodosModelProvider } from './TodosModel';
import TodosViewModelProvider from '../viewModels/TodosViewModel';

function ServicesMount(props) {
  const { ...services } = props;
  return (
    <ThemeModelProvider>
      <ThemeViewModelProvider>
        <TodosModelProvider>
          <TodosViewModelProvider>
            <Services {...services} />
          </TodosViewModelProvider>
        </TodosModelProvider>
      </ThemeViewModelProvider>
    </ThemeModelProvider>
  )
}

function Services({ children }) {
  return (
    <>
      {children}
    </>
  )
}


export default ServicesMount;
