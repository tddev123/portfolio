import React from 'react';

const ProductCard = ({ product, addToCart }) => {
  return (
    <div className="product-card flex-none bg-white shadow-md rounded-lg p-4">
      <img src={product.image} alt={product.name} className="w-240 h-240 object-cover mb-4" />
      <h2 className='mb-4 font-semibold'>{product.name}</h2>
      <p className='mb-2'>${product.price.toFixed(2)}</p>
      <button className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600"   onClick={() => addToCart(product)}>Add to Cart</button>
    </div>
  );
};

export default ProductCard;
