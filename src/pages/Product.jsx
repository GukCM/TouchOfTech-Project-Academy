import { useEffect } from "react";
import { useProductsContext } from "../hooks/useProductsContext";
import { useNavigate, useParams } from "react-router-dom";

const Product = () => {
  const { product } = useParams();
  const { products } = useProductsContext();

  const actualProduct = products.find(
    (item) => item.item_id === parseInt(product)
  );

  console.log(actualProduct);

  const navigate = useNavigate();

  useEffect(() => {
    if (products.length === 0) {
      navigate("/");
    }
  }, []);

  return (
    <div className="flex mt-20">
      <section className="w-2/4 px-14">
        <img src={actualProduct.imageUrl} alt="" className="w-full" />
      </section>
      <section className="w-2/4 px-14">
        <h1>{actualProduct.name}</h1>
        <p>${actualProduct.price}</p>
        <hr />
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum,
          quidem? Quo sint aspernatur est sequi omnis repudiandae, et aliquid
          blanditiis saepe vitae delectus. Nihil eos laudantium incidunt quasi
          eligendi voluptate!
        </p>
        <div>
          <button>-</button>
          <p></p>
          <button>+</button>
        </div>
      </section>
    </div>
  );
};

export default Product;
