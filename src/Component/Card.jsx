import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { useCartContext } from '../pages/CartContext';
import './card.css';

const Card = ({ ProductId, ProductName, Productimg, Price, color, quantity, variations }) => {
    const { addToCart, selectProduct } = useCartContext();
    const [currentImage, setCurrentImage] = useState(Productimg);

    const handleVariationClick = (variation) => {
        setCurrentImage(variation);
    };

    const handleAddToCart = () => {
        const item = { ProductId, Productimg: currentImage, ProductName, Price, quantity, variations, color };
        addToCart(item);
        console.log(item);
    };

    const handleProductClick = () => {
        const product = { ProductId, Productimg: currentImage, ProductName, Price, quantity, variations, color };
        selectProduct(product);
    };

    return (
        <div className="feature-item">
            <div className="position-relative mb-4">
                <img
                    src={currentImage}
                    className='img-fluid'
                    style={{ width: '250px', height: '300px' }}
                    alt={ProductName}
                />
                
                <div className="d-grid">
                    <Link to="/productpage" className="d-grid button_products" onClick={handleProductClick}>
                        <button className="text-danger btn btn-dark">
                            <FontAwesomeIcon className="ml-4" icon={faCartPlus} /> Add to Cart
                        </button>
                    </Link>
                </div>
            </div>
            <div className="d-flex mt-2">
                {variations && variations.map((variation, index) => (
                    <div
                        key={index}
                        className="position-relative mr-2"
                        onClick={() => handleVariationClick(variation)}
                        style={{ cursor: 'pointer' }}
                    >
                        <img
                            src={variation}
                            className="img-thumbnail"
                            style={{ width: '50px', height: '50px' }}
                            alt={`variation-${index}`}
                        />
                    </div>
                ))}
            </div>
            <div className='p-3'>
                <p className="mb-2">{ProductName}</p>
                <span className="mt-2 fw-bold text-danger"> Rs.{Price}</span>
            </div>
        </div>
    );
};

Card.propTypes = {
    ProductId: PropTypes.number.isRequired,
    ProductName: PropTypes.string.isRequired,
    Productimg: PropTypes.string.isRequired,
    Price: PropTypes.number.isRequired,
    color: PropTypes.arrayOf(PropTypes.string).isRequired,
    quantity: PropTypes.number.isRequired,
    variations: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Card;
