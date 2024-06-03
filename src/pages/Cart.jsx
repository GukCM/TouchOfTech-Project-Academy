import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { addToCart, decreaseToCart } from "../redux//slices/cartSlice";

const Cart = () => {
  const { items } = useSelector((state) => state.cart);
  const cartLocal = JSON.parse(localStorage.getItem("cart")) || [];
  const dispatch = useDispatch();

  return (
    <div className="flex flex-col">
      <h1 className="text-5xl font-extrabold mt-20">Cart</h1>

      <section className="w-full grid grid-cols-1 gap-6 mt-10">
        {items.length > 0
          ? items.map((item) => (
              <div
                key={item.item_id}
                className="w-full flex justify-between items-center"
              >
                <img
                  src={item.imageUrl}
                  alt=""
                  className="w-20 h-20 object-cover"
                />
                <h2 className="text-xl font-semibold">{item.name}</h2>
                <p>${item.price}</p>
                <button onClick={() => dispatch(decreaseToCart(item.item_id))}>
                  -
                </button>
                <p>{item.quantity}</p>
                <button onClick={() => dispatch(addToCart(item))}>+</button>
              </div>
            ))
          : cartLocal.map((item) => (
              <div
                key={item.item_id}
                className="w-full flex justify-between items-center"
              >
                <img
                  src={item.imageUrl}
                  alt=""
                  className="w-20 h-20 object-cover"
                />
                <h2 className="text-xl font-semibold">{item.name}</h2>
                <p>${item.price}</p>
                <button onClick={() => dispatch(decreaseToCart(item.item_id))}>
                  -
                </button>
                <p>{item.quantity}</p>
                <button onClick={() => dispatch(addToCart(item))}>+</button>
              </div>
            ))}
      </section>

      <Link to="/cart/payment" className="mt-60 border-2">
        Pay
      </Link>
    </div>
  );
};

export default Cart;
