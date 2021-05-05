import React from 'react'
import "./index.scss";
 
export default function Home() {
    return (
        <>
            <section id="home" className="section home-banner">
				<div className="container-fluid">
					<div className="row banner-wrapper">
						<div className="col-md-12">
							<div className="banner-header">
								<h3>We are Expert in the Field</h3>
								<h1>YOUR RIGHT <span>SURGEON</span></h1>
								<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard</p>
								<a className="btn btn-primary mt-4">Know More <i className="fas fa-arrow-circle-right ml-1"></i></a>
							</div>
						</div>
					</div>
				</div>
			</section>
            
			<section id="about-us" className="our-benefits">
			<div className="row m-0">
					<div className="col-md-12 col-lg-6 benefits-text">
						<h3 className="top-title">Our Benefits</h3>
						<h2 className="section-title">Choose Our Physcatrist Treatment for Your Solutions</h2>
						<p className="mb-4">Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type</p>
						
						<div className="row">
							<div className="col-md-6 mb-3">
								<h4>BEST PROCEDURES</h4>
								<p className="para-text mt-3">Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
							</div>
							<div className="col-md-6 mb-3">
								<h4>ANALYZING TOGETHER</h4>
								<p className="para-text mt-3">Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
							</div>
							<div className="col-md-6 mb-3">
								<h4>UNDERSTANDING YOU</h4>
								<p className="para-text mt-3">Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
							</div>
							<div className="col-md-6 mb-3">
								<h4>LIGHT AT THE END</h4>
								<p className="para-text mt-3">Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
							</div>
						</div>
					</div>
					<div className="col-md-12 col-lg-6 p-0">
						<div className="bene-img">
							<img src="static/img/our-benefits.png" alt="Our Benefits" className="img-fluid"/>
						</div>
					</div>
				</div>
			</section>
			<section id="solutions" className="speak-expert">
				<div className="row m-0">
					<div className="col-md-12 col-lg-6 p-0">
						<div className="speak-expert-img">
							<img src="static/img/speak-expert.png" alt="Speak to Expert" className="img-fluid"/>
						</div>
					</div>
					<div className="col-md-12 col-lg-6 speak-expert-text">
						<h2 className="section-title" style={{color:'white'}}>Speak to an expert now</h2>
						<p className="mt-2">Your first consultation is on us. We understand the importance of taking the first step.</p>

						<p className="mt-2">That’s why your first consultation with us is FREE.</p>
					</div>
				</div>
			</section>
			<section id="contact-us" className="contact-us">
				<div className ="row m-0">
					<div className="col-md-12 col-lg-6 benefits-text">
						<h2 className="section-title-1">Contact Us</h2>
						<p className="mb-4">To receive latest offers, when an unknown printer took a galley of type</p>
						<p style={{color:"gray",marginBottom:"25px"}}>info@drnotes.co</p>
						<div className="row">
							<div className="col-md-6 mb-3">
								<div class="input-group mb-3">
									<input type="text" class="form-control" placeholder="First Name"/>
								</div>
							</div>
							<div className="col-md-6 mb-3">
								<div class="input-group mb-3">
									<input type="text" class="form-control" placeholder="Last Name"/>
								</div>
							</div>
							<div className="col-md-6 mb-3">
								<div class="input-group mb-3">
									<input type="text" class="form-control" placeholder="Email Address"/>
								</div>
							</div>
							<div className="col-md-6 mb-3">
								<div class="input-group mb-3">
									<input type="text" class="form-control" placeholder="Phone Number"/>
								</div>
							</div>
						</div>
						<div class="text-center mt-3 mb-3">
							<button href="blog-list.html" class="btn submit-form">Submit</button>
						</div>
					</div>
					<div className="col-md-12 col-lg-6 p-0">
						<div >
							<img src="static/img/login-bg.jpg" alt="Speak to Expert" className="img-fluid"/>
						</div>
					</div>
				</div>
			</section>
        </>
    )
}
