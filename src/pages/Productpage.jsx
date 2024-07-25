import React, { useState, useEffect } from 'react';
import { useCartContext } from './CartContext';
import Footer from "../Component/Footer"
import AddTocart from '../Component/AddTocart';
import './Home.css';

const ProductPage = () => {
  const { selectedProduct } = useCartContext();
  
  
  const [currentImage, setCurrentImage] = useState(selectedProduct?.Productimg || '');

  // useEffect to update currentImage when selectedProduct changes
  useEffect(() => {
    if (selectedProduct) {
      setCurrentImage(selectedProduct.Productimg);
    }
  }, [selectedProduct]);

  // Check if selectedProduct is null or undefined
  if (!selectedProduct) {
    return <div>
      <h1 className='mt-4 text-center py-4 p-4'> No product selected</h1> </div>;
  }

  const {
    ProductId,
    Productimg,
    ProductName,
    Price,
    quantity,
    variations,
    color
  } = selectedProduct;

  const handleVariationClick = (variation) => {
    setCurrentImage(variation);
  };

  return (
    <div>
      <div className="container-fluid contact-main-section py-5">
        <div className="container">
          <div className="row py-5">
            <div className="col align-item-center">
              <h1 className="text-light fw-bold mb-4 text-center mt-3">Single Product</h1>
              <p className="text-light mb-4 text-center mt-3">
                Hath after appear tree great fruitful green dominion<br/>
                moveth sixth abundantly image that midst<br/>
                of god day multiply you’ll which
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="container mt-4">
        <div className="row">
          <div className="col">
            <img src={currentImage} alt={ProductName} className="img-fluid" style={{ width: '340px', height: '370px' }} />
            <div>
              <div className="d-flex mt-3">
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
                     
                      style={{ width: '170px', height: '200px', opacity: 0.5 }}
                      alt={`variation-${index}`}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className='col'>
            <h3>{ProductName}</h3>
            <hr/>
            <p className='fw-bold'>Product ID <span className='text-danger'>#{ProductId}</span></p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum ipsum dicta quod, quia doloremque aut deserunt commodi quis. Totam a consequatur beatae nostrum, earum consequuntur? Eveniet consequatur ipsum dicta recusandae.</p>
            <h3>Rs.{Price}</h3>

            <hr/>

            {quantity > 0 && <AddTocart product = {selectedProduct}/>} 

            
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default ProductPage;
