import React from "react";
import HeadComponent from '../components/Head';
import { PublicKey } from '@solana/web3.js';
import { useWallet } from '@solana/wallet-adapter-react';
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui';


// Constants
const TWITTER_HANDLE = "_buildspace";
const TWITTER_LINK = `https://twitter.com/${TWITTER_HANDLE}`;

const App = () => {
  // (hook) fetches the users' public key (wallet address) from any wallet we support... subscribes to providers in _app.js
  const { publicKey } = useWallet(); 
  const renderNotConnectedContainer = () => (
    <div>
        <iframe src="https://giphy.com/embed/6CovzgyTig7M4" width="480" height="304" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/magic-wand-hifw-6CovzgyTig7M4">via GIPHY</a></p>

      <div className="button-container">
        <WalletMultiButton className="cta-button connect-wallet-button" />
      </div>    
    </div>
  );
  return (
    <div className="App">
      <div className="container">
        <header className="header-container">
          <p className="header"> 🧙 Ollivanders Wand Store</p>
          <p className="sub-text">Where the wand finds the wizard</p>
        </header>
        <main>
          {/* We only render the connect button if public key doesn't exist */}
          {publicKey ? 'Connected!' : renderNotConnectedContainer()}
        </main>
        <div className="footer-container">
          <img alt="Twitter Logo" className="twitter-logo" src="twitter-logo.svg" />
          <a
            className="footer-text"
            href={TWITTER_LINK}
            target="_blank"
            rel="noreferrer"
          >{`built on @${TWITTER_HANDLE}`}</a>
        </div>
      </div>
    </div>
  );
};

export default App;
