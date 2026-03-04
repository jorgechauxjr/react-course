import './App.css'
import StaticComponent from './components/StaticComponent/StaticComponent'
import UserList from './components/UserList/UserList'
import UserListWithLoading from './components/UserListWithLoading/UserListWithLoading'

function App() {

  return (
    <>
      <StaticComponent/>
      <UserList />
      <UserListWithLoading />
    </>
  )
}

export default App
