// Create a custom reusable hook That can be used to fetch data on API Which will help in cleaning up this component or any that looks like it.

import React, { useState, useEffect } from 'react';

function useFetch(url) {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
        setLoading(true);
        try {
            const response = await fetch(url);
            const result = await response.json();
            setData(result.data);
            setLoading(false);
        } catch (error) {
            setError(error); 
            setLoading(false);
        }
        };
        fetchData();
    }, [url]);

    return [data, error, loading]
  }

function Employees(){
  const [data, error, loading] = useFetch('https://dummy.restapiexample.com/api/v1/employees')

  if (loading) return <p>Loading.....</p>;
  if (error) return <p>Error.....{error.message}</p>; 
  return (
    <div className='App'>
      <h1>Hello React.</h1>
      <h2>Start editing to see some magic happen!</h2>
      {data && data.map((ele) => (
        <p key={ele.id}>{ele.employee_name}</p>
      ))}
    </div>
  );
}

export default Employees;












// We have two lists of names, and we want to transfer every name in the first list to the second list and every two seconds we want to send one name, what would you add or change in these codes to make that happen?

// import { useEffect, useState } from "react";
// const NameTransferLists = () => {

// const [firstList, setFirstList] = useState([
// "Alice Johnson",
// "Bob Smith",
// "Charlie Brown",
// "Diana Prince",
// "Ethan Hunt",
// ])
// const [secondList, setSecondList] = useState([]);

// useEffect(() => {

//   const intervalId = setInterval(() => {
//     const newName = firstList[0]

//     setFirstList(prevList => prevList.slice(1))
//     setSecondList(prev => [...prev, newName])
//   }, 2000)

//   return () => clearInterval(intervalId)
// }, [firstList])


// return (
// <div className="max-w-4xl mx-auto p-8">
// <div className="grid grid-cols-2 gap-8">
// {/* First List */}
// <div className="bg-blue-100 p-6 rounded-lg">
// <h2 className="text-xl font-bold text-blue-800 mb-4">First List</h2>
// <ul className="space-y-2">
// {firstList.map((name, index) => (
// <li key={`first-${name}-${index}`} className="text-blue-700">
// {name}
// </li>
// ))}
// </ul>
// </div>
//    {/* Second List */}
//     <div className="bg-green-100 p-6 rounded-lg">
//       <h2 className="text-xl font-bold text-green-800 mb-4">Second List</h2>
//       <ul className="space-y-2">
//         {secondList.map((name, index) => (
//           <li key={`second-${name}-${index}`} className="text-green-700">
//             {name}
//           </li>
//         ))}
//       </ul>
//     </div>
//   </div>
// </div>
// );
// };

// export default NameTransferLists;













// import { useState, useEffect } from "react";

// We have a typing application where a user types a given sentence, and the app should check if the typed characters are correct or wrong in real-time. When the user finishes typing the sentence correctly, a success message should be displayed, and there should also be a way to reset the app. What would you add or change in this code to make that happen?

// import { useState } from "react";
// const TouchTypingApp = () => {
// const sentence = "The quick brown fox jumps over the lazy dog.";
// const [userInput, setUserInput] = useState("");
// const [isCompleted, setIsCompleted] = useState(false);

// const isWrong = userInput.length > 0 && !sentence.startsWith(userInput)
// const isCorrect = userInput.length > 0 && !isWrong

// const handleInputChange = (e) => {
//   const value = e.target.value
//   setUserInput(value)

//   if(userInput === sentence){
//     setIsCompleted(true)
//   }
// };

// const resetApp = () => {
//   setUserInput("")
//   setIsCompleted(false)
// };

// return (
// <div className="max-w-2xl mx-auto p-8">
// <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">
// Touch Typing App
// </h1>
//   {/* Target sentence display */}
//   <div className="mb-6 p-4 bg-gray-100 rounded-lg">
//     <p className="text-lg text-gray-700 font-mono">
//       {sentence.split("").map((char, index) => (
//         <span
//           key={index}
//           className={`
//             ${
//               index < userInput.length
//                 ? userInput[index] === char
//                   ? "bg-green-200 text-green-800"
//                   : "bg-red-200 text-red-800"
//                 : index === userInput.length
//                 ? "bg-yellow-200"
//                 : "text-gray-600"
//             }
//           `}
//         >
//           {char}
//         </span>
//       ))}
//     </p>
//   </div>

//   {/* Input field */}
//   <div className="mb-6">
//     <input
//       type="text"
//       value={userInput}
//       onChange={handleInputChange}
//       placeholder="Start typing the sentence above..."
//       className="w-full p-4 text-lg border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none font-mono"
//       disabled={isCompleted}
//     />
//   </div>

//   {/* Status display */}
//   <div className="mb-6 text-center">
//     {isCompleted ? (
//       <div className="p-4 bg-green-100 border border-green-300 rounded-lg">
//         <p className="text-2xl font-bold text-green-800">
//           🎉 Congratulations! 🎉
//         </p>
//         <p className="text-green-700 mt-2">
//           You've completed the sentence perfectly!
//         </p>
//       </div>
//     ) : userInput.length === 0 ? (
//       <p className="text-gray-500 text-lg">Start typing to begin...</p>
//     ) : isCorrect ? (
//       <div className="p-3 bg-green-100 border border-green-300 rounded-lg">
//         <p className="text-xl font-semibold text-green-800">Correct</p>
//       </div>
//     ) : isWrong ? (
//       <div className="p-3 bg-red-100 border border-red-300 rounded-lg">
//         <p className="text-xl font-semibold text-red-800">Wrong</p>
//         <p className="text-red-600 text-sm mt-1">
//           Delete the incorrect character to continue
//         </p>
//       </div>
//     ) : null}
//   </div>

//   {/* Progress indicator */}
//   <div className="mb-6">
//     <div className="flex justify-between text-sm text-gray-600 mb-2">
//       <span>Progress</span>
//       <span>
//         {userInput.length} / {sentence.length}
//       </span>
//     </div>
//     <div className="w-full bg-gray-200 rounded-full h-3">
//       <div
//         className="bg-blue-500 h-3 rounded-full transition-all duration-300"
//         style={{ width: `${(userInput.length / sentence.length) * 100}%` }}
//       ></div>
//     </div>
//   </div>

//   {(isCompleted || userInput.length > 0) && (
//     <div className="text-center">
//       <button
//         onClick={resetApp}
//         className="px-6 py-2 bg-gray-600 text-white font-medium rounded-lg hover:bg-gray-700 transition-colors"
//       >
//         Reset
//       </button>
//     </div>
//   )}
// </div>
// );
// };

// export default TouchTypingApp;


















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


// function useGetUserById(id) {
//   const [user, setUser] = useState(null)
//   const [posts, setPosts] = useState([])
//   const [error, setError] = useState(null)
//   const [loading, setLoading] = useState(false)

//   useEffect(()=>{
//     if (!id) return;
//     const useFetch = async () => {
//       try {
//         setError(null)
//         setLoading(true)

//         const userRes = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
//         const userData = await userRes.json();
//         setUser(userData)

//         const postRes = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${id}`)
//         const postData = await postRes.json();
//         setPosts(postData)

//       } catch (error) {
//         setError(error.message)        
//       } finally {
//         setLoading(false)
//       }
//     }
//     useFetch();
//   },[id])

//   return {user, posts, loading, error}
// }

// const UserProfileDemo = () => {
//   const [selectedUserId, setSelectedUserId] = useState(1);
//   const { user, posts, loading, error } = useGetUserById(selectedUserId);

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
//           {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((id) => (
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






// import { data } from "react-router-dom";

// function useToggle(initValue) {
//   const [value, setValue] = useState(initValue);

//   const toggle = () => setValue(prev => !prev);

//   return [value, toggle];
// }

// function App() {
//   const [isOpen, toggleIsOpen] = useToggle(false);

//   return (
//     <>
//       <button onClick={toggleIsOpen}>{isOpen? 'Close' : 'Open'}</button>

//       {isOpen && (
//         <h1>This will be visible only upon Open</h1>
//       )}
//     </>
//   );
// }

// export default App;// import { data } from "react-router-dom";

// function useToggle(initValue) {
//   const [value, setValue] = useState(initValue);

//   const toggle = () => setValue(prev => !prev);

//   return [value, toggle];
// }

// function App() {
//   const [isOpen, toggleIsOpen] = useToggle(false);

//   return (
//     <>
//       <button onClick={toggleIsOpen}>{isOpen? 'Close' : 'Open'}</button>

//       {isOpen && (
//         <h1>This will be visible only upon Open</h1>
//       )}
//     </>
//   );
// }

// export default App;






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
