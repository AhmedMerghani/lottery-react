import './App.css';
import lottery from './lottery';
import web3 from './web3'
import { useState, useEffect } from 'react';

function App() {
  const [manager, setManager] = useState('');
  const [players, setPlayers] = useState('');
  const [balance, setBalance] = useState('');

  useEffect(() => {
    async function getManagerAccount() {
      const managerAddress = await lottery.methods.manager().call();
      const players = await lottery.methods.getPlayers().call();
      const balance = await web3.eth.getBalance(lottery.options.address);

      setManager(managerAddress);
      setPlayers(players);
      setBalance(balance);
    }
    getManagerAccount();
  }, []);

  return (
    <div>
      <h2>Lottery Contract</h2>
      <p>This contract is managed by {manager}.
        There are currently {players.length} people entered competing to win {web3.utils.fromWei(balance, 'ether')} ether!
      </p>
    </div>
  );
}

export default App;