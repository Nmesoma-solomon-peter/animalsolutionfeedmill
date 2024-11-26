import React from 'react'
import "../../customcss/feed.css"
import Backtospecies from './Backtospecies'

function Rabbitfeed() {
    return (
        <>
            <section class="services-section">
                <div class="container">
                    <div class="section-title">
                        <h2>Rabbit Feeds</h2>
                        <p>ASF produces high-quality, affordable animal feed that supports the growth and health of livestock, enabling farmers to achieve maximum productivity and profitability.
                            <br/>
                            We are committed to innovation, sustainability, and providing expert guidance to help farmers thrive in a competitive agricultural environment.<br />
                        </p>
                    </div>
                    <div class="spicies of animals">
                        <div class="feed-services-grid">
                            <div class="feed-service-card" data-aos="fade-up" data-aos-duration="800">
                                <div class="feed-service-content">
                                    <img src="https://www.kalmbachfeeds.com/cdn/shop/files/Best_in_show_rabbit_16.jpg?v=1730298505&width=1080" alt="Ruminants" class="technicalsupp" />
                                    <h3>Kalmbach feeds</h3>
                                </div>
                                <div class="feeds"><p>State-of-the-art facilities and expert management for optimal milk production with strict quality controls.</p></div>
                            </div>
                            <div class="feed-service-card" data-aos="fade-up" data-aos-delay="200" data-aos-duration="800">
                                <div class="feed-service-content">
                                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6Q_EXPXUrBSTHS4yeiIu5A0UoELKermb9NA&s" alt="Fish" class="technicalsupp" />
                                    <h3>Kent feeds</h3>
                                </div>
                                <div class="feeds"><p>Modern processing facilities ensuring the highest quality dairy products from farm to table.</p></div>
                            </div>
                            <div class="feed-service-card" data-aos="fade-up" data-aos-delay="400" data-aos-duration="800">
                                <div class="feed-service-content">
                                    <img src="https://modestomilling.com/wp-content/uploads/2019/07/modesto_milling_feed-682_9323.jpg" alt="Pig" class="technicalsupp" />
                                    <h3>Rabbit pellets</h3>
                                </div>
                                <div class="feeds"><p>Comprehensive quality testing and certification services for all dairy products.</p></div>

                            </div>
                            <div class="feed-service-card" data-aos="fade-up" data-aos-delay="400" data-aos-duration="800">
                                <div class="feed-service-content">
                                    <img src="https://www.russellfeed.com/cdn/shop/products/BluebonnetFeeds_RabbitKindle_3D_1200x1290.png?v=1658246301" alt="Pig" class="technicalsupp" />
                                    <h3>Russell feed</h3>
                                </div>
                                <div class="feeds"><p>Comprehensive quality testing and certification services for all dairy products.</p></div>
                            </div>
                            <div class="feed-service-card" data-aos="fade-up" data-aos-delay="400" data-aos-duration="800">
                                <div class="feed-service-content">
                                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWU5VdGHY_pT1irf0sb7NV166-SRjNdIsfXg&s" alt="Pig" class="technicalsupp" />
                                    <h3>Organic rabit pellets</h3>
                                </div>
                                <div class="feeds"><p>Comprehensive quality testing and certification services for all dairy products.</p></div>
                            </div>
                            <div class="feed-service-card" data-aos="fade-up" data-aos-delay="400" data-aos-duration="800">
                                <div class="feed-service-content">
                                    <img src="https://m.media-amazon.com/images/I/61rwcUZwrzL._AC_UF1000,1000_QL80_.jpg" alt="Pig" class="technicalsupp" />
                                    <h3>Adult rabbit pellets</h3>
                                </div>
                                <div class="feeds"><p>Comprehensive quality testing and certification services for all dairy products.</p></div>
                            </div>
                        </div>
                    </div>
                    <div className="back-link">
                        <Backtospecies />
                    </div>
                </div>
            </section>
        </>
    )
}

export default Rabbitfeed