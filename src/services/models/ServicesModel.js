import { ThemeModel} from './ThemeModel';
import { ThemeViewModel } from '../viewModels/ThemeViewModel';
import { TodosModel } from './TodosModel';
import TodosViewModel from '../viewModels/TodosViewModel';

function ServicesMount(props) {
  return (
    <ThemeModel>
      <ThemeViewModel>
        <TodosModel>
          <TodosViewModel>
            <Services {...props} />
          </TodosViewModel>
        </TodosModel>
      </ThemeViewModel>
    </ThemeModel>
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
