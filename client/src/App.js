// import { words } from "./words";
import { useState } from "react";
import Filter from "./components/Filter/Filter";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Products from "./components/Products/Products";
import data from "./data.json";
function App() {
  const [products, setProducts] = useState(data);
  const [size, setSize] = useState("");
  const [sort, setSort] = useState("");

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
  return (
    <div className="layout">
      <Header />
      <main>
        <div className="wraper">
          <Products products={products} />
          <Filter
            size={size}
            filterSize={filterSize}
            filterSort={filterSort}
            sort={sort}
          />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
