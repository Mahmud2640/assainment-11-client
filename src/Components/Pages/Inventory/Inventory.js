import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./Inventory.css";

const Inventory = () => {
  const { inventoryId } = useParams();
  const [inventory, setInventory] = useState([]);

  useEffect(() => {
    fetch(`https://warm-river-98724.herokuapp.com/product/${inventoryId}`)
      .then((res) => res.json())
      .then((data) => setInventory(data));
  }, [inventoryId]);
  // const handleQuantity = (e) => {
  //   const quantity = e.target.quantity.value - 1;
  //   const updateQuantity = { quantity };
  //   const url = `https://warm-river-98724.herokuapp.com/product/${inventoryId}`;
  //   fetch(url, {
  //     method: "PUT",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify(updateQuantity),
  //   }).then(() => {
  //     window.location.reload();
  //   }
  //   );
  // }
  return (
    <div className="full-section">
      <h2>Product Detail Information</h2>
      <div className="full-div m-5">
        <div className="image">
          <img src={inventory.img} alt="" />
        </div>
        <div className="info">
          <h1>{inventory.name}</h1>
          <p>{inventory.description}</p>
          <p>{inventory.price}</p>
          <h3>Quantity : {inventory.quantity}</h3>
          <input type="number" placeholder="Added item" />
          <button
            className="btn btn-outline-primary m-2"
            // onClick={() => handleQuantity(inventory._id)}
          >
            Add item
          </button>
          <button className="btn btn-outline-danger m-3">Shipped</button>
        </div>
      </div>
    </div>
  );
};

export default Inventory;
