// BuyForm.js
import React, { useState } from 'react';
import "../css/BuyForm.css"
import { useNavigate } from 'react-router-dom';

const BuyForm = ({ onSubmit }) => {
  const navigate = useNavigate();
  const [buyerAddress, setBuyerAddress] = useState('');
  const [email, setEmail] = useState('');
  const [paymentAmount, setPaymentAmount] = useState('');
  // const [transactionHash, setTransactionHash] = useState('');
  const [additionalNotes, setAdditionalNotes] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate form data (you can add more validation if needed)

    // Call the onSubmit function with the form data
    onSubmit({
      buyerAddress,
      email,
      paymentAmount: parseFloat(paymentAmount),
      // transactionHash,
      additionalNotes,
    });

    // Reset form fields after submission
    setBuyerAddress('');
    setEmail('');
    setPaymentAmount('');
    // setTransactionHash('');
    setAdditionalNotes('');
    navigate('/nftPurchasesReq');
  };

  return (
    <div className="buy-form">
      <h2>Buy NFT</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>
            
            <input type="text" placeholder='Buyer Address' value={buyerAddress} onChange={(e) => setBuyerAddress(e.target.value)} required />
          </label>
        </div>
        <div className="form-group">
          <label>
             
            <input type="email" placeholder='email' value={email} onChange={(e) => setEmail(e.target.value)} required />
          </label>
        </div>
       
        <div className="form-group">
          <label>
           
            <input type="number" placeholder=' Payment Amount (ETH)' value={paymentAmount} onChange={(e) => setPaymentAmount(e.target.value)} required />
          </label>
        </div>
        {/* <div className="form-group">
          <label>
            Transaction Hash:
            <input type="text" value={transactionHash} onChange={(e) => setTransactionHash(e.target.value)} />
          </label>
        </div> */}
        <div className="form-group">
          <label>
            
            <textarea value={additionalNotes} placeholder='Additional Notes' onChange={(e) => setAdditionalNotes(e.target.value)} />
          </label>
        </div>
        <div className="form-group">
          
          <button className='buy-btn' type="submit">Submit Buy Request</button>
        </div>
      </form>
    </div>
  );
};

export default BuyForm;
