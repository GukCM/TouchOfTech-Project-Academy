import { useParams } from "react-router-dom";
import { useProductsContext } from "../hooks/useProductsContext";

const Products = () => {
  const { categories } = useParams();
  const { products } = useProductsContext();

  console.log(products);

  return (
    <div>
      <h1 className="text-5xl text-center font-extrabold">
        {categories} Category
      </h1>
    </div>
  );
};

export default Products;
