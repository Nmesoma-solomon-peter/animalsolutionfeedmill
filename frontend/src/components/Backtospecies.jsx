import React from 'react'
import { Link } from "react-router-dom";
// import "./services1.css"
import "../../customcss/feed.css"


function Backtospecies() {
    return (
        <>
            <Link to="/species" className="feed-button">Back to Animal species</Link>
        </>
    )
}

export default Backtospecies