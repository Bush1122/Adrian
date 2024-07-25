import React from "react";
import {FaMinus ,FaPlus} from 'react-icons/fa';


const CartToggle = ({amount ,setIncrement , setDecrement}) =>{
    return(
        <div className="row mt-2 ">   
          <div className="col-1">
          <h5 onClick={ () =>setIncrement()} ><FaPlus/> </h5>

          </div>
          <div className="col-1">
          {amount}

          </div>
        
         
            <div className="col-1">
            <h5 onClick={ () =>setDecrement()} >  <FaMinus/></h5>

            </div>
           
        
       </div>

    );
}

export default CartToggle