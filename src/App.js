import './App.css';
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import { BrowserRouter as Router , Routes, Route, Navigate } from 'react-router-dom';
import SingleCoinInfo from './Components/CoinInfo/SingleCoin';
import NotFound from './Components/NotFound';

function App() {
  return (
    <div>
      <Router>
          <Navbar/>
          <Routes>
              <Route path='/' element={<Navigate replace to="/home" />}/>
              <Route path='/home' element={ <Home />} />
              <Route path='/home/:id' element={<SingleCoinInfo />} />
              <Route path="*" element={<NotFound />} />
          </Routes>
      </Router>   
    </div>
  );
}

export default App;
