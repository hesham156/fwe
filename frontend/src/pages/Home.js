import React, { useEffect, useState, lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import style from "../asset/css/home.module.css";
import GlobalNave from "../component/GlobalNave";
import Navebar from "../component/Navebar";
import Spiner from "../component/Spiner";
const Shop = lazy(() => import("./shop/Shop"));
const Loves = lazy(() => import("./Loves/Loves"));
const Users = lazy(() => import("./user/Users"));
const Logout = lazy(() => import("./Logout/Logout"));
const NotFound = lazy(() => import("./NotFound"));
const Header = lazy(() => import("../component/Header/Header"));
const Products = lazy(() => import("../component/products/Products"));

const Home = () => {
  const [type, setType] = useState();
  const [user, setuser] = useState();

  useEffect(() => {
    setuser(localStorage.getItem("user"));
  }, []);
  return (
    <div className={style.home + " w-100"}>
      <GlobalNave />
      <Suspense fallback={<Spiner />}>
        <Routes>
          <Route
            path="/*"
            element={
              <>
                <Header type={setType} />
                <Products type={type ? type : "Cats"} user={user} />
              </>
            }
          />
          {user ? (
            <>
              <Route path="/card" element={<Shop />} />
              <Route path="/loves" element={<Loves />} />
              <Route path="/user/*" element={<Users />} />
              <Route path="/logout" element={<Logout />} />
            </>
          ) : (
            false
          )}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
      {user ? <Navebar /> : false}
    </div>
  );
};

export default Home;
