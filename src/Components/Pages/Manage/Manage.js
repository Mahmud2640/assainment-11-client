import React from "react";
import useProducts from "../../Shared/hook/hook";

const Manage = () => {
  const [products] = useProducts();
  return (
    <div>
      <h1>Manage Products</h1>
      {products.map((product) => (
        <div key={product._id}>
          <h3>{product.name}</h3>
          <p>{product.price}</p>
          <p>{product.quantity}</p>
          <button>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default Manage;
