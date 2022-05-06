import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Inventory = () => {
  const { inventoryId } = useParams();
  const [inventory, setInventory] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/products/${inventoryId}`)
      .then((res) => res.json())
      .then((data) => setInventory(data));
  }, []);
  return (
    <div>
      <h2>Welcome to detail: {inventory.name}</h2>
      {/* <img src={inventory.img} alt="" /> */}
      <h2>Quantity : {inventory.quantity}</h2>
      <button className='btn btn-primary m-5'>Shipped</button>
      
    </div>
  );
};

export default Inventory;
