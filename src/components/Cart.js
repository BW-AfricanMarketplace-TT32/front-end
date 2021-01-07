import React from 'react'

export default function Cart(props) {
  const { cartItems, onAdd, onDelete } = props

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
        </div>
      </aside>
    </>
  )
}