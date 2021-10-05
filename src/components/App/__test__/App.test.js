import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ServicesProvider }  from '../../../services/models';
import App from '../App';

const addTodos = tasks => {
  const inputElement = screen.getByPlaceholderText(/some task/i);
  const submitButton = screen.getByText(/\+/); 

  tasks.forEach(task => {
    userEvent.type(inputElement, task);
    userEvent.click(submitButton);
  });
};

describe('App', () => {
  beforeEach(() => {
    render(
      <ServicesProvider>
        <App />
      </ServicesProvider>
    );
  });

  it('should render "Todo List" text as a heading', () => {
    const headingElements = screen.getAllByRole('heading');
    expect(headingElements[0]).toHaveTextContent(/Todo List/i);
  });

  it('should render today\'s date', () => {
    const dateElement = screen.getByText(new Date().toLocaleDateString());
    expect(dateElement).toBeInTheDocument();
  });

  it('should add todo to list when user types task in the input and then presses button', () => {
    addTodos(['learn react']);
    const todoElement = screen.getByText(/learn react/i);
    expect(todoElement).toBeInTheDocument();
  });

  it('should render all todos that are added', () => {
    addTodos(['do this', 'do that', 'do something else']);
    const todoElements = screen.getAllByText(/^do/i);
    expect(todoElements).toHaveLength(3);
  })
});
