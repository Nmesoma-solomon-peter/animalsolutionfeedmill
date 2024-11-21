import { Link } from "react-router-dom"

function CowFeeds() {
    return (
        <>
            <section className="services-section">
                <div className="container">
                    <div className="section-title">
                        <h2>Cow Feeds</h2>
                        <p>ASF produces high-quality, affordable animal feed that supports the growth and health of livestock, enabling farmers to achieve maximum productivity and profitability.<br />
                            We are committed to innovation, sustainability, and providing expert guidance to help farmers thrive in a competitive agricultural environment.<br />
                        </p>
                    </div>
                    <div className="spicies of animals">
                        <div className="services-grid">
                            <div className="service-card" data-aos="fade-up" data-aos-duration="800">
                                <div className="service-content">
                                    <img src="https://www.feedpelletplants.com/uploads/allimg/formulation-of-cattle-pelelets-food.jpg" alt="Ruminants" className="technicalsupp" />
                                    <h3>cow feeds</h3>
                                </div>
                                <div className="feeds"><p>State-of-the-art facilities and expert management for optimal milk production with strict quality controls.</p></div>
                            </div>
                            <div className="service-card" data-aos="fade-up" data-aos-delay="200" data-aos-duration="800">
                                <div className="service-content">
                                    <img src="https://alzufeeds.co.za/wp-content/uploads/2023/04/Cattle-50kg.jpg" alt="Fish" className="technicalsupp" />
                                    <h3>Alzu feeds</h3>
                                </div>
                                <div className="feeds"><p>Modern processing facilities ensuring the highest quality dairy products from farm to table.</p></div>
                            </div>
                            <div className="service-card" data-aos="fade-up" data-aos-delay="400" data-aos-duration="800">
                                <div className="service-content">
                                    <img src="https://www.meadowfeeds.co.za/wp-content/uploads/2022/10/Beef-Booster-18.png" alt="Pig" className="technicalsupp" />
                                    <h3>Beef-Booster-18</h3>
                                </div>
                                <div className="feeds"><p>Comprehensive quality testing and certification services for all dairy products.</p></div>

                            </div>
                            <div className="service-card" data-aos="fade-up" data-aos-delay="400" data-aos-duration="800">
                                <div className="service-content">
                                    <img src="https://image.made-in-china.com/226f3j00Kwaorcudnzbp/Cattle-Sheep-Goat-Cow-Growth-Booster-Fast-Weight-Increasing-Premix-Feed-Additive.webp" alt="Pig" className="technicalsupp" />
                                    <h3>Cattle Sheep Goat Cow Growth Booste</h3>
                                </div>
                                <div className="feeds"><p>Comprehensive quality testing and certification services for all dairy products.</p></div>
                            </div>
                            <div className="service-card" data-aos="fade-up" data-aos-delay="400" data-aos-duration="800">
                                <div className="service-content">
                                    <img src="https://pasupatigroup.com/wp-content/uploads/2021/04/Milk-Concentrate.jpg" alt="Pig" className="technicalsupp" />
                                    <h3>Pasupati</h3>
                                </div>
                                <div className="feeds"><p>Comprehensive quality testing and certification services for all dairy products.</p></div>
                            </div>
                            <div className="service-card" data-aos="fade-up" data-aos-delay="400" data-aos-duration="800">
                                <div className="service-content">
                                    <img src="https://www.ckl.africa/wp-content/uploads/2024/03/xtra-champs.png" alt="Pig" className="technicalsupp" />
                                    <h3>Xtra-champs</h3>
                                </div>
                                <div className="feeds"><p>Comprehensive quality testing and certification services for all dairy products.</p></div>
                            </div>
                        </div>
                    </div>
                    <div className="back-link">
                        <Link to={"/species"} className="button">Back to Animal species</Link>
                    </div>
                </div>
            </section>
        </>
    )
}

export default CowFeeds