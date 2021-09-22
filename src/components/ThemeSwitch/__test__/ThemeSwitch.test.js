import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ServicesProvider }  from '../../../services/models';
import ThemeSwitch from '../ThemeSwitch';

describe('ThemeSwitch', () => {
  beforeEach(() => {
    render(
      <ServicesProvider>
        <ThemeSwitch />
      </ServicesProvider>
    );
  });

  it('renders label text that says "Toggle theme"', () => {
    const labelElement = screen.getByText(/Toggle theme/i);
    expect(labelElement).toBeInTheDocument();
  });

  it('should render a checkbox element', () => {
    const checkboxElement = screen.getByRole('checkbox');
    expect(checkboxElement).toBeInTheDocument();
  });

  it('should initially render label element without the class of "checked"', () => {
    const labelElement = screen.getByText(/Toggle theme/i);
    expect(labelElement).not.toHaveClass('checked');
  });

  it('should add the class "checked" to the label element when checkbox is clicked', () => {
    const checkboxElement = screen.getByRole('checkbox');
    const labelElement = screen.getByText(/Toggle theme/i);

    userEvent.click(checkboxElement);

    expect(labelElement).toHaveClass('checked');
  });
});