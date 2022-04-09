import { useState } from 'react';
import './App.css';
import MainMint from './MainMint'
import Navbar from './NavBar'

function App() {
    const [accounts, setAccounts] = useState([]);

    return (
        <div className="overlay">
            <div className='App'>
                <Navbar accounts={accounts} setAccounts={setAccounts} />
                <MainMint accounts={accounts} setAccounts={setAccounts} />
            </div>
            <div className='Background'></div>
        </div>
    );
}

export default App;
