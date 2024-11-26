import "../../customcss/services1.css";
import { Link, Navigate } from "react-router-dom";
function Services() {
  // const scrollToSection = (sectionId) => {
  //   const section = document.getElementById(sectionId);
  //   if (section) {
  //     section.scrollIntoView({ behavior: 'smooth' });
  //   }
  // };

  return (
    <>
      <section className="services-section">
        <div className="container">
          <div className="section-title">
            <h2>Services</h2>
            <p>ASF produces high-quality, affordable animal feed that supports the growth and health of livestock, enabling farmers to achieve maximum productivity and profitability.<br />
              We are committed to innovation, sustainability, and providing expert guidance to help farmers thrive in a competitive agricultural environment.<br />
            </p>
          </div>
          <div className="spicies of animals">
            <div className="services-grid">
              <div className="service-card" data-aos="fade-up" data-aos-duration="800">
                <div className="service-content">
                  <img src="https://www.milkmeansmore.org/wp-content/uploads/2019/07/UDIM361-700x400.jpg" alt="Ruminants" className="technicalsupp" />
                  <h3>Species of Animals</h3>
                  <p>State-of-the-art facilities and expert management for optimal milk production with strict quality controls.</p>
                  <button>
                    <Link to={"/species"} className="learn-more-button">Learn More!</Link></button>
                </div>
              </div>
              <div className="service-card" data-aos="fade-up" data-aos-delay="200" data-aos-duration="800">
                <div className="service-content">
                  <img src="https://disciplines.ng/wp-content/uploads/2023/11/Admission-Requirements-for-Animal-Science-in-Nigerian-Varsities.jpeg" alt="Fish" className="technicalsupp" />
                  <h3>Technical expertise</h3>
                  <p>Modern processing facilities ensuring the highest quality dairy products from farm to table.</p>
                  <button onclick="scrollToSection('about')"><Link to={"/species"} className="learn-more-button">Learn More</Link></button>
                </div>
              </div>
              <div className="service-card" data-aos="fade-up" data-aos-delay="400" data-aos-duration="800">
                <div className="service-content">
                  <img src="https://farmersreviewafrica.com/wp-content/uploads/2022/03/DSC_1457.jpg" alt="Pig" className="technicalsupp" />
                  <h3>Consulation services</h3>
                  <p>Comprehensive quality testing and certification services for all dairy products.</p>
                  <button onClick="scrollToSection('about')"><Link to={"/articles"} className="learn-more-button">Learn More</Link></button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Services