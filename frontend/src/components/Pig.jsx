import React from 'react'
import Backtospecies from './Backtospecies'

function Pig() {
    return (
        <>
             
            <section className="services-section">
                <div className="container">
                    <div className="section-title">
                        <h2> Pig Feeds</h2>
                        <p>ASF produces high-quality, affordable animal feed that supports the growth and health of livestock, enabling farmers to achieve maximum productivity and profitability.<br />
                            We are committed to innovation, sustainability, and providing expert guidance to help farmers thrive in a competitive agricultural environment.<br/>
                        </p>
                    </div>
                    <div className="spicies of animals">
                        <div className="feed-services-grid">
                            <div className="service-card" data-aos="fade-up" data-aos-duration="800">
                                <div className="feed-service-content">
                                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-tvT0HBlyOcdBZ95b6P8k2Nc88zjiTZvtCA&s" alt="pig-feed" className="technicalsupp" />
                                    <h3>Meadows feeds</h3>
                                </div>
                                <div className="feeds">  <p>State-of-the-art facilities and expert management for optimal milk production with strict quality controls.</p></div>
                            </div>
                            <div className="feed-service-card" data-aos="fade-up" data-aos-delay="200" data-aos-duration="800">
                                <div className="feed-service-content">
                                    <img src="https://www.minipiginfo.com/uploads/5/4/3/0/54308893/8137439_orig.jpg" alt="pig-feed" className="technicalsupp" />
                                    <h3>Purina feeds</h3>
                                </div>
                                <div className="feeds"><p>Modern processing facilities ensuring the highest quality dairy products from farm to table.</p></div>
                            </div>
                            <div className="feed-service-card" data-aos="fade-up" data-aos-delay="400" data-aos-duration="800">
                                <div className="feed-service-content">
                                    <img src="https://elkmoundseed.com/cdn/shop/files/Hog_Mash__23177.jpg?v=1715132627" alt="Pig-feed" className="technicalsupp" />
                                    <h3>Hong Mash feeds</h3>
                                </div>
                                <div className="feeds"><p>Comprehensive quality testing and certification services for all dairy products.</p></div>

                            </div>
                            <div className="feed-service-card" data-aos="fade-up" data-aos-delay="400" data-aos-duration="800">
                                <div className="feed-service-content">
                                    <img src="https://5.imimg.com/data5/SELLER/Default/2023/1/QQ/FN/HF/42771963/whatsapp-image-2023-01-20-at-10-16-47-am-500x500.jpeg" alt="Pig-feed" className="technicalsupp" />
                                    <h3>Poshak</h3>
                                </div>
                                <div className="feeds"><p>Comprehensive quality testing and certification services for all dairy products.</p></div>
                            </div>
                            <div className="feed-service-card" data-aos="fade-up" data-aos-delay="400" data-aos-duration="800">
                                <div className="feed-service-content">
                                    <img src="https://nutrenaworld.com/wp-content/uploads/2024/01/01_CF-GrowerFinisher-Pig-Feed_Bag.jpg" alt="pig-feed" className="technicalsupp" />
                                    <h3>Nutrena feeds</h3>
                                </div>
                                <div className="feeds"><p>Comprehensive quality testing and certification services for all dairy products.</p></div>
                            </div>
                            <div className="feed-service-card" data-aos="fade-up" data-aos-delay="400" data-aos-duration="800">
                                <div className="feed-service-content">
                                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzIMLYu6TXDSodgVWchZMk-lXZ6vPmh74QSQ&s" alt="pig-feed" className="technicalsupp" />
                                    <h3>Swine feeds</h3>
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

export default Pig