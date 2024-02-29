import { createContext, useState } from "react";
import PropTypes from 'prop-types';
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import app from "../../Firebase/firebase.config";
const auth = getAuth(app);
export const AuthContext = createContext(null);

const AuthProviders = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const creatUser = (email,password) =>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth,email,password);
    } 
    
    
    const userInfo = {
        user,
        loading,
        creatUser
    }
    return (
        <AuthContext.Provider value={userInfo}>
            {children}
            
        </AuthContext.Provider>
    );
};

export default AuthProviders;

AuthProviders.propTypes ={
    children: PropTypes.node.isRequired
}