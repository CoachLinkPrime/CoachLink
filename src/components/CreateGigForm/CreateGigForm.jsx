import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from "react-redux";
import { Container, FilledInput, InputLabel, Select, MenuItem, RadioGroup, FormControlLabel, Radio, InputAdornment } from '@mui/material';

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
                coach_level: coachLevel,
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
       <h3>Lets get started!</h3>
       <form>
       <div>
        <InputLabel>
            Title:
        </InputLabel>
        <div>
        <FilledInput
        placeholder='Title'
        size='small'
        type='text'
        value={title}
        onChange={(event) => setTitle(event.target.value)}
        />
        </div>
       </div>
       <div>
        <InputLabel>
            Date:
        </InputLabel>
        <FilledInput
        size='small'
        type='date'
        value={date}
        onChange={(event) => setDate(event.target.value)}
        />
       </div>
       <div>
        <InputLabel>
            Time:
        </InputLabel>
        <FilledInput
        placeholder='Time'
        type='time'
        size='small'
        value={timeOne}
        onChange={(event) => setTimeOne(event.target.value)}
        /> - 
        <FilledInput
        type='time'
        size='small'
        value={timeTwo}
        onChange={(event) => setTimeTwo(event.target.value)}
        />
       </div>
       <div>
        <InputLabel>
            Price:
        </InputLabel>
        <FilledInput
        placeholder='Price'
        size='small'
        type='number'
        startAdornment={<InputAdornment position='start'>$</InputAdornment>}
        value={price}
        onChange={(event) => setPrice(event.target.value)}
        />
       </div>
       <table>
        <tr>
            <td><div>
            <label>
                Instuctor
            </label>
            <input
            type = 'radio'       
            value = 'Instuctor'
            label='Instuctor'
            name = 'type'
            onChange={(event) => setType(event.target.value)}
            /> 
        </div></td>
        <td><div>
            <label>
                Coach
            </label>
            <input
            type = 'radio'
            value = 'Coach'
            name = 'type'
            onChange={(event) => setType(event.target.value)}
            />
            </div></td>
        </tr>
        <tr> 
            <td><div>
             <label>
                    Level 1
                </label>
                <input
                type = 'radio'
                value = 'level 1'
                name = 'level'
                onChange={(event) => setLevel(event.target.value)}
                />
                </div>
                </td>
                <td><div>
                <label>
                    Level 100
                </label>
                <input
                type = 'radio'
                value = 'level 100'
                name = 'level'
                onChange={(event) => setLevel(event.target.value)}
                />
                </div></td>
                </tr>
                <tr>
                    <td><div>
                 <label>
                    Level 2
                </label>
                <input
                type = 'radio'
                value = 'level 2'
                name = 'level'
                onChange={(event) => setLevel(event.target.value)}
                />
                </div></td>
                <td> <div>
                <label>
                    Level 200
                </label>
                <input
                type = 'radio'
                value = 'level 200'
                name = 'level'
                onChange={(event) => setLevel(event.target.value)}
                />
                </div></td>
                </tr>
                <tr>
                    <td><div>
                 <label>
                    Level 3
                </label>
                <input
                type = 'radio'
                value = 'level 3'
                name = 'level'
                onChange={(event) => setLevel(event.target.value)}
                />
                </div></td>
                <td><div>
                <label>
                    Level 300
                </label>
                <input
                type = 'radio'
                value = 'level 300'
                name = 'level'
                onChange={(event) => setLevel(event.target.value)}
                />
                </div></td>
                </tr>
                <tr>
                    <td><div>
                 <label>
                    Level 4
                </label>
                <input
                type = 'radio'
                value = 'level 4'
                name = 'level'
                onChange={(event) => setLevel(event.target.value)}
                />
                </div></td>
                <td> 
                <div>
                <label>
                    Level 400
                </label>
                <input
                type = 'radio'
                value = 'level 400'
                name = 'level'
                onChange={(event) => setLevel(event.target.value)}
                />
                </div></td>
                </tr>
       </table>
            <div>
            <label>
                Uncertified
            </label>
            <input  
            type = 'radio'
            value = 'uncertfied'
            name = 'type'
            onChange={(event) => setType(event.target.value)}
            />
            </div>
        
        <div>
            <InputLabel>
                Years of experience:
            </InputLabel>
            <FilledInput
            size='small'
            type='number'
            value={years}
            onChange={(event) => setYears(event.target.value)}
            />
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
       <table>
        <tr>
            <td><label>
            Ski
        </label>
        <input 
            type = 'radio'
            value = 'ski'
            name = 'sport' 
            onChange={(event) => setSport(event.target.value)}
            /></td>
            <td> <label>
            Snowboard
        </label>
        <input 
            type = 'radio'
            value = 'snowboard'
            name = 'sport' 
            onChange={(event) => setSport(event.target.value)}
            /></td>
        </tr>
        <tr>
            <td><label>
                Alpine
            </label>
            <input 
            type = 'radio'
            value = 'Alpine'
            name = 'activity'
            onChange={(event) => setActivity(event.target.value)} 
            /></td>
            <td><div><label>
                Alpine (PGS/PSL)
            </label>
            <input 
            type = 'radio'
            value = 'Alpine'
            name = 'activity'
            onChange={(event) => setActivity(event.target.value)}  
            /></div></td>
        </tr>
        <tr>
            <td><label>
                Slopestyle
            </label>
            <input 
            type = 'radio'
            value = 'Slopestyle'
            name = 'activity'
            onChange={(event) => setActivity(event.target.value)}  
            /></td>
            <td><label>
                Boarder Cross
            </label>
            <input 
            type = 'radio'
            value = 'Boarder cross'
            name = 'activity'
            onChange={(event) => setActivity(event.target.value)}  
            /></td>
        </tr>
        <tr>
            <td><label>
                Skier Cross
            </label>
            <input 
            type = 'radio'
            value = 'Skier cross'
            name = 'activity'
            onChange={(event) => setActivity(event.target.value)}  
            /></td>
            <td><label>
                Slopestyle
            </label>
            <input 
            type = 'radio'
            value = 'Slopestyle'
            name = 'activity'
            onChange={(event) => setActivity(event.target.value)}  
            /></td>
        </tr>
        <tr>
            <td><label>
                Halfpipe
            </label>
            <input 
            type = 'radio'
            value = 'Halfpipe'
            name = 'activity'
            onChange={(event) => setActivity(event.target.value)}  
            /></td>
            <td> <label>
                Halfpipe
            </label>
            <input 
            type = 'radio'
            value = 'Halfpipe'
            name = 'activity'
            onChange={(event) => setActivity(event.target.value)}  
            /></td>
        </tr>
       </table>
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