import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'
import ReactLogo from './ReactLogo';

test('renders learn react link', () => {
  render(<ReactLogo />);
  const linkElement = screen.getByText(/learn unit tests/i);
  expect(linkElement).toBeInTheDocument();
});

test('react logo has been rendered', () => {
  render(<ReactLogo />);
  const reactLogo = screen.getByRole('img')
  expect(reactLogo).toBeInTheDocument();
});
