// src/tests/BookingForm.test.js
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import BookingForm from '../components/BookingForm';

describe('BookingForm Component', () => {
  test('handles form submission with validation', async () => {
    const onSubmitMock = jest.fn();

    render(<BookingForm onSubmit={onSubmitMock} />);

    fireEvent.change(screen.getByLabelText(/name/i), { target: { value: 'John Doe' } });
    fireEvent.change(screen.getByLabelText(/email/i), { target: { value: 'john@example.com' } });
    fireEvent.change(screen.getByLabelText(/date/i), { target: { value: '2024-12-10' } });
    fireEvent.change(screen.getByLabelText(/time/i), { target: { value: '19:00' } });
    fireEvent.change(screen.getByLabelText(/guests/i), { target: { value: '2' } });

    fireEvent.click(screen.getByText(/submit/i));
    await waitFor(() => screen.getByText(/booking confirmed/i));
    expect(screen.getByText(/booking confirmed/i)).toBeInTheDocument();
  });
});
