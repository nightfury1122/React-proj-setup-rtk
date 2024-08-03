import { CakeView } from './app/features/cake/cakeView'
import { IcecreamView } from './app/features/iceCream/iceCreamView'
import { UserView } from './app/features/user/userView'
import './App.css'

function App() {
  return (
    <div className='App'>
      <CakeView />
      <IcecreamView />
      <UserView />
    </div>
  )
}

export default App
