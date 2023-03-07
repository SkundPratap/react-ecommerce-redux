import React from "react";
import { useSelector } from "react-redux";

export const OrderConfirmationPage = () => {
  const { cart, totalQuantity, totalPrice, userName, userAddress, userEmail } =
    useSelector((state) => state.allCart);
    const gradient = 'linear-gradient(45deg, #00ff00, #00cc00)'; // Green gradient

  return (
    <div>
      <h1 className="orderConfirmationHeading">Order Confirmation Page</h1>
      <div>
        <section className="h-100 gradient-green">
          <div className="container py-5">
            <div className="row d-flex justify-content-center my-4">
              <div className="col-md-8">
                <div className="card mb-4">
                  <div className="card-header py-3">
                    <h5 className="mb-0">Cart - {cart.length} items</h5>
                  </div>
                  <div className="card-body">
                    {cart?.map((data) => (
                      <div className="row">
                        <div className="col-lg-3 col-md-12 mb-4 mb-lg-0">
                          <div
                            className="bg-image hover-overlay hover-zoom ripple rounded"
                            data-mdb-ripple-color="light"
                          >
                            <img src={data.img} className="w-100" />
                          </div>
                        </div>

                        <div className="col-lg-5 col-md-6 mb-4 mb-lg-0">
                          <p>
                            <strong>{data.title}</strong>
                          </p>
                        </div>

                        <div className="col-lg-4 col-md-6 mb-4 mb-lg-0">
                          <div
                            className="d-flex mb-4"
                            style={{ maxWidth: "300px" }}
                          >
                            <strong>${data.price}</strong>
                          </div>
                        </div>
                        <hr className="my-4" />
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="col-md-4">
                <div className="card mb-4">
                  <div className="card-header py-3">
                    <h5 className="mb-0">Summary</h5>
                  </div>
                  <div className="card-body">
                    <ul className="list-group list-group-flush">
                      <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                        Total Quantity
                        <span>{totalQuantity}</span>
                      </li>

                      <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 mb-3">
                        <div>
                          <strong>Total amount</strong>
                        </div>
                        <span>
                          <strong>${totalPrice}</strong>
                        </span>
                      </li>
                    </ul>
                  </div>

                  <div className="card-header py-3">
                    <h5 className="mb-0">Your deatils</h5>
                  </div>

                  <div className="card-body">
                    <ul className="list-group list-group-flush">
                      <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                        {userName}
                      </li>

                      <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                        {userEmail}
                      </li>
                      <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                        {userAddress}
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};
