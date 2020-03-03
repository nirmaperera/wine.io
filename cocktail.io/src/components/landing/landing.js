import React from 'react';
import '../landing/landing.css';


function Landing() {
    return (
        <div className="landing-container">
            <div className="landingRight-container">
                <div className="landingRight-content">
                    <h2 id="sub-header">Find your <span></span> cocktail today!</h2>
                    <div className="landing-btns">
                        <button>Get Started </button>
                        <button>Try the cocktail of the day</button>
                    </div>

                </div>
            </div>

        </div>
    );
}

export default Landing;