import React from 'react'
import "../../customcss/feed.css"
import Backtospecies from './Backtospecies'

function Snail() {
    return (
        <div>
            <section class="services-section">
                <div class="container">
                    <div class="section-title">
                        <h2> Snail Feeds</h2>
                        <p>ASF produces high-quality, affordable animal feed that supports the growth and health of livestock, enabling farmers to achieve maximum productivity and profitability.<br/>
                            We are committed to innovation, sustainability, and providing expert guidance to help farmers thrive in a competitive agricultural environment.<br/>
                            </p>
                        </div>
                            <div class="spicies of animals">
                                <div class="feed-services-grid">
                                    <div class="feed-service-card" data-aos="fade-up" data-aos-duration="800">
                                        <div class="feed-service-content">
                                            <img src="https://reefnutrition.com/cdn/shop/files/tdoC2small_group2_large.png?v=171279024733" alt="snail-feed" class="technicalsupp"/>
                                                <h3>Freshwater snail food</h3>
                                        </div>
                                        <div class="feeds">  <p>State-of-the-art facilities and expert management for optimal milk production with strict quality controls.</p></div>
                                    </div>
                                    <div class="feed-service-card" data-aos="fade-up" data-aos-delay="200" data-aos-duration="800">
                                        <div class="feed-service-content">
                                            <img src="https://sokocentre.com/wp-content/uploads/2020/06/snails-feed.jpg" alt="snail-feed" class="technicalsupp"/>
                                                <h3>Enhanced snail feed</h3>
                                        </div>
                                        <div class="feeds"><p>Modern processing facilities ensuring the highest quality dairy products from farm to table.</p></div>
                                    </div>
                                    <div class="feed-service-card" data-aos="fade-up" data-aos-delay="400" data-aos-duration="800">
                                        <div class="feed-service-content">
                                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnMrh_FiErcCM8B37SoU86k_UfmKSsNQqVuA&s" alt="snail-feed" class="technicalsupp"/>
                                                <h3>snail-calcium feed</h3>
                                        </div>
                                        <div class="feeds"><p>Comprehensive quality testing and certification services for all dairy products.</p></div>

                                    </div>
                                    <div class="feed-service-card" data-aos="fade-up" data-aos-delay="400" data-aos-duration="800">
                                        <div class="feed-service-content">
                                            <img src="https://www.shrimpcity.co.za/wp-content/uploads/2023/12/NatureHolic-Snail-Feed-2.png" alt="snail-feed" class="technicalsupp"/>
                                                <h3>NatureHolic-Snail-Feed-2</h3>
                                        </div>
                                        <div class="feeds"><p>Comprehensive quality testing and certification services for all dairy products.</p></div>
                                    </div>
                                    <div class="feed-service-card" data-aos="fade-up" data-aos-delay="400" data-aos-duration="800">
                                        <div class="feed-service-content">
                                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQYPR-WSXcUE4tPV9s6r6ytX7zFUNlaLv2jBrl849L6SQ5bvdhu3TMUmJmf3D-zsqUXKo&usqp=CAU" alt="snails-feed" class="technicalsupp"/>
                                                <h3>snail-mixed feed</h3>
                                        </div>
                                        <div class="feeds"><p>Comprehensive quality testing and certification services for all dairy products.</p></div>
                                    </div>
                                    <div class="feed-service-card" data-aos="fade-up" data-aos-delay="400" data-aos-duration="800">
                                        <div class="feed-service-content">
                                            <img src="https://pictures-nigeria.jijistatic.net/131942471_NjIwLTk1My1jN2NiNThhYTJm.webp" alt="snail-feed" class="technicalsupp"/>
                                                <h3>Portar-snail feed</h3>
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
        </div>
    )
}

export default Snail