import { useEffect, useState } from 'react'
import './App.css'
function App() {

   
//get a random number from the 333 different burgers on the api
  
  const getBurger = () => {

 const [burger, setBurger] = useState();

 useEffect(() => {
  fetch("https://bobsburgers-api.herokuapp.com/burgerOfTheDay/[1,2,3,4,5,6,7]") 
  .then((res) => res.json())
  .then((data) => {
    setBurger(data[0].name)
    console.log(data)

  })
 })
   }
    //  getBurger()
  return (
    <>
    {/* { burger.map((data) =>{
      return
      <p>{.name}</p>
    })} */}
    </>
  )
}

export default App
