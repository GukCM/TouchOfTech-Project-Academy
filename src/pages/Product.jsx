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
    <div className="flex mt-20 flex-col 2xl:flex-row">
      <section className="w-full 2xl:w-2/4 px-14 flex justify-center">
        <img
          src={actualProduct.imageUrl}
          alt=""
          className="w-full max-w-96 2xl:max-w-xl mb-14"
        />
      </section>
      <section className="w-full 2xl:w-2/4 px-14">
        <h1 className="text-5xl font-extrabold">{actualProduct.name}</h1>
        <p className="text-xl font-semibold my-6">${actualProduct.price}</p>
        <hr />
        <p className="my-9 text-xl font-extralight text-justify">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum,
          quidem? Quo sint aspernatur est sequi omnis repudiandae, et aliquid
          blanditiis saepe vitae delectus. Nihil eos laudantium incidunt quasi
          eligendi voluptate! Lorem ipsum dolor sit amet consectetur adipisicing
          elit. A accusamus, debitis doloribus assumenda nesciunt alias beatae,
          voluptatibus amet quidem tempore, modi ratione omnis nemo praesentium
          officia sequi corrupti corporis eaque. Lorem ipsum dolor sit amet
          consectetur adipisicing elit.
        </p>
        <div className="flex w-1/4 items-center">
          <button className="w-1/4 flex justify-center items-center border-slate-400 border-2 rounded-full">
            -
          </button>
          <p className="w-2/4 text-center">5</p>
          <button className="w-1/4 flex justify-center items-center border-slate-400 border-2 rounded-full">
            +
          </button>
        </div>
      </section>
    </div>
  );
};

export default Product;
