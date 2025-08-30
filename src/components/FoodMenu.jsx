import styles from './foodmenu.module.css';

import jollofRice from './Images/jollof-rice.jpg';
import friedRice from './Images/fried-rice.jpg';
import amala from './Images/amala.jpeg';
import garri from './Images/garri-meat.webp';
import suya from './Images/suya.webp';
import beans from './Images/beans.jpg';



export default function FoodMenu({handleAdd, handleDelete, cart}) {
  
  const menu = [{
    name: 'Jollof Rice And Plantain 🌚',
    price: 6900,
    image: jollofRice
  }, {
    name: 'Fried Rice And Chicken 🥹',
    price: 9700,
    image: friedRice
  }, {
    name: 'Amala and Efo 🤤',
    price: 3500,
    image: amala
  }, {
    name: 'Garri and Fish 😚',
    price: 8000,
    image: garri
  }, {
    name: 'Hausa Suya With Onions 🙂‍↕️',
    price: 2000,
    image: suya
  }, {
    name: 'Beans And Plantain🤪',
    price: 3500,
    image: beans
  }]
console.log(cart)

  return (
    <div className={styles.foodMenu_container}>
      {menu.map((item, index) => (
    <div className={styles.foodMenu_box} key={index}>
      <h1 className={styles.title}>{item.name}</h1>
     <img src={item.image} alt={item.name} className={styles.image1}/>
        <p className={styles.price}>Price: ₦{item.price}</p>
        <div className={styles.button_container}>
        <button  className={styles.add} onClick={() => handleAdd(item)} >Add Order</button>
        <button className={styles.remove} onClick={() => handleDelete(item)}
        disabled={!cart.find((each) => each.name === item.name)}
        // disabled={!cart.some(cartItem => cartItem.name === item.name )}  
          >Remove Order</button>
        </div>
    </div>
      ))}

    
    </div>
  );
}