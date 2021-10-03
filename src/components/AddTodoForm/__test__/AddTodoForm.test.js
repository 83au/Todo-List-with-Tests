import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ServicesProvider }  from '../../../services/models';
import AddTodoForm from '../AddTodoForm';

describe('AddTodoForm', () => {
  beforeEach(() => {
    render(
      <ServicesProvider>
        <AddTodoForm />
      </ServicesProvider>
    );
  });

  it('should render input element', () => {
    const inputElement = screen.getByPlaceholderText('Some task');
    expect(inputElement).toBeInTheDocument();
  });

  it('should render text that was typed into input', () => {
    const inputElement = screen.getByPlaceholderText('Some task');
    userEvent.type(inputElement, 'learn react');
    expect(inputElement).toHaveValue('learn react');
  });

  it('should clear input when button is clicked', () => {
    const inputElement = screen.getByPlaceholderText('Some task');
    const buttonElement = screen.getByRole('button');

    userEvent.type(inputElement, 'learn react');
    expect(inputElement).toHaveValue('learn react');
    userEvent.click(buttonElement);

    expect(inputElement).toHaveValue('');
  })
});