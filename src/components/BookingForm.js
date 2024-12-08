import React, { useState } from 'react';

function BookingForm({ onSubmit }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [guests, setGuests] = useState('');
  const [errors, setErrors] = useState({});
  const [bookingConfirmed, setBookingConfirmed] = useState(false); // New state for confirmation message

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validate();
    if (Object.keys(newErrors).length === 0) {
      onSubmit({ name, email, date, time, guests });
      setBookingConfirmed(true); // Show confirmation on successful submit
    } else {
      setErrors(newErrors);
      setBookingConfirmed(false); // Hide confirmation if there's an error
    }
  };

  const validate = () => {
    const newErrors = {};
    if (!name) newErrors.name = 'Name is required.';
    if (!email) newErrors.email = 'Email is required.';
    else if (!/\S+@\S+\.\S+/.test(email)) newErrors.email = 'Email is invalid.';
    if (!date) newErrors.date = 'Date is required.';
    if (!time) newErrors.time = 'Time is required.';
    if (!guests || guests < 1) newErrors.guests = 'At least one guest is required.';
    return newErrors;
  };

  return (
    <div>
      {bookingConfirmed && <p className="confirmation">Booking Confirmed!</p>} {/* Display confirmation */}
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          id="name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          aria-required="true"
        />
        {errors.name && <p className="error">{errors.name}</p>}

        <label htmlFor="email">Email:</label>
        <input
          id="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          aria-required="true"
        />
        {errors.email && <p className="error">{errors.email}</p>}

        <label htmlFor="date">Date:</label>
        <input
          id="date"
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          aria-required="true"
        />
        {errors.date && <p className="error">{errors.date}</p>}

        <label htmlFor="time">Time:</label>
        <input
          id="time"
          type="time"
          value={time}
          onChange={(e) => setTime(e.target.value)}
          aria-required="true"
        />
        {errors.time && <p className="error">{errors.time}</p>}

        <label htmlFor="guests">Number of Guests:</label>
        <input
          id="guests"
          type="number"
          value={guests}
          onChange={(e) => setGuests(e.target.value)}
          aria-required="true"
        />
        {errors.guests && <p className="error">{errors.guests}</p>}

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default BookingForm;
