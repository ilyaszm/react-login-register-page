import React from 'react'
import { Link } from 'react-router-dom'

import '../../App.css'

export default function SignUpPage() {

    return (
        <div className="text-center login-page">
            <h2>Join us</h2>
            <h3>Create your personal account</h3>
            <form action="/home">
                <p>
                    <label>Username</label><br/>
                    <input type="text" name="first_name" required/>
                </p>
                <p>
                    <label>Email address</label><br/>
                    <input type="email" name="first_name" required/>
                </p>
                <p>
                    <label>Password</label><br/>
                    <input type="password" name="password" required/>
                </p>
                <p>
                    <button id="sub_btn" type="submit">Login</button>
                </p>
            </form>
            <footer>
                <p>First time? <Link to="/register">Create an account</Link>.</p>
                <p><Link to="/">Back to Homepage</Link>.</p>
            </footer>
        </div>
    )

}
