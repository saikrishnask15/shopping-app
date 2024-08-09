import { createContext, useState } from "react";
import "./App.css";
import NavBar from "./components/navBar";
import UseFetch from "./components/UseFetch";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import products from "./components/Products";
import cart from "./components/Cart";
import ProductDetails from "./components/ProductDetails";
export const ResponseContext = createContext();
function App() {
  const { response } = UseFetch();
  const [cartData, setCartData] = useState(() => {
    const products = JSON.parse(localStorage.getItem("product"));
    return products || [];
  });
  // console.log(response)
  const value = {
    response,
    cartData,
    setCartData,
  };
  return (
    <ResponseContext.Provider value={value}>
      <BrowserRouter>
        <NavBar />
        <div className="container main">
          <Routes>
            <Route path="/" Component={products} />
            <Route path="/ProductDetails/:id" Component={ProductDetails}/>
            <Route path="/cart" Component={cart} />
          </Routes>
        </div>
      </BrowserRouter>
    </ResponseContext.Provider>
  );
}

export default App;
