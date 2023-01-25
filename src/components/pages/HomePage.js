import React, { useState,useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from "axios";
export default function HomePage(props) {
    const [user, setUser] = useState([]);

    const fetchData = () => {
      return fetch("https://api.colive.com/rentx/qa/api/Property/GetMastersForBidsPage")
            .then((response) => response.json())
            .then((data) => setUser(data));
    }
  
    useEffect(() => {
      fetchData();
    },[])



    return (
      <main>
        <h1>User List</h1>
        <ul>
          {user && user.length > 0 && user.map((userObj, index) => (
              <li key={userObj.id}>{userObj.PropertyCity.Name}</li>
            ))}
        </ul>
      </main>
    );
  }




//     const [CustomerDetails, setUsers] = useState([])

//   const fetchData = () => {
//     fetch("https://api.colive.com/rentx/live/CRMapi/PropertyCRM/CustomerDetailsInsertByOTP")
//       .then(response => {
//         return response.json()
//       })
//       .then(data => {
//         setUsers(data.CustomerDetails)
//       })
//   }

//   return (
//     <div>
//       <button onClick={fetchData}>Fetch Users</button>
//       {CustomerDetails.length > 0 && (
//         <ul>
//           {CustomerDetails.map(user => (
//             <li key={CustomerDetails.id}>{CustomerDetails.CustomerName}</li>
//           ))}
//         </ul>
//       )}
//     </div>
//   )
// }