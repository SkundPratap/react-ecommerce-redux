import { AddressBook } from "phosphor-react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  getCartTotal,
  removeItem,
  decreaseItemQuantity,
  increaseItemQuantity,
  updateUserName,
  updateUserAddress, 
  updateUserEmail,
} from "../redux/cartUpdate";

import React, { useState } from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBInput, MDBIcon } from 'mdb-react-ui-kit';

const CartPage = () => {
  const { cart, totalQuantity, totalPrice,userName,userAddress, userEmail } = useSelector(
    (state) => state.allCart
  );

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [couponCode, setCouponCode] = useState('');

  let navigate = useNavigate();
  const routeChange = () => {
    let path = "/orderconfirmation"; 
    const emailRegex = /^\S+@\S+$/i;
    var {validName, validAdd, validEmail} = false; 
    if (name.trim().length > 3)
    {
        validName= true;
    }
    else {
        validName = false;
    }
    
    if (address.trim().length > 6){
        validAdd = true;
    }
    else{
        validAdd = false;
    }
    validEmail = emailRegex.test(email);
    
    if (validAdd && validEmail && validName){
        dispatch(updateUserName(name));
        dispatch(updateUserAddress(address));
        dispatch(updateUserEmail(email));
        navigate(path);
    }
    else {
        alert('Please check your data that you have entered')
    }
  }
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCartTotal());
  }, [cart]);

  
    return (
        <div>
        <div>
          <section className="h-100 gradient-custom">
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
                              <img
                                src={data.img}
                                className="w-100"
                              />
                            </div>
                          </div>
    
                          <div className="col-lg-5 col-md-6 mb-4 mb-lg-0">
                            <p>
                              <strong>{data.title}</strong>
                            </p>
    
                            <button
                              type="button"
                              className="btn btn-primary btn-sm me-1 mb-2"
                              data-mdb-toggle="tooltip"
                              title="Remove item"
                              onClick={() => dispatch(removeItem(data.id))}
                            >
                              <i className="fas fa-trash"></i>
                            </button>
                          </div>
    
                          <div className="col-lg-4 col-md-6 mb-4 mb-lg-0">
                            <div
                              className="d-flex mb-4"
                              style={{ maxWidth: "300px" }}
                            >
                              <button
                                className="btn btn-primary px-3 me-2"
                                onClick={() =>
                                  dispatch(decreaseItemQuantity(data.id))
                                }
                              >
                                <i className="fas fa-minus"></i>
                              </button>
    
                              <div className="form-outline">
                                <input
                                  id="form1"
                                  min="0"
                                  name="quantity"
                                  value={data.quantity}
                                  type="number"
                                  className="form-control"
                                  onChange={() => null}
                                />
                              </div>
    
                              <button
                                className="btn btn-primary px-3 ms-2"
                                onClick={() =>
                                  dispatch(increaseItemQuantity(data.id))
                                }
                              >
                                <i className="fas fa-plus"></i>
                              </button>
                            </div>
    
                            <p className="text-start text-md-center">
                              <strong>${data.price}</strong>
                            </p>
                          </div>
                          <hr className="my-4" />
                        </div>
                      ))}
                    </div>
                    <div>
                    <div className="card-header py-3">
                      <h5 className="mb-0">Address and Coupon</h5>
                    </div>
                    <form>
            <div className="grey-text">
            <MDBInput
                    label="Your name"
                    icon="user"
                    group
                    type="text"
                    validate
                    error="wrong"
                    success="right"
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                  />
                  <br/>
                  <MDBInput
                    label="Your email"
                    icon="envelope"
                    group
                    type="email"
                    validate
                    error="wrong"
                    success="right"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                  />
                  <br/>
                  <MDBInput
                    label="Your address"
                    icon="home"
                    group
                    type="text"
                    validate
                    error="wrong"
                    success="right"
                    value={address}
                    onChange={(event) => setAddress(event.target.value)}
                  />
                  <br/>
                  <MDBInput
                    label="Coupon Code"
                    icon="user"
                    group
                    type="text"
                    validate
                    error="wrong"
                    success="right"
                    value={couponCode}
                    onChange={(event) => setCouponCode(event.target.value)}
                  />
            </div>
          </form>
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
    
                      <button
                        type="button"
                        className="btn btn-primary btn-lg btn-block"
                        onClick={routeChange}
                      >
                        Go to checkout
                      </button>
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
    
    export default CartPage;