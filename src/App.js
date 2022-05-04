import { Route, Routes } from "react-router-dom";
import "./App.css";
import SignIn from "./Components/Auth/SignIn/SignIn";
import Error from "./Components/Error/Error";
import About from "./Components/Home/About/About";
import Blog from "./Components/Home/Blog/Blog";
import Footer from "./Components/Home/Footer/Footer";
import Header from "./Components/Home/Header/Header";
import Home from "./Components/Home/Home/Home";
import Products from "./Components/Home/Products/Products";

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
        <Route path="/login" element={<SignIn />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
