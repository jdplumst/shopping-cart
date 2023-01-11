import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Checkout, { CartItem } from "./pages/Checkout";
import Home from "./pages/Home";
import Store from "./pages/Store";
import './styles.css';
import { v4 as uuidv4 } from "uuid";

const App = () => {
  const [cart, setCart] = useState<CartItem[]>([]);

  const addToCart = (name: string, price: number, src: string) => {
    setCart(prevCart => 
      [...prevCart, {
      id: uuidv4(),
      name: name,
      price: price,
      src: src,
      }]
    )
  };

  // useEffect(() => {
  //   console.log(cart);
  // })

  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/store' element={<Store addToCart={addToCart} />} />
        <Route path='/checkout' element={<Checkout cart={cart} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
