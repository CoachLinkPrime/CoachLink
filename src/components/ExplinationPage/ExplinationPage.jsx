import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import './ExplinationPage.css';
import Footer from '../Footer/Footer';

import { Button, ButtonGroup } from '@mui/material';

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
        'Need some extra cash? Want to get involved with more clubs? browse and apply for gigs at your local mountains.',
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
                            <Button variant="contained"  sx={{
                                backgroundColor: '#65b0f1',
                                '&:hover': {
                                backgroundColor: '#C6E5F3',
                                color: 'black'
                                },
                                color: 'white'
                                }}
                                onClick={handlePreviousSlide}>
                                Previous
                            </Button>
                        )}
                        {currentSlide < slides.length - 1 ? (
                            <Button variant="contained"  sx={{
                                backgroundColor: '#65b0f1',
                                '&:hover': {
                                backgroundColor: '#C6E5F3',
                                color: 'black'
                                },
                                color: 'white'
                                }}
                                onClick={handleNextSlide}>
                                    Next
                            </Button>
                        ) : (
                            <Button variant="contained"  sx={{
                                backgroundColor: '#65b0f1',
                                '&:hover': {
                                backgroundColor: '#C6E5F3',
                                color: 'black'
                                },
                                color: 'white'
                                }} 
                                onClick={handleRegister}>
                                Create Account
                            </Button>
                        )}
                    </div>
                </div>
            </center>
            <Footer />
        </div>
    );
}

export default ExplinationPage;
