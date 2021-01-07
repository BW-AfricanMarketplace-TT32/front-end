import React from 'react'

export default function Product(props) {
  const { product } = props

  return (
    <div className='product'>
      <img src={product.imgURL} alt={product.name} />
      <h3>{product.name}</h3>
      <div>{product.price} ZAR</div>
      <button className='btn'>Add to cart</button>
    </div>
  )
}