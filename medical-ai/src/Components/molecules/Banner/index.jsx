import React from 'react'
import "./index.scss";

export default function Banner(props) {
    return (
        <section className="search-section">
            <div className="container">
                <div className="row">
                    <div className="col-12 col-lg-6 col-xl-8">
                        <div className="search-box">
                            <h2>
                                Search Doctor
                                <br/>
                                Make an appointment
                            </h2>
                            <div className="form-col">
                                <form>
                                    <ul class="d-flex flex-wrap">
										<li>
											<input type="text" placeholder="Location" class="form-control"/>
										</li>
										<li>
											<input type="text" placeholder="Gender" class="form-control"/>
										</li>
										<li>
											<input type="text" placeholder="Phone Number" class="form-control"/>
										</li>
										<li>
											<input type="submit" value="Search" class="btn-submit form-control"/>
										</li>
									</ul>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
