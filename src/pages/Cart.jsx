import React from 'react';
import { useCartContext1 } from './Cart__Context';
import CartItem from '../Component/CardItem';
import { useAuth0 } from "@auth0/auth0-react";
import { Link } from 'react-router-dom';
import Footer from "../Component/Footer"



const Cart = () => {
    const { cart, cleanItem, totalAmount, shippingfee } = useCartContext1();
    const { isAuthenticated, user } = useAuth0();

    return (
        <div>
            <div className="container-fluid contact-main-section py-5">
                <div className="container">
                    <div className="row py-5">
                        <div className="align-item-center">
                            <h1 className="text-light fw-bold mb-4 text-center mt-3">
                                Add To Cart
                            </h1>
                            <p className="text-light mb-4 text-center mt-3">
                                Hath after appear tree great fruitful green dominion
                                <br />
                                moveth sixth abundantly image that midst
                                <br />
                                of god day multiply you’ll which
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container mt-4 py-4">
                <div className="row">
                    <div className="col-md-12">
                    <h4 className="fw-bold text-danger mt-4 p-2">
                            {isAuthenticated && (
                                <div className="d-flex align-items-center">
                                    <img className="mr-2" src={user.picture} alt={user.name} style={{ width: '50px', height: '50px', borderRadius: '50%' }} />
                                    <span className='mr-2 text-dark fs-5'>: {user.name}</span>
                                </div>
                            )}
                        </h4>
                        <div style={{ overflowX: 'auto' }}>
                        <table className="table table-bordered table-hover mt-4">
                            <thead className="thead-dark">
                                <tr>
                                    <th>Product Detail</th>
                                    <th>Price</th>
                                    <th>Quantity</th>
                                    <th>Subtotal</th>
                                    <th>Operation</th>
                                </tr>
                            </thead>
                            <tbody>
                                {cart.map((item) => (
                                    <CartItem key={item.ProductId} {...item} />
                                ))}
                            </tbody>
                        </table>
                        </div>
                        <div className="d-flex justify-content-between">
                            <button className='btn btn-danger' onClick={cleanItem}>Clean the Cart</button>
                         <Link to="/checkout"> <button className='btn btn-danger'>Continue Shopping</button></Link>  
                        </div>
                    </div>
                </div>
                <div className='container'>
                    <div className="col-md-4  ">
                        <div className='card mt-2 p-3'>
                            <h5>Cart totals</h5>
                            <hr />
                            <h6>Subtotal: <span className='text-danger'> Rs.{totalAmount} </span></h6>
                            <hr />
                            <h6>Ship: Rs.{shippingfee}</h6>
                            <hr />
                            <h6>Total: <span className='text-danger'> Rs. {shippingfee + totalAmount}</span></h6>
                        </div>
                    </div>
                </div>
            </div>

            <Footer/>
        </div>
    );
};

export default Cart;
