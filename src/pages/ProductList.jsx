import React, { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import CardTotal from "../components/CardTotal";
import axios from "axios";

const ProductList = () => {
  const BASE_URL = "https://63f4e5583f99f5855db9e941.mockapi.io/products";
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  const getData = async () => {
    try {
      const { data } = await axios(BASE_URL); // We structured the incoming data
      setProducts(data);
      setLoading(true);
    } catch (error) {
      setError(true);
    } finally {
      //Come here even if it's a mistake
      setLoading(false);
    }
  };
  useEffect(() => {
    getData();
  }, []);

  if (error === true) {
    return <p>Something went wrong...</p>;
  }


  return (
    <div className="container mt-3">
      <div className="d-sm-block d-md-flex">
        {loading === true ? (
          <p> loading...</p>
        ) : (
          <>
            <article id="product-panel" className="col-md-6">
              {products.map((product) => (
                <ProductCard key={product.id} product = {product} getData={getData} />
              ))}
            </article>
            <article className="col-md-4 m-3">
              <CardTotal />
            </article>
          </>
        )}
      </div>
    </div>
  );
};

export default ProductList;
