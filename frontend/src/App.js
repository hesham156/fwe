import "./App.css";
import { ToastContainer } from "react-toastify";
import { Route, Routes } from "react-router-dom";
// import Login from "./pages/Login/Login";
// import Home from "./pages/Home";
import "@fortawesome/fontawesome-svg-core/styles.css";
// import Register from "./pages/Register/Register";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "react-loader-spinner";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { lazy, Suspense } from "react";
import Spiner from "./component/Spiner";
const Login = lazy(() => import("./pages/Login/Login"));
const Home = lazy(() => import("./pages/Home"));
const Register = lazy(() => import("./pages/Register/Register"));

function App() {
  return (
    <div className="App">
      <ToastContainer />
      <Suspense fallback={<Spiner />}>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/*" element={<Home />} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
