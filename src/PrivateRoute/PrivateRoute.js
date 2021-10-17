import React from 'react';
import { Spinner } from 'react-bootstrap';
import { Redirect, Route } from 'react-router';
import useAuth from '../Hook/useAuth';

const PrivateRoute = ({children,...rest}) => {
    const {user,loading} = useAuth()
    if (loading) {
      return  <Spinner className= ' d-block mx-auto' animation="border" variant="danger" />
    }
    return (
        <Route
        {...rest}
        render = {({location}) => user.displayName ? children : 
        <Redirect
        to={{
            pathname: "/login",
            state: { from: location }
          }}
        >
        </Redirect>
        }
        >
            
        </Route>
    );
};

export default PrivateRoute;