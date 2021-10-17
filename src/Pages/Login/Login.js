import React from 'react';
import { Container } from 'react-bootstrap';
import { Link, useLocation,useHistory } from 'react-router-dom';
import './Login.css'
import useAuth from '../../Hook/useAuth'
import logo from '../../Images/logo2.png'
const Login = () => {
    const {googleSignIn,facebookSignIn,setLoading} = useAuth()
    const location = useLocation()
    const path_uri = location?.state?.from?.pathname
    const history = useHistory()
    const handleGoogleSignIn = () => {
        googleSignIn()
        .then(() => {
            history.push(`${path_uri}`)
        })
        .finally(() => {
            setLoading(false)
        })
    }
    return (
        <div className= 'form'>           
            <Container>
            <img  src={logo} alt="" />
                <form>
                    <input type="email" name="email" placeholder='Your email' className='mt-3 p-1 border-0 w-25' id="" />
                    <br />
                    <input type="password" name="password"  className='mt-3 p-1 border-0 w-25' placeholder ='Your password' id="" />
                    <br />
                    <input className='btn btn-danger mt-3' type="submit" value="Login" />
                </form>
                <Link to = '/register'><p className='text-danger mt-3'>Create Account?</p></Link>
                <i onClick= {handleGoogleSignIn} className="fab fa-google text-danger fs-4 mx-3"></i>
                    <i onClick = {facebookSignIn} className="fab fa-facebook-f mx-3 fs-4 text-danger"></i>
            </Container>            
        </div>
    );
};

export default Login;