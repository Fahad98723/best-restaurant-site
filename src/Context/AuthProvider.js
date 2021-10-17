import React, { createContext } from 'react';
import useFireabase from '../Hook/useFirebase';
export const AuthContext = createContext()
const AuthProvider = ({children}) => {
    const allContext = useFireabase()
    return (
        <AuthContext.Provider value = {allContext}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;