import React from 'react';

import { ethers } from 'ethers';

import './App.css';

function App() {

  const [state, setState] = React.useState({});

  async function connect() {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();

    const myAddress = await signer.getAddress();
    const blocknumber = await provider.getBlockNumber();

    let balance = await provider.getBalance("ethers.eth");
    balance = ethers.utils.formatEther(balance);
    if (myAddress) {
      setState({ active: true, account: myAddress, balance, blocknumber });
    }
  }

  const { active, account, balance, blocknumber } = state;
  const tokenID = 'eth';
  const iconURL = `https://cdn.jsdelivr.net/gh/atomiclabs/cryptocurrency-icons@d5c68edec1f5eaec59ac77ff2b48144679cebca1/128/color/${tokenID}.png`;
  return (
    <section className='container'>
      <header>DeFi</header>
      <button onClick={connect}>{active ? 'Connected' : 'Connect wallet'}</button>
      {active && <span>Id: <b>{account}</b></span>}
      {active && <div className='transaction'>
        <img className='icon' src={iconURL} alt={tokenID} />
        <div className='transaction-details'>
          <span>Block number: <b>{blocknumber}</b></span>
          <span>Balance: <b>{Number(balance)?.toFixed(2)}</b></span>
        </div>
      </div>}
    </section>
  );
}

export default App;
