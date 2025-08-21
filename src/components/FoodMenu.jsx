import styles from './foodmenu.module.css';

import jollofRice from './Images/jollof-rice.jpg';
import friedRice from './Images/fried-rice.jpg';
import amala from './Images/amala.jpeg';
import garri from './Images/garri-meat.webp';
import suya from './Images/suya.webp';
import beans from './Images/beans.jpg';



export default function FoodMenu({handleAdd, handleDelete}) {


  return (
    <div className={styles.foodMenu_container}>
    <div className={styles.foodMenu_box}>
      <h1 className={styles.title}>Amala and Efo 🌚</h1>
     <img src={amala} alt="" className={styles.image1}/>
        <p className={styles.price}>Price: ₦3500</p>
        <button  className={styles.add} onClick={handleAdd}>Add Order</button>
        <button className={styles.remove} onClick={handleDelete}>Remove Order</button>
    </div>
    
    <div className={styles.foodMenu_box}>
      <h1 className={styles.title}>Jollof Rice And Moimoi 🥺</h1>
     <img src={jollofRice} alt="" className={styles.image2} />
        <p className={styles.price}>Price: ₦6900</p>
        <button className={styles.add} onClick={handleAdd}>Add Order</button>
        <button className={styles.remove} onClick={handleDelete}>Remove Order</button>
    </div>

    <div className={styles.foodMenu_box}>
      <h1 className={styles.title}>Garri Floating Berries And Meat 🥹</h1>
     <img src={garri} alt="" className={styles.image3} />
        <p className={styles.price}>Price: ₦8000</p>
        <button className={styles.add} onClick={handleAdd}>Add Order</button>
        <button className={styles.remove} onClick={handleDelete}>Remove Order</button>
    </div>

    <div className={styles.foodMenu_box}>
      <h1 className={styles.title}>Fried Rice and Cosglow 😮‍💨</h1>
     <img src={friedRice} alt="" className={styles.image4} />
        <p className={styles.price}>Price: ₦9700</p>
        <button className={styles.add} onClick={handleAdd}>Add Order</button>
        <button className={styles.remove} onClick={handleDelete}>Remove Order</button>
    </div>

    <div className={styles.foodMenu_box}>
      <h1 className={styles.title}>Hausa Suya 😏</h1>
     <img src={suya} alt="" className={styles.image5} />
        <p className={styles.price}>Price: ₦2000</p>
        <button className={styles.add} onClick={handleAdd}>Add Order</button>
        <button className={styles.remove} onClick={handleDelete}>Remove Order</button>
    </div>

    <div className={styles.foodMenu_box}>
      <h1 className={styles.title}>Beans And Crunchy Plantain 😯</h1>
     <img src={beans} alt="" className={styles.image6} />
        <p className={styles.price}>Price: ₦3500</p>
        <button className={styles.add} onClick={handleAdd}>Add Order</button>
        <button className={styles.remove} onClick={handleDelete}>Remove Order</button>
    </div>
    </div>
  );
}