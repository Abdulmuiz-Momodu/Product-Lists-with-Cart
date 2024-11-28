import React, { useEffect, useContext, useState } from "react";
import GlobalState from "../../context/GlobalState";
import "./Commodity.css";

export default function Commodity({
  productImage,
  productName,
  productFullName,
  productPrice,
}) {
  const { items: cart, addItem, removeItem } = useContext(GlobalState);
  const [toggle, setToggle] = useState(false);

  // Find the current item in the cart
  const cartItem = cart.find((item) => item.name === productName);
  const quantityInCart = cartItem ? cartItem.quantity : 0;

   // Update the toggle state based on global cart
   useEffect(() => {
    if (cartItem) {
      setToggle(true); // Item is in the cart
    } else {
      setToggle(false); // Item has been removed from the cart
    }
  }, [cartItem]); // Re-run whenever cartItem changes

  // Button text reflects the current quantity in the cart or "Add to Cart"
  const buttonText = toggle ? quantityInCart : "Add to Cart";

  const handleAddToCart = () => {
    setToggle(true);
    addItem({
      id: productName, // Use productName as a unique ID (or another unique identifier)
      name: productName,
      price: parseFloat(productPrice.replace("$", "")), // Convert price to number
      quantity: 1, // Initial quantity
    });
  };

  const handleIncrement = () => {

    addItem({
      id: productName,
      name: productName,
      price: parseFloat(productPrice.replace("$", "")),
      quantity: 1, // Increment quantity by 1
    });
  };
  const handleDecrement = () => {
    addItem({
      id: productName,
      name: productName,
      price: parseFloat(productPrice.replace("$", "")),
      quantity: -1, // Decrement quantity by 1
    });
    if (quantityInCart < 2){
      setToggle(false); // If quantity becomes zero, toggle back to "Add to Cart"
      removeItem(cartItem.id); // Remove item from cart completely
    }
  };

  return (
    <div className="product">
      <img
        className={toggle ? "img-true" : "img-false"}
        id="productImage"
        src={productImage}
        alt="product-image"
      />

      <div className="button-holder">
        <button className={toggle ? "true" : "false" }>
          {toggle ? (
            <>
              <div className="add-button">
                <img
                  className="remove-button-image"
                  src="./images/icon-decrement-quantity.svg"
                  alt="Decrease Quantity"
                  onClick={handleDecrement}
                />
              </div>
              <p>{buttonText}</p>
              <div className="add-button">
                <img
                  className="add-button-image"
                  src="./images/icon-increment-quantity.svg"
                  alt="Increase Quantity"
                  onClick={handleIncrement}
                />
              </div>
            </>
          ) : (
            <div onClick={handleAddToCart}>
              <img src="./images/icon-add-to-cart.svg" alt="Add to Cart" />
              <p>{buttonText}</p>
            </div>
          )}
        </button>
      </div>

      <div className="product-details">
        <p className="product-name">{productName}</p>
        <h5>{productFullName}</h5>
        <p className="product-price">{productPrice}</p>
      </div>
    </div>
  );
}
