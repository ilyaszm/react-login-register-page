import React from 'react'

import BackgroundImage from '../../assets/images/bg.png'

export default function LandingPage() {
    return (
        <header style={ HeaderStyle }>
            <h1 className="text-center text-uppercase" style={ TitleStyle }>
                Welcome
            </h1>
        </header>
    )
}

const HeaderStyle = {
    width: "100%",
    height: "100vh",
    background: `url(${BackgroundImage})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover"
}

const TitleStyle = {
    paddingTop: "10rem",
    color: "#f1f1f1"
}