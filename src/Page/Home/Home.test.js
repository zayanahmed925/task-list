import { render, screen } from '@testing-library/react';
import home from './Home';

test('This is react test', () => {
    render(<home />);
    const usernameInputEl = screen.getByPlaceholderText(/Enter your Task/i);
    expect(usernameInputEl).toBeInTheDocument();
});