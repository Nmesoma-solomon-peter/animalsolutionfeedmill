import React from 'react'
import "../../customcss/feed.css"
import Backtospecies from './Backtospecies'

function Poultryfeed() {
    return (
        <>
            <section class="services-section">
                <div class="container">
                    <div class="section-title">
                        <h2> Poultry Feeds</h2>
                        <p>ASF produces high-quality, affordable animal feed that supports the growth and health of livestock, enabling farmers to achieve maximum productivity and profitability.<br />
                            We are committed to innovation, sustainability, and providing expert guidance to help farmers thrive in a competitive agricultural environment.<br />
                        </p>
                    </div>
                    <div class="spicies of animals">
                        <div class="feed-services-grid">
                            <div class="feed-service-card" data-aos="fade-up" data-aos-duration="800">
                                <div class="feed-service-content">
                                    <img src="https://www.bomgaars.com/media/catalog/product/cache/d7e2640dd2cd7ffe186fc0b5645db20b/s/f/sftp_a_s_assets20231011000000058.jpg" alt="poultry-feed" class="technicalsupp" />
                                    <h3>Bomgaars</h3>
                                </div>
                                <div class="feeds">  <p>State-of-the-art facilities and expert management for optimal milk production with strict quality controls.</p></div>
                            </div>
                            <div class="feed-service-card" data-aos="fade-up" data-aos-delay="200" data-aos-duration="800">
                                <div class="feed-service-content">
                                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ45Tq-VIP6lB20Mcv0250IKkoc-p6SExATcg&s" alt="poultry-feed" class="technicalsupp" />
                                    <h3>Tiqwa feed</h3>
                                </div>
                                <div class="feeds"><p>Modern processing facilities ensuring the highest quality dairy products from farm to table.</p></div>
                            </div>
                            <div class="feed-service-card" data-aos="fade-up" data-aos-delay="400" data-aos-duration="800">
                                <div class="feed-service-content">
                                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRc-CjTsqj4ZSRLB6mlM5jgiFmjSWXCwrjxfQ&s" alt="poultry-feed" class="technicalsupp" />
                                    <h3>Kalmbach</h3>
                                </div>
                                <div class="feeds"><p>Comprehensive quality testing and certification services for all dairy products.</p></div>

                            </div>
                            <div class="feed-service-card" data-aos="fade-up" data-aos-delay="400" data-aos-duration="800">
                                <div class="feed-service-content">
                                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdPyxPrd1Nk0SJKpmpSrto4DnhBZZf8_Cqyw&s" alt="poultry-feed" class="technicalsupp" />
                                    <h3>Broiled feed</h3>
                                </div>
                                <div class="feeds"><p>Comprehensive quality testing and certification services for all dairy products.</p></div>
                            </div>
                            <div class="feed-service-card" data-aos="fade-up" data-aos-delay="400" data-aos-duration="800">
                                <div class="feed-service-content">
                                    <img src="https://cdn11.bigcommerce.com/s-qz13ep5fb4/images/stencil/390x485/products/172290/247339/40EP__29622.1688670143.jpg?c=1" alt="poultry-feed" class="technicalsupp" />
                                    <h3>Rogue</h3>
                                </div>
                                <div class="feeds"><p>Comprehensive quality testing and certification services for all dairy products.</p></div>
                            </div>
                            <div class="feed-service-card" data-aos="fade-up" data-aos-delay="400" data-aos-duration="800">
                                <div class="feed-service-content">
                                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLtU3m5QFvSkfWckV3et0N1SIqBK6yJ_VGhA&s" alt="poultry" class="technicalsupp" />
                                    <h3>Moore feed</h3>
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

export default Poultryfeed