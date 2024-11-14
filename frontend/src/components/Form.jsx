import React from 'react'
import './Form.css'

function Form() {
    return (
        <div className='container-fluid'>
            <div class="contact-form contact-out">
                <div class="contact-form-wrap">
                    <div class="heading-wrap text-center">
                        <span class="sub-ti"> request a demo</span>
                        <h3 class="title">How May We Help You!</h3>
                    </div>
                    
                    <form action="https://getform.io/f/bbd29e60-96ec-405d-a26c-8a3ef43c816b" method="POST">
                        <div class="row formrow">
                            <div class="col-sm-6">
                                {/* <!-- Single Form Start --> */}
                                <div class="single-form">
                                    <input type="text" placeholder="Name *"  name='name' required/>
                                </div>
                                {/* <!-- Single Form End --> */}
                            </div>
                            <div class="col-sm-6">
                                {/* <!-- Single Form Start --> */}
                                <div class="single-form">
                                    <input type="email" placeholder="Email *" name='email' required/>
                                </div>
                                {/* <!-- Single Form End --> */}
                            </div>
                            <div class="col-sm-12">
                                {/* <!-- Single Form Start --> */}
                                <div class="single-form">
                                    <input type="text" placeholder="Subject *" name='subject' required/>
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
                                    <button class="btn submitbtn" type="submit">Send Message</button>
                                </div>
                                {/* <!--  Single Form End --> */}
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Form