// HomePage.tsx
import React from 'react';
import ProductPage from '../product/ProductPage';
import CartPage from '../cart/CartPage';
import { Routes, Route } from 'react-router-dom';

const HomePage: React.FC = () => {
  return (
    <div>
      {/* Gunakan Routes untuk menentukan rute */}
      <Routes>
        <Route path="/product" element={<ProductPage />} />
        <Route path="/cart" element={<CartPage />} />
        {/* Rute lainnya tetap sama */}
      </Routes>
    </div>
  );
};

export default HomePage;
