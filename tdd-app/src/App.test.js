import { fireEvent, getByLabelText, render, screen } from '@testing-library/react';
import App from './App';

describe('Welcome TDD app', function () {
    it('should display button with Submit', function () {
        const { getByText } = render(<App/>);

        const button = getByText('Submit');
        expect(button).toBeDefined();
        expect(button).toBeInTheDocument();
    });

    it('should display text input', function () {
        const { getByLabelText } = render(<App/>);

        // const input = getByLabelText('Enter your name');
        const input = screen.getByLabelText('Enter your name');
        expect(input).toBeInTheDocument();
        expect(input).toBeDefined();
    });

    it('should display "Welcome John Wick!" when entering the name in the input after submit', function () {
        const { getByLabelText, getByText } = render(<App/>);
        const input = getByLabelText('Enter your name');
        const button = getByText('Submit');

        fireEvent.change(input, {target: {value: 'John Wick'}});
        fireEvent.click(button);

        const welcomeText = screen.getByText('Welcome, John Wick!');
        expect(welcomeText).toBeDefined();
        expect(welcomeText).toBeInTheDocument();
    });

    it('should show warning when input is empty', function () {
        
    });
});
