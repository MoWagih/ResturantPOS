import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import Dashboard from "./Pages/Dashboard/Dashboard";
import SideMenu from "./components/SideMenu/SideMenu";
import { useEffect, useState } from "react";
import Products from "./Pages/Products/Products";

export default function App() {
  // let url = window.location.href;
  // let path = url.split("/")[3];
  
  const [path,setPath] = useState();
  const Location = useLocation();
  const [categories] = useState([
    { name: "pasta", path: "pasta", price: 100  },
    { name: "burgers", path: "burgers", price: 100  },
    { name: "pizza", path: "pizza", price: 200 },
  ]);
  
  
  let catsRoutes = categories.map((el)=>{return "/order/" + el.path})
  let acceptedRoutes = ["/","/settings","/bills","/order", ...catsRoutes];
  
  useEffect(()=>{
    setPath(location.pathname);
},[Location.pathname])


  return (
    <div className="App col-12 d-flex">
      {acceptedRoutes.includes(path) && <SideMenu />}
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/order" element={<h1>Foods</h1>} />
        <Route path="/order/:category" element={<Products />} />
        <Route path="/settings" element={<h1>main settings</h1>} />
        <Route path="/bills" element={<h1>Resturant Bills</h1>} />
        <Route path="/login" element={<h1>Login</h1>} />
        <Route path="*" element={<h1>404</h1>} />
      </Routes>
    </div>
  )
}
