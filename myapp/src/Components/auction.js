import React, { useState } from 'react';
import Navbar from '../Components/navbar'
import Footer from '../Components/footer'
import '../CSS/auction.css'
function auction() {
    return (
        <>
            <Navbar />
            <h1 className="main-heading">
                Token-Number
            </h1>
            <div className="container">
                <div className="image-container">
                    <img src="loginImage.jpg" alt="Photo" />
                </div>
                <div className="text-container">
                    <h3 className="text-container-heading">
                        This is heading
                    </h3>
                    <p className="text-container-heading-para">This Bidding would get over at mention time</p>

                    <h3 className="text-container-price">
                        $2000
                    </h3>
                    <p className="text-container-price-para">Mention the Product description in 2-3 lines</p>
                    <h1 class="text-container-heading">
                        Congratulation the winner of the auction is name
                    </h1>
                    <div className="clock-container">
                        <div className="time-container">
                            <h3>0</h3>
                            <h4>Days</h4>
                        </div>
                        <div className="time-container">
                            <h3>0</h3>
                            <h4>hours</h4>
                        </div>
                        <div className="time-container">
                            <h3>60</h3>
                            <h4>Min</h4>
                        </div>
                        <div className="time-container">
                            <h3>60</h3>
                            <h4>Sec</h4>
                        </div>
                    </div>
                    
                </div>
                
            </div>
            
            <Footer />
        </>
    )
}
export default auction
