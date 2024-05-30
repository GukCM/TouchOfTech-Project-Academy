import { useContext } from "react";
import { ProductsContext } from "../context/productsContext";

export const useProductsContext = () => {
  const context = useContext(ProductsContext);

  if (!context) {
    throw new Error(
      "useProductsContext must be used within a ProductsProvider"
    );
  }

  return context;
};
