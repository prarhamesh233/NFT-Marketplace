  // ListingForm.js
  import React, { useState } from 'react';
  import "../css/ListingForm.css"
  // import web3 from './web3';
  // import MyNFTContract from './MyNFT.json';

  const ListingForm = ({ onSubmit }) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [location, setLocation] = useState('');
    const [price, setPrice] = useState('');
    const [image, setImage] = useState(null);

    const handleImageChange = (e) => {
      const file = e.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onloadend = () => {
          setImage(reader.result);
        };
        reader.readAsDataURL(file);
      }
    };

  //   const handleMintNFT = async () => {
  //     try {
  //       const contractAddress = '0xYourNFTContractAddress';
  //       const nftContract = new web3.eth.Contract(MyNFTContract.abi, contractAddress);

  //       const tokenId = await nftContract.methods.mint(web3.eth.defaultAccount).send({ from: web3.eth.defaultAccount });
  //       return tokenId;
  //     } catch (error) {
  //       console.error('Error minting NFT:', error);
  //       return null;
  //     }
  //   };

    const handleCreateListing = async () => {
      try {
      //   const tokenId = await handleMintNFT();

        // Call the onSubmit function with the form data, image, and NFT ID
        onSubmit({
          title,
          description,
          location,
          price: parseFloat(price),
          image,
          // tokenId,
        });

        // Reset form fields after submission
        setTitle('');
        setDescription('');
        setLocation('');
        setPrice('');
        setImage(null);
      } catch (error) {
        console.error('Error creating listing:', error);
      }
    };

    return (
      <div className="listing-form">
        <h2>Listing Form</h2>
        <form>
          <div className='form-group-wrap'>
          <div className="form-group">
            <label>
              
              <input placeholder='Title' type="text" value={title} onChange={(e) => setTitle(e.target.value)} required />
            </label>
          </div>
          <div className="form-group">
            <label>
              
              <input placeholder='Location' type="text" value={location} onChange={(e) => setLocation(e.target.value)} required />
            </label>
          </div>
          </div>
          <div className='form-group-wrap'>
          <div className="form-group">
            <label>
              
              <input type="number" placeholder="Price (ETH)" value={price} onChange={(e) => setPrice(e.target.value)} required />
            </label>
          </div>
          <div className="form-group">
            <label>
              
              <input placeholder="Upload Image"type="file" accept="image/*" onChange={handleImageChange} />
            </label>
          </div>
          </div>
          <div className="form-group">
            <label>
              
              <textarea value={description} placeholder='Description' onChange={(e) => setDescription(e.target.value)} required />
            </label>
          </div>
          <div className="form-group">
            {image && <img src={image} alt="Listing" className="uploaded-image" />}
          </div>
          <div className='btn'>
          <div className="form-group">
              <button type='button' className='list-btn'>Mint NFT</button>
            {/* <button type="button" onClick={handleMintNFT}>Mint NFT</button> */}
          </div>
          <div className="form-group">
            <button type="button" className='list-btn' onClick={handleCreateListing}>Create Listing</button>
          </div>
          </div>
          
        </form>
      </div>
    );
  };

  export default ListingForm;
