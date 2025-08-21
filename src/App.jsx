import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'
import Search from './components/Search'
import FoodMenu from './components/FoodMenu'

function App() {
  const [userInput, setUerInput] = useState(0)
  const [price, setPrice] = useState(0)
  function handleAdd() {

    setUerInput(userInput + 1)
  }
  function handleDelete() {
    setUerInput(userInput - 1)
  }
   
  return <div>
    <Search />
    <FoodMenu food={userInput} handleAdd={handleAdd} handleDelete={handleDelete} />
    <h2>Orders: {userInput}</h2>
    <h2>Checkout: </h2>
  </div>
}

export default App
