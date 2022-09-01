import { useAuth } from "./providers/auth"
import { Profile } from './components/Profile'
import { Login } from './components/Login'

function App() {
  const {user, setUser} = useAuth()
  

  return (
    <div className="App">
      <h1>Prática de Context API</h1>
      <p>Digite o seu nome abaixo e faça o login. O logout tambés está disponível e mesmo dando F5 na página o seu nome não sumirá</p>
      
      <Profile />
      <Login />
    </div>
  )
}

export default App
