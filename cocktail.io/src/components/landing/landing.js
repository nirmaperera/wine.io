import React from 'react';
import { Link } from "react-router-dom";
import '../landing/landing.css';


function Landing() {
    return (
        <div className="landing-container">
            <div className="landingLeft-container"></div>
            <div className="landingRight-container">
                <div className="landingRight-content">
                    <h2 id="sub-header">Find your <span></span> cocktail today!</h2>
                    <div className="landing-btns">
                        <button>Get Started </button>
                        <Link to="/random"> <button>Try a random cocktail</button></Link>
                    </div>

                </div>
            </div>

        </div>
    );
}

export default Landing;