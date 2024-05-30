import { useEffect } from "react";
import { useProductsContext } from "../hooks/useProductsContext";
import { Link, useNavigate, useParams } from "react-router-dom";

const Products = () => {
  const { categories } = useParams();
  const { products } = useProductsContext();

  const navigate = useNavigate();

  useEffect(() => {
    if (products.length === 0) {
      navigate("/");
    }
  }, []);

  console.log(products);

  return (
    <div className="w-full">
      <h1 className="text-5xl text-center font-extrabold mt-6 mb-40">
        {categories} Category
      </h1>

      <section className="w-full grid grid-cols-auto-fit-minmax gap-6">
        {products.map((product) => {
          if (product.title == categories) {
            return (
              <Link
                key={product.item_id}
                to={`/categories/${product.item_id}`}
                className="text-center flex flex-col h-80 bg-white hover:bg-green-300"
              >
                <div className="w-full h-72 overflow-hidden">
                  <img
                    src={product.imageUrl}
                    alt=""
                    className="w-full h-full object-cover"
                  />
                </div>
                <h2 className="text-xl font-bold text-gray-600 mt-2 mb-2">
                  {product.name}
                </h2>
                <p>${product.price}</p>
              </Link>
            );
          }
        })}
      </section>
    </div>
  );
};

export default Products;
