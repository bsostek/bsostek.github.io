import React from 'react';
import logo from './logo.png'
class Navbar extends React.Component {
    render() {
        return (
            <div className="topnav">
            <img src={logo} alt="" />
            <a className="active" href="#main">Home</a>
            <a href="#resume">Resume</a>
            <a href="#projects">Projects</a>
            <a href="#slides">Slideshow</a>
            <a href="#about">About</a>
            </div>
        )
    }
}
export default Navbar;