import React from "react";
import "./Filter.scss";
const Filter = ({ filterSize, size, filterSort, sort }) => {
  return (
    <div className="filter">
      <h3>Filter</h3>
      <p>number of products : 4 products</p>
      <div className="select">
        <span>Filter By Size</span>
        <select value={size} onChange={filterSize}>
          <option value="ALL">ALL</option>
          <option value="XS">XS</option>
          <option value="S">S</option>
          <option value="M">M</option>
          <option value="L">L</option>
          <option value="XL">XL</option>
          <option value="XXL">XXL</option>
        </select>
      </div>
      <div className="select">
        <span>Filter By Order</span>
        <select value={sort} onChange={filterSort}>
          <option value="Latest">Latest</option>
          <option value="Lowest">Lowest</option>
          <option value="Highest">Highest</option>
        </select>
      </div>
    </div>
  );
};

export default Filter;
