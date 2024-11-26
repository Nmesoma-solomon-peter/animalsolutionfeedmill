import React from 'react'
import './Form.css'

function ContactusForm() {
    return (
        <>
            <div className="row whoweare-parent cont-fluid">
                <div className="col-lg-5 col-sm-12 form-left-img">
                    <div>
                        <div></div>
                    </div>
                </div>
                <div className="col-lg-7 col-sm-12">
                    <div className='whoweare-right-dev'>
                        <p className='what-first-p'> <i className="fa-solid fa-seedling"></i> Get in touch
                        </p>
                        <h3 className='what-h3'>Have any Questions? Get in Touch!</h3>
                        <form action="https://getform.io/f/awnnvklb" method="POST">
                            <div class="row formrow">
                                <div class="col-sm-6">
                                    {/* <!-- Single Form Start --> */}
                                    <div class="">
                                        <input type="text" placeholder="Your name" name='name' required />
                                    </div>
                                    {/* <!-- Single Form End --> */}
                                </div>
                                <div class="col-sm-6">
                                    {/* <!-- Single Form Start --> */}
                                    <div class="single-form">
                                        <input type="tel" placeholder="Phone number *" name='phone' required />
                                    </div>
                                    {/* <!-- Single Form End --> */}
                                </div>

                                <div class="col-sm-6">
                                    {/* <!-- Single Form Start --> */}
                                    <div class="single-form">
                                        <input type="email" placeholder="email address" name='email' required />
                                    </div>
                                    {/* <!-- Single Form End --> */}
                                </div>
                                <div class="col-sm-6">
                                    {/* <!-- Single Form Start --> */}
                                    <div class="single-form">
                                        <input type="text" placeholder="subject" name='subject' required />
                                    </div>
                                    {/* <!-- Single Form End --> */}
                                </div>

                                <div class="col-sm-12">
                                    {/* <!-- Single Form Start --> */}
                                    <div class="single-form">
                                        <textarea placeholder="Write A Message" spellcheck="false" name='message' required></textarea>
                                    </div>
                                    {/* <!-- Single Form End --> */}
                                </div>
                                <div class="col-sm-12">
                                    {/* <!--  Single Form Start --> */}
                                    <div class="form-btn text-center">
                                        <button class="btn bg-primary submitbtn" type="submit">Send Message</button>
                                    </div>
                                    {/* <!--  Single Form End --> */}
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ContactusForm