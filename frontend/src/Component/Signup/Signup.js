import React, { useEffect, useState } from "react"
import axios from "axios"
import '../Signup/Signup.css'
import { useNavigate, Link } from "react-router-dom"
import Vollyball from "../assets/Images/vollyball.png";
import Dumm1 from "../assets/Images/dumbel.png";
import Dumm2 from "../assets/Images/blackdumbel.png";



function Login() {
    const history=useNavigate();

    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')

    async function submit(e){
        e.preventDefault();
    
        // Check if email and password fields are not empty
        if (email === '' || password === '') {
            alert("Please enter both email and password");
            return;
        }
    
        try {
            await axios.post("https://maxx-shop-backend.onrender.com", {
                email, password
            })
            .then(res => {
                if (res.data === "exist") {
                    alert("User already exists")
                } else if (res.data === "notexist") {
                    history("/login", { state: { id: email } })
                }
            })
            .catch(e => {
                alert("wrong details")
                console.log(e);
            })
        } catch (e) {
            console.log(e);
        }
    }


    return (
        <div className="signup">
            <body className="hidden">
            <img className="volly" src={Vollyball} alt="" />
            <img className="dum1" src={Dumm1} alt="" />
            <img className="dum2" src={Dumm2} alt="" />
            </body>



            <h1 className="snp">Signup</h1>

            <form action="POST">
    <input className='typ'type="email" onChange={(e) => { setEmail(e.target.value) }} placeholder="Email"  />
    <input className='ps'type="password" onChange={(e) => { setPassword(e.target.value) }} placeholder="Password" />
    <input  className='vb'type="submit" onClick={submit} value="Submit" disabled={!email || !password} />
</form>
            <br />
            <p className="scrolling-text">Login to avail  exclusive offers and discounts on<mark>GYM equipments</mark> </p>
            <p className="already">Already have an account</p>
            <br />
            <Link  className='login-btn'to="/login">Login Page</Link>

        </div>
    )
}

export default Login

