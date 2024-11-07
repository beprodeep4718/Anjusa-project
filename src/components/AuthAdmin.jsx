
import { useEffect } from 'react';
import { useAuth } from '../store/auth'
import { useNavigate } from 'react-router-dom';


const AuthAdmin = ({children}) => {
    

    const navigate = useNavigate()
    const {user} = useAuth();
    useEffect(() => {
        if (!user || user.role!== 'admin') {
            return navigate("/login");
        }
    }, [user, navigate])
    return user && user.role === "admin" ? children : null;
}

export default AuthAdmin