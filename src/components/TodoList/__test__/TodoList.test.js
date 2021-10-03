import { render, screen } from '@testing-library/react';
import { ServicesProvider }  from '../../../services/models';
import TodoList from '../TodoList';

describe('TodoList', () => {
  beforeEach(() => {
    render(
      <ServicesProvider>
        <TodoList />
      </ServicesProvider>
    );
  });

  it('should render initial todos', () => {
    const todoElements = screen.getAllByRole('listitem');
    expect(todoElements).toHaveLength(3);
  });
});
