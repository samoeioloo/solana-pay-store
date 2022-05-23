import React from "react";
import HeadComponent from '../components/Head';

// Constants
const TWITTER_HANDLE = "_buildspace";
const TWITTER_LINK = `https://twitter.com/${TWITTER_HANDLE}`;

const App = () => {
  
  
  return (
    <div className="App">
      <HeadComponent/>
      <div className="container">
        <header className="header-container">
          <p className="header">  🧙 Ollivanders Wand Store 🪄</p>
          <p className="sub-text">Where the wand finds the wizard</p>
        </header>

        <main>
          <iframe src="https://giphy.com/embed/6CovzgyTig7M4" width="480" height="304" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/magic-wand-hifw-6CovzgyTig7M4">via GIPHY</a></p>
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
