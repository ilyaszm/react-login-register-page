import React, { useState }  from "react";
import { Link } from "react-router-dom";
import rentxLogo from "../../assets/images/RentDTX.png";
import "../../App.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import axios from "axios";
// import Select from 'react-select'

export default function SignUpPage(props) {
  const options = [
    {
      label: "Male",
      value: "1",
    },
    {
      label: "Female",
      value: "2",
    },
    {
      label: "Others",
      value: "3",
    },
  ]

  const [data, setdata] = useState({
    Email: "",
    FullName: "",
    Number: "",
    Gender:""
  });
  const apiUrl =
    "https://api.colive.com/rentx/live/CRMapi/PropertyCRM/CustomerDetailsInsertByOTP";
  const Registration = (e) => {
    e.preventDefault();
    debugger;
    const data1 = {
      Email: data.Email,
      Mobile: data.Mobile,
      FullName: data.FullName,
      Gender:data.Gender,
     
    };
    axios.post(apiUrl, data1).then((result) => {
      debugger;
      console.log(result.data);
      if (result.data.Status == "Invalid") alert("Invalid User");
      else props.history.push("/Homepage");
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
        marginTop: "80px",
        alignContent: "center",
        alignItems: "center",
      }}
    >
      <Header />
      <img
        src={rentxLogo}
        alt="rentx logo"
        style={{ width: "100px", alignContent: "center", paddingTop: "45px" }}
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
      <h5 style={{ color: "#f1f1f1" }}>Sign Up</h5>
      <form onSubmit={Registration} autoComplete="off" action="/home">
        <div
          style={{
            display: "inline-block",
            alignItems: "center",
            padding: "5px",
          }}
        >
          <div style={inputStyle}>
            <input
              onChange={onChange}
              type="text"
              style={{ color: "white", width: "20rem", height: "43px" }}
              name="FullName"
              placeholder="Enter Name"
              required
            />
          </div>
        </div>
        <br />
        <div
          style={{
            display: "inline-block",
            alignItems: "center",
            padding: "5px",
          }}
        >
          <div style={inputStyle}>
            <input
              onChange={onChange}
              type="numberext"
              minLength={{ number: 10 }}
              maxlength="10"
              pattern="\d{10}"
              style={{ color: "white", width: "20rem", height: "43px" }}
              name="Mobile"
              placeholder="Enter Your Number"
              required
            />
          </div>
        </div>
        <br />
        <div
          style={{
            display: "inline-block",
            alignItems: "center",
            padding: "5px",
          }}
        >
          <div style={inputStyle}>
            <input
              onChange={onChange}
              type="email"
              style={{ color: "white", width: "20rem", height: "43px" }}
              name="Email"
              placeholder="Enter Email ID"
              required
            />
          </div>
        </div>
        <br />
        {/* <div style={{display: "inline-block",alignItems:"center",padding:"5px"}}>
                <div style={ inputStyle }>
               
                <input type="text" style={{color:"white",width: "20rem",height: "43px"}} name="Number" placeholder="Gender" required />

                </div>
                </div> */}
        <div
          style={{
            display: "inline-block",
            alignItems: "center",
            padding: "5px",
          }}
        >
          <div style={inputStyle}>
            <label
              for="gender"
              style={{ paddingRight: "10px", color: "whitesmoke" }}
            >
              Gender
            </label>
            {/* <select 
              id="gender"
              style={{
                color: "white",
                width: "260px",
                height: "43px",
                backgroundColor: "#323441",
              }}
              name="Gender"
              required
            >
              <option value="male">male</option>
              <option value="female">female</option>
            </select> */}
            <select id="gender"
              style={{
                color: "white",
                width: "260px",
                height: "43px",
                backgroundColor: "#323441",
              }}
              required>{options.map((option) => (
              <option  name="Gender" value={option.value}>{option.label}</option>
            ))}</select>
          </div>
        </div>
        {/* <p>
                    <label>Username</label><br/>
                    <input type="text" name="first_name" required />
                </p>
                <p>
                    <label>Email address</label><br/>
                    <input type="email" name="email" required />
                </p>
                <p>
                    <label>Password</label><br/>
                    <input type="password" name="password" requiredc />
                </p>
                <p>
                    <input type="checkbox" name="checkbox" id="checkbox" required /> <span>I agree all statements in <a href="https://google.com" target="_blank" rel="noopener noreferrer">terms of service</a></span>.
                </p>
                <p>
                    <button id="sub_btn" type="submit">Register</button>
                </p> */}
        {/* <p>
                    <input type="checkbox" name="checkbox" id="checkbox" required /> <span>I agree all statements in <a href="https://google.com" target="_blank" rel="noopener noreferrer">terms of service</a></span>.
                </p> */}{" "}
        <br />
        <br />
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <button id="sub_btn" type="submit">
            Register
          </button>
        </div>
      </form>
      {/* <footer style={footerStyle}>
                <p style={{ color: '#f1f1f1',paddingTop:"25px"}}>Already have an account?<Link to="/" style={{color:"#ed0b70"}}>Login</Link></p>
            </footer> */}
      <Footer
        text={"Already have an account?"}
        page={"Login"}
        nav={"./LoginPage"}
      />
    </div>
  );
}

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
  borderRadius: "10px",
  backgroundColor: " transparent !important",
  background: "#323441",
};
