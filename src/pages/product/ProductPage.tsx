import React from 'react';

const ProductPage: React.FC = () => {
  // Implementasi halaman produk di sini
  return (
    <div>
      <h2>Nama Produk</h2>
      <img src="gambar_produk.jpg" alt="Gambar Produk" />
      <p>Deskripsi Produk</p>
      <p>Harga: $99.99</p>
      {/* Tambahkan opsi atau atribut lainnya sesuai kebutuhan */}
    </div>
  );
};

export default ProductPage;
