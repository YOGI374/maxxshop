import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import './Login.css';
import Vollyball from "../assets/Images/vollyball.png";
import Dumm1 from "../assets/Images/dumbel.png";
import Dumm2 from "../assets/Images/blackdumbel.png";


function Login() {
    const navigate = useNavigate(); // Corrected to navigate
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [adminUsername, setAdminUsername] = useState(''); 
    const [adminPassword, setAdminPassword] = useState(''); 

    async function submit(e) {
        e.preventDefault();

        try {
            await axios.post("http://localhost:8000/", {
                email, password
            })
            .then(res => {
                if (res.data === "exist") {
                    navigate("/home", { state: { id: email } });
                } else if (res.data === "notexist") {
                    alert("User has not signed up");
                }
            })
            .catch(e => {
                alert("Password required");
                console.log(e);
            });
        } catch (e) {
            console.log(e);
        }
    }

    // Function to handle admin login
    async function adminLogin(e) {
        e.preventDefault();

        const adminUsernamePrompt = prompt("Enter admin username:");
        const adminPasswordPrompt = prompt("Enter admin password:");

        if (adminUsernamePrompt === "yogesh" && adminPasswordPrompt === "123") {
            navigate('/admin'); // Navigate to AdminAddProducts component
        } else {
            alert("Invalid admin credentials");
        }
    }

    return (
        
        <div className="login">
            <body className="hide"></body>
            <img className="volly" src={Vollyball} alt="" />
            <img className="dum1" src={Dumm1} alt="" />
            <img className="dum2" src={Dumm2} alt="" />
            <h1 className="log">Login</h1>

            <form action="POST">
                <input className="qq" type="email" onChange={(e) => { setEmail(e.target.value); }} placeholder="Email" />
                <input  className='ww'type="password" onChange={(e) => { setPassword(e.target.value); }} placeholder="Password" />
                <input  className='ee'type="submit" onClick={submit} />
            </form>
            <br />
            <p className="rr">Don't have an account?</p>
            <p className="scrolling-text">Login to avail  exclusive offers and discounts on<mark>GYM equipments</mark> </p>

            <Link className="sp" to="/signup">Signup Page</Link>

            <br />

            <button className='admin-btn' onClick={adminLogin}>Admin Login</button>
        </div>
    );
}

export default Login;