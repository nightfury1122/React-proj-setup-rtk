import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { fetchUsers } from './userSlice'



export const UserView = () => {

  const dispatch = useDispatch()

  // Passing an empty dependency array because we only want this to run when the component mounts 
  useEffect(() => {
    dispatch(fetchUsers())
  }, [])

  const userData = useSelector((state) => state.user)

  return (
    <div>
      <h2>List of users -  </h2>
      {userData.loading && <div>
        Loading ...
      </div>}
      {!userData.loading && userData.error ? <div>
        Error : {userData.error}
      </div> : null
      }
      {
        !userData.loading && userData.users.length ? (
          <ul>
            {
              userData.users.map(user => (
                <li key={user}>{user}</li>
              ))
            }
          </ul>
        ) : null
      }
    </div>
  )
}


