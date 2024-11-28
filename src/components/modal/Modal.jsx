import React, { useContext } from "react";
import GlobalState from "../../context/GlobalState";
import "./Modal.css";

export default function Modal({ modal, setModal }) {
  const { items: cart, clearCart } = useContext(GlobalState);
  

  const total = cart
    .reduce((sum, item) => sum + item.price * (item.quantity || 1), 0)
    .toFixed(2);

  const handleNewOrder = () => {
    clearCart(); // Clear the cart when starting a new order
    setModal(false); // Close the modal
    window.location.reload(false); // Refreshing the page after new order
  };

  const handleCloseModal = () => {
    setModal(false);
  };

  return (
    <>
      <div className={modal === true ? "modals-container" : "modal-container"}>
      <span
            onClick={handleCloseModal}
            className="first-close-modal-button"
            title="Close Modal"
          >
            &times;
          </span>
        <div
          className={modal === true ? "modals" : "modal"}
        >
          <span
            onClick={handleCloseModal}
            className="close-modal-button"
            title="Close Modal"
          >
            &times;
          </span>
          <img
            className="order-confirmed-img"
            src="./images/icon-order-confirmed.svg"
            alt="icon-order-confirmed"
          />
          <div className="order-confirmed-header">
            <h1>Order Confirmed</h1>
            <p>We hope you enjoy your food!</p>
          </div>
          <div className="products">
            {cart.map((item) => (
              // console.log(item.productImage),
              <div key={item.id} className="product-item">
                <img src={item.productImage} alt={`${item.name}-image`} />
                <h4>{item.name}</h4>
                <div className="product-price-details">
                  <p style={{ color: "hsl(14, 86%, 42%)", fontWeight: "900" }}>
                    {item.quantity}x
                  </p>
                  <div className="product-prices">
                    <p style={{ color: "hsl(7, 20%, 60%)" }}>
                      @${item.price.toFixed(2)}
                    </p>
                    <p style={{ color: "hsl(14, 65%, 9%)", fontWeight: "700" }}>
                      ${item.price.toFixed(2) * item.quantity}
                    </p>
                  </div>
                </div>
              </div>
            ))}
            <div className="total-amount">
              <p>Order Total</p>
              <h2>${total}</h2>
            </div>
          </div>
          <button onClick={handleNewOrder} className="new-order">
            Start New Order
          </button>
        </div>
      </div>
    </>
  );
}