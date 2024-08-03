import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { ordered, restocked } from './iceCreamSlice'

export const IcecreamView = () => {
  const numberOfIceCreams = useSelector((state) => state.icecream.numberOfIcecreams)
  const dispatch = useDispatch()
  return (
    <div>
      <h2>Number of Icecreams - {numberOfIceCreams}</h2>
      <button onClick={() => dispatch(ordered())}>Order Icecream</button>
      <button onClick={() => dispatch(restocked(1))}>Restock Icecream</button>
    </div>
  )
}
