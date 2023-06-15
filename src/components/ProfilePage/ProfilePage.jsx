import React from 'react';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import CheckBoxTable from './CheckBoxTable';
import DisciplinesTable from './DisciplinesTable';
import './ProfilePage.css';

function ProfilePage() {
    const history = useHistory();
    const user = useSelector((store) => store.user);
    const [yearsOfExperience, setYearsOfExperience] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [email, setEmail] = useState('');
    const handlePhoneNumber = (e) => {
        setPhoneNumber(e.target.value);
    };
    const handleEmail = (e) => {
        setEmail(e.target.value);
    };
    const handleYearsOfExpierence = (e) => {
        setYearsOfExperience(e.target.value);
    };

    const onSave = () => {
        
    } 

    return (
        <>
            <div className='container'>
                    <h2>Hello, {user.username}!</h2>
                <p>what do you do?</p>
                <CheckBoxTable />
                <p>Years of expierence:</p>
                <input
                    type='text'
                    value={yearsOfExperience}
                    placeholder='Years of expierence?'
                    onChange={handleYearsOfExpierence}
                />
                <p>{yearsOfExperience}</p>

                <DisciplinesTable />
                <p>Phone Number:</p>
                <input
                    type='text'
                    value={phoneNumber}
                    placeholder='Phone Number'
                    onChange={handlePhoneNumber}
                />
                <p>Email:</p>
                <input
                    type='text'
                    value={email}
                    placeholder='Email'
                    onChange={handleEmail}
                />
                <button onClick={onSave}>save</button>
            </div>
        </>
    );
}

export default ProfilePage;
