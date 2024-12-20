import Header from "./components/Header";
import ItemDetailContain from "./components/ItemDetailContain";
import ItemListContainer from "./components/ItemListContainer";
import Navbar from "./components/Navbar";
import { Cart } from "./components/Cart";
import CheckOut from "./components/CheckOut";
import Home from "./components/Home";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartProvider } from "./context/CartContext";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <BrowserRouter>
        <CartProvider>
          <Header />
          <Navbar />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/allProducts" element={<ItemListContainer />} />
            <Route path="/detail/:detailId" element={<ItemDetailContain />} />
            <Route
              path="/category/:categoryId"
              element={<ItemListContainer />}
            />
            <Route
              path="/category/:categoryId/:subCategoryId"
              element={<ItemListContainer />}
            />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<CheckOut />} />
          </Routes>
          <Footer />
        </CartProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
