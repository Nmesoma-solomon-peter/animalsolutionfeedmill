import React from 'react'

// Define the Aboutsec functional component
function Aboutsec() {
    return (
        <>
            {/* Container for the entire 'About' section with padding at the top */}
            <div className="container-fluid about pt-5">
                <div className="container">
                    <div className="row gx-5">
                        
                        {/* Left column: Contains an image representing the 'About Us' section */}
                        <div className="col-lg-6 mb-5 mb-lg-0">
                            <div className="d-flex h-100 border border-5 border-primary border-bottom-0 pt-4">
                                {/* Image element styled to fit within the border container */}
                                <img 
                                    className="img-fluid mb-0 mx-auto" 
                                    src="https://www.noblefoods.co.uk/wp-content/uploads/2018/03/feed-milling-image02.jpg" 
                                    alt="About Us" 
                                />
                            </div>
                        </div>
                        
                        {/* Right column: Contains text and additional information */}
                        <div className="col-lg-6 pb-5">
                            {/* Section header with 'About Us' and a headline */}
                            <div className="mb-3 pb-2">
                                <h6 className="text-primary text-uppercase">About Us</h6>
                                <h1 className="display-5">Enhancing Livestock Production with Quality Feed</h1>
                            </div>
                            
                            {/* Paragraph describing the mission and services of ASF */}
                            <p className="mb-4">
                                Animal Solution Feedmill (ASF) produces high-quality, animal-specific feed designed to enhance livestock
                                production among small, medium, and large-scale farmers in Nigeria at affordable prices. ASF provides
                                technical expertise and consultation services to help farmers with optimal feed formulation and nutrient
                                composition, supporting maximum livestock yield and growth. Our services help reduce high mortality
                                rates, increase productivity, and improve returns on investment in livestock production.
                            </p>
                            
                            {/* Row containing two informational cards */}
                            <div className="row gx-5 gy-4">
                                
                                {/* First card: Expert Consultation */}
                                <div className="col-sm-6">
                                    <i className="fa fa-tractor display-1 text-secondary"></i>
                                    <h4>Expert Consultation</h4>
                                    <p className="mb-0">
                                        We offer technical guidance to ensure farmers achieve optimal results through effective nutrition.
                                    </p>
                                </div>
                                
                                {/* Second card: Affordable Pricing */}
                                <div className="col-sm-6">
                                    <i className="fa fa-apple-alt display-1 text-secondary"></i>
                                    <h4>Affordable Pricing</h4>
                                    <p className="mb-0">
                                        Our affordable solutions make high-quality livestock feed accessible to all farmers.
                                    </p>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        </>
    )
}

// Export the Aboutsec component for use in other parts of the application
export default Aboutsec
