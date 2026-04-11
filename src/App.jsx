import {
  createBrowserRouter,
  RouterProvider,
  useLoaderData,
} from "react-router-dom";

// 1. Loader (fetches before render)
async function userLoader() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users/1");
  return res.json();
}

// 2. Component (uses fetched data)
function User() {
  const user = useLoaderData();
  return <h1>{user.name}</h1>;
}

// 3. Router setup
const router = createBrowserRouter([
  {
    path: "/",
    element: <User />,
    loader: userLoader,
  },
]);

// 4. App
export default function App() {
  return <RouterProvider router={router} />;
}














// import { BrowserRouter, Routes, Route, NavLink, Outlet, useOutletContext } from 'react-router-dom'
// import './App.css'

// function App() {
//   return (
//   <BrowserRouter>
//     <Routes>
//       {/* <Route path='/' element={<h1>This is Home Page</h1>}/> */}

//       <Route path='/' element={<Dashboard/>}>
//         <Route path='stats' element={<Stats/>}/>
//         <Route path='settings' element={<Settings/>}/>
//       </Route>
//     </Routes>
//   </BrowserRouter>
//   )
// }
// export default App;


// function Dashboard() {
//   const user = {
//     name: 'John',
//     email: 'john@gmail.com'
//   }

//   return (
//     <>
//       <nav>
//         <NavLink to='stats' className='mr-10'>Go to Stats</NavLink> 
//         <NavLink to='settings' className='mr-10'>Go to Settings</NavLink>
//         <NavLink to='/'>Go to Home</NavLink>
//       </nav>
//       <br /><br />

//       <hr />
//        <br /> <br />

//       <h1>Hello, this is the main Dashboard</h1>
//       <Outlet context={user}/>
//     </>
//   )
// }

// function Stats() {
//   const person = useOutletContext();
//   return <h1>This is stats section the user to test is {person.name} </h1>
// }

// function Settings() {
//   return <h1>This is Settings section</h1>
// }