import React from "react";
import useProducts from "../../Shared/hook/hook";
import "./Manage.css"

const Manage = () => {
  const [products, setProducts] = useProducts();
  const handleDelete = (id) => {
    const proceed = window.confirm("Are you sure?");
    if (proceed) {
      const url = `https://warm-river-98724.herokuapp.com/product/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          const remaining = products.filter((product) => product._id !== id);
          setProducts(remaining);
        });
    }
  };
  return (
    <div className="container manage-inventory">
      <h1>Manage Products</h1>
      {products.map((product) => (
        <div key={product._id} className="inventory-map">
          <img src={product.img} alt="" />
          <h3>{product.name}</h3>
          <p>{product.price}</p>
          <p>{product.quantity}</p>
          <button className="btn-manage btn-primary" onClick={() => handleDelete(product._id)}>Delete</button>
          <button className="btn-manage btn-danger">Update</button>
        </div>
      ))}
    </div>
  );
};

export default Manage;
