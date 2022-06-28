// import { words } from "./words";
import { useEffect, useState } from "react";
import Cart from "./components/Cart/Cart";
import Filter from "./components/Filter/Filter";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Products from "./components/Products/Products";
import data from "./data.json";

let cartItem = JSON.parse(localStorage.getItem("cartItem"));

function App() {
  const [products, setProducts] = useState(data);
  const [size, setSize] = useState("");
  const [sort, setSort] = useState("");
  const [cart, setCart] = useState(cartItem || []);

  const filterSize = (e) => {
    setSize(e.target.value);
    if (e.target.value === "ALL") {
      setProducts(data);
    } else {
      let productsClone = [...data];
      let productFilter = productsClone.filter(
        (p) => p.size.indexOf(e.target.value) !== -1
      );
      setProducts(productFilter);
      console.log(productFilter);
    }
  };
  const filterSort = (e) => {
    setSort(e.target.value);
    let productsClone = [...products];
    let order = e.target.value;
    let productFilter = productsClone.sort((a, b) => {
      if (order === "Latest") {
        return a.id < b.id ? 1 : -1;
      } else if (order === "Lowest") {
        return a.price - b.price;
      } else {
        return b.price - a.price;
      }
    });
    setProducts(productFilter);
  };

  const addToCart = (product) => {
    const cartClone = [...cart];
    let isExist = false;
    cartClone.forEach((c) => {
      if (c.id === product.id) {
        c.qty++;
        isExist = true;
      }
    });
    if (!isExist) {
      cartClone.push({ ...product, qty: 1 });
    }
    setCart(cartClone);
  };
  const removeProductinCart = (id) => {
    let newCart = cart.filter((c) => c.id !== id);
    setCart(newCart);
  };
  useEffect(() => {
    localStorage.setItem("cartItem", JSON.stringify(cart));
  }, [cart]);

  return (
    <div className="layout">
      <Header />
      <main>
        <div className="wraper">
          <Products products={products} addToCart={addToCart} />
          <Filter
            size={size}
            filterSize={filterSize}
            filterSort={filterSort}
            sort={sort}
          />
        </div>
        <Cart productInCart={cart} removeProductinCart={removeProductinCart} />
      </main>
      <Footer />
    </div>
  );
}

export default App;
