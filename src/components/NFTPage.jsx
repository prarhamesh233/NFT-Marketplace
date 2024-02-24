// components/NFTPage.js
import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import "../css/NFTPage.css"


const NFTPage = () => {
  // Sample state for the NFT details
  const [nftDetails, setNftDetails] = useState({
    id: 1,
    name: 'NFT #1',
    description: 'This is an amazing NFT!',
    price: 50,
    owner: '0x123abc', // Ethereum address of the owner
    seller: '0x456def', // Ethereum address of the seller
  });

  // Sample state for the current user's Ethereum address
  const [currAddress, setCurrAddress] = useState('0x789ghi'); // Replace with actual user's address

  // Sample state for displaying messages
  const [message, setMessage] = useState('');

  // Sample function for buying the NFT
  const buyNFT = () => {
    // Replace this with your actual logic for buying the NFT
    setMessage('Congratulations! You have successfully bought the NFT.');
  };

  // Fetch NFT details based on the ID from the route parameters
  const { nftId } = useParams();

  useEffect(() => {
    // Replace this with your actual logic for fetching NFT details
    // fetchNftDetails(nftId).then(data => setNftDetails(data));
  }, [nftId]); // Add dependencies based on your fetching logic

  return (
    <div>
      
      <div className='page-div'>
        <div>
        <img className="page-img" src={`https://www.shutterstock.com/image-photo/interior-small-apartment-living-room-600nw-2154108011.jpg`} alt={nftDetails.name} />
        </div>
        
        <div className='page-info'>
          <h2>{nftDetails.name}</h2>
          <p>{nftDetails.description}</p>
          <p>Price: {nftDetails.price} ETH</p>
          <p>Owner: {nftDetails.owner}</p>
          <p>Seller: {nftDetails.seller}</p>
          {currAddress !== nftDetails.owner && currAddress !== nftDetails.seller ? (
            <Link to="/buy"><button className='nft-btn'>Buy NFT</button></Link>
          ) : (
            <p>You are the owner of this NFT</p>
          )}
          <p>{message}</p>
        </div>
      </div>
    </div>
  );
};

export default NFTPage;
