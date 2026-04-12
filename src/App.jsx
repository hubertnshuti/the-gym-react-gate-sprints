import { useState } from "react";

function useToggle(initValue) {
  const [value, setValue] = useState(initValue);

  const toggle = () => setValue(prev => !prev);

  return [value, toggle];
}

function App() {
  const [isOpen, toggleIsOpen] = useToggle(false);

  return (
    <>
      <button onClick={toggleIsOpen}>{isOpen? 'Close' : 'Open'}</button>

      {isOpen && (
        <h1>This will be visible only upon Open</h1>
      )}
    </>
  );
}

export default App;











// Complete this custom hook

// #### useGetUserById

// that uses the fetch API to retrieve data from a public endpoint.

// 1. It should fetch the users from: `https://jsonplaceholder.typicode.com/users`
// 2. It should fetch the posts from: `https://jsonplaceholder.typicode.com/posts`
// 3. It should take a `userId` as a number
// 4. It should return:
//     1. user and his/her posts.
//     2. loading state
//     3. error state

// const UserProfileDemo = () => {
//   const [selectedUserId, setSelectedUserId] = useState(1);
//   const { user, posts, loading, error } = useGetUserById(selectedUserId);

//   async function useGetUserById(){
//     const [data, setData] = useState(null);
//     const [userId, setUserID] = useState(1);

//     const useFetch = async (url) => {
//       const res = await fetch(url);
//       data = await res.json();
//       setData(data);
//     }
//     const users = useFetch(`https://jsonplaceholder.typicode.com/users`);
//     const posts = useFetch(`https://jsonplaceholder.typicode.com/posts`);

//     setUserID(users.userId)


//   }


//   const handleUserChange = (event) => {
//     setSelectedUserId(Number(event.target.value));
//   };

//   return (
//     <div className="max-w-4xl mx-auto p-6 font-sans">
//       <h1 className="text-center text-3xl font-bold text-gray-800 mb-8">
//         User Profile & Posts
//       </h1>

//       <div className="flex justify-center items-center gap-4 mb-8">
//         <label htmlFor="userId" className="text-lg font-medium text-gray-700">
//           Select User ID:
//         </label>
//         <select
//           id="userId"
//           value={selectedUserId}
//           onChange={handleUserChange}
//           className="px-4 py-2 text-base border-2 border-gray-300 rounded-lg bg-white focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200 transition-colors"
//         >
//           {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((id: number) => (
//             <option key={id} value={id}>
//               User {id}
//             </option>
//           ))}
//         </select>
//       </div>

//       {loading && (
//         <div className="text-center text-lg text-gray-600 py-10">
//           Loading user data...
//         </div>
//       )}

//       {error && (
//         <div className="bg-red-50 border border-red-200 rounded-lg p-4 text-red-700 text-center mb-6">
//           Error: {error}
//         </div>
//       )}

//       {!loading && !error && user && (
//         <>
//           <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 mb-8">
//             <div className="text-2xl font-bold text-gray-800 mb-4">
//               {user.name}
//             </div>
//             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-4">
//               <div className="text-sm text-gray-600">
//                 <span className="font-semibold">Username:</span> {user.username}
//               </div>
//               <div className="text-sm text-gray-600">
//                 <span className="font-semibold">Email:</span> {user.email}
//               </div>
//               <div className="text-sm text-gray-600">
//                 <span className="font-semibold">Phone:</span> {user.phone}
//               </div>
//               <div className="text-sm text-gray-600">
//                 <span className="font-semibold">Website:</span> {user.website}
//               </div>
//               <div className="text-sm text-gray-600">
//                 <span className="font-semibold">City:</span>{" "}
//                 {user.address?.city}
//               </div>
//               <div className="text-sm text-gray-600">
//                 <span className="font-semibold">Company:</span>{" "}
//                 {user.company?.name}
//               </div>
//             </div>
//           </div>

//           <div>
//             <h2 className="text-xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-blue-500">
//               Posts ({posts.length})
//             </h2>

//             {posts.length === 0 ? (
//               <p className="text-center text-gray-600">
//                 No posts found for this user.
//               </p>
//             ) : (
//               <div className="grid gap-4">
//                 {posts.map((post) => (
//                   <div
//                     key={post.id}
//                     className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow"
//                   >
//                     <div className="text-base font-bold text-gray-800 mb-2 capitalize">
//                       {post.title}
//                     </div>
//                     <div className="text-sm text-gray-600 leading-relaxed mb-3">
//                       {post.body}
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             )}
//           </div>
//         </>
//       )}
//     </div>
//   );
// };

// export default UserProfileDemo;







// 1. Complete this component that renders a list of products. Add a search input that filters the list in real time as the user types (case insensitive).

// The component should still filter the products whether the user filter by the `product_name` or it’s `description` .

// The UI is already handled just focus on the logic and codes related to filtering.

// import { useState } from "react";

// const products = [
// {
// product_id: 1,
// product_name: "Laptop",
// price: 1200,
// description: "High-performance laptop with 16GB RAM and 512GB SSD.",
// },
// {
// product_id: 2,
// product_name: "Smartphone",
// price: 800,
// description: "Latest smartphone with OLED display and 5G connectivity.",
// },
// {
// product_id: 3,
// product_name: "Headphones",
// price: 150,
// description: "Noise-cancelling wireless headphones with long battery life.",
// },
// {
// product_id: 4,
// product_name: "Keyboard",
// price: 60,
// description: "Mechanical keyboard with customizable RGB lighting.",
// },
// {
// product_id: 5,
// product_name: "Mouse",
// price: 40,
// description: "Wireless ergonomic mouse with adjustable DPI.",
// },
// {
// product_id: 6,
// product_name: "Monitor",
// price: 300,
// description: "27-inch 4K UHD monitor with HDR support.",
// },
// {
// product_id: 7,
// product_name: "Printer",
// price: 200,
// description: "All-in-one inkjet printer with wireless printing.",
// },
// {
// product_id: 8,
// product_name: "Tablet",
// price: 500,
// description: "10-inch tablet with stylus support and 128GB storage.",
// },
// {
// product_id: 9,
// product_name: "Smartwatch",
// price: 250,
// description: "Water-resistant smartwatch with fitness tracking features.",
// },
// {
// product_id: 10,
// product_name: "External Hard Drive",
// price: 100,
// description: "1TB portable hard drive with USB 3.0 connectivity.",
// },
// ];


// const ProductList = () => {
//   const [searchQuery, setSearchQuery] = useState("");

//   const filteredProducts = products.filter(product => {
//     const lowerCaseQuery = searchQuery.toLowerCase();

//     return (
//       product.product_name.toLowerCase().includes(lowerCaseQuery) || 
//       product.description.toLowerCase().includes(lowerCaseQuery)
//     )
//   })


//   return (
//     <div className="p-4 max-w-xl mx-auto">
//       <h1 className="text-xl font-bold mb-4">Product List</h1>
//       <input
//         type="text"
//         placeholder="Search products..."
//         className="w-full p-2 border rounded mb-4"
//         name="search"
//         value={searchQuery}
//         onChange={(e) => setSearchQuery(e.target.value)}
//       />
//       {filteredProducts.length > 0 ? (
//         <ul className="space-y-3">
//           {filteredProducts.map((product) => (
//             <li
//               key={product.product_id}
//               className="p-3 border rounded shadow-sm"
//             >
//               <h2 className="font-semibold">{product.product_name}</h2>
//               <p className="text-sm text-gray-600">{product.description}</p>
//               <p className="font-medium">${product.price}</p>
//             </li>
//           ))}
//         </ul>
//       ) : (
//         <p className="text-gray-500">No products found.</p>
//       )}
//     </div>
//   );
// };
// export default ProductList;










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
