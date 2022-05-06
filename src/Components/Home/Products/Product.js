import React from "react";
import { useNavigate } from "react-router-dom";

const Product = ({ product }) => {
  const { _id, name, img, description, price, quantity } = product;
  const navigate = useNavigate();

  const navigateToUpdate = (id) => {
    navigate(`/inventory/${id}`);
  };
  return (
    <div className="product">
      <img className="w-100" src={img} alt="" />
      <h2>{name}</h2>
      <p>Price: {price}</p>
      <p>Quantity: {quantity}</p>
      <p>
        <small>{description}</small>
      </p>
      <button onClick={() => navigateToUpdate(_id)} className="btn btn-primary">
        Update: {name}
      </button>
    </div>
  );
};

export default Product;
