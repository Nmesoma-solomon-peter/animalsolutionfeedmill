import React from 'react'
import "../../customcss/feed.css"
import Backtospecies from './Backtospecies'

function Sheep() {
    return (
        <>
            <section className="services-section">
                <div className="container">
                    <div className="section-title">
                        <h2>Sheep Feeds</h2>
                        <p>ASF produces high-quality, affordable animal feed that supports the growth and health of livestock, enabling farmers to achieve maximum productivity and profitability.<br/>
                            We are committed to innovation, sustainability, and providing expert guidance to help farmers thrive in a competitive agricultural environment.<br/>
                            </p>
                        </div>
                            <div className="spicies of animals">
                                <div className="feed-services-grid">
                                    <div className="feed-service-card" data-aos="fade-up" data-aos-duration="800">
                                        <div className="feed-service-content">
                                            <img src="https://www.grayfeedservices.co.uk/perch/resources/sheep-feed-bag.jpg" alt="Ruminants" className="technicalsupp"/>
                                                <h3>Gray feed services</h3>
                                        </div>
                                        <div className="feeds"><p>State-of-the-art facilities and expert management for optimal milk production with strict quality controls.</p></div>
                                    </div>
                                    <div className="feed-service-card" data-aos="fade-up" data-aos-delay="200" data-aos-duration="800">
                                        <div className="feed-service-content">
                                            <img src="https://www.meadowfeeds.co.za/wp-content/uploads/2022/10/Sheep-Feed.png" alt="Fish" className="technicalsupp"/>
                                                <h3>Meadow feeds</h3>
                                        </div>
                                        <div className="feeds"><p>Modern processing facilities ensuring the highest quality dairy products from farm to table.</p></div>
                                    </div>
                                    <div className="feed-service-card" data-aos="fade-up" data-aos-delay="400" data-aos-duration="800">
                                        <div className="feed-service-content">
                                            <img src="https://cdn-ilbcpnf.nitrocdn.com/wSTZtBDAFAkUiRjVAimsGXDeqyweOofJ/assets/images/optimized/kentfeeds.com/wp-content/uploads/UBS_home-fresh_sheep-feed-pellet-medicated_50lb_j9288_front_1080px-1.jpg" alt="Pig" className="technicalsupp"/>
                                                <h3>Blue seal</h3>
                                        </div>
                                        <div className="feeds"><p>Comprehensive quality testing and certification services for all dairy products.</p></div>

                                    </div>
                                    <div className="feed-service-card" data-aos="fade-up" data-aos-delay="400" data-aos-duration="800">
                                        <div className="feed-service-content">
                                            <img src="https://www.purinamills.com/getmedia/9bad3618-144d-4149-a89b-91ae9f942dc5/Product_Sheep_Purina-Lamb-Starter.png?width=300&height=430&ext=.png" alt="Pig" className="technicalsupp"/>
                                                <h3>Product_Sheep_Purina-Lamb-Starter</h3>
                                        </div>
                                        <div className="feeds"><p>Comprehensive quality testing and certification services for all dairy products.</p></div>
                                    </div>
                                    <div className="feed-service-card" data-aos="fade-up" data-aos-delay="400" data-aos-duration="800">
                                        <div className="feed-service-content">
                                            <img src="https://nemofeed.com/wp-content/uploads/2017/04/NEMO-Bag-Mockups_Sheep.png" alt="Pig" className="technicalsupp"/>
                                                <h3>Nemo feed</h3>
                                        </div>
                                        <div className="feeds"><p>Comprehensive quality testing and certification services for all dairy products.</p></div>
                                    </div>
                                    <div className="feed-service-card" data-aos="fade-up" data-aos-delay="400" data-aos-duration="800">
                                        <div className="feed-service-content">
                                            <img src="https://www.newcountryorganics.com/media/catalog/product/f/1/f1k-12_-swine.jpg?quality=80&bg-color=255,255,255&fit=bounds&height=200&width=200&canvas=200:200" alt="Pig" className="technicalsupp"/>
                                                <h3>Swine feed</h3>
                                        </div>
                                        <div className="feeds"><p>Comprehensive quality testing and certification services for all dairy products.</p></div>
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

export default Sheep