import useProducts from "../../Shared/hook/hook";
import Product from "./Product";
import "./Products.css";
const Products = () => {
  const [products] = useProducts();

  return (
    <div className="container">
      <div className="row">
        <h1 className="text-center m-4"> Our Services {products.length}</h1>
        <div className="products-container">
          {products.map((product) => (
            <Product key={product._id} product={product}></Product>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
