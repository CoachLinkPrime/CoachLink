import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import './ExplinationPage.css';

function ExplinationPage() {
    const history = useHistory();
    const [currentSlide, setCurrentSlide] = useState(0);

    const handleNextSlide = () => {
        setCurrentSlide((prevSlide) => prevSlide + 1);
    };

    const handlePreviousSlide = () => {
        setCurrentSlide((prevSlide) => prevSlide - 1);
    };
    const slides = [
        'Need an Instructor/Coach? Post a gig and we will connect you with locals in your area.',
        'Need some extra cash? Want to get involved with more clubs? browse and aplly for gigs in your area.',
        'We provide a space for local clubs and coaches to connect and fill in the gap of missed opportunities for learning and teaching',
    ];
    const handleRegister = (event) => {
        history.push('/registration');
    };
    return (
        <div className="container">
            <center>
                <h2>Welcome to CoachLink!</h2>
                <div className="slide-container">
                    <div className="slide-content">{slides[currentSlide]}</div>
                </div>
                <div>
                    <button onClick={handlePreviousSlide} disabled={currentSlide === 0}>
                        Previous
                    </button>
                    <button
                        onClick={handleNextSlide}
                        disabled={currentSlide === slides.length - 1}
                    >
                        Next
                    </button>
                </div>
                <button className='register-ep' onClick={handleRegister} >register</button>
            </center>
        </div>
    );
}

export default ExplinationPage;
