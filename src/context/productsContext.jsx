import { createContext, useState } from "react";

const ProductsContext = createContext();

function ProductsContextProvider({ children }) {
  const productsData = JSON.parse(localStorage.getItem("products")) || [];
  const [products, setProducts] = useState(productsData);

  const handleChangeProducts = (newProducts) => {
    localStorage.setItem("products", JSON.stringify(newProducts));
    setProducts(newProducts);
  };

  return (
    <ProductsContext.Provider value={{ products, handleChangeProducts }}>
      {children}
    </ProductsContext.Provider>
  );
}

export { ProductsContext, ProductsContextProvider };
