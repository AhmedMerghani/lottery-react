import './App.css';
import lottery from './lottery';
import { useState, useEffect } from 'react';

function App() {
  const [manager, setManager] = useState('');

  useEffect(() => {
    async function getManagerAccount() {
      const managerAddress = await lottery.methods.manager().call();
      setManager(managerAddress);
    }
    getManagerAccount();
  }, []);

  return (
    <div>
      <h2>Lottery Contract</h2>
      <p>This contract is managed by {manager}</p>
    </div>
  );
}

export default App;