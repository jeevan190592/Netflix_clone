import React from 'react'
import "./Nav.css";

function Nav() {
    return (
        <div className="nav">
            <img
            className="nav__logo"
            src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
            alt="Netflix Logo" 
            />

            <img
            className="nav_avatar"
            src="https://i.pinimg.com/originals/b2/ad/bb/b2adbb49045f5a393e6760d79c71d2e4.png"
            alt="Netflix Logo"
            />
        </div>
    );
}

export default Nav;
