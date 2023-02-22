import { render, screen } from '@testing-library/react';
import ReactLogo from './ReactLogo';

test('renders learn react link', () => {
  render(<ReactLogo />);
  const linkElement = screen.getByText(/learn unit tests/i);
  expect(linkElement).toBeInTheDocument();
});

test('react logo is spinning', () => {
  const tranform = jest.fn()

  render(<ReactLogo />);

  expect(tranform).toHaveBeenCalled();
});
