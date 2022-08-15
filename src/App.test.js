import { render, screen } from '@testing-library/react';
import App from './App';

test('This is react test', () => {
  render(<App />);
  const title = screen.getByTestId("mytestid");
  expect(title).toBeInTheDocument();
});
