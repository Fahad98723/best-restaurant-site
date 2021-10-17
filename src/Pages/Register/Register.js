import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Register.css'
import logo from '../../Images/logo2.png'
import useAuth from '../../Hook/useAuth';
const Register = () => {
    const {googleSignIn,facebookSignIn} = useAuth()
    return (
        <div className='form'>
            <Container>
            <img  src={logo} alt="" />
                <form>
                    <input className='mt-3 p-1 border-0 w-25' type="text" name="name" placeholder='Name' id="" />
                    <br />
                    <input type="email" name="email" placeholder='Email' className='mt-3 p-1 border-0 w-25' id="" />
                    <br />
                    <input type="password" name="password"  className='mt-3 p-1 border-0 w-25' placeholder ='Password' id="" />
                    <br />
                    <input type="password" name="password"  className='mt-3 p-1 border-0 w-25' placeholder ='Confirm Password' id="" />
                    <br />
                    <input className='btn btn-danger mt-3' type="submit" value="Sign up" />
                </form>
                <Link to = '/login'><p className='text-danger mt-3'>Already have a account ?</p></Link>
                    <i onClick= {googleSignIn} className="fab fa-google text-danger fs-4 mx-3"></i>
                    <i onClick = {facebookSignIn} className="fab fa-facebook-f mx-3 fs-4 text-danger"></i>
            </Container>            
        </div>
    );
};

export default Register;