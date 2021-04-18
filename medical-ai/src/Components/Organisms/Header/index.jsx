import React from 'react'
import "./index.scss";
import Media from "react-media";



export default function Header() {

    const menuOpen = (e)=>{
        document.body.classList.add('menu-opened')
        e.preventDefault()
    }

    const menuClosed = (e) => {
        document.body.classList.remove('menu-opened')
        e.preventDefault()
    }

    return (
        <header className="header">
                <nav className="navbar navbar-expand-lg header-nav">
                    <div className="navbar-header">
                        <a href="/" className="navbar-brand logo">
                            {/* <!-- <img src="assets/img/logo.png" className="img-fluid" alt="Logo"> --> */}
                            <h2 style={{fontFamily:"'Pacifico', 'cursive'",color:"#2a7886"}}>Dr Notes</h2>
                        </a>
                        <a id="mobile_btn" href="#" onClick={menuOpen}>
                            <span className="bar-icon">
                                <span></span>
                                <span></span>
                                <span></span>
                            </span>
                        </a>
                    </div>
                    <div className="main-menu-wrapper ml-auto">
                        <div className="menu-header">
                            <a href="/" className="menu-logo">
                                {/* <!-- <img src="assets/img/logo.png" className="img-fluid" alt="Logo"> --> */}
                                <h2 style={{fontFamily:"'Pacifico', 'cursive'",color:"#2a7886"}}>Dr Notes</h2>
                            </a>
                            <a id="menu_close" className="menu-close" href="#" onClick={menuClosed}>
                                <i className="fas fa-times"></i>
                            </a>
                        </div>
                        <ul className="main-nav">
                            <li className="active">
                                <a href="#home">Home</a>
                            </li>
                            <li>
                                <a href="#about-us">About Us</a>
                                {/* <!-- <ul className="submenu">
                                    <li><a href="#">Doctor Dashboard</a></li>
                                    <li><a href="#">Appointments</a></li>
                                    <li><a href="#">Schedule Timing</a></li>
                                    <li><a href="#">Patients List</a></li>
                                    <li><a href="#">Patients Profile</a></li>
                                    <li><a href="#">Chat</a></li>
                                    <li><a href="#">Invoices</a></li>
                                    <li><a href="#">Profile Settings</a></li>
                                    <li><a href="#">Reviews</a></li>
                                    <li><a href="#">Doctor Register</a></li>
                                </ul> --> */}
                            </li>   
                            <li>
                                <a href="#solutions">Solutions </a>
                                {/* <!-- <ul className="submenu">
                                    <li className="has-submenu">
                                        <a href="#">Doctors</a>
                                        <ul className="submenu">
                                            <li><a href="#">Map Grid</a></li>
                                            <li><a href="#">Map List</a></li>
                                        </ul>
                                    </li>
                                    <li><a href="#">Search Doctor</a></li>
                                    <li><a href="#">Doctor Profile</a></li>
                                    <li><a href="#">Booking</a></li>
                                    <li><a href="#">Checkout</a></li>
                                    <li><a href="#">Booking Success</a></li>
                                    <li><a href="#">Patient Dashboard</a></li>
                                    <li><a href="#">Favourites</a></li>
                                    <li><a href="#">Chat</a></li>
                                    <li><a href="#">Profile Settings</a></li>
                                    <li><a href="#">Change Password</a></li>
                                </ul> --> */}
                            </li>   
                            
                            <li>
                                <a href="#contact-us">Contact Us</a>
                            </li>
                            <li className="login-link">
                                <a href="/dashboard/index/">Go To Dashboard</a>
                            </li>
                        </ul>    
                    </div>   
                    <Media queries={{
                        small: "(max-width: 599px)",
                        medium: "(min-width: 600px) and (max-width: 1199px)",
                        large: "(min-width: 1200px)"
                    }}>
                        {matches => (
                            (matches.large || matches.medium) &&
                                <ul className="nav header-navbar-rht" >
                                    <li className="nav-item">
                                        <a className="nav-link header-login " href="login.html">Talk to an expert</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link header-login" href="/dashboard/index/">Go To Dashboard</a>
                                    </li>
                                </ul>
                        )}
                    </Media>
                </nav>
            </header>
        
    )
}
