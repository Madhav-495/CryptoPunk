import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './Components/login';
import Signup from './Components/signup'
import KYC from './Components/kyc'
import Auctions from './Components/auction'
function App() {
  return (
    <>
       <BrowserRouter>
            <Routes>
                <Route path='/login' element={<Login />} />
                <Route path='/signup' element={<Signup />} />
                <Route path='/kyc' element={<KYC/>} />
                <Route path='/auction' element={<Auctions/>}/>
            </Routes>
       </BrowserRouter>
    </>
  );
}

export default App;
