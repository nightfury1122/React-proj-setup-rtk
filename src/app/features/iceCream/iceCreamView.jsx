import React from 'react'
import { useSelector } from 'react-redux'

export const IcecreamView = () => {
    const numberOfIceCreams = useSelector((state) => state.icecream.numberOfIcecreams)
    
    return (
        <div>
            <h2>Number of Icecreams - {numberOfIceCreams}</h2>
            <button>Order Icecream</button>
            <button>Restock Icecream</button>
        </div>
    )
}
