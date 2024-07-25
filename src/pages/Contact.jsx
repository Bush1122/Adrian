import React, { useState } from 'react';
import Footer from "../Component/Footer"

const Contact = () => {
  const initialFormData = {
    username: '',
    email: '',
    phone: '',
    message: ''
  };
  const [formData, setFormData] = useState(initialFormData);
  const [submitted, setSubmitted] = useState(false);
  const [comment, setComment] = useState('');

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);

    setTimeout(() => {
      setSubmitted(true);
      setComment('Thank you! Your message has been sent.');
    }, 1000);
  };

  const handleReset = () => {
    setFormData(initialFormData);
    setSubmitted(false);
    setComment('');
  };

  return (
    <div>
      <div className="container-fluid contact-main-section py-5">
        <div className="container">
          <div className="row py-5">
            <div className="d-flex d-sm-block flex-column align-item-center">
              <h1 className="text-light fw-bold mb-4 text-center mt-3">Contact Us</h1>
              <p className="text-light  mb-4 text-center mt-3">Hath after appear tree great fruitful green dominion<br/>moveth sixth abundantly image that midst<br/> of god day multiply you’ll which</p>
            </div>
          </div>
        </div>
      </div>
      <div className="container  mt-5">
        <div className="row mt-4">
          <div className="col d-flex flex-column justify-content-center align-items-center">
            <h5 className="fs-5 fw-bold   text-center text-danger">Contact us</h5>
            <h4 className="mt-3 text-center fw-bold text-dark fs-1 ">Get In Touch</h4>
            <div className="mt-4"></div>
          </div>
        </div>
      </div>
      <div className="container py-4">
        <div className="row justify-content-lg-center p-4">
          <div className="col-12 col-lg-9 p-4  mt-3 card">
            <div className="bg-white  ">
              {!submitted ? (
                <form onSubmit={handleSubmit}>
                  <div className="row gy-4 gy-xl-5 p-xl-5">
                    <div className="col-12">
                      <label htmlFor="fullname" className="form-label">Full Name <span className="text-danger">*</span></label>
                      <input
                        type="text"
                        className="form-control"
                        id="username"
                        name="username"
                        value={formData.username}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="col-12 col-md-6">
                      <label htmlFor="email" className="form-label">Email <span className="text-danger">*</span></label>
                      <div className="input-group">
                        <input
                          type="email"
                          className="form-control"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>
                    <div className="col-12 col-md-6">
                      <label htmlFor="phone" className="form-label">Phone Number</label>
                      <div className="input-group">
                        <input
                          type="phone"
                          className="form-control"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>
                    <div className="col-12">
                      <label htmlFor="message" className="form-label">Message <span className="text-danger">*</span></label>
                      <textarea
                        className="form-control"
                        id="message"
                        name="message"
                        rows="3"
                        value={formData.message}
                        onChange={handleChange}
                        required
                      ></textarea>
                    </div>
                    <div className="col-12">
                      <div className="d-grid">
                        <button className="btn btn-danger btn-lg" type="submit">Send Massage</button>
                      </div>
                    </div>
                  </div>
                </form>
              ) : (
                <div className="alert alert-danger" role="alert">
                  <p>{comment}</p>
                  <button className="btn btn-danger" onClick={handleReset}>Send Another Message</button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default Contact;
