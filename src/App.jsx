import { BrowserRouter, Routes, Route, NavLink, Outlet, useOutletContext } from 'react-router-dom'
import './App.css'

function App() {
  return (
  <BrowserRouter>
    <Routes>
      {/* <Route path='/' element={<h1>This is Home Page</h1>}/> */}

      <Route path='/' element={<Dashboard/>}>
        <Route path='stats' element={<Stats/>}/>
        <Route path='settings' element={<Settings/>}/>
      </Route>
    </Routes>
  </BrowserRouter>
  )
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
        <NavLink to='stats' className='mr-10'>Go to Stats</NavLink> 
        <NavLink to='settings' className='mr-10'>Go to Settings</NavLink>
        <NavLink to='/'>Go to Home</NavLink>
      </nav>
      <br /><br />

      <hr />
       <br /> <br />

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