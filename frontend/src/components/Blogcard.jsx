import React from 'react';
import "./Blogcard.css";

function Blogcard(props) {
    // Function to handle card click, calling the provided onCardClick prop if available
    const handleClick = (event) => {
        event.stopPropagation(); // Prevents event propagation to parent elements
        if (props.onCardClick) {
            props.onCardClick(); // Calls the onCardClick function passed via props
        }
    };

    return (
        <div
            className="col-lg-4" // Defines the column size for responsive layout
            onClick={handleClick} // Handles click events on the card
            role="button" // Adds a button role for accessibility
            tabIndex={0} // Makes the element focusable for keyboard navigation
            onKeyPress={(event) => {
                if (event.key === 'Enter' || event.key === ' ') {
                    handleClick(event); // Triggers handleClick on 'Enter' or 'Space' key press
                }
            }}
        >
            <div className="col-innerbox"> {/* Wrapper for the card's content */}
                <div className="cardimagebox"> {/* Container for the card image */}
                    <img src={`${props.imageURL}`} alt="" className="cardimage" /> {/* Blog image */}
                </div>
                <div className="card-textbox"> {/* Container for the text content */}
                    <div className="card-animalnamebox"> {/* Container for animal tags */}
                        <p className="card-animalname">{props.animal}</p> {/* Animal tags */}
                    </div>
                    <h3 className="mb-4">{props.title}</h3> {/* Blog title */}
                    <div className="cardperson-group"> {/* Group for author and date */}
                        <i className="fa-solid fa-user-tie"></i> {/* User icon */}
                        <p>{props.person}</p> . {/* Author name */}
                        <p>{props.date}</p> {/* Publication date */}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Blogcard;
