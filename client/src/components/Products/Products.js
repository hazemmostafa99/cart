import React, { useState } from "react";
import "./Products.scss";
import Modal from "react-modal";
const Products = ({ products }) => {
  const [product, setProduct] = useState("");
  const openModal = (product) => {
    setProduct(product);
  };
  const closModal = (product) => {
    setProduct("");
  };
  return (
    <div className="products">
      {products.map((product) => (
        <div className="item" key={product.id}>
          <a href="#" onClick={() => openModal(product)}>
            <img src={product.imageUrl} alt={product.title} />
          </a>
          <div className="item-detials">
            <p>{product.title} </p>
            <span>${product.price} </span>
          </div>
          <button> Add To Cart </button>
        </div>
      ))}

      <Modal isOpen={product} onRequestClose={closModal}>
        <div className="model-wraper">
          <span onClick={() => closModal()}> &times; </span>
          <img src={product.imageUrl} alt={product.title} />
          <p>{product.desc}</p>
          <p>{product.title}</p>
          <p>${product.price}</p>
        </div>
      </Modal>
    </div>
  );
};

export default Products;
