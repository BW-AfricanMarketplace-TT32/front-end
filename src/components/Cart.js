import React from 'react'

export default function Cart(props) {
  const { cartItems, onAdd, onDelete } = props

  // Calculate subtotal of cart using reduce()
  const itemsCost = cartItems.reduce((accumulator, item) => accumulator + item.price * item.qty, 0)

  return (
    <>
      <aside className='block col-1'>
        <h2>Cart Items</h2>
        <div>
          {cartItems.length === 0 && <div>Cart is empty</div>}

          {cartItems.map((item) => (
            <div key={item.id} className='row'>
              <div className='col-2'>{item.name}</div>

              {/* CART BUTTONS */}
              <div className='col-2'>
                <button className='add' onClick={() => onAdd(item)}>+</button>
                <button className='delete' onClick={() => onDelete(item)}>-</button>
              </div>

              <div className='col-2 text-right'>
                {item.qty} x R {item.price.toFixed(2)}
              </div>
            </div>
          ))}
          {cartItems.length !== 0 && (
            <>
              <hr></hr>
              <div className='row'>
                <div className='col-2'>Subtotal</div>
                <div className='col-2 text-right'>R {itemsCost.toFixed(2)}</div>
              </div>
            </>
          )}
        </div>
      </aside>
    </>
  )
}