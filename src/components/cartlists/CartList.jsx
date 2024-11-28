import React, { useContext } from "react";
import GlobalState from "../../context/GlobalState";
import "./CartList.css";

export default function CartList({openModal}) {
  // Extract cart items and deleteItem function from context
  const { items: cart, deleteItem } = useContext(GlobalState);

  const total = cart
    .reduce((sum, item) => sum + item.price * (item.quantity || 1), 0)
    .toFixed(2);
  return (
    <div className="cartList">
      <div>
        {cart.map((item) => (
          <div key={item.id} className="total-cart-item">
            <div className="cart-item">
              <h4>{item.name}</h4>
              <div className="item-price-details">
                <p style={{ color: "hsl(14, 86%, 42%)", fontWeight: "900" }}>
                  {item.quantity}x
                </p>
                <div className="item-prices">
                  <p style={{ color: "hsl(7, 20%, 60%)" }}>
                    @${item.price.toFixed(2)}
                  </p>
                  <p style={{ color: "hsl(7, 20%, 60%)", fontWeight: "500" }}>
                    ${item.price.toFixed(2) * item.quantity}
                  </p>
                </div>
              </div>
            </div>
            <div className="delete-button">
              <img
                onClick={() => {
                  deleteItem(item.id);
                }} // Call deleteItem with the item's id
                src="./images/icon-remove-item.svg"
                alt="remove-item"
              />
            </div>
          </div>
        ))}
      </div>

      <div className="total-amount">
        <p>Order Total</p>
        <h2>${total}</h2>
      </div>
      <div className="carbon-neutral">
        <img src="./images/icon-carbon-neutral.svg" alt="carbon-neutral-image" />
        <p>
          This is a <b>carbon-neutral</b> delivery
        </p>
      </div>
      <button onClick={openModal} className="submit-button">
        Confirm Order
      </button>
    </div>
  );
}
