import { useState, useEffect } from "react";
import Header from "../Components/Header";
import ProductList from "../Components/ProductList";

import {fetchProducts} from '../services/products'

const CartApp = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts()
    .then((data) => setProducts(data.products));
  }, []);

  return (
    <>
    <Header />
    <ProductList products={products} />
    </>
  );
};

export default CartApp;
