import logo from './logo.svg';
import './App.css';
import { useEffect } from 'react';
import { Allroute } from './pages/Allroute';
import { Navbar } from './components/Navbar/Navbar';


function App() {
 
   return (
    <div className="App">
      <Navbar />
      <Allroute />
    </div>
  );
}

export default App;
