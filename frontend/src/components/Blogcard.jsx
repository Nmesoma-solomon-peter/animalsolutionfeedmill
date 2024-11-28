import React from 'react';
import "./Blogcard.css";

function Blogcard(props) {
    const handleClick = (event) => {
        event.stopPropagation();
        if (props.onCardClick) {
            props.onCardClick();
        }
    };

    return (
        <div
            className="col-lg-4"
            onClick={handleClick}
            role="button"
            tabIndex={0}
            onKeyPress={(event) => {
                if (event.key === 'Enter' || event.key === ' ') {
                    handleClick(event);
                }
            }}
        >
            <div className="col-innerbox">
                <div className="cardimagebox">
                    <img src={`${props.imageURL}`} alt="" className="cardimage" />
                </div>
                <div className="card-textbox">
                    <div className="card-animalnamebox">
                        <p className="card-animalname">{props.animal}</p>
                    </div>
                    <h3 className="mb-4">{props.title}</h3>
                    <div className="cardperson-group">
                        <i className="fa-solid fa-user-tie"></i>
                        <p>{props.person}</p> .
                        <p>{props.date}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Blogcard;
