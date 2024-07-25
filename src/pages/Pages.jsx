import React from 'react';
import Pagination from 'react-bootstrap/Pagination';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import MyPaginationComponent from '../Component/MyPaginationComponent';
import blog1 from '../img/blog-post-1.png';
import blog2 from '../img/blog-post-2.png';
import Footer from "../Component/Footer"

const Pages = () => {
  return (
    <div>
      <div className="container-fluid contact-main-section py-5">
        <div className="container">
          <div className="row py-5">
            <div className="align-item-center">
              <h1 className="text-light fw-bold mb-4 text-center mt-3">
                Latest News Single
              </h1>
              <p className="text-light mb-4 text-center mt-3">
                Hath after appear tree great fruitful green dominion
                <br /> moveth sixth abundantly image that midst
                <br /> of god day multiply you’ll which
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="container mt-4 py-4">
        <div className="row">
          <div className="col">
            <img src={blog1} className="img-fluid" style={{ width: '100%' }} />
            <h2 className="mt-2">How To Wear Bright Shoes</h2>
            <span className="text-danger">Admin</span> 20 mar 2020{' '}
            <span className="text-danger"> lifestyle, travel</span>
            <p className="mt-2">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit
              vitae placeat ad architecto nostrum asperiores vel aperiam, veniam
              eum nulla. Maxime cum magnam, adipisci architecto quibusdam cumque
              veniam fugiat quae. Lorem ipsum dolor sit amet, consectetur
              adipisicing elit. Odio vitae ab doloremque accusamus sit, eos
              dolorum officiis a perspiciatis aliquid. Lorem ipsum dolor sit
              amet, consectetur adipisicing elit. Quod, facere.
            </p>
            <h6 className="text-danger mt-4">CONTINUE READING</h6>
          </div>
          <div className="col">
            <img src={blog2} className="img-fluid" style={{ width: '100%' }} />
            <h2 className="mt-2">How To Wear Bright Shoes</h2>
            <span className="text-danger">Admin</span> 20 mar 2020{' '}
            <span className="text-danger"> lifestyle, travel</span>
            <p className="mt-2">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit
              vitae placeat ad architecto nostrum asperiores vel aperiam, veniam
              eum nulla. Maxime cum magnam, adipisci architecto quibusdam cumque
              veniam fugiat quae. Lorem ipsum dolor sit amet, consectetur
              adipisicing elit. Odio vitae ab doloremque accusamus sit, eos
              dolorum officiis a perspiciatis aliquid. Lorem ipsum dolor sit
              amet, consectetur adipisicing elit. Quod, facere.
            </p>
            <h6 className="text-danger mt-4">CONTINUE READING</h6>
          </div>
        </div>
      </div>
      <div className="d-flex justify-content-center p-4 ">
        <MyPaginationComponent /> 
      </div>
      <Footer/>
    </div>
  );
};

export default Pages;
