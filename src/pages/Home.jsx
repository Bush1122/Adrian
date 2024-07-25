import { Carousel } from 'react-bootstrap';
import img2 from '../img/hajb3.png';
import img3 from '../img/hajib15.png';
import Watch from '../img/watch3.png';
import Hand from '../img/handbag.png';
import Sandle from '../img/sandle.png';
import hajib from '../img/1hajib.png';
import hajib2 from '../img/2hajb.png';
import hajib3 from '../img/4hajb.png';
import BestSell1 from '../img/watch4.png';
import BsetSell2 from '../img/handbag.png';
import BestSell3 from '../img/bag2.png';
import BestSell4 from '../img/watch3.png'
import { Link } from 'react-router-dom';
import img4 from '../img/hajib12.png';
import Footer from "../Component/Footer"



import './Home.css';

const Home = () => {
  
  return (
    <div>
      <div className="container-fluid home-page text-dark">
        <div className="row">
          <div className="col align-item-center p-4">
            <h4 className="text-danger fw-bold mb-0 mt-5 text-center p-4">
              Welcome to my Store
            </h4>
            <h1 className="text-light fw-bold display-1 text-center">
              Classic Style <span className='home-page-main'>hajib</span>
            </h1>
            <div className='mt-4 py-3 d-flex justify-content-center'>
              <Link to="/shop"><button type="button" className="btn btn-danger">Shop Now</button></Link>
            </div>
          </div>
          <div className="col align-item-center">
            <img src={img3} className='img-fluid' alt="Image 1" style={{ width: '100%', height: '100%' }}/>
          </div>
        </div>
      </div>

      <div className="container-fluid mt-4 p-4">
        <div className="container mb-0">
          <div className="row">
            <div className="col-md-4 col-lg-4 wow fadeIn" data-wow-delay="0.1s">
              <div className='row mt-4 p-2 main-session-card-border'>
                <div className='col'>
                  <img src={Watch} style={{ width: '130px', height: '130px' }} alt="Watch"/>
                </div>
                <div className='col main-session-card'>
              



                  <h6 className="mb-3 text-light fw-bold">Stylish Leather watch</h6>
                  <p className="mb-0 text-light fw-bold">Up to 50% off</p>
                  <Link to="/shop"  className='homeshopnow'> <h5 className='text-danger mt-2 fw-bold homeshopnow'>Shop Now</h5></Link>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-lg-4 wow fadeIn" data-wow-delay="0.3s">
              <div className='row mt-4 main-session-card-border p-2'>
                <div className='col'>
                  <img src={Hand} style={{ width: '130px', height: '130px' }} alt="Handbag"/>
                </div>
                <div className='col'>
                  <h6 className="mb-3 text-light fw-bold">Stylish Leather bag</h6>
                  <p className="mb-0 text-light fw-bold">Up to 50% off</p>
                  <Link to="/shop"  className='homeshopnow'> <h5 className='text-danger mt-2 fw-bold homeshopnow'>Shop Now</h5></Link>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-lg-4 wow fadeIn" data-wow-delay="0.5s">
              <div className='row mt-4 main-session-card-border p-2'>
                <div className='col'>
                  <img src={Sandle} style={{ width: '130px', height: '130px' }} alt="Sandle"/>
                </div>
                <div className='col'>
                  <h6 className="mb-3 fw-bold text-light">Stylish Leather Sendel</h6>
                  <p className="mb-0 text-light fw-bold">Up to 50% off</p>
                  <Link to="/shop"  className='homeshopnow'> <h5 className='text-danger mt-2 fw-bold homeshopnow'>Shop Now</h5></Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container my-5 py-4">
        <div className="row">
          <div className="col d-flex flex-column justify-content-center align-items-center h-100">
            <h2 className="fs-1 fw-bold text-center">New Arrivals</h2>
            <h4 className="mt-1 text-center">We Are A Modern Shopping Center In The Center Of The City</h4>
          </div>
        </div>
      </div>

      <div className='container'>
        <div className="row mt-5 py-4">
          <div className="col-md-6 col-lg-4 py-2 mb-4 wow fadeIn" data-wow-delay="0.1s">
            <div className="feature-item">
            <div class=" mb-4  " >
                      
                        <img src={hajib} className='img-fluid '  style={{ width: '100%', height: '100%'}}/>
                        </div>
                          <div className='p-3'>
                          <h5 className="mb-2">Summer Allure Hijabs - Pearl</h5>
                        <span className="mt-2 fw-bold text-danger"> Rs.1,090</span>
                    </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-4 wow fadeIn py-2 mb-4" data-wow-delay="0.3s">
            <div className="feature-item">
            <div class=" mb-4  " >
                      
                      <img src={hajib2} className='img-fluid '  style={{ width: '100%', height: '100%'}}/>
                      </div>
                        <div className='p-3'>
                        <h5 className="mb-2">Summer Allure Hijabs - Pearl</h5>
                      <span className="mt-2 fw-bold text-danger"> Rs.1,290.00 </span>
                  </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-4 wow fadeIn py-2 mb-4" data-wow-delay="0.5s">
            <div className="feature-item">
            <div class=" mb-4  " >
                      
                      <img src={hajib3} className='img-fluid '  style={{ width: '100%', height: '100%'}}/>
                      </div>
                        <div className='p-3'>
                        <h5 className="mb-2">Summer Allure Hijabs - Pearl</h5>
                      <span className="mt-2 fw-bold text-danger"> Rs.1,290.00 </span>
                  </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid main-session-card-3 mb-5 mt-5 p-4">
        <div className="container my-5 py-4 mt-4">
          <div className="row">
            <div className="col d-flex flex-column justify-content-center align-items-center">
              <h5 className="fs-1 fw-bold text-center text-danger">Trendy Suit</h5>
              <h4 className="mt-3 text-center fw-bold text-light">Come & Experience Our Best Of World Class Cuisine</h4>
              <p className="mt-3 text-center fw-bold text-light">Hurry up! Limited time offer. Grab it now!</p>
              <div className="mt-4">
                <Link to="shop"  className='homeshopnow'><button type="button" className="btn btn-outline-danger btn-lg fw-bold">Shop Now</button></Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='container-fluid mb-5 mt-5 p-4'>
        <div className='row'>
          <div className='col-3'>
            <img src={hajib} className='img-fluid' alt="Image 4" style={{ width: '100%', height: '100%'}}/>
          </div>
          <div className='col'>
          <h2>Best selllers</h2>
          <hr className="home-hr"/>


          <div className='row p-4'>
            <div className='col'>
            <img src={BestSell4} className='img-fluid '  style={{ width: '100px', height: '100px'}}/>

            </div>
            <div className='col'>
                <h6>Hand Watch </h6>
                <p className='text-danger'>
                    Rs 1000 </p>
                    <Link to="/shop"  className='homeshopnow'> <h5 className='text-danger mt-2 fw-bold homeshopnow'>Shop Now</h5></Link>

            </div>

          </div>


          <div className='row p-4' >
            <div className='col'>
            <img src={BestSell1} className='img-fluid '  style={{ width: '100px', height: '100px'}}/>

            </div>
            <div className='col'>
                <h6>Hand watch </h6>
                <p className='text-danger'>
                    Rs 1000 </p>
                    <Link to="/shop" className='homeshopnow'> <h5 className='text-danger mt-2 fw-bold homeshopnow'>Shop Now</h5></Link>

            </div>

          </div>




          
          </div>
          <div className='col'>
          <h2>Best New Arrivals</h2>
          <hr className="home-hr"/>
          <div className='row p-4'>
            <div className='col'>
            <img src={BsetSell2} className='img-fluid '  style={{ width: '100px', height: '100px'}}/>

            </div>
            <div className='col'>
            <h6>Hnad Bag </h6>
                <p className='text-danger'>
                    Rs 1000 </p>
                    <Link to="/shop" className='homeshopnow'> <h5 className='text-danger mt-2 fw-bold homeshopnow'>Shop Now</h5></Link>


            </div>

          </div>

          <div className='row p-4' >
            <div className='col'>
            <img src={BestSell3} className='img-fluid '  style={{ width: '100px', height: '100px'}}/>

            </div>
            <div className='col'>
                <h6>Hand Bag </h6>
                <p className='text-danger'>
                    Rs 1000 </p>
                    <Link to="/shop" className='homeshopnow'> <h5 className='text-danger mt-2 fw-bold homeshopnow'>Shop Now</h5></Link>

            </div>

          </div>
          
          </div>
      
          </div>
          
        </div>

        <Footer/>
      </div>
    
  );
};

export default Home;
