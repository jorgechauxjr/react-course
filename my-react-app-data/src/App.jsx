import './App.css'
import StaticComponent from './components/StaticComponent/StaticComponent'
import UserList from './components/UserList/UserList'
import UserListWithLoading from './components/UserListWithLoading/UserListWithLoading'

function App() {

  return (
    <>
    {/* Descomentar la lineas para ver los componentes Static component y UserList */}
      {/* <StaticComponent/>
      <UserList /> */}
      <UserListWithLoading />
    </>
  )
}

export default App
