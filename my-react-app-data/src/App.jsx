import './App.css'
import StaticComponent from './components/StaticComponent/StaticComponent'
import UserList from './components/UserList/UserList'
import UserListWithLoading from './components/UserListWithLoading/UserListWithLoading'
import StComponentV2 from './components/StComponentV2/StComponentV2'
import FetchUserList from './components/FetchUserList/FetchUserList'
import FetchUserListLoader from './components/FetchUserListLoader/FetchUserListLoader'
import SearchPosts from './components/SearchPosts/SearchPosts'

function App() {

  return (
    <>
    {/* Descomentar la lineas para ver los componentes Static component y UserList */}
      {/* <StaticComponent/>
      <UserList />
      {/* <UserListWithLoading /> */}
      {/* <StComponentV2 /> */}
      {/* <FetchUserList /> */}
      {/* <FetchUserListLoader /> */}
      <SearchPosts />
    </>
  )
}

export default App
