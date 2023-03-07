import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import ProductCard from "./components/ProductCard";
import CartPage from "./components/CartPage";
import { OrderConfirmationPage } from "./components/OrderConfirmationPage";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<ProductCard />} />
          <Route path="/cart" element={<CartPage />} />
          
        </Routes>
      </div>
      <Routes>
      <Route path="/orderconfirmation" element={<OrderConfirmationPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;