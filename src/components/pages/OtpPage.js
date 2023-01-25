import React from 'react'
import { Link } from 'react-router-dom'
import rentxLogo from '../../assets/images/RentDTX.png'
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import Main from '../Main/Main'


export default function OtpPage() {
    return (
        <div className="text-center" style={{background:"#2f313e",height:"687px",justifyContent:"center",marginTop:"80px",alignContent:"center",alignItems:"center"}}>
            <Header  id="Login_Header" title={""} subtitle={""} />
          
            <img src={rentxLogo} alt="rentx logo" style={{width: "100px",alignContent:"center",paddingTop:"80px"}}  />
<br />
           <p style={{color:'#f1f1f1',fontSize:"30px",fontWeight: "normal"}}>rent<span style={{color: "#f8049c",textTransform: "none",fontWeight: "normal",paddingLeft: "0px",fontSize:"35px"}}>DTX</span></p> 
            <h5 style={{color:"#f1f1f1"}}>Enter OTP</h5>

            <form autoComplete="off" action="/home">

                
            <div style={{display: "inline-block",alignItems:"center",padding:"5px"}}>
                {/* <div style={ inputStyle }> */}
               
                <input style={otpInput} type="number" id='mobile' name="Number" placeholder="______" required />
{/* 
                </div> */}
                </div><br />
                <Link to="/home"/>  <div style={{display:"flex",alignItems: "center",justifyContent: "center"}}>
                      <button  id="sub_btn" type="submit" >Verify</button>
                      
                </div><Link/> 
                {/* <ToastContainer /> */}
                <br /> 
               </form>
               <br />
               {/* <footer style={footerStyle}>
                <p style={{ color: '#f1f1f1',paddingTop:"25px"}}>New User? <Link to="/register" style={{ color: '#ed0b70'}}>Sign Up</Link></p>
            </footer> */}
            {/* <Link to="/">
                <button className="primary-button">Log out</button>
            </Link>
         */}
            <Footer text={"New User?"} page={"Sign Up"}/>
        </div>
    )
}

// const notify = ()=>{
//     toast('please enter the number')
// }



const otpInput ={
    height: "43px",
    placeholderColor: "#ed0b70", 
    placeholderCapacity: "0.4",
    fontSize: "22px",
    // font-style: italic;
    letterSpacing: "14px",
    textAlign: "center",
    display: "inline-block",
    border:" solid 1px",
    width: "200px",
    margin: "10px",
    borderRadius: "40px",
    backgroundColor: "#323441",
    borderColor: "#e43081 !important",
    // --padding-bottom: 10px;
    // --padding-end: 10px;
    // --padding-start: 10px;
    // --padding-top: 13px;
    color: "#ED0B70",
    fontWeight: "bold"
}

const footerStyle ={
    height: "70px",
    position:" absolute",
    bottom: "0px",
    left: "0",
    width: "100%",
    textAlign: "center",
    background: "#182331",
    color: "white"
}
