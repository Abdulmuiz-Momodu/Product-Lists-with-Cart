import React, { useContext } from "react";
import GlobalState from "../../context/GlobalState";
import CartList from "../cartlists/CartList";
import "./Cart.css";

export default function Cart({openModal}) {
  const { items: cart } = useContext(GlobalState);

  return (
    <div id="cart" className="cart">
      <h1>Your Cart ({cart.length})</h1>
      {cart.length < 1 ? (
        <div className="empty-cart">
          <p>Your added items will appear here</p>
        </div>
      ) : (
        <CartList openModal={openModal} />
      )}
    </div>
  );
}
