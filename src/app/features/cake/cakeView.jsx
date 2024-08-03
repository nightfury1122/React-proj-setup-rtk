import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ordered, restocked } from './cakeSlice'

export const CakeView = () => {
    // The useSelector takes a function as a parameter and the function takes state as an arugument
    const numberOfCakes = useSelector((state) => state.cake.numberOfCakes)
    const dispatch = useDispatch()
    return (
        <div>
            <h2>Number of cakes - {numberOfCakes}</h2>
            <button onClick={() => dispatch(ordered())}>Order cakes</button>
            <button onClick={() => dispatch(restocked(5))}>Restock cakes</button>
        </div>
    )
}
