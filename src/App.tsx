import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Checkout from "./pages/Checkout";
import Home from "./pages/Home";
import Store, { CartItem } from "./pages/Store";
import './styles.css';
import { v4 as uuidv4 } from "uuid";



const App = () => {
  const [cart, setCart] = useState<CartItem[]>([]);

  const addToCart = () => {
    setCart([...cart, {
      id: uuidv4(),
      name: 'hi',
      price: 54,
      src: 'bye',
    }])
  };

  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/store' element={<Store cart={cart} addToCart={addToCart} />} />
        <Route path='/checkout' element={<Checkout />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
