import React, { useState } from 'react';
import Navbar from '../Components/navbar'
import Footer from '../Components/footer'
import '../CSS/kyc.css'
function FileUpload() {
  const [fileData, setFileData] = useState(null);
  const [aadharNumber, setAadharNumber] = useState('');
  const [verifiedMessage, setVerifiedMessage] = useState('');
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const base64Data = event.target.result.split(',')[1]; // Extract the base64 data
        setFileData(base64Data);
      };
      reader.readAsDataURL(file);
    }
  };
  const setdata = (e) => {
    setAadharNumber(e.target.value)
  }
  const setmessage = () => {
    setVerifiedMessage("Verified Successfully");
  }
  const handleSubmit = async () => {
    console.log("YES");
    if (fileData) {
      let result = await fetch('http://localhost:4000/test', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ fileData }),
        mode: 'cors'
      })
      result = await result.json();
      if (result.success) {
        setmessage()
      }


    }
  };

  return (
    <>
      <Navbar />
      <div className="container">
        <div className="inner-form-container">
          <div className="form-row">
            <div className="name">Enter Aadhar Number</div>
            <div className="value">
              <input type="text" className="input--style-6" onChange={setdata} value={aadharNumber} />
            </div>
          </div>
          <div className="form-row">
            <div className="name2">Upload Aadhar Card </div>
            <div className="value">
              <input type="file" className="input--style-6" onChange={handleFileChange} />
            </div>
            <button onClick={handleSubmit} id="verify-button">Verify</button>
            <span className="danger-message">
              {verifiedMessage ? {verifiedMessage} : ""}
            </span>
          </div>
          <button onclick={handleSubmit} id="submit-button">Submit</button>
        </div>
        <div className="aadhar-card-photo">
        </div>
      </div>
      <Footer />
    </>
  );
}
export default FileUpload;
