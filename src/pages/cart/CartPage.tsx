import React, { useState } from 'react';

const CartPage: React.FC = () => {
  const [cartItems, setCartItems] = useState<string[]>([]);

  const addToCart = (product: string) => {
    setCartItems([...cartItems, product]);
  };

  const removeFromCart = (product: string) => {
    const updatedCart = cartItems.filter((item) => item !== product);
    setCartItems(updatedCart);
  };

  return (
    <div>
      <h2>Keranjang Belanja</h2>
      {/* Tampilkan daftar produk yang telah ditambahkan ke keranjang */}
      <ul>
        {cartItems.map((item, index) => (
          <li key={index}>
            {item}
            <button onClick={() => removeFromCart(item)}>Hapus</button>
          </li>
        ))}
      </ul>

      {/* Berikan pengguna kemampuan untuk menambah produk ke keranjang */}
      <button onClick={() => addToCart('Produk Contoh')}>Tambah ke Keranjang</button>
    </div>
  );
};

export default CartPage;
