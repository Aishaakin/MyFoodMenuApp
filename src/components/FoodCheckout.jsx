import { useState } from 'react';
import styles from './foodcheckout.module.css';
import FormCheckout from './FormCheckout';

export default function FoodCheckout({ cart, setCart, handleAdd, handleDelete }) {
const [isModalOpen, setIsModalOpen] = useState(false);
  
  // Calculate total quantity and total price
  const totalQuantity = cart.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

const toggleModal = () => {
  setIsModalOpen(!isModalOpen);
};

if(isModalOpen) {
  document.body.classList.add('active-modal')
} else {
   document.body.classList.remove('active-modal')
}

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

                 <div>
         <button  className={styles.add} onClick={() => handleAdd(item)} >Add</button>
         <button className={styles.remove} onClick={() => handleDelete(item)}>Sub</button>
                </div>
              </div>
              
            ))}
          </div>

          <div className={styles.summary_container}>
            <p>Total Quantity: {totalQuantity}</p>
            <p>Total Price: ₦{totalPrice}</p>
          </div>

          <button onClick={toggleModal} className={styles.checkout_btn}>
            Proceed to Checkout
          </button>

{/* For the Modal to appear */}
          {isModalOpen && (
            <FormCheckout onClose={toggleModal} modalOpen={isModalOpen} setModalOpen={setIsModalOpen} />
          )}
        </>
        
      )}
    </div>
  );
}
