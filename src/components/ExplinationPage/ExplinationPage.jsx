import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import './ExplinationPage.css';
import Footer from '../Footer/Footer';

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
        <div className="body-container">
            <center>
                <h2 className='h2Text'>Welcome to CoachLink!</h2>
                <div className='white-back'>
                    <img className='logo-exp' src='/images/logo.png' alt='CoackLinklogo' />
                    <div className="slide-container">
                        <div className="slide-content">{slides[currentSlide]}</div>
                    </div>
                    <div>
                        {currentSlide > 0 && (
                            <button onClick={handlePreviousSlide}>Previous</button>
                        )}
                        {currentSlide < slides.length - 1 ? (
                            <button onClick={handleNextSlide}>Next</button>
                        ) : (
                            <button onClick={handleRegister}>Create Account</button>
                        )}
                    </div>
                </div>
            </center>
            <Footer />
        </div>
    );
}

export default ExplinationPage;
