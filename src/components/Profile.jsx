import React from 'react'
import { AuthContext } from '../providers/auth'
import { useContext } from 'react'

export const Profile = () => {
    const {user} = useContext(AuthContext)
 
    return (
    <div>
        <hr />
        <h1>Profile</h1>   
        {user.name}
    </div>
  )
}
