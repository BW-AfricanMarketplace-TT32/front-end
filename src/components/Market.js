import React from 'react'
import Navbar from './Navbar'
import Cart from '../components/Cart.js'
import Product from '../components/Product.js'
import '../assets/stylesheets/market.css'



export default function Market(props) {
  const { products } = props

  return (
    <>
      <Navbar />

      <main className='market-container row'>

        <div className='block col-2'>
          <h1>Market</h1>

          <div className='row'>
            {products.map((product) => (
              <Product key={products.id} product={product}></Product>
            ))}
          </div>
        </div>

        <Cart />
      </main>
    </>
  )
}