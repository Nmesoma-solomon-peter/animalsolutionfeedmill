import React, { useEffect, useState } from 'react'; // Don't forget to import useEffect and useState
import './Hero.css';

function Hero() {
    const heroDetails = [
        {
            url: 'https://images.pexels.com/photos/5216150/pexels-photo-5216150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            roundP: "freshness is important 1",
            myH3: "Growing veggies for better",
            secondP: "We all need a little space to grow, give yourself space"
        },
        {
            url: 'https://images.pexels.com/photos/7082626/pexels-photo-7082626.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            roundP: "freshness is important 2",
            myH3: "Growing veggies for better",
            secondP: "We all need a little space to grow, give yourself space"
        },
        {
            url: 'https://images.pexels.com/photos/18903798/pexels-photo-18903798/free-photo-of-hens-in-cage.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            roundP: "freshness is important 3",
            myH3: "Growing veggies for better",
            secondP: "We all need a little space to grow, give yourself space"
        }
    ];

    const [randNum, setRandNum] = useState(Math.floor(Math.random() * heroDetails.length)); // Initialize state with a random number

    useEffect(() => {
        // Function to change the random number every 2 minutes
        const interval = setInterval(() => {
            setRandNum(Math.floor(Math.random() * heroDetails.length)); // Update the random number
        }, 4000); // 120000 milliseconds = 2 minutes

        // Cleanup function to clear the interval
        return () => clearInterval(interval);
    }, []); // Run once when the component mounts

    return (
        <>
            <div
                style={{
                    backgroundImage: `url(${heroDetails[randNum].url})`,
                    fontSize: '20px',
                    width: '100%',
                    height: '90vh',
                    backgroundSize: 'cover',       // Ensures the image covers the entire div
                    backgroundPosition: 'center',  // Centers the image within the div
                    backgroundRepeat: 'no-repeat', // Prevents the image from repeating
                }}
                className='heroDiv'
            >
                <div className='hero-bg-color'>
                <div className='hero-innerDiv'>
                    <p className='hero-p1'>{heroDetails[randNum].roundP}</p>
                    <h2 className='hero-h2'>
                        {heroDetails[randNum].myH3}
                    </h2>
                    <p>{heroDetails[randNum].secondP}</p>
                    <button type="button" className="btn bg-white color-white btn-lg hero-btn">Contact us</button>
                </div>
                </div>
                
            </div>
        </>
    );
}

export default Hero;
