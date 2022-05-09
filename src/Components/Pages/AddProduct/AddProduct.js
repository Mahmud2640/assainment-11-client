import React from "react";
import { useForm } from "react-hook-form";
import "./AddProduct.css";

const AddProduct = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    const url = `https://warm-river-98724.herokuapp.com/product`;
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        alert("success");
        
      });
  };

  return (
    <div className="w-50 mx-auto">
      <h1>Add Products</h1>

      <form className="d-flex flex-column" onSubmit={handleSubmit(onSubmit)}>
        <input placeholder="Name" {...register("name")} />
        <input placeholder="Price" type="number" {...register("price")} />
        <input placeholder="Quantity" type="number" {...register("quantity")} />
        <input placeholder="Supplier" {...register("supplier")} />
        <input placeholder="Description" {...register("description")} />
        <input placeholder="Photo URL" type="text" {...register("img")} />

        <input type="submit" />
      </form>
    </div>
  );
};

export default AddProduct;
