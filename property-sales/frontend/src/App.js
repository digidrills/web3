import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Body from './components/Body';
// import Wallet from './components/wallet';
import './components/login.css';


function App() {
  return (
    <BrowserRouter>
    <div>
      {/* <Wallet/> */}
      <Routes>
        <Route path="/" element={<Body />} /> 
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
