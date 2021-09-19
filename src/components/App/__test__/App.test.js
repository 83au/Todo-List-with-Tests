import { render, screen } from '@testing-library/react';
import App from '../App';

describe('App', () => {
  beforeEach(() => {
    render(<App />);
  });

  it('should render "Todo List" text as a heading', () => {
    const headingElements = screen.getAllByRole('heading');
    expect(headingElements[0]).toHaveTextContent(/Todo List/i);
  });

  it('should render today\'s date', () => {
    const dateElement = screen.getByText(new Date().toLocaleDateString());
    expect(dateElement).toBeInTheDocument();
  });
});
