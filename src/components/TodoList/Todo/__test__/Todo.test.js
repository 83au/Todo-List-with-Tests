import { render, screen } from '@testing-library/react';
import Todo from '../Todo';

const todoObj = {
  task: 'Mow lawn', 
  completed: false
}

describe('Todo', () => {
  beforeEach(() => {
    render(<Todo todo={todoObj}>{todoObj.task}</Todo>);
  });

  it('should render the task that was given as a child prop', () => {
    const listItemElement = screen.getByText(/Mow lawn/i);
    expect(listItemElement).toBeInTheDocument();
  });
});