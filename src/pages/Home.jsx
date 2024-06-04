import { useEffect } from "react";
import { getProducts } from "../services/apiProducts";
import { Link } from "react-router-dom";
import { useProductsContext } from "../hooks/useProductsContext";
import React from "react";
import homelandimg from "../assets/homelandimg.jpg";

function Home() {
  const { products, handleChangeProducts } = useProductsContext();
  let categoryTitle = "";
  let categoryIndex = 0;

  useEffect(() => {
    getProducts().then((data) => {
      handleChangeProducts(data);
    });
  }, []);

  return (
    <div className="w-full">
      <section className="w-full">
        <img
          src={homelandimg}
          alt=""
          className="w-full h-60 object-cover"
        />
        <h1 className="text-center text-3xl mt-5 mb-10 font-semibold">
          Welcome to the Store!
        </h1>
      </section>
      <section className="w-full grid grid-cols-auto-fit-minmax gap-6">
        {products.map((product) => {
          if (product.title !== categoryTitle) {
            categoryTitle = product.title;
            categoryIndex = 0;

            return (
              <React.Fragment key={product.title}>
                <Link
                  to={`/${product.title}`}
                  className="text-center flex flex-col h-20 w-40 bg-white hover:bg-green-300 col-span-full justify-self-center items-center justify-center rounded-xl shadow-md transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105 border-2 border-green-300 mt-10"
                >
                  <h2 className="text-2xl font-bold text-gray-600">
                    See all for {product.title}
                  </h2>
                </Link>

                <div className="w-full h-72 overflow-hidden" key={product.name}>
                  <img
                    src={product.imageUrl}
                    alt=""
                    className="w-full h-full object-cover"
                  />
                  <h3>{product.name}</h3>
                  <p>{product.price}</p>
                </div>
              </React.Fragment>
            );
          } else if (categoryIndex < 4) {
            categoryIndex++;

            return (
              <div className="w-full h-72 overflow-hidden" key={product.name}>
                <img
                  src={product.imageUrl}
                  alt=""
                  className="w-full h-full object-cover"
                />
                <h3>{product.name}</h3>
                <p>{product.price}</p>
              </div>
            );
          }
        })}
      </section>
    </div>
  );
}

export default Home;
