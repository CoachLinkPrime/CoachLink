import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './ProfilePage.css';
import { Button, ButtonGroup, TextField, Grid, Radio, FormControlLabel } from '@mui/material';

function ProfilePage() {
    const dispatch = useDispatch();
    const user = useSelector((store) => store.user);
    const profile = useSelector((store) => store.profile);

    const [editMode, setEditMode] = useState(false);
    const [editedProfile, setEditedProfile] = useState({});

    useEffect(() => {
        dispatch({ type: 'FETCH_PROFILE' });
    }, [dispatch]);

    const handleEditClick = () => {
        // Enable edit mode
        setEditMode(true);
        setEditedProfile({ ...profile });
    };

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setEditedProfile((prevProfile) => ({
            ...prevProfile,
            [name]: value,
        }));
    };
    console.log(editedProfile);
    const handleSaveClick = () => {
        dispatch({ type: 'EDIT_PROFILE', payload: editedProfile });
        setEditMode(false);
    };

    const handleCancel = () => {
        setEditMode(false);
        setEditedProfile({ ...profile });
    };

    const handleDescriptionClick = () => {
        if (!editedProfile.description) {
            setEditedProfile((prevProfile) => ({
                ...prevProfile,
                description: 'Olympic gold medalist and world champion downhill skier.',
            }));
        }
    };

    return (
        <>
            <div className='profile-container'>
                <div class="ad-container">
                    <img src={process.env.PUBLIC_URL + '/images/snowswaps.png'} alt="snowswaps" />
                    <p>Need equipment for your club? Have extra gear lying around?</p>
                    <p><a href="https://www.zachlulavy.com/snowswaps">click here</a></p>
                </div>
                <div className="profile-picture">
                    <img src={process.env.PUBLIC_URL + '/images/lindseyvonn.jpeg'} alt="Profile" />
                </div>
                {editMode ? (
                    <>
                        <div className='profile-info'>
                            <div style={{ marginBottom: '20px' }}>
                                <TextField
                                    type="text"
                                    name="name"
                                    label='Name'
                                    size='small'
                                    value={editedProfile.name || ''}
                                    onChange={handleInputChange}
                                />
                            </div>
                            <div style={{ marginBottom: '20px' }}>
                                <TextField
                                    type="text"
                                    name="email"
                                    label='Email'
                                    size='small'
                                    value={editedProfile.email || ''}
                                    onChange={handleInputChange}
                                />
                            </div>
                            <div style={{ marginBottom: '20px' }}>
                                <TextField
                                    type="number"
                                    name='phone_number'
                                    label='Phone Number'
                                    size='small'
                                    value={editedProfile.phone_number || ''}
                                    onChange={handleInputChange}
                                />
                            </div>
                            <div>
                                <TextField
                                    name='description'
                                    label='Description'
                                    multiline
                                    rows={3}
                                    value={editedProfile.description || ''}
                                    onChange={handleInputChange}
                                    onClick={handleDescriptionClick}
                                />
                            </div>
                            <table>
                                <tr>
                                    <td><div>
                                        <label>
                                            Instuctor
                                        </label>
                                    </div></td>
                                    <td><div>
                                        <label>
                                            Coach
                                        </label>
                                    </div></td>
                                </tr>
                                <tr>
                                    <td><div>
                                        <label>
                                            Level 1
                                        </label>
                                        <input
                                            type='radio'
                                            value='Instructor level 1'
                                            name='coach_level'
                                            checked={editedProfile.coach_level === 'Instructor level 1'}
                                            onChange={handleInputChange}
                                        />
                                    </div>
                                    </td>
                                    <td><div>
                                        <label>
                                            Level 100
                                        </label>
                                        <input
                                            type='radio'
                                            value='Coach level 100'
                                            name='coach_level'
                                            checked={editedProfile.coach_level === 'Coach level 100'}
                                            onChange={handleInputChange}
                                        />
                                    </div></td>
                                </tr>
                                <tr>
                                    <td><div>
                                        <label>
                                            Level 2
                                        </label>
                                        <input
                                            type='radio'
                                            value='Instructor level 2'
                                            name='coach_level'
                                            checked={editedProfile.coach_level === 'Instructor level 2'}
                                            onChange={handleInputChange}
                                        />
                                    </div></td>
                                    <td> <div>
                                        <label>
                                            Level 200
                                        </label>
                                        <input
                                            type='radio'
                                            value='Coach level 200'
                                            name='coach_level'
                                            checked={editedProfile.coach_level === 'Coach level 200'}
                                            onChange={handleInputChange}
                                        />
                                    </div></td>
                                </tr>
                                <tr>
                                    <td><div>
                                        <label>
                                            Level 3
                                        </label>
                                        <input
                                            type='radio'
                                            value='Instructor level 3'
                                            name='coach_level'
                                            checked={editedProfile.coach_level === 'Instructor level 3'}
                                            onChange={handleInputChange}
                                        />
                                    </div></td>
                                    <td><div>
                                        <label>
                                            Level 300
                                        </label>
                                        <input
                                            type='radio'
                                            value='Coach level 300'
                                            name='coach_level'
                                            checked={editedProfile.coach_level === 'Coach level 300'}
                                            onChange={handleInputChange}
                                        />
                                    </div></td>
                                </tr>
                                <tr>
                                    <td><div>
                                        <label>
                                            Level 4
                                        </label>
                                        <input
                                            type='radio'
                                            value='Instructor level 4'
                                            name='coach_level'
                                            checked={editedProfile.coach_level === 'Instructor level 4'}
                                            onChange={handleInputChange}
                                        />
                                    </div></td>
                                    <td>
                                        <div>
                                            <label>
                                                Level 400
                                            </label>
                                            <input
                                                type='radio'
                                                value='Coach level 400'
                                                name='coach_level'
                                                checked={editedProfile.coach_level === 'Coach level 400'}
                                                onChange={handleInputChange}
                                            />
                                        </div></td>
                                </tr>
                            </table>

                            <div>
                                <label>
                                    Uncertified
                                </label>
                                <input
                                    type='radio'
                                    value='Unqualified'
                                    name='coach_level'
                                    checked={editedProfile.coach_level === 'Unqualified'}
                                    onChange={handleInputChange}
                                />
                            </div>

                            <div>
                                <label>
                                    Years of experience:
                                </label>
                                <input
                                    playholder='Years of Experience'
                                    type='number'
                                    name='years_of_experience'
                                    value={editedProfile.years_of_experience || ''}
                                    onChange={handleInputChange}
                                />
                            </div>
                            <div></div>
                            <div>
                                <table className='edit-table'>
                                    <tr>
                                        <td><label>
                                            Ski
                                        </label>
                                            <input
                                                type='radio'
                                                name='ski_or_snow'
                                                value='Ski'
                                                checked={editedProfile.ski_or_snow === 'Ski'}
                                                onChange={handleInputChange}
                                            /></td>
                                        <td> <label>
                                            Snowboard
                                        </label>
                                            <input
                                                type='radio'
                                                name='ski_or_snow'
                                                value='Snowboard'
                                                checked={editedProfile.ski_or_snow === 'Snowboard'}
                                                onChange={handleInputChange}
                                            /></td>
                                    </tr>
                                    <tr>
                                        <td><label>
                                            Alpine
                                        </label>
                                            <input
                                                type='radio'
                                                value='Alpine'
                                                name='activity_type'
                                                checked={editedProfile.activity_type === 'Alpine'}
                                                onChange={handleInputChange}
                                            /></td>
                                        <td><div><label>
                                            Alpine (PGS/PSL)
                                        </label>
                                            <input
                                                type='radio'
                                                value='Alpine (PGS/PSL)'
                                                name='activity_type'
                                                checked={editedProfile.activity_type === 'Alpine (PGS/PSL)'}
                                                onChange={handleInputChange}
                                            /></div></td>
                                    </tr>
                                    <tr>
                                        <td><label>
                                            Slopestyle
                                        </label>
                                            <input
                                                type='radio'
                                                value='Slopestyle'
                                                name='activity_type'
                                                checked={editedProfile.activity_type === 'Slopestyle'}
                                                onChange={handleInputChange}
                                            /></td>
                                        <td><label>
                                            Slopestyle
                                        </label>
                                            <input
                                                type='radio'
                                                value='Slopestyle'
                                                name='activity_type'
                                                checked={editedProfile.activity_type === 'Slopestyle'}
                                                onChange={handleInputChange}
                                            /></td>
                                    </tr>
                                    <tr>
                                        <td><label>
                                            Boarder Cross
                                        </label>
                                            <input
                                                type='radio'
                                                value='Boarder cross'
                                                name='activity_type'
                                                checked={editedProfile.activity_type === 'Boarder cross'}
                                                onChange={handleInputChange}
                                            /></td>
                                        <td><label>
                                            Skier Cross
                                        </label>
                                            <input
                                                type='radio'
                                                value='Skier cross'
                                                name='activity_type'
                                                checked={editedProfile.activity_type === 'Skier cross'}
                                                onChange={handleInputChange}
                                            /></td>
                                    </tr>
                                    <tr>
                                        <td><label>
                                            Halfpipe
                                        </label>
                                            <input
                                                type='radio'
                                                value='Halfpipe'
                                                name='activity_type'
                                                checked={editedProfile.activity_type === 'Halfpipe'}
                                                onChange={handleInputChange}
                                            /></td>
                                        <td> <label>
                                            Halfpipe
                                        </label>
                                            <input
                                                type='radio'
                                                value='Halfpipe'
                                                name='activity_type'
                                                checked={editedProfile.activity_type === 'Halfpipe'}
                                                onChange={handleInputChange}
                                            /></td>
                                    </tr>
                                </table>
                            </div>
                        </div>

                        <ButtonGroup sx={{ mt: 2 }}>
                            <Button variant="contained" sx={{
                                backgroundColor: '#7EBBF1',
                                '&:hover': {
                                    backgroundColor: '#C6E5F3',
                                    color: 'black'
                                },
                                color: 'white'
                            }} onClick={handleSaveClick}>
                                Save
                            </Button>
                            <Button variant="contained" sx={{
                                backgroundColor: '#7EBBF1',
                                '&:hover': {
                                    backgroundColor: '#C6E5F3',
                                    color: 'black'
                                },
                                color: 'white'
                            }} onClick={handleCancel}>
                                cancel
                            </Button>
                        </ButtonGroup>
                    </>
                ) : (
                    <>
                        <div className="profile-info">
                            <p>Name: {profile.name}</p>
                            <p>Email: {profile.email}</p>
                            <p>Phone Number: {profile.phone_number}</p>
                            <p>Description: {profile.description}</p>
                            <p>ski or snow: {profile.ski_or_snow}</p>
                            <p>Coach Levels: {profile.coach_level}</p>
                            <p>Years of Experience: {profile.years_of_experience}</p>
                            <p>Disciplines: {profile.activity_type}</p>
                        </div>

                        <Button variant="contained" sx={{
                            backgroundColor: '#7EBBF1',
                            '&:hover': {
                                backgroundColor: '#C6E5F3',
                                color: 'black'
                            },
                            color: 'white'
                        }} onClick={handleEditClick}>
                            Edit
                        </Button>

                    </>
                )}
            </div>
        </>
    );
}

export default ProfilePage;
