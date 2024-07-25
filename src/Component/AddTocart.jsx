import { useState } from "react";
import { FaCheck } from "react-icons/fa";
import CartToggle from "./CartToggle";
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { useCartContext1 } from '../pages/Cart__Context';

const AddToCart = ({ product }) => {
    const { addToCart } = useCartContext1();

    const { ProductId, color, quantity } = product;
   

    const [selectedColor, setSelectedColor] = useState(color[0]);
    const [amount, setAmount] = useState(1);

    const setIncrement = () => {
        amount < quantity ? setAmount(amount + 1) : setAmount(quantity);
    };

    const setDecrement = () => {
        amount > 1 ? setAmount(amount - 1) : setAmount(1);
    };

    const handleColorClick = (selected) => {
        setSelectedColor(selected);
    };

    return (
        <div className="row">
            <div className="col">
                <p>Colors:
                    {color.map((curColor, index) => (
                        <button
                            key={index}
                            style={{ backgroundColor: curColor }}
                            className={selectedColor === curColor ? "btn-style active" : "btn-style"}
                            onClick={() => handleColorClick(curColor)}
                        >
                            {selectedColor === curColor ? <FaCheck /> : null}
                        </button>
                    ))}
                </p>

                <CartToggle
                    amount={amount}
                    setIncrement={setIncrement}
                    setDecrement={setDecrement}
                />
                <div className="mt-2">
                    <Link to="/Cart" onClick={() => addToCart(ProductId, amount, product, selectedColor)}>
                        <button className="btn btn-danger">Add To Cart</button>
                    </Link>
                </div>
                <hr />
                <h6 className="mt-1">Categories <span className="text-danger">: Product, Soap</span></h6>
                <div className="row p-3">
                    <div className="col-1">
                        <FontAwesomeIcon icon={faFacebook} size="lg" color="#1DA1F2" className=" FontAwesomeIcon-chef" />
                    </div>
                    <div className="col-1">
                        <FontAwesomeIcon icon={faLinkedin} size="lg" color="#007bff" className=" FontAwesomeIcon-chef" />
                    </div>
                    <div className="col-1">
                        <FontAwesomeIcon icon={faTwitter} size="lg" color="#1DA1F2" className=" FontAwesomeIcon-chef" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddToCart;
