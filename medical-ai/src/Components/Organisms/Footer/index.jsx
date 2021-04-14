import React from 'react'
import "./index.scss";


export default function Footer() {

    return (
      <footer class="footer">
          
          <div class="footer-top">
              <div class="container">
                  <div class="row">
                      <div class="col-lg-3 col-md-6">
                      
                          <div class="footer-widget footer-about">
                              <div class="footer-logo">
                                  {/* <!-- <img src="assets/img/logo-white.png" alt="logo"> --> */}
                                  <h1 style={{fontFamily:"'Pacifico', 'cursive'",color:"#fff"}}>Dr Notes</h1>
                              </div>
                              <div class="footer-about-content">
                                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                                  {/* <!-- <div class="social-icon">
                                      <ul>
                                          <li>
                                              <a href="#" target="_blank"><i class="fab fa-facebook-f"></i> </a>
                                          </li>
                                          <li>
                                              <a href="#" target="_blank"><i class="fab fa-google-plus-g"></i> </a>
                                          </li>
                                          <li>
                                              <a href="#" target="_blank"><i class="fab fa-instagram"></i></a>
                                          </li>
                                          <li>
                                              <a href="#" target="_blank"><i class="fab fa-twitter"></i> </a>
                                          </li>
                                      </ul>
                                  </div> --> */}
                              </div>
                          </div>
                          
                      </div>
                      
                      <div class="col-lg-3 col-md-6">
                      
                          <div class="footer-widget footer-menu">
                              <h2 class="footer-title">For Patients</h2>
                              <ul>
                                  <li><a href="#">Search for Doctors</a></li>
                                  <li><a href="#">Login</a></li>
                                  <li><a href="#">Register</a></li>
                                  <li><a href="#">Booking</a></li>
                                  <li><a href="#">Patient Dashboard</a></li>
                              </ul>
                          </div>
                          
                      </div>
                      
                      <div class="col-lg-3 col-md-6">
                      
                          <div class="footer-widget footer-menu">
                              <h2 class="footer-title">For Dr Notes</h2>
                              <ul>
                                  <li><a href="#">Appointments</a></li>
                                  <li><a href="#">Chat</a></li>
                                  <li><a href="#">Login</a></li>
                                  <li><a href="#">Register</a></li>
                                  <li><a href="#">Doctor Dashboard</a></li>
                              </ul>
                          </div>    
                      </div>

                      <div class="col-lg-3 col-md-6">
                      
                          <div class="footer-widget footer-menu">
                              <h2 class="footer-title">Subscribe for Updates</h2>
                              <p>Don’t miss doccure latest news and events</p>
                              <form>
                                  <div class="input-group mb-3">
                                      <input type="text" class="form-control" placeholder="Email"/>
                                      <div class="input-group-append">
                                        <button class="btn btn-outline-secondary" type="button">Subcribe</button>
                                      </div>
                                  </div>
                              </form>
                          </div>
                          
                      </div>
                      
                  </div>
              </div>
          </div>
          <div class="footer-bottom">
              <div class="container">
                  <div class="row d-flex col-md-12">
                      <p>Copyright  © 2021 | All rights reserved by Dr Notes</p>
                  </div>
              </div>
          </div>
          
      </footer>
    )
}
