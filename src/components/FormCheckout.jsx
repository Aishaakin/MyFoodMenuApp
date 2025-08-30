import React, { useState } from "react";
import styles from  "./formcheckout.module.css";

export default function FormCheckout ( { onClose, modalOpen, setModalOpen }) {
  // const totalPrice = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const toggleModal = () => {
    setModalOpen(!modalOpen);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    alert("Order confirmed!");
    toggleModal();
  };
return (
    <>
    {/* <button onClick={toggleModal} className={styles.btn_modal}>Open</button> */}
{modalOpen && (
    <div className={styles.modal}>
    <div className={styles.overlay} onClick={onClose}></div>
    <div className={styles.modal_content} style={{ backgroundColor: 'white', borderRadius: '4px' }}>
        <h2 className={styles.title}>Form Checkout</h2>
        <form onSubmit={onSubmit}>
          <input type="text" name="name" placeholder="Enter your name" required />
          <input type="email" name="email" placeholder="Enter your email" required />
          <input type="number" name="phone" placeholder="Enter your phone number" required />
          <input type="text" name="address" placeholder="Enter your address" required />
          <button type="submit" className={styles.checkout_btn}>Confirm Order</button>
          {/* <h1>Price: {totalPrice}</h1> */}
          </form>
    </div>
</div>
   
)}
 </>
);
}
