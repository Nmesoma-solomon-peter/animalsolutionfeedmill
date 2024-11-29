import React from 'react';
import { Link } from "react-router-dom";
// Importing custom CSS for styling
// import "./services1.css"
import "../../customcss/feed.css";

// Define the Backtospecies functional component
function Backtospecies() {
    return (
        <>
            {/* Link to navigate back to the Animal species page */}
            <Link to="/species" className="feed-button">Back to Animal species</Link>
        </>
    );
}

// Export the Backtospecies component for use in other parts of the application
export default Backtospecies;
