// App.tsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/common/Navbar';
import HomePage from './pages/home/HomePage';
import ProductPage from './pages/product/ProductPage';
import CartPage from './pages/cart/CartPage';

const App: React.FC = () => {
  return (
    <Router>
      <div>
        {/* Tambahkan navigasi menu */}
        <Navbar />

        {/* Gunakan Routes untuk menentukan rute */}
        <Routes>
          <Route path="*" element={<HomePage />} />
          <Route path="/product" element={<ProductPage />} />
          <Route path="/cart" element={<CartPage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
