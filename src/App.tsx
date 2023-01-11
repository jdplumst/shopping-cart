import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Checkout, { CartItem } from "./pages/Checkout";
import Home from "./pages/Home";
import Store from "./pages/Store";
import './styles.css';
import { v4 as uuidv4 } from "uuid";

const App = () => {
  useEffect(() => {
    document.title = "Controllify";
  })

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

  const removeFromCart = (e: React.MouseEvent<HTMLButtonElement>) => {
    const target = e.target as HTMLElement;
    const index = cart.findIndex(product => product.id === target.id);
    setCart(prevCart =>
      [...prevCart.slice(0, index), ...prevCart.slice(index+1)]
    )
  };

  const purchaseItems = () => {
    setCart([]);
  };

  return (
    <BrowserRouter basename="/shopping-cart">
      <Nav />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/store' element={<Store addToCart={addToCart} />} />
        <Route path='/checkout' element={<Checkout cart={cart} removeFromCart={removeFromCart} purchaseItems={purchaseItems} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
