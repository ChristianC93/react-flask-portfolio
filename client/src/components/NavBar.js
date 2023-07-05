import { Link } from "react-router-dom";
import { FaBars, FaTimes} from "react-icons/fa";
import React, { useState } from 'react';
import '../styles/NavBarStyles.css';

function NavBar() {
    const [display, setDisplay] = useState(false);
    const [color, setColor] = useState(false);

    const handleClick = () => {
        setDisplay(!display);
    }

    const changeColor = () => {
        if (window.scrollY >= 100) {
            setColor(true);
        } else {
            setColor(false);
        }
    }

    window.addEventListener("scroll", changeColor);

    return (
        <div className={ color ? "header header-bg" : "header" }>
            <Link to="/">
                <h1>Portfolio</h1>
            </Link>
            <ul className={display ? "nav-menu active" : "nav-menu"}>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/projects">Projects</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
            </ul>
            <div className="hamburger" onClick={ handleClick }>
                {display ? (
                    <FaTimes size={ 20 } style={{ color: "white" }} />
                ) : (
                    <FaBars size={ 20 } style={{ color: "white" }} />
                )}     
            </div>
        </div>
    )
}

export default NavBar