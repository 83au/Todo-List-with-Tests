import { render, screen } from '@testing-library/react';
import App from './App';

describe('App', () => {
  it('should render "Todo List" text as a heading', () => {
    render(<App />);
    const heading = screen.getByRole('heading');
    expect(heading).toHaveTextContent(/Todo List/i);
  });
});
