import { useState } from "react";
import React from 'react';
import { useCartContext1 } from '../pages/Cart__Context';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import CartToggle from "./CartToggle";

const CardItem = ({ ProductId, Productimg, Price, ProductName, selectedColor, quantity, amount }) => {
    const { removeItem , setDecrement , setIncrement } = useCartContext1();
   

    return (
        <tr>
            <td>
                <div className='row'>
                    <div className='col-2'>
                        <img src={Productimg} alt={ProductName} style={{ width: '70px', height: '70px' }} />
                    </div>
                    <div className='col-7 mt-3'>
                        <p>{ProductName} :
                            <span className="color-style" style={{ backgroundColor: selectedColor , color: selectedColor }}>{selectedColor}</span>
                        </p>
                    </div>
                </div>
            </td>
            <td>{Price}</td>
            <td>
                <CartToggle
                    amount={amount}
                    setIncrement={() => setIncrement(ProductId)}
                    setDecrement={() => setDecrement(ProductId)}
                />
            </td>
            <td>{Price * amount}</td>
            <td>
                <div className="row">
                    <div className="col">
                        <FontAwesomeIcon icon={faTrashAlt} style={{ color: 'red', fontSize: '24px' }} onClick={() => removeItem(ProductId)} />
                    </div>
                </div>
            </td>
        </tr>
    );
};

export default CardItem;
