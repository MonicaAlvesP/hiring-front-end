import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Shopping from "../pages/Shopping/Shopping";


const Navigation = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/shopping" element={<Shopping />} />
    </Routes>
  );
}

export default Navigation;