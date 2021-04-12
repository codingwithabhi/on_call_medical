import React from 'react'
import "./index.scss";


export default function Footer() {

    return (
        <footer className="site-footer">
          <div className="container">
            <div className="row">
              <div className="col-sm-12 col-md-6">
                <h6>About</h6>
                <p className="text-justify">n the US, a 2006 study found that searching for information on prescription or over-the-counter drugs was the fifth most popular search topic, and a 2004 study found that 4% of Americans had purchased prescription medications online.[3] A 2009 survey conducted by Geneva-based Health On the Net Foundation found one-in-ten Europeans buys medicines from websites and one-third claim to use online consultation.</p>
              </div>
    
              <div className="col-xs-6 col-md-3">
                <h6>Quick Links</h6>
                <ul className="footer-links">
                  <li><a href="#">About Us</a></li>
                  <li><a href="#">Privacy Policy</a></li>
                </ul>
              </div>
              <div className="col-xs-6 col-md-3">
                <h6>Contact Us</h6>
                <ul className="footer-links">
                <li>123 D Wing</li>
                <li>Streat Address 1</li>
                
                <li>Streat Address 2</li>
                 
                </ul>
              </div>
            </div>
            <hr/>
          </div>
          <div className="container">
            <div className="row">
              <div className="col-md-8 col-sm-6 col-xs-12">
                <p className="copyright-text">Copyright &copy; 2021 All Rights Reserved by 
             <a href="#"> On Call Medical</a>.
                </p>
              </div>
    
              <div className="col-md-4 col-sm-6 col-xs-12">
                <ul className="social-icons">
                  <li><a className="facebook" href="#"><i className="fa fa-facebook"></i></a></li>
                  <li><a className="twitter" href="#"><i className="fa fa-twitter"></i></a></li>
                  <li><a className="dribbble" href="#"><i className="fa fa-dribbble"></i></a></li>
                  <li><a className="linkedin" href="#"><i className="fa fa-linkedin"></i></a></li>   
                </ul>
              </div>
            </div>
          </div>
    </footer>
    )
}
