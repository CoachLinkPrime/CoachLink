import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from "react-redux";
import { Container, TextField, FilledInput, InputLabel, Select, MenuItem, InputAdornment, Input } from '@mui/material';
import './CreateGigForm.css'

function CreateGigForm() {

    const history = useHistory();
    const dispatch = useDispatch();

    const [title, setTitle] = useState('');
    const [date, setDate] = useState('');
    const [timeOne, setTimeOne] = useState('');
    const [timeTwo, setTimeTwo] = useState('');
    const [price, setPrice] = useState('');
    const [location, setLocation] = useState('');
    const [type, setType] = useState('');
    const [level, setLevel] = useState('');
    const [years, setYears] = useState('');
    const [sport, setSport] = useState('');
    const [activity, setActivity] = useState('');
    const [description, setDescription] = useState('');


    // This will create the coach level combining the type and level of coach
    const coachLevel = (type + " " + level);

    // This create the time the clubs need
    const time = (timeOne + '-' + timeTwo);

    // console.log(coachLevel);
    // console.log(time);

    const addGig = (event) => {
        event.preventDefault();
        console.log('adding gig');

        // calling to the saga to post a gig

        dispatch({
            type: 'POST_GIG',
            payload: {
                title: title,
                description: description,
                date: date,
                time: time,
                coach_level: level,
                years: years,
                activity_type: activity,
                ski_or_snow: sport,
                location: location,
                price: price
            }
        })
        history.push('/user');
    }

    return(
       <>
       <Container>
       <h3>Gig Details</h3>
       <form>
       
        <div>
        <TextField
        margin='dense'
        label= 'Club Name'
        placeholder='Club Name'
        size='small'
        type='text'
        value={title}
        onChange={(event) => setTitle(event.target.value)}
        />
        </div>
        <div>
        <p>What are you looking for?</p>
        <table>
        <tr>
            <td>
        <label className = 'box'>
            Ski   
        <input 
            type = 'radio'
            value = 'Ski'
            name = 'sport' 
            onChange={(event) => setSport(event.target.value)}
            />
            <span className='button'></span>
            </label>
            </td>
            <td>
         <label className = 'box'>
            Snowboard
        <input 
            type = 'radio'
            value = 'Snowboard'
            name = 'sport' 
            onChange={(event) => setSport(event.target.value)}
            />
            <span className='button'></span>
            </label>
            </td>
        </tr>
        <tr>
            <td><label className = 'box'>
                Alpine
            <input 
            type = 'radio'
            value = 'Alpine'
            name = 'activity'
            onChange={(event) => setActivity(event.target.value)} 
            />
            <span className='button'></span>
            </label>
            </td>
            <td><label className = 'box'>
                Alpine (PGS/PSL)     
            <input 
            type = 'radio'
            value = 'Alpine'
            name = 'activity'
            onChange={(event) => setActivity(event.target.value)}  
            />
            <span className='button'></span>
            </label>
            </td>
        </tr>
        <tr>
            <td><label className = 'box'>
                Slopestyle
            <input 
            type = 'radio'
            value = 'Slopestyle'
            name = 'activity'
            onChange={(event) => setActivity(event.target.value)}  
            />
            <span className='button'></span>
            </label>
            </td>
            <td><label className = 'box'>
                Boarder Cross
            <input 
            type = 'radio'
            value = 'Boarder cross'
            name = 'activity'
            onChange={(event) => setActivity(event.target.value)}  
            />
            <span className='button'></span>
            </label>
            </td>
        </tr>
        <tr>
            <td><label className = 'box'>
                Skier Cross
            <input 
            type = 'radio'
            value = 'Skier cross'
            name = 'activity'
            onChange={(event) => setActivity(event.target.value)}  
            />
            <span className='button'></span>
            </label>
            </td>
            <td><label className = 'box'>
                Slopestyle
            <input 
            type = 'radio'
            value = 'Slopestyle'
            name = 'activity'
            onChange={(event) => setActivity(event.target.value)}  
            />
            <span className='button'></span>
            </label>
            </td>
        </tr>
        <tr>
            <td><label className = 'box'>
                Halfpipe
            <input 
            type = 'radio'
            value = 'Halfpipe'
            name = 'activity'
            onChange={(event) => setActivity(event.target.value)}  
            />
            <span className='button'></span>
            </label>
            </td>
            <td> <label className = 'box'>
                Halfpipe
            <input 
            type = 'radio'
            value = 'Halfpipe'
            name = 'activity'
            onChange={(event) => setActivity(event.target.value)}  
            />
            <span className='button'></span>
            </label>
            </td>
        </tr>
       </table>
       </div>
       <div>
            <InputLabel id='location'>
                Location:
            </InputLabel>
            <Select labelId='location' label= "--Where is your club--" onChange={(event) => setLocation(event.target.value)}>
                <MenuItem value='Lutsen Mountains'>Lutsen Mountains</MenuItem>
                <MenuItem value='Spirit Mountain'>Spirit Mountain</MenuItem>
                <MenuItem value='Giants Ridge'>Giants Ridge</MenuItem>
                <MenuItem value='Afton Alps'>Afton Alps</MenuItem>
                <MenuItem value='Mt. Kato'>Mt. Kato</MenuItem>
                <MenuItem value='Welch Village'>Welch Village</MenuItem>
                <MenuItem value='Powder Ridge'>Powder Ridge</MenuItem>
                <MenuItem value='Wild Mountain'>Wild Mountain</MenuItem>
                <MenuItem value='Andes Tower Hills'>Andes Tower Hills</MenuItem>
                <MenuItem value='Buena Vista'>Buena Vista</MenuItem>
                <MenuItem value='Hyland Hills'>Hyland Hills</MenuItem>
                <MenuItem value='Detroit Mountain'>Detroit Mountain</MenuItem>
                <MenuItem value='Buck Hill Ski Area'>Buck Hill Ski Area</MenuItem>
                <MenuItem value='Trollhaugen'>Trollhaugen</MenuItem>
                <MenuItem value='Granite Peak'>Granite Peak</MenuItem>
            </Select>  
       </div>
        <div>
        <p>When?</p>
       <div>
        <Input
        size='small'
        type='date'
        value={date}
        onChange={(event) => setDate(event.target.value)}
        />
       </div>
       <div>
        <Input
        placeholder='Time'
        type='time'
        size='small'
        value={timeOne}
        onChange={(event) => setTimeOne(event.target.value)}
        /> - 
        <Input
        type='time'
        size='small'
        value={timeTwo}
        onChange={(event) => setTimeTwo(event.target.value)}
        />
       </div>
       </div>
       <div>
        <TextField
        placeholder='Price'
        size='small'
        type='number'
        label='Price'
        startAdornment={<InputAdornment position='start'>$</InputAdornment>}
        value={price}
        onChange={(event) => setPrice(event.target.value)}
        />
       </div>
       <div>
            <div>
            <p>Qualifications (optional)</p>
            <p>None</p>
            <TextField
            size='small'
            placeholder='Years of Experience'
            label='Years of Experience'
            type='number'
            value={years}
            onChange={(event) => setYears(event.target.value)}
            />
            </div>
        
            <p>Instructor (PSIA/AASI)</p>
             <label className = 'box'>
                    Level 1  
                <input
                type = 'radio'
                value = 'Instuctor Level 1'
                name = 'level'
                onChange={(event) => setLevel(event.target.value)}
                />
                <span className='button'></span>
                </label>
                <label className = 'box'>
                    Level 2
                <input
                type = 'radio'
                value = 'Instuctor Level 2'
                name = 'level'
                onChange={(event) => setLevel(event.target.value)}
                />
                <span className='button'></span>
                </label>
                <label className = 'box'>
                    Level 3               
                <input
                type = 'radio'
                value = 'Instructor Level 3'
                name = 'level'
                onChange={(event) => setLevel(event.target.value)}
                />
                <span className='button'></span>
                </label>
                <label className = 'box'>
                    Level 4               
                <input
                type = 'radio'
                value = 'Instuctor Level 4'
                name = 'level'
                onChange={(event) => setLevel(event.target.value)}
                />
                <span className='button'></span>
                </label>
                
            <div>
            <p>Coach (USSA)</p>
                <label className = 'box'>
                    Level 100
                <input
                type = 'radio'
                value = 'Coach Level 100'
                name = 'level'
                onChange={(event) => setLevel(event.target.value)}
                />
                <span className='button'></span>
                </label>  
                <label className = 'box'>
                    Level 200
                <input
                type = 'radio'
                value = 'Coach Level 200'
                name = 'level'
                onChange={(event) => setLevel(event.target.value)}
                />
                <span className='button'></span>
                </label>
                <label className = 'box'>
                    Level 300               
                <input
                type = 'radio'
                value = 'Coach Level 300'
                name = 'level'
                onChange={(event) => setLevel(event.target.value)}
                />
                <span className='button'></span>
                </label>
                <label className = 'box'>
                    Level 400                
                <input
                type = 'radio'
                value = 'Coach Level 400'
                name = 'level'
                onChange={(event) => setLevel(event.target.value)}
                />
                <span className='button'></span>
                </label>
                </div>
        </div>
        <div>
            <label>
                Description: 
            </label>
            <textarea
            rows='10'
            cols='50'
            value={description}
            onChange={(event) => setDescription(event.target.value)}
            >
            </textarea>
        </div>

        <div>
            <button onClick={addGig}>Publish</button>
        </div>
        </form>
        </Container>
       </> 
    )

}

export default CreateGigForm;