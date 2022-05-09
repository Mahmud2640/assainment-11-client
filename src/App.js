import { Route, Routes } from "react-router-dom";
import "./App.css";
import RequirdAuth from "./Components/Auth/RequirdAuth/RequirdAuth";
import SignIn from "./Components/Auth/SignIn/SignIn";
import SignUp from "./Components/Auth/SignUp/SignUp";
import Error from "./Components/Error/Error";
import About from "./Components/Home/About/About";
import Blog from "./Components/Home/Blog/Blog";
import Footer from "./Components/Home/Footer/Footer";
import Header from "./Components/Home/Header/Header";
import Home from "./Components/Home/Home/Home";
import Products from "./Components/Home/Products/Products";
import AddProduct from "./Components/Pages/AddProduct/AddProduct";
import Inventory from "./Components/Pages/Inventory/Inventory";
import Manage from "./Components/Pages/Manage/Manage";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/blogs" element={<Blog />} />
        <Route path="/about" element={<About />} />
        <Route
          path="/add-product"
          element={
            <RequirdAuth>
              <AddProduct />
            </RequirdAuth>
          }
        />
        <Route
          path="/manage"
          element={
            <RequirdAuth>
              <Manage />
            </RequirdAuth>
          }
        />
        <Route
          path="/inventory/:inventoryId"
          element={
            <RequirdAuth>
              <Inventory />
            </RequirdAuth>
          }
        />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<SignIn />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
