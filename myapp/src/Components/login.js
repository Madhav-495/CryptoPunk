import React, { useState } from "react";
import '../CSS/login.css'
import NavBar from "../Components/navbar"
import Footer from "../Components/footer"

const Login = () => {
    const [formdata, setformdata] = useState({
        email: '',
        password: ''
    });

    const onChangeHandler = (event) => {
        setformdata((prevFormdata) => ({
            ...prevFormdata,
            [event.target.name]: event.target.value,
        }));
    }

    const dataHandler = async (event) => {
        event.preventDefault();
        try {
            let response = await fetch('http://localhost:4000/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formdata),
                mode : 'cors' 
            });
            console.log("data sent successfully")
            response = await response.json () ;
            if (!response.success) {
                console.log(response.message);
            } else {
                console.error('Error sending data');
            }
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <>
            <NavBar />
            <div className="container">
                <div className="main-container">
                    <div className="heading-container">
                        <h1></h1>
                    </div>
                    <div className="form-field-container">
                        <label htmlFor="email">Email</label>
                        <input type="text" name="" id="email" />
                    </div>
                    <div className="form-field-container">
                        <label htmlFor="Password">Password</label>
                        <input type="Password" name="" id="Password" />
                    </div>
                    <div className="btn-holder " id="form-btn">
                            <button type="submit"  onClick={dataHandler}>LOGIN</button>
                    </div>
                </div>
            </div>

            <Footer />
        </>
    );
}

export default Login;
