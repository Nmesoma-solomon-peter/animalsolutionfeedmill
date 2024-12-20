import React from 'react'
import "../../customcss/feed.css"
import Backtospecies from './Backtospecies'

function Goat() {
    return (
        <>
            <section class="services-section">
                <div class="container">
                    <div class="section-title">
                        <h2>Goat Feeds</h2>
                        <p>ASF produces high-quality, affordable animal feed that supports the growth and health of livestock, enabling farmers to achieve maximum productivity and profitability.<br />
                            We are committed to innovation, sustainability, and providing expert guidance to help farmers thrive in a competitive agricultural environment.<br />
                        </p>
                    </div>
                    <div class="spicies of animals">
                        <div class="feed-services-grid">
                            <div class="feed-service-card" data-aos="fade-up" data-aos-duration="800">
                                <div class="feed-service-content">
                                    <img src="https://nutrenaworld.com/wp-content/uploads/2024/01/01_CF-17-Goat-Textured_bag.jpg" alt="Ruminants" class="technicalsupp" />
                                    <h3>Gray feed services</h3>
                                </div>
                                <div class="feeds"><p>State-of-the-art facilities and expert management for optimal milk production with strict quality controls.</p></div>
                            </div>
                            <div class="feed-service-card" data-aos="fade-up" data-aos-delay="200" data-aos-duration="800">
                                <div class="feed-service-content">
                                    <img src="https://www.kalmbachfeeds.com/cdn/shop/products/kalmbach-16-textured-goat-grain-goat-feed-front-bag.jpg?v=1681331015" alt="Fish" class="technicalsupp" />
                                    <h3>Kalmbach feeds</h3>
                                </div>
                                <div class="feeds"><p>Modern processing facilities ensuring the highest quality dairy products from farm to table.</p></div>
                            </div>
                            <div class="feed-service-card" data-aos="fade-up" data-aos-delay="400" data-aos-duration="800">
                                <div class="feed-service-content">
                                    <img src="https://lonestarfeed.com/wp-content/uploads/2016/05/1675-w-product-4.jpg" alt="Pig" class="technicalsupp" />
                                    <h3>lonestar feed</h3>
                                </div>
                                <div class="feeds"><p>Comprehensive quality testing and certification services for all dairy products.</p></div>

                            </div>
                            <div class="feed-service-card" data-aos="fade-up" data-aos-delay="400" data-aos-duration="800">
                                <div class="feed-service-content">
                                    <img src="https://www.newcountryorganics.com/media/catalog/product/f/4/f40-goat-pellets.jpg?quality=80&bg-color=255,255,255&fit=bounds&height=200&width=200&canvas=200:200" alt="Pig" class="technicalsupp" />
                                    <h3>Goat Pellets</h3>
                                </div>
                                <div class="feeds"><p>Comprehensive quality testing and certification services for all dairy products.</p></div>
                            </div>
                            <div class="feed-service-card" data-aos="fade-up" data-aos-delay="400" data-aos-duration="800">
                                <div class="feed-service-content">
                                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvuNdJTmpUE_3WybpD2rkd6EQT00e2HK-orA&s" alt="Pig" class="technicalsupp" />
                                    <h3>Adilaid goat feed</h3>
                                </div>
                                <div class="feeds"><p>Comprehensive quality testing and certification services for all dairy products.</p></div>
                            </div>
                            <div class="feed-service-card" data-aos="fade-up" data-aos-delay="400" data-aos-duration="800">
                                <div class="feed-service-content">
                                    <img src="https://agrarzone.com/media/g0/fc/d9/1716895596/42222_1_1.webp?ts=1716895596" alt="Pig" class="technicalsupp" />
                                    <h3>Healthy harvest feed</h3>
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

export default Goat