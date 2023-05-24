import { ThemeModel} from './ThemeModel';
import { TodosModel } from './TodosModel';

export function ServicesModel({ children }) {
  return (
    <ThemeModel>
      <TodosModel>
        {children}
      </TodosModel>
    </ThemeModel>
  )
}

