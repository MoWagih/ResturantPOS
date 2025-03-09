import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import Dashboard from "./Pages/Dashboard/Dashboard";
import SideMenu from "./components/SideMenu/SideMenu";
import { useEffect, useState } from "react";
import Products from "./Pages/Products/Products";
import { useData } from "./Store/index";
import Categories from "./Pages/Categories/Categories";

export default function App() {
  const [path, setPath] = useState();
  const Location = useLocation();

  const { data } = useData();

  let catsRoutes = data.map((el) => {
    return "/order/" + el.path;
  });
  let acceptedRoutes = ["/", "/settings", "/bills", "/order", ...catsRoutes];

  useEffect(() => {
    setPath(location.pathname);
  }, [Location.pathname]);

  return (
    <div className="App col-12 d-flex">
      {acceptedRoutes.includes(path) && <SideMenu />}
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/order" element={<Categories />} />
        <Route path="/order/:category" element={<Products />} />
        <Route path="/settings" element={<h1>main settings</h1>} />
        <Route path="/bills" element={<h1>Resturant Bills</h1>} />
        <Route path="/login" element={<h1>Login</h1>} />
        <Route path="*" element={<h1>404</h1>} />
      </Routes>
    </div>
  );
}
