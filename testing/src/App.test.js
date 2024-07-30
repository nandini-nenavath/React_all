import { render, screen } from '@testing-library/react';
import App from './App';
import '@testing-library/jest-dom/extend-expect';
import FormComponent from './ind';

test('renders learn react link', () => {
  render(<FormComponent />);
  const linkElement = screen.getByText(/Form/i)
  expect(linkElement).toBeInTheDocument()
});
