import React from 'react';
import { useState ,useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useCartContext1 } from './Cart__Context';

import { useAuth0 } from "@auth0/auth0-react";
import Footer from "../Component/Footer"

const Confirmation = () => {
  const location = useLocation();
  const selectedDate = location.state?.selectedDate;
  const { cart, totalAmount, shippingfee } = useCartContext1();
  const { isAuthenticated, user } = useAuth0();
  const [orderNumber, setOrderNumber] = useState(0);


  useEffect(() => {
    setOrderNumber((prevOrderNumber) => prevOrderNumber + 1);
  }, []);


  return (
    <div>
      <div className="container-fluid   contact-main-section py-5">
        <div className="container">
          <div className="row py-5">
            <div className="align-item-center">
              <h1 className="text-light fw-bold mb-4 text-center mt-3">
                Thank You
              </h1>
              <p className="text-light  mb-4 text-center mt-3">Hath after appear tree great fruitful green dominion<br />moveth sixth abundantly image that midst<br /> of god day multiply you’ll which</p>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <table className="table table-bordered table-hover mt-4 p-4">
          <thead className="thead-dark">
            <tr>
              <th>Order </th>
              <th>Date</th>
              <th>Email</th>
              <th>Total</th>
              <th>Cash on Delivery</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className='text-danger'>Order no :{orderNumber} </td>
             
              <td>
                <p>Selected Date: {selectedDate}</p>
              </td>
              <td>
                {isAuthenticated && (
                  <span className='mr-2 text-dark fs-5'>{user.email}</span>
                )}
              </td>
              <td>{totalAmount + shippingfee}</td>
              <td>Cash on Delivery</td>
            </tr>
          </tbody>
        </table>
      </div>
      <Footer/>
    </div>
  );
};

export default Confirmation;
