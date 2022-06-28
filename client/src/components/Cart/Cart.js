import React from "react";
import "./Cart.scss";
const Cart = ({ productInCart, removeProductinCart }) => {
  return (
    <div className="cart">
      <h5 className="cart-title">
        {productInCart.length > 0
          ? `There is ${productInCart.length} Item`
          : "Cart Is Empty"}
      </h5>
      {productInCart.map((p) => (
        <div key={p.id} className="card">
          <div className="card-info">
            <img src={p.imageUrl} alt={p.title} />
            <div className="desc">
              <p>title : {p.title}</p>
              <p>Qty : {p.qty}</p>
              <p>price : {p.price}</p>
            </div>
          </div>
          <button onClick={() => removeProductinCart(p.id)}>Remove</button>
        </div>
      ))}
    </div>
  );
};

export default Cart;
