import HomePage from "./components/HomePage";
import OrderPage from "./components/OrderPage";
import ShoppingCart from "./components/ShoppingCart";
import { Routes, Route } from "react-router-dom";
import "./index.css";
import { useState } from "react";
import Context from "./context/Context";

function App() {
  const [cart, setCart] = useState<
    {
      id: number;
      title: string;
      author: string;
      cover_url: string;
      pages: string;
    }[]
  >([]);
  return (
    <Context.Provider value={{ cart, setCart }}>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/shoppingcart" element={<ShoppingCart />}></Route>
        <Route path="/order" element={<OrderPage />}></Route>
      </Routes>
    </Context.Provider>
  );
}

export default App;
