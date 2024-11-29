import React from 'react'; // Import React library
import './Form.css'; // Import the CSS file for styling the form

// Functional component for the "Contact Us" form
function ContactusForm() {
    return (
        <>
            <div className="row whoweare-parent cont-fluid">
                {/* Left section for an image or decorative element */}
                <div className="col-lg-5 col-sm-12 form-left-img">
                    <div>
                        <div></div>
                    </div>
                </div>
                
                {/* Right section for the contact form */}
                <div className="col-lg-7 col-sm-12">
                    <div className='whoweare-right-dev'>
                        {/* Section heading */}
                        <p className='what-first-p'> 
                            <i className="fa-solid fa-seedling"></i> Get in touch
                        </p>
                        <h3 className='what-h3'>Have any Questions? Get in Touch!</h3>
                        
                        {/* Contact form */}
                        <form action="https://getform.io/f/bpjjxgvb" method="POST">
                            <div className="row formrow">
                                {/* Name input */}
                                <div className="col-sm-6">
                                    <div>
                                        <input 
                                            type="text" 
                                            placeholder="Your name" 
                                            name='name' 
                                            required 
                                        />
                                    </div>
                                </div>

                                {/* Phone input */}
                                <div className="col-sm-6">
                                    <div className="single-form">
                                        <input 
                                            type="tel" 
                                            placeholder="Phone number *" 
                                            name='phone' 
                                            required 
                                        />
                                    </div>
                                </div>

                                {/* Email input */}
                                <div className="col-sm-6">
                                    <div className="single-form">
                                        <input 
                                            type="email" 
                                            placeholder="email address" 
                                            name='email' 
                                            required 
                                        />
                                    </div>
                                </div>

                                {/* Subject input */}
                                <div className="col-sm-6">
                                    <div className="single-form">
                                        <input 
                                            type="text" 
                                            placeholder="subject" 
                                            name='subject' 
                                            required 
                                        />
                                    </div>
                                </div>

                                {/* Message input */}
                                <div className="col-sm-12">
                                    <div className="single-form">
                                        <textarea 
                                            placeholder="Write A Message" 
                                            spellCheck="false" 
                                            name='message' 
                                            required
                                        ></textarea>
                                    </div>
                                </div>

                                {/* Submit button */}
                                <div className="col-sm-12">
                                    <div className="form-btn text-center">
                                        <button 
                                            className="btn bg-primary submitbtn" 
                                            type="submit"
                                        >
                                            Send Message
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ContactusForm; // Export the ContactusForm component
