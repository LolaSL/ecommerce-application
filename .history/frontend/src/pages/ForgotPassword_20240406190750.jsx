import React, { useState } from 'react';
import axios from 'axios';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');

  const handleResetPassword = async () => {
    try {
      // Replace with your backend endpoint
      const response = await axios.post('/api/users/forgot-password', { email });
      if (response.data.success) {
        alert('Please check your email to reset your password.');
      }
    } catch (error) {
      console.error('Error sending password reset email', error);
      alert('An error occurred while attempting to reset your password.');
    }
  };

  return (
    <div>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter your email"
      />
      <button onClick={handleResetPassword}>Send Reset Link</button>
    </div>
  );
};

export default ForgotPassword;