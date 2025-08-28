import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Search from './components/Search'
import FoodMenu from './components/FoodMenu'
import FoodCheckout from './components/FoodCheckout'

// Create a div that renders our cart
// cart contains - name of food, price, quantity, total price
// add to cart button
// remove from cart button
// checkout button

// Item | Price | Quantity | Total Price
// rice | 2000 | 2 | 4000 | 4000 * 2
// beans | 1500 | 1 | 1500 | 1500 * 1
// total price = 4000 + 1500 = 5500


function App() {
  const [userInput, setUerInput] = useState(0)
  const [price, setPrice] = useState(0)
    const [cart, setCart] = useState([]);
  const [checkoutList, setCheckoutList] = useState([]);

  // function handleAdd(item) {
  //   const updatedItem = {...item, quantity: 1}
  //   setCart([...cart, updatedItem]);
  // }
function handleAdd(itemToAdd) {
  setCart(prevCart => {
    const existingItem = prevCart.find(item => item.name === itemToAdd.name);
    if (existingItem) {
      return prevCart.map(item =>
        item.name === itemToAdd.name
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
    } else {
      return [...prevCart, { ...itemToAdd, quantity: 1 }];
    }
  });
}


function handleDelete(itemToDelete) {
  setCart(prevCart => {
    return prevCart.reduce((acc, item) => {
      if (item.name === itemToDelete.name) {
        if (item.quantity > 1) {
          acc.push({ ...item, quantity: item.quantity - 1 });
        }
        // If quantity is 1, don't add it back
      } else {
        acc.push(item);
      }
      return acc;
    }, []);
  });
}
const totalQuantity = cart.reduce((sum, item) => sum + item.quantity, 0);
const totalPrice = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
   
  return <div  className="container">
    <Search />
    <FoodCheckout cart={cart} setCart={setCart} />
    <FoodMenu food={userInput} handleAdd={handleAdd} handleDelete={handleDelete} />
    <h2>Orders: {totalQuantity}</h2>
    <h2>Checkout: {totalPrice}</h2>
  </div>
}

export default App
