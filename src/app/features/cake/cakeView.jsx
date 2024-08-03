import React from 'react'
import { useSelector } from 'react-redux'

export const CakeView = () => {
    // The useSelector takes a function as a parameter and the function takes state as an arugument
    const numberOfCakes = useSelector((state)=> state.cake.numberOfCakes)
  return (
    <div>
    <h2>Number of cakes - {numberOfCakes}</h2>
    <button>Order cakes</button>
    <button>Restock cakes</button>
    </div>
  )
}
