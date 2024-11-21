import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './navbar/navbar';
import Home from './home';
import Cart from './cart';
import Footer from './footer/footer';

function App() {
  return (
    <div className="App">
      <Navbar/>
     
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path="/cart" element={<Cart/>} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
