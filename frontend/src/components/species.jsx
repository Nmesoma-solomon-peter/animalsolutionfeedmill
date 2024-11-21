import { Link } from "react-router-dom";

function Species() {
    return (
        <>
            <section className="species-section">
                <div className="container">
                    <div className="section-title">
                        <h2>Animal Species</h2>
                        <p>Explore our specialized feed solutions for different animal species</p>
                    </div>
                    <div className="services-grid">
                        <div className="service-card" data-aos="fade-up" data-aos-duration="800">
                            <div className="service-content">
                                <img src="https://www.milkmeansmore.org/wp-content/uploads/2019/07/UDIM361-700x400.jpg" alt="Ruminants" className="service-image" />
                                <h3>Cow</h3>
                                <p>State-of-the-art facilities and expert management for optimal milk production with strict quality controls.</p>
                                <div className="back-link">
                                    <Link to={"/cowFeeds"} className="button">cow feeds</Link>
                                </div>
                            </div>
                        </div>
                        <div className="service-card" data-aos="fade-up" data-aos-duration="800">
                            <div className="service-content">
                                <img src="https://stmaaprodfwsite.blob.core.windows.net/assets/sites/1/2019/07/1-MAIN-sheep-and-TMR-c-no-credit.jpg" alt="Ruminants" className="service-image" />
                                <h3>Sheep</h3>
                                <p>State-of-the-art facilities and expert management for optimal milk production with strict quality controls.</p>
                                <div className="back-link">
                                    <Link to={"/sheep"} className="button">Sheep feeds</Link>
                                </div>
                            </div>
                        </div>
                        <div className="service-card" data-aos="fade-up" data-aos-duration="800">
                            <div className="service-content">
                                <img src="https://www.shutterstock.com/image-photo/young-happy-white-goat-enjoying-260nw-2258336635.jpg" alt="Ruminants" className="service-image" />
                                <h3>Goat</h3>
                                <p>State-of-the-art facilities and expert management for optimal milk production with strict quality controls.</p>
                                <div className="back-link">
                                    <a href="goat.html" className="button">Goat feeds</a>
                                </div>
                            </div>
                        </div>
                        <div className="service-card" data-aos="fade-up" data-aos-delay="200" data-aos-duration="800">
                            <div className="service-content">
                                <img src="https://www.fish-feed-extruder.com/uploads/150425/fish_farming_in_Nigeria.jpg" alt="Fish" className="service-image" />
                                <h3>Fish</h3>
                                <p>Modern processing facilities ensuring the highest quality dairy products from farm to table.</p>
                                <div className="back-link">
                                    <a href="fish.html" className="button">Fish feeds</a>
                                </div>
                            </div>
                        </div>
                        <div className="service-card" data-aos="fade-up" data-aos-delay="400" data-aos-duration="800">
                            <div className="service-content">
                                <img src="https://i.ytimg.com/vi/t7PqyhvwqyU/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLCnAj7VQ2396-fR8eIq_p_3HO1dbQ" alt="Pig" className="service-image" />
                                <h3>Pig</h3>
                                <p>Comprehensive quality testing and certification services for all dairy products.</p>
                                <div className="back-link">
                                    <a href="pig.html" className="button">Pig feeds</a>
                                </div>
                            </div>
                        </div>
                        <div className="service-card" data-aos="fade-up" data-aos-delay="600" data-aos-duration="800">
                            <div className="service-content">
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYXhPkXlCxjWAX0i2y2aFS6lxfYCtA3imAQha2UAigDkA38_N-8SLMmc5H1cpUMmPYkBE&usqp=CAU" alt="Rabbit" className="service-image" />
                                <h3>Rabbit</h3>
                                <p>State-of-the-art facilities and expert management for optimal milk production with strict quality controls.</p>
                                <div className="back-link">
                                    <a href="rabbit.html" className="button">Rabbit feeds</a>
                                </div>
                            </div>
                        </div>
                        <div className="service-card" data-aos="fade-up" data-aos-delay="800" data-aos-duration="800">
                            <div className="service-content">
                                <img src="https://b2949656.smushcdn.com/2949656/wp-content/uploads/2023/07/Poultry-feed.jpg?lossy=2&strip=1&webp=1" alt="Poultry" className="service-image" />
                                <h3>Poultry</h3>
                                <p>Modern processing facilities ensuring the highest quality dairy products from farm to table.</p>
                                <div className="back-link">
                                    <a href="poultry.html" className="button">Poultry feeds</a>
                                </div>
                            </div>
                        </div>
                        <div className="service-card" data-aos="fade-up" data-aos-delay="1000" data-aos-duration="800">
                            <div className="service-content">
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbC32dYF959Lx2iIBXhMsvzmBJnbs3OvWN2ZQwiMR2kpYs4gNbgDmTA7VGMNg4fstHeJo&usqp=CAU" alt="Snails" className="service-image" />
                                <h3>Snails</h3>
                                <p>Comprehensive quality testing and certification services for all dairy products.</p>
                                <div className="back-link" />
                                <a href="snails.html" className="button">Snails feeds</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="back-link">
                    <Link to="/services" className="button">Back to Services</Link>
                </div>
            </section>
        </>
    )
}

export default Species;