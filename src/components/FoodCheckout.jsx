import { useState } from 'react';
import styles from './foodcheckout.module.css';

export default function FoodCheckout({ cart, setCart }) {
  // Calculate total quantity
  const totalQuantity = cart.reduce((sum, item) => sum + item.quantity, 0);

  // Calculate total price
  const totalPrice = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div>
      {cart.length > 0 && (
        <>
          <div className={styles.checkout_header}>
            <p>Item</p>
            <p>Price</p>
            <p>Quantity</p>
            <p>Total Price</p>
          </div>

          <div>
            {cart.map((item, index) => (
              <div key={index} className={styles.checkout_container}>
                <p>{item.name}</p>
                <p>₦{item.price}</p>
                <p>{item.quantity}</p>
                <p>₦{item.price * item.quantity}</p>
              </div>
            ))}
          </div>

          <div className={styles.summary_container}>
            <p>Total Quantity: {totalQuantity}</p>
            <p>Total Price: ₦{totalPrice}</p>
          </div>
        </>
      )}
    </div>
  );
}
