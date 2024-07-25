import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { Navbar, Container, Nav, NavDropdown,Button } from 'react-bootstrap';
import { Link, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Pages from './pages/Pages';
//import Account from './pages/Account';
import Contact from './pages/Contact';
import Shop from './pages/Shop'
import logo from './img/logo.png'
import Blog from './pages/Blog'
import Productpage from './pages/Productpage'
import Cart from './pages/Cart'
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faSignInAlt } from '@fortawesome/free-solid-svg-icons';
import { useCartContext1 } from './pages/Cart__Context';
//import SearchComponent from './Component/SearchComponent';
import Checkout from './pages/Checkout';
import Confirmation from './pages/Confirmation';
import './App.css';
import { useAuth0 } from "@auth0/auth0-react";



function App() {
  const { totalItems} = useCartContext1();
  const { loginWithRedirect , isAuthenticated } = useAuth0();
  const { logout } = useAuth0();
  return (
    <div>
      <Navbar expand="lg" className="Navbar justify-content-center text-center">
        <Container>
        <Navbar.Brand as={Link} to="/"  className="text-danger fw-semibold navbar-brand">
        <img src={logo} alt="CayeDine Logo" className='img-fluid' />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" className="justify-content-center">
            <Nav className="justify-content-center" >
              <Nav.Link as={Link} to="/"  className="nav-link text-uppercase fw-bold text-dark">Home</Nav.Link>
              <Nav.Link as={Link} to="/about"   className="nav-link text-uppercase fw-bold text-dark">About</Nav.Link>
             
             

              <NavDropdown title="Pages" id="pages-dropdown"  className=" text-uppercase  fw-bold text-dark">
                <NavDropdown.Item as={Link} to="/pages"  className=" text-dark">Blog</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/blog"  className=" text-dark">Single Blog</NavDropdown.Item>
              </NavDropdown>
             
             
             
              <NavDropdown title="Shop" id="shop-dropdown"  className=" text-uppercase  fw-bold text-dark">
                <NavDropdown.Item as={Link} to="/shop"  className=" text-dark">Shops</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/productpage"  className=" text-dark">Productpage</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/cart"  className=" text-dark">Cart</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/checkout"  className=" text-dark">checkout</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/confirmation"  className=" text-dark">confirmation</NavDropdown.Item>

              </NavDropdown>
             

             
              <Nav.Link as={Link} to="/contact"  className="nav-link text-uppercase  fw-bold text-dark">Contact</Nav.Link>
            </Nav>
         
            </Navbar.Collapse>
          <div className='row p-2'>
          <div>
        <Link className='navbar-link cart-trolley-link'  to="/cart"> <FontAwesomeIcon  className="cart-trolley" icon={faShoppingCart} />
        <span className='cart-trolley-item'>{totalItems} </span> </Link>

      

        { isAuthenticated ?

        (<button className='btn btn-danger' onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>   Log Out </button>
           
        ):( <button  className='btn btn-danger' onClick={() => loginWithRedirect()}>Log In</button> 
      )
        } 
       
       

     
    </div>
               
     </div>

    
        </Container>
      </Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/pages" element={<Pages />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/productpage" element={<Productpage/>} />
        <Route path="/checkout" element={<Checkout/>} />
        <Route path="/confirmation" element={<Confirmation/>} />
        <Route path="/cart" element={<Cart/>} />
      
      </Routes>
    </div>
  );
}

export default App;
