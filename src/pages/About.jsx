import Dohpath1 from '../img/Designer.png';
import Dohpath2 from '../img/Desinger2.png';
import Dohpath3 from '../img/Desinger4.png';
import Footer from "../Component/Footer"
import './Home.css';
const About = () => {
    return (
      <div>
         <div className="container-fluid   contact-main-section py-5">
          <div className="container">
            <div className="row py-5">
              <div className="  align-item-center">
                <h1 className="text-light fw-bold mb-4 text-center mt-3">
                   About Us
                </h1>
                <p  className="text-light  mb-4 text-center mt-3">Hath after appear tree great fruitful green dominion<br/>moveth sixth abundantly image that midst<br/> of god day multiply you’ll which</p>
              </div>
            </div>
          </div>
       
      </div>


      <div className='container'>
        <div className="row mt-5 py-4">
          <div className="col-md-6 col-lg-4  p-2  wow fadeIn " data-wow-delay="0.1s">
            <div className="feature-item">
            <div class="mb-4 " >
                        <img src={Dohpath1} className='img-fluid '  style={{ width: '100%', height: '100%'}}/>
                        </div>
                          <div className='p-3'>
                          <h5 className="mb-2">Statement</h5>
                        <span className="mt-2  "> Praesent blandit dolorhon quam. In vemi sit amet augue congue elementum. Morbi in ipsum sit amet pede facilisis laoreet. </span>
                    </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-4  p-2  wow fadeIn  " data-wow-delay="0.3s">
            <div className="feature-item">
            <div class=" mb-4  " >
                      
                      <img src={Dohpath2} className='img-fluid '  style={{ width: '100%', height: '100%'}}/>
                      </div>
                        <div className='p-3'>
                        <h5 className="mb-2">Our Vission</h5>
                      <span className="mt-2  "> Lights together to you’re together. You’ll. Form. Moving created one. Darkness whales fourth from own moved. </span>
                  </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-4  p-2 wow fadeIn " data-wow-delay="0.5s">
            <div className="feature-item">
            <div class=" mb-4  " >
                      
                      <img src={Dohpath3} className='img-fluid '  style={{ width: '100%', height: '100%'}}/>
                      </div>
                        <div className='p-3'>
                        <h5 className="mb-2">Our Mission</h5>
                      <span className="mt-2  ">Praesent blandit dolorhon quam. In vemi sit amet augue congue elementum. Morbi in ipsum sit amet pede facilisis.</span>
                  </div>
            </div>
          </div>
        </div>
      </div>
      <Footer/>

      </div>
    )
  };
  
  export default About;