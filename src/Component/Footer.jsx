
import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faMobileAlt, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import {Link} from 'react-router-dom';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import './card.css';

const Footer = () => {


return(
    <div>

<div class="container-fluid  footer-main-section  mt-5  wow fadeIn" data-wow-delay="0.1s">
   
            <div class="container ">
                <div class="row g-5">


                <div class="col-lg-4 col-md-5 mb-2">
                        <h4 className="text-white mb-4">ABOUT</h4>


                        <small className="mb-1 text-white">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet, nam!.</small>
                        <div className="row p-3 mt-3">
                        <div className="col-2">  <FontAwesomeIcon icon={faFacebook} size="lg" color="#1DA1F2" className=" FontAwesomeIcon-chef"/></div>
                        <div className="col-2"><FontAwesomeIcon icon={faLinkedin} size="lg" color="#007bff" className=" FontAwesomeIcon-chef"/></div>
                        <div className="col-2"> <FontAwesomeIcon icon={faTwitter} size="lg" color="#1DA1F2" className=" FontAwesomeIcon-chef" /></div>
                      </div>
                    </div>
                   
                    <div className="col-lg-4 col-md-5">
                        <h4 className="text-white mb-4 ">Opening Hours</h4>
                  <div className=" mt-4 text-light">
                   <h6 className="">Monday - Thursday</h6>
              <h6 className="">9.00-12.00</h6>
            </div>
            <div className="mt-4 py-2 text-light">
              <h6 className="">Friday - Sunday</h6>
              <h6 className="">2.00-8.00</h6>
            </div>

                    
                    </div>
                   
                    <div className="col-lg-4 col-md-8">
                        <h4 className="text-white mb-4">Contact Info</h4>
                        <p></p>
                        <div className="position-relative w-100">

                         <div className="row">
                            <div className="col-2 mt-1">
                            <FontAwesomeIcon icon={faMobileAlt} size="lg" color="#1DA1F2" className=" FontAwesomeIcon-chef" />
                            </div>
                            <div className="col text-light">
                           <h6>+1 987 654 3210</h6> 
                          </div>
             
                         </div>

                         <div className="row mt-4 mb-4">
                            <div className="col-2">
                            <FontAwesomeIcon icon={faEnvelope} size="lg" color="#1DA1F2" className=" FontAwesomeIcon-chef" />
                            </div>
                            <div className="col text-light">
                           <h6>  mail@support.com</h6> 
                          </div>
             
                         </div>
                    
                         <div className="row mt-4 mb-4">
                            <div className="col-2 mt-1">
                            <FontAwesomeIcon icon={faMapMarkerAlt}  size="lg" color="#1DA1F2" className=" FontAwesomeIcon-chef" />
                            </div>
                            <div className="col text-light">
                         <h6> 1234 Altschul, New York,NY 10027-0000</h6>  
                          </div>
             
                         </div>



                        </div>
                    </div>
                </div>
            </div>
        

      <div className="container">
          <div className="row">
            <div className="col-3"></div>
            <div className="col-6 justify-content-center">
               <p className=" text-light">Get Latest dress At Your Inbox</p>
               <div className=" justify-content-center  text-center">
               <input type="text" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1"/>
             </div>
           </div>
         </div>
        </div>
      
        <div className="container-fluid copyright  p-4 mt-3">
            <div className="container">
                <div className="row">
                    <div className="col-10 col-md-7 mt-4">
                        <a className="fw-medium text-white justify-content-center" href="#">Copyright © 2019 a theme by Adrian</a>

                    </div>
                </div>
            </div>
        </div>
    </div>
 </div>
   
   
    


)
};

export default Footer;