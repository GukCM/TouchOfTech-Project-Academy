import { useEffect, useState } from "react";
import { getProducts } from "../services/apiProducts";

function HomePage() {
  const [products, setProducts] = useState([]);
  let categoryTitle = "";

  useEffect(() => {
    getProducts().then((data) => {
      setProducts(data);
    });
  }, []);

  console.log(products);

  return (
    <div className="w-full">
      <section className="w-full">
        <img
          src={products.length > 0 ? products[1].imageUrl : ""}
          alt=""
          className="w-full h-48 object-cover"
        />
        <h1 className="text-center text-3xl mt-5 mb-10 font-semibold">
          Welcome to the Store!
        </h1>
      </section>
      <section className="w-full grid grid-cols-auto-fit-minmax gap-6">
        {products.map((product) => {
          if (product.title !== categoryTitle) {
            categoryTitle = product.title;

            return (
              <div
                key={product.item_id}
                className="text-center flex flex-col h-80 bg-white hover:bg-blue-700"
              >
                <div className="w-full h-72 overflow-hidden">
                  <img
                    src={product.imageUrl}
                    alt=""
                    className="w-full h-full object-cover"
                  />
                </div>
                <h2 className="text-2xl font-bold text-gray-600">
                  {product.title}
                </h2>
              </div>
            );
          }
        })}
      </section>
    </div>
  );
}

export default HomePage;
