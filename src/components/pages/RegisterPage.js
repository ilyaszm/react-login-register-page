import React from 'react'

import '../../App.css'

export default function SignUpPage() {
    return (
        <div>
            <h1>join us</h1>
            <form action="/signup" method="post">
                <p>
                    <label>Title</label><br/>
                    <label>
                    <input type="radio" name="title" value="mr"/>
                    Mr
                    </label>
                    <label>
                    <input type="radio" name="title" value="mrs"/>
                    Mrs
                    </label>
                    <label>
                    <input type="radio" name="title" value="miss"/>
                    Miss
                    </label>
                </p>
                <p>
                    <label>First name</label><br/>
                    <input type="text" name="first_name"/>
                </p>
                <p>
                    <label>Last name</label><br/>
                    <input type="text" name="last_name"/>
                </p>
                <p>
                    <label>Email</label><br/>
                    <input type="email" name="email" required/>
                </p>
                <p>
                    <label>Phone number</label><br/>
                    <input type="tel" name="phone"/>
                </p>
                <p>
                    <label>Password</label><br/>
                    <input type="password" name="password"/>
                </p>
                <p>
                    <label>Country</label><br/>
                    <select>
                    <option>China</option>
                    <option>India</option>
                    <option>United States</option>
                    <option>Indonesia</option>
                    <option>Brazil</option>
                    </select>
                </p>
                <p>
                    <label>
                    <input type="checkbox" value="terms"/>
                    I agree to the <a href="/terms">terms and conditions</a>
                    </label>
                </p>
                <p>
                    <button>Sign up</button>
                    <button type="reset">Reset form</button>
                </p>
                </form>
        </div>
    )
}
