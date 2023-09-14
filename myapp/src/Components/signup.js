import React, { useState } from "react";
import logoimg from '../image/logo.png'
import '../CSS/signup.css'
import Navbar from './navbar'
import Footer from './footer'
const Signup = () => {
    const [formdata,setformdata] = useState({
        name:'',
        email:'',
        phnum:'',
        passwd:'',
        cnfpasswd:'',
        
    });
    const [errorMessage, setErrorMessage] = useState('');
    const onChangeHandler = (event) => {
        
        setformdata ( (formdata) => ({
            ...formdata ,
            [event.target.name] : event.target.value ,
        })) ;
        
    }
    const handlePasswordChange = (event) => {
        setErrorMessage("Password and Confirm-Password are not Matching");
    };
    const handleerrorMessage = (event) =>
    {
        setErrorMessage("User already exits");
    }
    const handleerrorMessageofPolicies = (event) =>
    {
        setErrorMessage("Please Accept our Terms and Conditions for Further Process  ");
    }
    const [isChecked, setIsChecked] = useState(false);
    const handleCheckboxChange = (event) => {
        setIsChecked(event.target.checked);

    };
    const BackendHandler = async  ( event ) =>{
        event.preventDefault () ;
        if ( !formdata.name || !formdata.email || !formdata.phnum || !formdata.passwd || !formdata.cnfpasswd )
        {
            window.alert ( "Please Fill all the Details of the Form ") ; 
            return ;
        }
        if ( formdata.passwd != formdata.cnfpasswd )
        {
            handlePasswordChange();
            return ;
        }
        if (isChecked == false)
        {
            handleerrorMessageofPolicies () ;
            return ;
        }
        try {
            let result = await fetch ('http://localhost:4000/signup',{
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify(formdata) ,
                mode : 'cors' 
            })
            result = await result.json () ;
            if ( result.success ==  false )
            {
                handleerrorMessage();
            }
        } catch (error) {
            console.log(error) ;
        }
        

    }
    return (
        <>
        <Navbar />
                {/* code for the signup form starts */}
                {errorMessage && (
                    <div className="container">
                            <div className="alert alert-danger mt-3 " role="alert" id="error-message">
                        {errorMessage}
                            </div>
                    </div>  
                        
                    )}
                <div className="container" id="form-container">

                    {/* create a heading for the form */}
                    <div className="container" id="form-heading">
                        <h1 className="form-heading-content">
                            Create New Account 
                        </h1>
                    </div>
                    {/* code for the divider  */}
                    
                    <div className="divider"></div>
                    <div className="container" id="inner-container">
                    
                        
                            {/* form field for name  */}
                        <div className="container form-inner-container">
                            <label htmlFor="fullname" class="input-header">Name:</label>
                            <input type="text" name = "name" placeholder = "Enter your full Name" id="fullname" className="form-inner-container-input" onChange={onChangeHandler}/>
                        </div>
                        

                        {/* form field for phone number */}
                        <div className="container form-inner-container">
                            <label htmlFor="Phonenum" class="input-header">Phone:</label>
                            <input type="tel"  name = "phnum" placeholder = "Enter your phoneNumber" id="Phonenum" className="form-inner-container-input"onChange={onChangeHandler}/>
                        </div>
                        

                        {/* form field for email */}
                        <div className="container form-inner-container">
                            <label htmlFor="user_email" class="input-header">Email:</label>
                            <input type="email"  name = "email" placeholder = "Enter your Email" id="user_email" className="form-inner-container-input"onChange={onChangeHandler}/>
                        </div>
                        

                        {/* form field for password */}
                        <div className="container form-inner-container">
                            <label htmlFor="passwd" class="input-header">Password:</label>
                            <input type="Password"  name = "passwd" placeholder = "Enter your passwd" id="passwd" className="form-inner-container-input" onChange={onChangeHandler}/>
                        </div>


                        {/* form field for confirm password  */}
                        <div className="container form-inner-container">
                            <label htmlFor="cnfpasswd" class="input-header">Confirm-Password:</label>
                            <input type="Password"  name = "cnfpasswd" placeholder = "Enter your Password Again" id="cnfpasswd" className="form-inner-container-input"onChange={onChangeHandler}/>
                        </div>

                        {/* code for checkbox of terms and conditions */}
                        <div className="container" id="form-checkbox">
                            <label className="checkbox-container " id="checkbox-label">
                            <input type="checkbox" checked={isChecked}
                                onChange={handleCheckboxChange}/>
                            <span className="checkmark " id="checkbox-text"></span>
                                By Clicking You are Accepting all Our terms and Conditions 
                            </label>
                        </div>
                    </div>
                        {/* code for the form submit button */}
                        <div className="container " id="form-btn">
                            <button type="submit"  onClick={BackendHandler}>Submit</button>
                        </div>

                        {/* code for login of google and email button */}
                        <div className="container" id="form-google-btn">
                            <div className="container " id="google-form-btn1">
                                <button type="submit" id="btn1" >  <i className="fa-brands fa-google" id="google-icon"></i> Google    
                                </button>
                            </div>
                            <div className="container " id="email-form-btn2">
                                <button type="submit"  id="btn2"><i class="fa-solid fa-envelope" id="email-icon"></i>Email</button>
                            </div>
                        </div>

                </div>
            <Footer/>
        </>
    )
}

export default Signup ;