import { render, screen } from '@testing-library/react';
import App from './App';

test('renders book a table text', () => {
  render(<App />);

  // Check if the text "Book a Table" is rendered
  const linkElement = screen.getByText(/book a table/i);
  expect(linkElement).toBeInTheDocument();
});
