import React, { useState  } from 'react';
import Form from 'react-bootstrap/Form';
import ProgressBar from 'react-bootstrap/ProgressBar';
import womancard from '../Component/womancard';
import mancard from '../Component/mancard';
import HeelCard2 from '../Component/Heelcard2';
import Bagcard2 from '../Component/Bagcard2';
import Watchcard2 from '../Component/Watchcard2';
import Card from '../Component/Card';
import Cardman from '../Component/Cardman';
import HeelCard from '../Component/Heelcard';
import Bagcard from '../Component/Bagcard';
import Watchcard from '../Component/Watchcard';
import BestSell1 from '../img/watch4.png';
import BsetSell2 from '../img/handbag.png';
import Footer from "../Component/Footer"
import './Home.css';



const Shop = () => {
  
  const [showCategory, setShowCategory] = useState({
    womanHajib: false,
    manDress: false,
    heel: false,
    bag: false,
    watch: false,
  });

  const [minPrice, setMinPrice] = useState(1000);
  const [maxPrice, setMaxPrice] = useState(10000); 
  const [priceRange, setPriceRange] = useState(maxPrice);
  
  const handlePriceFilterChange = (e) => {
    const value = e.target.value;
    if (value === "1") {
      setMinPrice(1000);
      setMaxPrice(2000); 
    } else if (value === "2") {
      setMinPrice(3000);
      setMaxPrice(6000); 
    } else {
      setMinPrice(1000);
      setMaxPrice(9000);
    }
    setPriceRange(maxPrice);
  };

  const filterByPrice = (items) => {
    return items.filter((item) => item.Price >= minPrice && item.Price <= priceRange);
  };

  const toggleCategory = (category) => {
    setShowCategory(prevState => ({
      ...prevState,
      [category]: !prevState[category]
    }));
  };

  return (
    <div>
      <div className="container-fluid contact-main-section py-5">
        <div className="container">
          <div className="row py-5">
            <div className="align-item-center">
              <h1 className="text-light fw-bold mb-4 text-center mt-3">Shop</h1>
              <p className="text-light mb-4 text-center mt-3">
                Hath after appear tree great fruitful green dominion
                <br /> moveth sixth abundantly image that midst
                <br /> of god day multiply you’ll which
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="container mt-4 p-4">
        <div className="row">
          <div className="col-9">
            <h1>Shop</h1>
           
            <div className="col">
              <Form.Select aria-label="Default select example" onChange={handlePriceFilterChange}>
                <option value="0">Select Your range</option>
                <option value="1" className='p-3'>Short by Price: low to high</option>
                <option value="2" className='p-3'>Short by Price: high to low</option>
              </Form.Select>
            </div>

           


            {/* Toggle section for Woman Hijab style */}
            {showCategory.womanHajib && (
              <div className="container woman dresss">
                 <p className='card p-2'>
              Showing {showCategory.womanHajib ? filterByPrice(womancard).length : 0} of {womancard.length} results
            </p>
                <div className="row">
                  {filterByPrice(womancard).map((womandresscard, cardIndex) => (
                    <div key={cardIndex} className="col-md-4 col-lg-4 p-3 py-4 wow fadeIn" data-wow-delay="0.1s">
                      <Card
                        ProductId={parseInt(womandresscard.ProductId)}
                        Productimg={womandresscard.Productimg}
                        ProductName={womandresscard.ProductName}
                        Price={womandresscard.Price}
                        quantity={womandresscard.quantity}
                        variations={womandresscard.variations}
                        color={womandresscard.color}
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Toggle section for Man Dress */}
            {showCategory.manDress && (
              <div className="container man dresss">
                 <p className='card p-2'>
              Showing {showCategory. manDress ? filterByPrice(mancard).length : 0} of {mancard.length} results
            </p>
                <div className="row">
                  {filterByPrice(mancard).map((mandresscard, cardIndex) => (
                    <div key={cardIndex} className="col-md-4 col-lg-4 p-3 py-4 wow fadeIn" data-wow-delay="0.1s">
                      <Cardman
                        ProductId={mandresscard.ProductId}
                        Productimg={mandresscard.Productimg}
                        ProductName={mandresscard.ProductName}
                        Price={mandresscard.Price}
                        quantity={mandresscard.quantity}
                        variations={mandresscard.variations}
                        color={mandresscard.color}
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Toggle section for Heels */}
            {showCategory.heel && (
              <div className="container heel">
                 <p className='card p-2'>
              Showing {showCategory. heel ? filterByPrice(HeelCard2).length : 0} of {HeelCard2.length} results
            </p>

                <div className="row">
                  {filterByPrice(HeelCard2).map((heeldresscard, cardIndex) => (
                    <div key={cardIndex} className="col-md-4 col-lg-4 p-3 py-4 wow fadeIn" data-wow-delay="0.1s">
                      <HeelCard
                        ProductId={heeldresscard.ProductId}
                        Productimg={heeldresscard.Productimg}
                        ProductName={heeldresscard.ProductName}
                        Price={heeldresscard.Price}
                        quantity={heeldresscard.quantity}
                        variations={heeldresscard.variations}
                        color={heeldresscard.color}
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Toggle section for Bags */}
            {showCategory.bag && (
              <div className="container bag">
                  <p className='card p-2'>
              Showing {showCategory. bag ? filterByPrice(Bagcard2).length : 0} of {Bagcard2.length} results
            </p>
                <div className="row">
                  {filterByPrice(Bagcard2).map((bagCard, cardIndex) => (
                    <div key={cardIndex} className="col-md-4 col-lg-4 p-3 py-4 wow fadeIn" data-wow-delay="0.1s">
                      <Bagcard
                        ProductId={bagCard.ProductId}
                        Productimg={bagCard.Productimg}
                        ProductName={bagCard.ProductName}
                        Price={bagCard.Price}
                        quantity={bagCard.quantity}
                        variations={bagCard.variations}
                        color={bagCard.color}
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Toggle section for Watches */}
            {showCategory.watch && (
              <div className="container watch">
                  <p className='card p-2'>
              Showing {showCategory. watch ? filterByPrice(Watchcard2).length : 0} of {Watchcard2.length} results
            </p>

                <div className="row">
                  {filterByPrice(Watchcard2).map((watchCard, cardIndex) => (
                    <div key={cardIndex} className="col-md-4 col-lg-4 p-3 py-4 wow fadeIn" data-wow-delay="0.1s">
                      <Watchcard
                        ProductId={watchCard.ProductId}
                        Productimg={watchCard.Productimg}
                        ProductName={watchCard.ProductName}
                        Price={watchCard.Price}
                        quantity={watchCard.quantity}
                        variations={watchCard.variations}
                        color={watchCard.color}
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          <div className="col custom-border-left">
            <h2 className="text-right mt-2 mb-4">Categories</h2>
           
            <ul className="list-unstyled p-1 custom-border-tag ">
              <li className="mb-4 fw-bold" onClick={() => toggleCategory('womanHajib')}>Woman Hijab style</li>
              <hr className='custom-border-hr'/>
              <li className="mb-4 fw-bold" onClick={() => toggleCategory('manDress')}>Shirt Man</li>
              <hr className='custom-border-hr'/>
              <li className="mb-4 fw-bold" onClick={() => toggleCategory('heel')}>Heels</li>
              <hr className='custom-border-hr'/>
              <li className="mb-4 fw-bold" onClick={() => toggleCategory('bag')}>Bags</li>
              <hr className='custom-border-hr'/>
              <li className="mb-4 fw-bold" onClick={() => toggleCategory('watch')}>Watch</li>
            </ul>
            <div>
              <h3 className="mt-2">Filter by price</h3>
              <div className="col mb-4 mt-3">
                <Form.Label>Price Range: Rs{minPrice} - Rs{priceRange}</Form.Label>
                <ProgressBar now={(priceRange / maxPrice) * 1000} label={`Rs-1000-->9000`} className='d-grid' />
                <Form.Range
                  min={minPrice}
                  max={maxPrice}
                  value={priceRange}
                  onChange={(e) => setPriceRange(Number(e.target.value))}
                  className="mt-3 d-grid"
                />
              </div>
              <div className="mt-4 d-grid">
                <button className="btn btn-danger" onClick={handlePriceFilterChange}>Filter</button>
              </div>

              <div className='row p-2 mt-4'>
                <div className='col'>
                  <img src={BestSell1} className='img-fluid' style={{ width: '50px', height: '50px' }}/>
                </div>
                <div className='col'>
                  <p>Hand Watch: Rs 1000 </p>
                </div>
              </div>

              <div className='row p-2'>
                <div className='col'>
                  <img src={BsetSell2} className='img-fluid' style={{ width: '50px', height: '50px' }}/>
                </div>
                <div className='col'>
                  <p>Hand bag: Rs 1000 </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default Shop;
