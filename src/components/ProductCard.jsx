import axios from "axios";
import React from "react";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ product, getData }) => {
  const { id, name, price, dampingRate, amount, image } = product;
  const navigate = useNavigate();
  const handleMinus = async (id) => {
    if (Number(amount) > 1) {
      await axios.put(
        `https://63f4e5583f99f5855db9e941.mockapi.io/products/${id}`,
        { ...product, amount: Number(amount) - 1 }
      ); //...pruduct  diger verileri al
      getData();
    } else {
      handleRemove();
    }
  };
  const handlePlus = async () => {
    await axios.put(
      `https://63f4e5583f99f5855db9e941.mockapi.io/products/${id}`, //id zaten aliyor
      { ...product, amount: Number(amount) + 1 }
    ); //...pruduct  diger verileri al
    getData();
  };
  const handleRemove = async () => {
    await axios.delete(
      `https://63f4e5583f99f5855db9e941.mockapi.io/products/${id}`
    );
    getData();
  };

  return (
    <div className="card shadow-lg mb-3">
      <div className="row g-0">
        <div className="col-md-5">
          <img
            src={image}
            className="w-100 h-100 rounded-start"
            alt={"name"}
            title={""}
          />
        </div>
        <div className="col-md-7">
          <div className="card-body">
            <h5
              className="card-title"
              role="button"
              onClick={() =>
                navigate("/update-product", { state: { product } })
              }
            >
              {name}
            </h5>
            <div className="product-price d-flex flex-wrap align-items-center">
              <span className="damping-price text-warning h2">
                $ {(price * dampingRate).toFixed(2)}
              </span>
              <span className="h5 text-dark text-decoration-line-through ms-2">
                {" "}
                {parseFloat(price).toFixed(2)}
              </span>
            </div>
            <div className="border border-1 border-dark shadow-lg d-flex justify-content-center p-2">
              <div className="quantity-controller">
                <button className="btn btn-secondary btn-sm">
                  <i
                    className="fas fa-minus"
                    onClick={() => handleMinus(id)}
                  ></i>
                </button>
                <p className="d-inline mx-4" id="product-quantity">
                  {amount}
                </p>
                <button
                  className="btn btn-secondary btn-sm"
                  onClick={handlePlus}
                >
                  <i className="fas fa-plus"></i>
                </button>
              </div>
            </div>
            <div className="product-removal mt-4">
              <button
                className="btn btn-danger btn-sm w-100 remove-product"
                onClick={handleRemove}
              >
                <i className="fa-solid fa-trash-can me-2"></i>Remove
              </button>
            </div>
            <div className="mt-2">
              Product Total: $
              <span className="product-line-price">
                {(price * dampingRate * amount).toFixed(2)}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
