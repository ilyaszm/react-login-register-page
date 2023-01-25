import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import Header  from '../Header/Header'
import Footer from "../Footer/Footer";
import "../../App.css";
import axios from "axios";
// import PhoneInput from 'react-phone-number-input'
import rentxLogo from "../../assets/images/RentDTX.png";

export default function SignInPage(props) {


  // const [mobile, setMobile] = useState();
  // const history = useHistory("/HomePage");
  // useEffect(() => {
  //   if (localStorage.getItem("user-info")) {
  //     history.push("/");
  //   }
  // }, []);

  // async function login() {
  //   console.log("your number is"+mobile);
  //   let item = { mobile };
  //   let result = await fetch(
  //     "https://api.colive.com/rentx/qa/CRMapi/PropertyCRM/GetCustomerDetailsByMobile",
  //     {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //         Accept: "*/*",
  //       },
  //       body: JSON.stringify(item),
  //     }
  //   );
  //   result = await result.json();
  //   localStorage.setItem("user-info", JSON.stringify(result));
  //   history.pushState("./Homepage");
  // }



  const [data, setdata] = useState({
   
    Mobile: "",
 
  });
  const apiUrl =
  "https://api.colive.com/rentx/qa/CRMapi/PropertyCRM/GetCustomerDetailsByMobile";
  const login = (e) => {
    e.preventDefault();
    debugger;
    const data1 = {
      Mobile: data.Mobile,
    };
    axios.post(apiUrl, data1).then((result) => {
      debugger;
      console.log(result.data);
      if (result.data.Status == "Invalid") alert("Invalid User");
      else props.history.push("/home");
    });
  };
  const onChange = (e) => {
    e.persist();
    debugger;
    setdata({ ...data, [e.target.name]: e.target.value });
  };
  return (
    <div
      className="text-center"
      style={{
        background: "#2f313e",
        height: "687px",
        justifyContent: "center",
        marginTop: "81px",
        alignContent: "center",
        alignItems: "center",
      }}
    >
        <Header />
      {/* 
            <form  onSubmit={handleSubmit} autoComplete="off" action="/home"> */}
      <form autoComplete="off" action="/otp">
        <img
          src={rentxLogo}
          alt="rentx logo"
          style={{
            alignContent: "center",
            paddingTop: "120px",
            width: "100px",
          }}
        />
        <br />
        <p style={{ color: "#f1f1f1", fontSize: "30px", fontWeight: "normal" }}>
          rent
          <span
            style={{
              color: "#f8049c",
              textTransform: "none",
              fontWeight: "normal",
              paddingLeft: "0px",
              fontSize: "35px",
            }}
          >
            DTX
          </span>
        </p>
        <h5 style={{ color: "#f1f1f1", paddingBottom: "10px" }}>Login</h5>
        <div style={{ display: "inline-block", alignItems: "center" }}>
          <div style={inputStyle}>
            <p style={{ color: "white", marginBottom: "0px" }}>
              +91 &nbsp;
              <input
              id="mobile"
              onChange={onChange}
                minLength={{ number: 10 }}
                // onChange={(e) => setMobile(e.target.value)}
                type="number"
                pattern="\d{10}"
                style={{ color: "white", width: "20rem", height: "43px" }}
                name="Mobile"
                placeholder="mobile"
                required
              />
            </p>
          </div>
        </div>
        <br />
        <br />
        {/* <div>
                <Link to="/forget-password"><label className="right-label">Forget password?</label></Link> <br /></div><br />  */}
        <Link to="/otp" />{" "}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <button onClick={login} id="sub_btn" type="submit">
            Sent OTP
          </button>
        </div>
        <Link /> <br />
        {/* <p><Link to="/">Back to Homepage</Link>.</p> */}
      </form>
      {/* <footer style={footerStyle}>
        <p style={{ color: "#f1f1f1", paddingTop: "25px" }}>
          New User?{" "}
          <Link to="/register" style={{ color: "#ed0b70" }}>
            Sign Up
          </Link>
        </p>
      </footer> */}
      <Footer text={"New User?"} page={"Sign Up"}/>
    </div>
  );
}
// const navigate = useNavigate();

// const handleSubmit = event => {
//     event.preventDefault();
//     navigate('/otp');
//   };

const footerStyle = {
  height: "70px",
  position: " absolute",
  bottom: "0px",
  left: "0",
  width: "100%",
  textAlign: "center",
  background: "#182331",
  color: "white",
};
const inputStyle = {
  padding: "5px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "fit-content",
  height: "auto",
  // -moz-border-radius: 50px;
  // -webkit-border-radius: 50px;
  // border-radius: 10px;
  borderStyle: "solid",
  // marginBottom: "10px",
  // marginTop:" 10px",
  borderWidth: "thin",
  borderColor: "#ed0c70",
  backgroundColor: " transparent !important",
};
