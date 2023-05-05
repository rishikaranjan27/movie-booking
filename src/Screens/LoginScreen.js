import '../CSS/LoginScreen.css'
import { useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'




export const LoginScreen = () => {

    const navigate = useNavigate();


    const {search} = useLocation();

    const redirectInUrl = new URLSearchParams(search).get('redirect');

    const redirect = redirectInUrl ? redirectInUrl : '/';

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");



    const handleLogin = () => {

        const userInfo = {email : email, password: password};

        localStorage.setItem("userInfo", JSON.stringify(userInfo));


        navigate(redirect || '/');

    }



    return (
        <div className = "loginScreen">

            <div className="loginScreen-header">Login</div>

            <div className="loginScreen-input">

                <input type="email" placeholder="Email" 
                onChange={(e) => {
                    setEmail(e.target.value);
                }}/>

                <input type="password" placeholder="Password" 
                onChange={(e) => {
                    setPassword(e.target.value);
                }}/>

            </div>

            <button className="loginScreen-btn" onClick={handleLogin}>Login</button>

        </div>
    )
}