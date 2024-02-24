import React from 'react';
import "../css/ConnectButton.css"

const ConnectButton = () => {
    const  setDefaultAccount = null;

    const connectWalletHandler = async () => {
        try {
            if (window.ethereum) {
                const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
                accountChangedHandler(accounts[0]);
            } else {
                console.log("Install MetaMask");
            }
        } catch (error) {
            console.error("Error connecting wallet:");
        }
    };

    const accountChangedHandler = (newAccount) => {
        setDefaultAccount(newAccount);
    };

    return (
        <div>
            <button className='con-btn' onClick={connectWalletHandler}>Connect</button>
            <div className="account">
             
            </div>
        </div>
    );
};

export default ConnectButton;
