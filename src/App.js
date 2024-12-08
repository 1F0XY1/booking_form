import React, { useState } from 'react';
import './App.css'; // Include the CSS file
import BookingForm from './components/BookingForm';
import BookingConfirmation from './components/BookingConfirmation';

function App() {
  const [bookingSubmitted, setBookingSubmitted] = useState(false);

  const handleBookingSubmit = (bookingData) => {
    console.log('Booking submitted:', bookingData);
    setBookingSubmitted(true);
  };

  return (
    <div className="App">
      <h1>Book a Table</h1>
      {!bookingSubmitted ? (
        <BookingForm onSubmit={handleBookingSubmit} />
      ) : (
        <BookingConfirmation />
      )}
    </div>
  );
}

export default App;
