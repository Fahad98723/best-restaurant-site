import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link,useHistory } from 'react-router-dom';
import useAuth from '../../../Hook/useAuth';
import logo from '../../../Images/logo2.png'
import './Header.css'
const Header = () => {
    const {user,logOut,cart} = useAuth()
    console.log(cart);
    
    let cartQuantity = 0
    for(const item of cart){
        let quantity = item.quantity ? item.quantity : 0
        cartQuantity = item.quantity + cartQuantity
    }
    const history = useHistory()
    const cartSection = () => {
        history.push('/placeorder')
    }
    console.log(cartQuantity);
    return (
            <Navbar className=' bg-white' sticky = 'top'>
                <div className="container">
                <Navbar.Brand as={Link} to="/home">
                <img
                    src={logo}
                    width="120"
                    height="40"
                    className="d-inline-block align-top"
                    alt="React Bootstrap logo"
                />
                </Navbar.Brand>
            <Navbar.Toggle />           
               
            <Navbar.Collapse className="justify-content-end">
            <i onClick= {cartSection} class="fas fa-shopping-cart text-danger me-3 fs-3">{cartQuantity}</i>
            <Nav.Link className= 'btn btn-danger text-white signup-btn mx-3' as = {Link} to="/register">Sign up</Nav.Link>
                {
                    user?.displayName ?
                    <button  onClick={logOut}  className='btn btn-outline-danger border-0 text-dark login-btn'>
                        Log Out
                    </button>
                    :
                    <Nav.Link  className='btn btn-outline-danger border-0 text-dark login-btn' as = {Link} to="/login">Login</Nav.Link>                    
                }
               
            </Navbar.Collapse>
                </div>
            </Navbar> 
    );
};

export default Header;