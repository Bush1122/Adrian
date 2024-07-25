import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import Footer from "../Component/Footer"
import { useCartContext1 } from './Cart__Context';
const Checkout = () => {
  const { totalAmount, shippingfee } = useCartContext1();

    const initialFormData = {
        username: '',
        email: '',
        phone: '', 
        numberofperson: '',
        calendar:'',
        time:'' 
    };
    
    const [submitted, setSubmitted] = useState(false);
    const [formData , setFormData]  = useState(initialFormData)
   
   
    
       
    const handleChange = (e) =>{
    
      const name = e.target.name;
      const value =e.target.value;
    
      setFormData({
        ...formData,
        [name]:value});
    
    };
    
    const handleSubmit = (e) => {
      e.preventDefault();
      console.log(formData);
    
    
      setTimeout(() => {
        setSubmitted(true);
      }, 1000);
    }
    
    
    const handleReset = () => {
      setFormData(initialFormData);
      setSubmitted(false);
    };

    
 
    return (
        <div>
           <div className="container-fluid   contact-main-section py-5">
            <div className="container">
              <div className="row py-5">
                <div className="  align-item-center">
                  <h1 className="text-light fw-bold mb-4 text-center mt-3">
                     Check Out
                  </h1>
                  <p  className="text-light  mb-4 text-center mt-3">Hath after appear tree great fruitful green dominion<br/>moveth sixth abundantly image that midst<br/> of god day multiply you’ll which</p>
                </div>
              </div>
            </div>
         
        </div>





        <div className="container my-5 py-4 mt-5">
        <div className="row mt-4">
          <div className="col-8 ">
            <h5 className="fs-5 fw-bold   text-danger">Billing Details</h5>
            <h4 className="mt-3  fw-bold text-dark fs-3 ">Reserve Your Seat For Betterment</h4>


            {!submitted ? (
       
            <form onSubmit={handleSubmit}>
             <div className="row mt-5 py-3">
                <div className="col">
               
                <label for="fullname" className="form-label">Full Name</label>
                <div className="input-group">

                 <input 
                  type="text" 
                  className="form-control"
                  id="username" 
                  name="username"
                  placeholder="Full name"
                  value={formData.username}
                  onChange={handleChange} required/>
  
                  
                
                </div>
              </div>
              <div className="col">
                <label for="email" className="form-label" >Email </label>
                <div className="input-group">

                  <input
                    type="email"
                    class="form-control"
                    id="email" 
                    name="email"
                    placeholder="smileforbushi@gmail.com"
                    value={formData.email}
                    onChange={handleChange}
                    required/>

                  </div>
                </div>

                <div className="col">
               <label for="phone" class="form-label">Phone Number</label>
                <div className="input-group">
               
               
                  <input 
                   type="phone"
                   class="form-control" 
                   id="phone" 
                   name="phone" 
                   placeholder="Phone Number"
                   value={formData.phone}
                   onChange={handleChange}
                  
                  required/>

                </div>
              </div>
             </div>


             <div className="row mt-4 py-3">
               <div className="col">
                 <label for="Numberofperson" className="form-label">Account Number</label>
               
               <input 
               type="text" 
               className="form-control"
               id="numberofperson" 
               name="numberofperson"
               placeholder="3434-34432-12"
               value={formData.numberofperson}
               onChange={handleChange}

               required/>


                </div>
                <div className="col">
                <label for="calendar" className="form-label" >Date </label>
                <div className="input-group">

                  <input
                   type="date"
                    class="form-control"
                    id="calendar" 
                    name="calendar"
                    placeholder="calendar"
                    value={formData.calendar}
                     onChange={handleChange}
                  
                    required/>
                </div>
                

                </div>
                <div className="col">

                <label for="Time" class="form-label">Time</label>
                <div className="input-group">
               
               
                  <input 
                   type="time"
                   class="form-control" 
                   id="time" 
                   name="time" 
                   placeholder="time"
                   value={formData.time}
                   onChange={handleChange}
                  
                  required/>
                </div>
                </div>

                <div className=" mt-5">
                  <button className="btn btn-danger " type="submit">Continous...</button>
                </div>
             </div>
           </form>
             ) : (
              <div class="alert alert-danger" role="alert">
               <p>Thank You massage have been be send</p>


              





               <Link to={{ 
                        pathname: "/confirmation", 
                        state: { selectedDate: formData.calendar } 
                    }}>
               <button  class="btn btn-danger" onClick={handleReset}>Next...</button></Link>
                 </div>
                   
             )}
          

          </div>
          <div className="col-4 justify-content-center align-items-center">

         
           <div className='mt-2 p-4 card contact-main-section'>
             <h5 className='text-light'>Order Summery</h5>
               <hr  className='text-light'/>
              <p className='text-light'>Excepteur sint occaecat cupidat non proident sunt officia.</p>
              <h6  className='mt-1 text-light'>Subtotal :Rs {totalAmount} </h6>
              <hr  className='text-light'/>
             <h6 className='mt-1 text-info'>Shipping & Handling      :      0 Rs</h6>
             <hr  className='text-light'/>
             <h6 className='mt-1 text-info'>Estimated Tax             :       0 Rs</h6>
             <hr  className='text-light'/>
             <h5 className='mt-1 text-light'>Rs:Grand Total:{totalAmount + shippingfee}   </h5>
             <hr  className='text-light'/>
                       
         </div>

        </div>




        </div>
      </div>
      <Footer/>
     </div>







        )
  };
  
  export default Checkout;