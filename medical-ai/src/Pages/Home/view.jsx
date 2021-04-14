import React from 'react'
 
export default function Home() {
    return (
        <>
            <section class="section home-banner">
				<div class="container-fluid">
					<div class="row banner-wrapper">
						<div class="col-md-12">
							<div class="banner-header">
								<h3>We are Expert in the Field</h3>
								<h1>YOUR RIGHT <span>SURGEON</span></h1>
								<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard</p>
								<a class="btn btn-primary mt-4">Know More <i class="fas fa-arrow-circle-right ml-1"></i></a>
							</div>
						</div>
					</div>
				</div>
			</section>
            <section class="news-events">
				<div class="">
					<div class="row">
						<div class="col-md-4">
							<div class="card float">
								<img src="static/img/news-event-01.jpg" class="card-img-top" alt="News and Events"/>
								<div class="card-body" style={{textAlign:"center"}}>
								  <h3>Emergency Care</h3>
								  <p class="card-text">Roll out digital communications to support rapid and effective vaccine distribution</p>
								</div>
							</div>
						</div>
						<div class="col-md-4">
							<div class="card float" style={{textAlign:"center"}}>
								<img src="static/img/news-event-02.jpg" class="card-img-top" alt="News and Events"/>
								<div class="card-body">
								  <h3>Qualified Doctors</h3>
								  <p class="card-text">Now supporting healthcare workloads of every size.<br/><br/></p>
								  
								</div>
							</div>
						</div>
						<div class="col-md-4">
							<div class="card float" style={{textAlign:"center"}}>
								<img src="static/img/news-event-03.jpg" class="card-img-top" alt="News and Events"/>
								<div class="card-body">
								  <h3>24/7 Hour Service</h3>
								  <p class="card-text">Join us May 11th to learn about new features, see demos, and get free code samples. Register now!</p>
								  
								</div>
							</div>
						</div>
					</div>
					
				</div>
			</section>
			<section class="health-care">
				<div class="container">
					<div class="d-flex justify-content-between align-items-center mob-disp">
						<div class="d-flex justify-content-between align-items-center">
							<img src="static/img/health-care-icon.png" alt="Health Care"/>
							<div class="health-care-text">
								<h3>Health Care Center</h3>
								<p>if you have any Emerangcy by health problem contact this No. 12346548897 or contact form</p>
							</div>
						</div>						
						<a href="#" class="btn btn-primary">Contact Us</a>
					</div>					
				</div>
			</section>
        </>
    )
}
