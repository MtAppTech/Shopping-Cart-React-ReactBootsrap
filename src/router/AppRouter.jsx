import React from 'react'

import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import AppNavbar from "../components/AppNavbar";
import About from "../pages/About";
import Main from "../pages/Main";
import NewProduct from "../pages/NewProduct";
import ProductList from "../pages/ProductList";

const AppRouter = () => {
  return (
    <Router>
      <AppNavbar/>
      <Routes>
        <Route exact path="/" element={<Main />} />
        <Route path="/about" element={<About />} />
        <Route path="/newProduct" element={<NewProduct />} />
        <Route path="/productList" element={<ProductList />} />
      </Routes>
    </Router>
  )
}

export default AppRouter