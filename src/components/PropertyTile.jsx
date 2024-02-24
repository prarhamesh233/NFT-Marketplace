// components/PropertyTile.js
import React from 'react';
import { Link } from 'react-router-dom';
import "../css/PropertyTile.css"

const PropertyTile = ({ property }) => {
  const { id, name, description, price } = property;

  return (
    <div className="property-tile">
      <Link className='tile-link' to={`/nft/${id}`}> {/* Assuming the route for NFTPage is "/nft/:nftId" */}
        <img src={`https://www.shutterstock.com/image-photo/interior-small-apartment-living-room-600nw-2154108011.jpg`} alt={name} />
        <div className="property-info">
          <h2>{name}</h2>
          <p>{description}</p>
          <p>Price: {price.toLocaleString()} ETH</p>
        </div>
      </Link>
    </div>
  );
};

export default PropertyTile;
