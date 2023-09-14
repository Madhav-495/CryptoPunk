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
            <div className="container" id="main-container">
                <div className="container" id="form-Container">
                    <div className="container" id="form-heading">
                        <h1 className="form-heading-content">
                            Login
                        </h1>
                    </div>
                    <div className="divider"></div>
                    <div className="container" id="inner-container">
                        <div className="container form-inner-container">
                            <label htmlFor="user_email" className="input-header">Email:</label>
                            <input type="email" name="email" placeholder="Enter your Email" id="user_email" className="form-inner-container-input" onChange={onChangeHandler} />
                        </div>

                        <div className="container form-inner-container">
                            <label htmlFor="passwd" className="input-header">Password:</label>
                            <input type="password" name="password" placeholder="Enter your password" id="passwd" className="form-inner-container-input" onChange={onChangeHandler} />
                        </div>
                         
                    </div>
                    {/* code for the form submit button */}
                    <div className="container " id="form-btn">
                            <button type="submit"  onClick={dataHandler}>Submit</button>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Login;
