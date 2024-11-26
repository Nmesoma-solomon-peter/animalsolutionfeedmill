import React from 'react'
import "../../customcss/feed.css"
import Backtospecies from './Backtospecies'

function Fishfeed() {
    return (
        <>
            <section class="services-section">
                <div class="container">
                    <div class="section-title">
                        <h2>Fish Feeds</h2>
                        <p>ASF produces high-quality, affordable animal feed that supports the growth and health of livestock, enabling farmers to achieve maximum productivity and profitability.<br />
                            We are committed to innovation, sustainability, and providing expert guidance to help farmers thrive in a competitive agricultural environment.<br />
                        </p>
                    </div>
                    <div class="spicies of animals">
                        <div class="feed-services-grid">
                            <div class="feed-service-card" data-aos="fade-up" data-aos-duration="800">
                                <div class="feed-service-content">
                                    <img src="https://m.media-amazon.com/images/I/811et3fOKDL._AC_UF1000,1000_QL80_.jpg" alt="Ruminants" class="technicalsupp" />
                                    <h3>Pellets feeds for fish</h3>
                                </div>
                                <div class="feeds"><p>State-of-the-art facilities and expert management for optimal milk production with strict quality controls.</p></div>
                            </div>
                            <div class="feed-service-card" data-aos="fade-up" data-aos-delay="200" data-aos-duration="800">
                                <div class="feed-service-content">
                                    <img src="https://5.imimg.com/data5/OS/JS/HT/SELLER-46163397/floating-fish-feed.jpg" alt="Fish" class="technicalsupp" />
                                    <h3>Tilapia floating fish feeds</h3>
                                </div>
                                <div class="feeds"><p>Modern processing facilities ensuring the highest quality dairy products from farm to table.</p></div>
                            </div>
                            <div class="feed-service-card" data-aos="fade-up" data-aos-delay="400" data-aos-duration="800">
                                <div class="feed-service-content">
                                    <img src="https://www.feedwale.com/wp-content/uploads/2022/04/Best-2mm-Fish-Feed-Front.jpg" alt="Pig" class="technicalsupp" />
                                    <h3>Fish pellets</h3>
                                </div>
                                <div class="feeds"><p>Comprehensive quality testing and certification services for all dairy products.</p></div>

                            </div>
                            <div class="feed-service-card" data-aos="fade-up" data-aos-delay="400" data-aos-duration="800">
                                <div class="feed-service-content">
                                    <img src="https://m.media-amazon.com/images/I/81mSmDAvRTL.jpg" alt="Pig" class="technicalsupp" />
                                    <h3>Mashki</h3>
                                </div>
                            </div>
                        </div>
                        <div className="back-link">
                            <Backtospecies />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Fishfeed