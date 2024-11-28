import React from 'react'
import EmmanuelOlatejo from "../assets/EmmanuelOladejo.jpg";
import GeneralManager from "../assets/Generalmanager.jpg";
import OladejoIsreal from "../assets/OladejoIsrael.png";

function OurTeam() {

    const teamDetails = [
        {
            name:"Emmanuel Oladejo, PHD",
            position: "Co-founder/Director of Technical Services",
            image:EmmanuelOlatejo
        },
        {
            name:"James Oladejo",
            position: "General Manager and Supply Chain Lead",
            image:GeneralManager
        },
        {
            name:"Mr Isreal Oladejo",
            position: "Co-founder/Operations and Strategy Lead",
            image:OladejoIsreal
        },
        
    ]
    return (
        <>
            <div className="container-fluid py-5">
                <div className="container">
                    <div className="mx-auto text-center mb-5" style={{ maxWidth: '500px' }}>
                        <h6 className="text-primary text-uppercase">The Team</h6>
                        <h1 className="display-5">We Are Professional Organic Farmers</h1>
                    </div>
                    <div className="row g-5">
                        {teamDetails.map((details, index) => (
                            <div className="col-lg-4 col-md-6" key={index}>
                                <div className="row g-0">
                                    <div className="col-10">
                                        <div className="position-relative">
                                            <img className="img-fluid w-100" src={details.image} alt={`Team ${index + 1}`} />
                                            <div
                                                className="position-absolute start-0 bottom-0 w-100 py-3 px-4"
                                                style={{ background: 'rgba(52, 173, 84, 0.85)' }}
                                            >
                                                <h4 className="text-white">{details.name}</h4>
                                                <span className="text-white">{details.position}</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-2">
                                        <div className="h-100 d-flex flex-column align-items-center justify-content-around bg-secondary py-5">
                                            {['twitter', 'facebook-f', 'linkedin-in', 'instagram'].map((social, idx) => (
                                                <a
                                                    className="btn btn-square rounded-circle bg-white"
                                                    href="#"
                                                    key={idx}
                                                >
                                                    <i className={`fab fa-${social} text-secondary`}></i>
                                                </a>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default OurTeam