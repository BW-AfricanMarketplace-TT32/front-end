import React from 'react'
import Navbar from './Navbar'
import Cart from '../components/Cart.js'
import Product from '../components/Product.js'
import '../assets/stylesheets/market.css'



export default function Market(props) {
  const { products, cartItems, onAdd, onDelete, countCartItems } = props

  return (
    <>
      <Navbar />

      <main className='market-container row'>

        <div className='block col-2'>
          <h1>Market</h1>

          <div className='row'>
            {products.map((product) => (
              <Product onDelete={onDelete} onAdd={onAdd} key={products.id} product={product}></Product>
            ))}
          </div>
        </div>

        {/* passing cartItems from props - Market received from App.js */}
        <Cart
          onDelete={onDelete}
          onAdd={onAdd}
          cartItems={cartItems}
          countCartItems={countCartItems}
        />
      </main>
    </>
  )
}