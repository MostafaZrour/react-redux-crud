import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../products/ProductAction";

export default function Products() {
  const productsData = useSelector((state) => state.productReducer);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProducts());
  }, []);
  return (
    <div>
      {productsData.loading && (
        <div className="row row-cols-1 row-cols-md-3 g-4 mt-4">
          {Array.from({ length: 3 }).map((_, index) => (
            <div className="col" key={index}>
              <div className="card" aria-hidden="true">
                <div
                  className="card-img-top placeholder"
                  style={{ height: "200px", background: "#e9ecef" }}
                ></div>
                <div className="card-body">
                  <h5 className="card-title placeholder-glow">
                    <span className="placeholder col-6"></span>
                  </h5>
                  <p className="card-text placeholder-glow">
                    <span className="placeholder col-7"></span>
                    <span className="placeholder col-4"></span>
                    <span className="placeholder col-4"></span>
                    <span className="placeholder col-6"></span>
                    <span className="placeholder col-8"></span>
                  </p>
                  <a
                    className="btn btn-primary disabled placeholder col-6"
                    aria-disabled="true"
                  ></a>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
      {productsData.error && (
        <div className="alert alert-danger" role="alert">
          Failed to fetch products
        </div>
      )}

      {productsData.products && (
        <div className="row row-cols-1 row-cols-md-3 g-4 mt-4">
          {productsData.products.map((pr, index) => (
            <div className="col" key={index}>
              <div className="card h-100">
                <img
                  src={pr.image}
                  className="card-img-top m-auto p-2"
                  alt={pr.title}
                  style={{ height: "300px" , width : "80%"}}
                />
                <div className="card-body">
                  <h5 className="card-title">{pr.title}</h5>
                  <p className="card-text text-truncate">{pr.description}</p>
                </div>
                <div className="card-footer">
                  <p className="text-muted mb-0">Category: {pr.category}</p>
                  <p className="text-dark fw-bold mb-0">Price: ${pr.price}</p>
                  <small className="text-warning">
                    Rating: {pr.rating.rate} ({pr.rating.count} reviews)
                  </small>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
