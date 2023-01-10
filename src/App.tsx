import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Checkout from "./pages/Checkout";
import Home from "./pages/Home";
import Store from "./pages/Store";
import './styles.css';

const App = () => {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/store' element={<Store />} />
        <Route path='/checkout' element={<Checkout />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
