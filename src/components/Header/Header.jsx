import React from "react";



const Header = () => {
    return(
        <nav className="navbar">
            <div>
                <a className="navbar-brand" href="index.html">MEALSWIPES</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <ul className="navbar">
                    <li>
                        <a href="index.html">Home</a>
                    </li>
                    <li>
                        <a href="about.html">About Us</a>
                    </li>
                    <li className="nav-item">
                        <a href="signin.html">Sign In</a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Header;

