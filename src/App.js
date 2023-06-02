import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";
import MyListDetailScreen from "./screens/MyListDetailScreen";
import ProductDetailScreen from "./screens/ProductDetailScreen";
import AddProduct from "./screens/AddProduct";
import OrderScreen from "./screens/OrderScreen";
import Login from "./screens/LoginScreen";
import "./App.css";
import "./responsive.css";
import "react-toastify/dist/ReactToastify.css";

import "./App.css";

function App() {
  const isUserLoggedIn = localStorage.getItem("userId");
  return (
    <>
      <Router>
        <Routes>
          {isUserLoggedIn ? (
            <>
              <Route path="/login" element={<Login />} />
              <Route path="/" element={<HomeScreen />} act="true" />
              <Route path="/products" element={<HomeScreen />} />
              <Route path="/myList" element={<MyListDetailScreen />} />
              <Route path="/addproduct" element={<AddProduct />} />
              <Route path="/orders" element={<OrderScreen />} />
              <Route
                path="/product/:id/detail"
                element={<ProductDetailScreen />}
              />
            </>
          ) : (
            <Route path="/*" element={<Login />} />
          )}
        </Routes>
      </Router>
    </>
  );
}

export default App;
