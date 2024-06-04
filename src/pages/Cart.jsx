import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { addToCart, decreaseToCart } from "../redux/slices/cartSlice";

const Cart = () => {
  const { items } = useSelector((state) => state.cart);
  const cartLocal = JSON.parse(localStorage.getItem("cart")) || [];
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handlePay = () => {
    if (items.length > 0 || cartLocal.length > 0) {
      navigate("/cart/payment", { state: { items: items.length > 0 ? items : cartLocal } });
    }
  };

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

      <button
        className={`bg-green-500 text-white p-4 rounded-md mt-10 hover:bg-green-600 transition-all ${items.length === 0 && cartLocal.length === 0 ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`}
        onClick={handlePay}
        disabled={items.length === 0 && cartLocal.length === 0}
      >
        Pay Now
      </button>
    </div>
  );
};

export default Cart;



