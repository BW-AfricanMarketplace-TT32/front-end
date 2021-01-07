import React from 'react'
import Navbar from './Navbar'
import Cart from '../components/Cart.js'
import '../assets/stylesheets/market.css'

export default function Market(props) {
  return (
    <>
      <Navbar />

      <main className='market-container row'>

        <div className='block col-2'>
          <h1>Market</h1>

          <div className='row'>
            <p>item 1</p>
            <p>item 2</p>
            <p>item 3</p>
          </div>
        </div>

        <Cart />
      </main>
    </>
  )
}