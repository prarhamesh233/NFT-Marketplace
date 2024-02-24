// Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Navbar.css';
import ConnectButton from '../components/ConnectButton.jsx';


const Navbar = () => {
  return (
    <div className='navbar-main'>
    <nav>
    
      <ul>
        <div >
        <li>
          <Link  id='non-head' to="/">Marketplace</Link>
        </li>
        </div>
        <div className='nav-right' >
          {/* <div>
          <li >
          <Link className='non-head' to="/buy">Buy Property</Link>
        </li>
          </div> */}
       <div>
       <li >
          <Link className='non-head' to="/list">List Property</Link>
        </li>
       </div>
        
        <div>
        <li >
          <Link  className='non-head' to="/wallet">Wallet</Link>
        </li>
        </div>
       
       <div>
       <li id="nav-btn" >
        
        <ConnectButton />
        </li>
           
       </div>
        
        </div>
      </ul>
    </nav>
    </div>
  );
};

export default Navbar;
