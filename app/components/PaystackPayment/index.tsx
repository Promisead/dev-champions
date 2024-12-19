import React from 'react';
import axios from 'axios';

const PaystackPayment: React.FC = () => {
  const handlePayment = async () => {
    try {
      const response = await axios.post('/api/paystack', {
        email: 'customer@example.com',
        amount: 20000, // Amount in kobo
      });

      const { authorization_url } = response.data.data;
      window.location.href = authorization_url;
    } catch (error) {
      console.error('Payment error:', error);
    }
  };
 

  return (
    <button className="text-sm font-bold text-blue bg-transparent hover:bg-blue hover:text-white border-2 border-blue rounded-full py-4 px-12 mb-6" onClick={handlePayment}>Pay with Paystack</button>
  );
};

export default PaystackPayment;
