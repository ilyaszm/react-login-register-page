import React from "react";
import "./Footer.css";
import { Link } from 'react-router-dom'

export default function Footer(props) {
  return (
    <div className="footer">
    
<p style={{ color: '#f1f1f1',paddingTop:"25px"}}>{props.text}<Link to={"/register"} style={{ color: '#ed0b70'}}>{props.page}</Link></p>

      <h1>{props.note}</h1>
    </div>
  );
}


