import React from 'react'
import { useSelector } from 'react-redux'

export const UserView = () => {
  const userList = useSelector((state)=>state.user.users)
  return (
    <div>
    <h2>List of users - {userList} </h2>
    <button>Order Icecream</button>
    <button>Restock Icecream</button>
    </div>
  )
}
