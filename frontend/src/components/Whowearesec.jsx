import React from 'react'
import "./whoweare.css"

function Whowearesec() {
    return (
        <>
            <div className="row whoweare-parent container-fluid">
                <div className="col-lg-6 col-sm-12 whoweare-left-img">
                    <div>
                        <div></div>
                    </div>
                </div>
                <div className="col-lg-6 col-sm-12">
                    <div className='whoweare-right-dev'>
                        <p className='what-first-p'> <i className="fa-solid fa-seedling"></i> who we are
                        </p>
                        <h3 className='what-h3'>Currently we are growing and selling organic food</h3>
                        <p className='what-second-p'>
                            There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even.</p>

                        <div className="row">
                            <div className="col">
                                <i class="fa-solid fa-phone-volume whoweare-innerfa"></i>
                                <h3 className='whoweare-h3'>Eco Farms Worldwide </h3>
                                <p className='whoweare-p'>There are many variations of pass ages of lorem ipsum available majority have suffered.
                                </p>
                            </div>
                            <div className="col">
                                <i class="fa-solid fa-phone-volume whoweare-innerfa"></i>
                                <h3 className='whoweare-h3'>Eco Farms Worldwide </h3>
                                <p className='whoweare-p'>There are many variations of pass ages of lorem ipsum available majority have suffered.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Whowearesec