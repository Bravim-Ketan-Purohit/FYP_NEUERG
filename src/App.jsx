import React from "react"
import {BrowserRouter as Router , Routes,Route} from "react-router-dom"
import Home from "./pages/Home"
import Signout from "./pages/Signout";
import Signin from "./pages/Signin";
import ForgotPassword from "./pages/ForgotPassword";
import Header from "./components/Header";
import Signup from "./pages/Signup";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function App() {
  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/Signout" element={<Signout />}></Route>
          <Route path="/Signin" element={<Signin />}></Route>
          <Route path="/ForgotPassword" element={<ForgotPassword />}></Route>
          <Route path="/Signup" element={<Signup />}></Route>
        </Routes>
      </Router>
      <ToastContainer
        position="top-center"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover={false}
        theme="colored"
      />
    </div>
  );
}