import React from 'react';

const Invoice = ({ transaction }) => {  // Accept 'transaction' as a prop
  return (
    <div style={{ border: '1px solid black', padding: '10px', width: '300px', marginBottom: '10px' }}>
      <h2>Invoice</h2>
      <p>Name: {transaction.name}</p>
      <p>Place: {transaction.place}</p>
      <p>Amount: ${transaction.amount}</p>
      <p>Date: {new Date(transaction.date).toLocaleDateString()}</p>
      <p>Description: {transaction.description}</p>
    </div>
  );
};

export default Invoice;
