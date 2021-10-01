import { render, screen } from '@testing-library/react';
import Todo from '../Todo';

const todoObj = {
  task: 'Mow lawn', 
  completed: false
}

describe('Todo', () => {
  it('should render the task that was given as a child prop', () => {
    render(<Todo todo={todoObj}>{todoObj.task}</Todo>);
    const listItemElement = screen.getByText(/Mow lawn/i);
    expect(listItemElement).toBeInTheDocument();
  });
});