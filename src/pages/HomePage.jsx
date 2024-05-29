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
          src={products.length > 0 ? products[0].imageUrl : ""}
          alt=""
          className="w-full h-48 object-cover"
        />
        <h1>Welcome to the Store!</h1>
      </section>
      <section className="w-full grid grid-cols-auto-fit-minmax gap-6">
        {products.map((product) => {
          if (product.title !== categoryTitle) {
            <div>
              <img src={product.imageUrl} alt="" />
              <h2>{product.title}</h2>
            </div>;
          }
        })}
      </section>
    </div>
  );
}

export default HomePage;
