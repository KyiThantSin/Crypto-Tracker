import './App.css';
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import { BrowserRouter as Router , Routes, Route, Navigate } from 'react-router-dom';
import SingleCoinInfo from './Components/CoinInfo/SingleCoin';

function App() {
  return (
    <div>
      <Router>
          <Navbar />
          <Routes>
              <Route path='/' element={<Navigate replace to="/home" />}/>
              <Route path='/home' element={ <Home />} />
              <Route path='/home/:id' element={<SingleCoinInfo />} />
          </Routes>
      </Router>   
    </div>
  );
}

export default App;
