import React from 'react';
import "./Toast.css"
const Toast = () => {
    return (
        <div className="notification toast">
        <button>
            X
        </button>
        <div className="notification-image">
            <img src="" alt="" />
        </div>
        <div>
            <p className="notification-title">Title</p>
            <p className="notification-message">Message</p>
        </div>
    </div>
    )
}
export default Toast;