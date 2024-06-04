import React from "react";

const ProductSummary = ({ items }) => {
  const totalAmount = items.reduce((total, item) => total + item.price * item.quantity,0);

  return (
    <div className="flex flex-col">
      <section className="w-full grid grid-cols-1 gap-6 mt-10">
        {items.map((item) => (
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
            <p>{item.quantity}</p>
          </div>
        ))}
      </section>
      <div className="mt-10 text-xl font-semibold">
        Total Amount: ${totalAmount.toFixed(2)}
      </div>
    </div>
  );
};

export default ProductSummary;
