import App from './App';
import { render, fireEvent, screen } from '@testing-library/react'

describe('Writing a welcome screen with TDD', () => {
  it('should render input with placeholder text "Enter name"', () => {
    const { getByPlaceholderText } = render(<App />);

    const nameInput = getByPlaceholderText('Enter name');
    expect(nameInput).toBeDefined();
  });

  it('should render button with submit', function () {
    const { getByText } = render(<App />);

    const submitButton = getByText('Submit');
    expect(submitButton).toBeDefined();
  });

  it('should welcome "Welcome, John" after entering name', () => {
    const { getByText, getByLabelText } = render(<App />);

    const nameInput = getByLabelText(/name/i);
    fireEvent.change(nameInput, { target: { value: 'John' } });

    fireEvent.click(getByText(/submit/i));

    const expectedMessage = "Welcome, John!";
    expect(getByText(expectedMessage)).toBeDefined()
  });
});
