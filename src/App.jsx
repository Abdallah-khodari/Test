import React from 'react'
import './App.css'
import Nav from './Components/Navbar/Navbar';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './Components/Layout/Layout';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import Home from './Components/Home/Home';
import RateUs from './Components/RateUs/RateUs';
import Luxor from './Components/Luxor/Luxor';
import Hurghada from './Components/Hurghada/Hurghada';
import Cairo from './Components/Cairo/Cairo';
import Transfer from './Components/Transfer/Transfer';
import HurghadaActivityDetails from './Components/HurghadaActivityDetails/HurghadaActivityDetails';
import LuxourActivityDetails from './Components/LuxourActivityDetails/LuxourActivityDetails';
import CairoActivityDetails from './Components/CairoActivityDetails/CairoActivityDetails';
const router = createBrowserRouter([
  {
    path: "",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "/home", element: <Home /> },
      { path: "/about", element: <About /> },
      { path: "/contact", element: <Contact /> },
      { path: "/rateus", element: <RateUs /> },
      { path: "/luxor", element: <Luxor /> },
      { path: "/hurghada", element: <Hurghada /> },
      { path: "/Cairo", element: <Cairo /> },
      { path: "/transfer", element: <Transfer /> },
      { path: "activity/hurghada/:id", element: <HurghadaActivityDetails /> },
      { path: "activity/luxor/:id", element: <LuxourActivityDetails /> },
      { path: "activity/cairo/:id", element: <CairoActivityDetails /> },
      {
        path: "*",
        element: (
          <h1 className="h-screen bg-gray-400 text-white flex items-center justify-center ">
            404! Not Found{" "}
          </h1>
        ),
      },
    ],
  },
]);
function App() {

  return (
    <>



<RouterProvider router={router}></RouterProvider>
    </>
  );
}

export default App
