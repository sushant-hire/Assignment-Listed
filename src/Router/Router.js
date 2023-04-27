import React from "react";
import { Routes, Route } from "react-router-dom";
import SignIn from "../Pages/Sign In/SignIn";
import Dashboard from "../Pages/Dashboard/Dashboard";

function Router() {
  return (
    <Routes>
      <Route path="/" element={<SignIn />}></Route>
      <Route path="/dashboard" element={<Dashboard />}></Route>
    </Routes>
  );
}

export default Router;
