// 1. Complete this component that renders a list of products. Add a search input that filters the list in real time as the user types (case insensitive).

// The component should still filter the products whether the user filter by the `product_name` or it’s `description` .

// The UI is already handled just focus on the logic and codes related to filtering.

import { useState } from "react";

const products = [
{
product_id: 1,
product_name: "Laptop",
price: 1200,
description: "High-performance laptop with 16GB RAM and 512GB SSD.",
},
{
product_id: 2,
product_name: "Smartphone",
price: 800,
description: "Latest smartphone with OLED display and 5G connectivity.",
},
{
product_id: 3,
product_name: "Headphones",
price: 150,
description: "Noise-cancelling wireless headphones with long battery life.",
},
{
product_id: 4,
product_name: "Keyboard",
price: 60,
description: "Mechanical keyboard with customizable RGB lighting.",
},
{
product_id: 5,
product_name: "Mouse",
price: 40,
description: "Wireless ergonomic mouse with adjustable DPI.",
},
{
product_id: 6,
product_name: "Monitor",
price: 300,
description: "27-inch 4K UHD monitor with HDR support.",
},
{
product_id: 7,
product_name: "Printer",
price: 200,
description: "All-in-one inkjet printer with wireless printing.",
},
{
product_id: 8,
product_name: "Tablet",
price: 500,
description: "10-inch tablet with stylus support and 128GB storage.",
},
{
product_id: 9,
product_name: "Smartwatch",
price: 250,
description: "Water-resistant smartwatch with fitness tracking features.",
},
{
product_id: 10,
product_name: "External Hard Drive",
price: 100,
description: "1TB portable hard drive with USB 3.0 connectivity.",
},
];


const ProductList = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredProducts = products.filter(product => {
    const lowerCaseQuery = searchQuery.toLowerCase();

    return (
      product.product_name.toLowerCase().includes(lowerCaseQuery) || 
      product.description.toLowerCase().includes(lowerCaseQuery)
    )
  })


  return (
    <div className="p-4 max-w-xl mx-auto">
      <h1 className="text-xl font-bold mb-4">Product List</h1>
      <input
        type="text"
        placeholder="Search products..."
        className="w-full p-2 border rounded mb-4"
        name="search"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      {filteredProducts.length > 0 ? (
        <ul className="space-y-3">
          {filteredProducts.map((product) => (
            <li
              key={product.product_id}
              className="p-3 border rounded shadow-sm"
            >
              <h2 className="font-semibold">{product.product_name}</h2>
              <p className="text-sm text-gray-600">{product.description}</p>
              <p className="font-medium">${product.price}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-gray-500">No products found.</p>
      )}
    </div>
  );
};
export default ProductList;










// import {
//   createBrowserRouter,
//   RouterProvider,
//   useLoaderData,
// } from "react-router-dom";

// // Loader (fetches before render)
// async function userLoader() {
//   const res = await fetch("https://jsonplaceholder.typicode.com/users/1");
//   return res.json();
// }

// // Component (uses fetched data)
// function User() {
//   const user = useLoaderData();
//   return <h1>{user.name}</h1>;
// }

// // Router setup
// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <User />,
//     loader: userLoader,
//   },
// ]);

// // App
// export default function App() {
//   return <RouterProvider router={router} />;
// }











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
