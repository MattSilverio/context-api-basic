import React from 'react'
import { useState } from 'react'
import { useAuth } from '../providers/auth'

export const Login = () => {
    const [input, setInput] = useState({
        name: "", // Dar o get da API para esse objeto
    })
    const {setUser} = useAuth()
    
    const handleLogin = () => {
        localStorage.setItem('user', JSON.stringify(input))
        setUser(input)
    }

    const handleLogout = () => {
        localStorage.removeItem('user')
        setUser({
            name: "",
        })
    }
  
    return (
    <div>
        <input type='text' onChange={(event) => setInput({name: event.target.value})} />
        <button onClick={handleLogin}>Login</button>
        <button onClick={handleLogout}>Logout</button>
    </div>
 )
}
