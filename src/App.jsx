import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom'

function App() {
  <BrowserRouter>
    <Routes>
      <Route />
      <Route path='/' element={<Dashboard/>}>
        <Route path='/stats' element={<Stats/>}/>
        <Route path='/settings' element={<Settings/>}/>
      </Route>
    </Routes>
  </BrowserRouter>
}
export default App;


function Dashboard() {
  const user = {
    name: 'John',
    email: 'john@gmail.com'
  }

  return (
    <>
      <nav>
        <NavLink to='/stats'>Go to Stats</NavLink>
        <NavLink to='/settings'>Go to Settings</NavLink>
      </nav>

      <h1>Hello, this is the main Dashboard</h1>
      <Outlet context={user}/>
    </>
  )
}

function Stats() {
  const person = useOutletContext();
  return <h1>This is stats section the user to test is {person.name} </h1>
}

function Settings() {
  return <h1>This is Settings section</h1>
}