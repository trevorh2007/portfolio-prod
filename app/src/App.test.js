import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Hello, World!/i);
  expect(linkElement).toBeInTheDocument();
});


git config --global user.email "you@example.com"
  git config --global user.name "Your Name"