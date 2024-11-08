import React from 'react'
import "./Whatwedobrief.css"
import farmer from "../assets/farmerman.jpg"

function Whatwedobrief() {
    return (
        <div className='row container-fluid mt-5 what-parent-div'>
            <div className='col-lg-6 what-left'>
                <img src={farmer} alt="farmer tending livestock" className='what-img' />
            </div>
            <div className='col-lg-6 what-yellow'>
                <div>
                    <p className='what-first-p'> <i className="fa-solid fa-seedling"></i> Our Mission</p>
                    <h3 className='what-h3'>Empowering Growth with Quality Feed</h3>
                    <p className='what-second-p'>
                        Quality feed is the backbone of healthy livestock and sustainable farming. Our feed solutions are designed to boost animal well-being and support a healthier, more productive ecosystem.
                    </p>
                </div>
                <div className='row mt-5'>
                    <div className='col-lg-6 col-sm-12 what-percent-left'>
                        <div className='what-percent-box'>
                            <h4 className='col-lg-6 what-1-percent-h4'>95%</h4>
                            <h4 className='col-lg-6 what-2-percent-h4'>Farmers Trust Our Feed</h4>
                        </div>
                    </div>

                    <div className='col-lg-6 col-sm-12 what-percent-left'>
                        <div className='what-percent-box'>
                            <h4 className='col-lg-6 what-1-percent-h4'>80%</h4>
                            <h4 className='col-lg-6 what-2-percent-h4'>Improved Livestock Health</h4>
                        </div>
                    </div>
                    {/* <button type="button" className="btn color-white btn-lg what-btn">Learn More</button> */}
                </div>
            </div>
        </div>
    )
}

export default Whatwedobrief;
