import React from "react";
import Commodity from "../commodity/Commodity";
import "./Section.css";

export const data = [
  
  {
    productImage: "./images/image-waffle-desktop.jpg",
    productName: "Waffle",
    productFullName: "Waffle with Berries",
    productPrice: "$6.50",
    productQuantity: 1,
  },
  {
    productImage: "./images/image-creme-brulee-desktop.jpg",
    productName: "Crème Brûlée",
    productFullName: "Vanilla Bean Crème Brûlée",
    productPrice: "$7.00",
    productQuantity: 1,
  },
  {
    productImage: "./images/image-macaron-desktop.jpg",
    productName: "Macaron",
    productFullName: "Macaron Mix of Five",
    productPrice: "$8.00",
    productQuantity: 1,
  },
  {
    productImage: "./images/image-tiramisu-desktop.jpg",
    productName: "Tiramisu",
    productFullName: "Classic Tiramisu",
    productPrice: "$5.50",
    productQuantity: 1,
  },
  {
    productImage: "./images/image-baklava-desktop.jpg",
    productName: "Baklava",
    productFullName: "Pistachio Baklava",
    productPrice: "$4.00",
    productQuantity: 1,
  },
  {
    productImage: "./images/image-meringue-desktop.jpg",
    productName: "Pie",
    productFullName: "Lemon Meringue Pie",
    productPrice: "$5.00",
    productQuantity: 1,
  },
  {
    productImage: "./images/image-cake-desktop.jpg",
    productName: "Cake",
    productFullName: "Red Velvet Cake",
    productPrice: "$4.50",
    productQuantity: 1,
  },
  {
    productImage: "./images/image-brownie-desktop.jpg",
    productName: "Brownie",
    productFullName: "Salted Caramel Brownie",
    productPrice: "$4.50",
    productQuantity: 1,
  },
  {
    productImage: "./images/image-panna-cotta-desktop.jpg",
    productName: "Panna Cotta",
    productFullName: "Vanilla Panna Cotta",
    productPrice: "$6.50",
    productQuantity: 1,
  },

];

export default function Section({handleClick, toggle}) {
  return (
    <div className="section">
      {data.map((item, id) => (
        <Commodity
          key={item.productName} // Use unique property
          productImage={item.productImage}
          productName={item.productName}
          productFullName={item.productFullName}
          productPrice={item.productPrice}
          productQuantity={item.productQuantity}
          itm={id}
          handleClick={handleClick}
          toggle={toggle}

        />
      ))}
    </div>
  );
}

