import React from 'react'

export default function Product(props) {
  const { product, onAdd } = props

  return (
    <div className='product'>
      {/* Product Image */}
      <img src={product.imgURL} alt={product.name} />

      {/* Product Name */}
      <h3>{product.name}</h3>

      {/* Product Price */}
      <div>{product.price} ZAR</div>

      {/* Add to cart button */}
      <button onClick={() => onAdd(product)} className='btn'>Add to cart</button>


    </div>
  )
}