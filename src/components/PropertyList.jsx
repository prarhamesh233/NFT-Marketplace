// components/PropertyList.js
import React, {  useEffect } from 'react';
import { Link } from 'react-router-dom';
import "../css/PropertyList.css"
import PropertyTile from './PropertyTile'; // Assuming you have a PropertyTile component

const PropertyList = () => {
  // Sample data, replace with actual property data fetching logic
  const properties = [
    { id: 1, name: 'House 1', description: 'A beautiful house', price: 50 },
    { id: 2, name: 'Apartment 1', description: 'Modern apartment', price: 10 },
    // Add more properties as needed
  ];

  useEffect(() => {
    // Fetch property data from API or blockchain and update state
    // Example: fetchProperties().then(data => setProperties(data));
  }, []); // Add dependencies based on your fetching logic

  return (
    <div>
      
      <div className='property-List'>
        {properties.map(property => (
          <Link to={`/nft/${property.id}`} key={property.id}>
            <PropertyTile property={property} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default PropertyList;
