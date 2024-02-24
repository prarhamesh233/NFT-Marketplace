// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home'; // Assuming you have a Home component
import BuyForm from './components/BuyForm';
import ListingForm from './components/ListingForm';
import NFTPage from './components/NFTPage';
import Wallet from './components/Wallet';
import NFTPurchasePage from './components/NFTPurchasePage';
import { useEffect } from 'react';


// import ConnectButton from './components/ConnectButton';

const App = () => {

  
    
  const handleBuyFormSubmit = (formData) => {
    // Your logic for handling the form submission
    console.log('Form Data:', formData);
  };
  return (

    <Router>
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/buy" element={<BuyForm onSubmit={handleBuyFormSubmit} />} />
        <Route path="/list" element={<ListingForm />} />
        <Route path="/nft/:nftId" element={<NFTPage />} />
        {/* <Route path="/wallet" render={() => <Wallet userAddress={userAddress} />} /> */}
        <Route path="/wallet" element={<Wallet></Wallet>}/>
        <Route path="/nftPurchasesReq" element={<NFTPurchasePage></NFTPurchasePage>}/>
        
      </Routes>
      
    </div>
  </Router>
  );
};

export default App;