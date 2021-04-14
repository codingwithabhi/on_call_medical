import React from 'react'
import "./index.scss";



export default function Header() {

    return (
        <header class="header">
                <nav class="navbar navbar-expand-lg header-nav">
                    <div class="navbar-header">
                        <a href="/" class="navbar-brand logo">
                            {/* <!-- <img src="assets/img/logo.png" class="img-fluid" alt="Logo"> --> */}
                            <h2 style={{fontFamily:"'Pacifico', 'cursive'",color:"#2a7886"}}>Dr Notes</h2>
                        </a>
                        <a id="mobile_btn" href="javascript:void(0);">
                            <span class="bar-icon">
                                <span></span>
                                <span></span>
                                <span></span>
                            </span>
                        </a>
                    </div>
                    <div class="main-menu-wrapper ml-auto">
                        <div class="menu-header">
                            <a href="/" class="menu-logo">
                                {/* <!-- <img src="assets/img/logo.png" class="img-fluid" alt="Logo"> --> */}
                                <h2 style={{fontFamily:"'Pacifico', 'cursive'",color:"#2a7886"}}>Dr Notes</h2>
                            </a>
                            <a id="menu_close" class="menu-close" href="javascript:void(0);">
                                <i class="fas fa-times"></i>
                            </a>
                        </div>
                        <ul class="main-nav">
                            <li class="active">
                                <a href="index.html">Home</a>
                            </li>
                            <li>
                                <a href="#">About Us</a>
                                {/* <!-- <ul class="submenu">
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
                                <a href="#">Solutions </a>
                                {/* <!-- <ul class="submenu">
                                    <li class="has-submenu">
                                        <a href="#">Doctors</a>
                                        <ul class="submenu">
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
                                <a href="#">Contact Us</a>
                            </li>
                            <li class="login-link">
                                <a href="login.html">Login</a>
                            </li>
                        </ul>    
                    </div>   
                    <ul class="nav header-navbar-rht">
                        <li class="nav-item">
                            <a class="nav-link header-login " href="login.html">Talk to an expert</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link header-login" href="/dashboard/index/">Go To Dashboard</a>
                        </li>
                    </ul>
                </nav>
            </header>
        
    )
}
