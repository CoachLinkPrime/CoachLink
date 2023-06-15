import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from "react-redux";
import { Container } from '@mui/material';

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

    const coachLevel = (type + " " + level);
    const time = (timeOne + '-' + timeTwo);

    // console.log(coachLevel);
    // console.log(time);

    const addGig = (event) => {
        event.preventDefault();
        console.log('adding gig');

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
        <label>
            Title:
        </label>
        <input
        placeholder='Title'
        type='text'
        value={title}
        onChange={(event) => setTitle(event.target.value)}
        />
       </div>
       <div>
        <label>
            Date:
        </label>
        <input
        type='date'
        value={date}
        onChange={(event) => setDate(event.target.value)}
        />
       </div>
       <div>
        <label>
            Time:
        </label>
        <input
        placeholder='Time'
        type='time'
        value={timeOne}
        onChange={(event) => setTimeOne(event.target.value)}
        /> - 
        <input
        type='time'
        value={timeTwo}
        onChange={(event) => setTimeTwo(event.target.value)}
        />
       </div>
       <div>
        <label>
            Price:
        </label>
        <input
        placeholder='Price'
        type='number'
        value={price}
        onChange={(event) => setPrice(event.target.value)}
        />
       </div>
       <div>
       <div>
        <div>
            <label>
                Instuctor
            </label>
            <input 
            type = 'radio'
            value = 'Instuctor'
            name = 'type'
            onChange={(event) => setType(event.target.value)}
            /> 
        </div>
             <label>
                    Level 1
                </label>
                <input
                type = 'radio'
                value = 'level 1'
                name = 'level'
                onChange={(event) => setLevel(event.target.value)}
                />
                 <label>
                    Level 2
                </label>
                <input
                type = 'radio'
                value = 'level 2'
                name = 'level'
                onChange={(event) => setLevel(event.target.value)}
                />
                 <label>
                    Level 3
                </label>
                <input
                type = 'radio'
                value = 'level 3'
                name = 'level'
                onChange={(event) => setLevel(event.target.value)}
                />
                 <label>
                    Level 4
                </label>
                <input
                type = 'radio'
                value = 'level 4'
                name = 'level'
                onChange={(event) => setLevel(event.target.value)}
                />
            </div>
        <div>
            <label>
                Coach
            </label>
            <input 
            type = 'radio'
            value = 'Coach'
            name = 'type'
            onChange={(event) => setType(event.target.value)}
            />
            <div>
                <label>
                    Level 100
                </label>
                <input
                type = 'radio'
                value = 'level 100'
                name = 'level'
                onChange={(event) => setLevel(event.target.value)}
                />
                <label>
                    Level 200
                </label>
                <input
                type = 'radio'
                value = 'level 200'
                name = 'level'
                onChange={(event) => setLevel(event.target.value)}
                />
                <label>
                    Level 300
                </label>
                <input
                type = 'radio'
                value = 'level 300'
                name = 'level'
                onChange={(event) => setLevel(event.target.value)}
                />
                <label>
                    Level 400
                </label>
                <input
                type = 'radio'
                value = 'level 400'
                name = 'level'
                onChange={(event) => setLevel(event.target.value)}
                />
            </div>
            </div>
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
        </div>
        <div>
            <label>
                Years of experience:
            </label>
            <input
            playholder='Years of Experience'
            type='number'
            value={years}
            onChange={(event) => setYears(event.target.value)}
            />
        </div>
        <div>
            <label>
                Location:
            </label>
            <select id = 'location' onChange={(event) => setLocation(event.target.value)}>
                <option value=''>--Where is your club?--</option>
                <option value='Lutsen Mountains'>Lutsen Mountains</option>
                <option value='Spirit Mountain'>Spirit Mountain</option>
                <option value='Giants Ridge'>Giants Ridge</option>
                <option value='Afton Alps'>Afton Alps</option>
                <option value='Mt. Kato'>Mt. Kato</option>
                <option value='Welch Village'>Welch Village</option>
                <option value='Powder Ridge'>Powder Ridge</option>
                <option value='Wild Mountain'>Wild Mountain</option>
                <option value='Andes Tower Hills'>Andes Tower Hills</option>
                <option value='Buena Vista'>Buena Vista</option>
                <option value='Hyland Hills'>Hyland Hills</option>
                <option value='Detroit Mountain'>Detroit Mountain</option>
                <option value='Buck Hill Ski Area'>Buck Hill Ski Area</option>
                <option value='Trollhaugen'>Trollhaugen</option>
                <option value='Granite Peak'>Granite Peak</option>
            </select>
       </div>
       <div>
        <label>
            Ski
        </label>
        <input 
            type = 'radio'
            value = 'ski'
            name = 'sport' 
            onChange={(event) => setSport(event.target.value)}
            />
        <div>
            <label>
                Alpine
            </label>
            <input 
            type = 'radio'
            value = 'Alpine'
            name = 'activity'
            onChange={(event) => setActivity(event.target.value)} 
            />
            <label>
                Slopestyle
            </label>
            <input 
            type = 'radio'
            value = 'Slopestyle'
            name = 'activity'
            onChange={(event) => setActivity(event.target.value)}  
            />
            <label>
                Skier Cross
            </label>
            <input 
            type = 'radio'
            value = 'Skier cross'
            name = 'activity'
            onChange={(event) => setActivity(event.target.value)}  
            />
            <label>
                Halfpipe
            </label>
            <input 
            type = 'radio'
            value = 'Halfpipe'
            name = 'activity'
            onChange={(event) => setActivity(event.target.value)}  
            />
        </div>

        
        <label>
            Snowboard
        </label>
        <input 
            type = 'radio'
            value = 'snowboard'
            name = 'sport' 
            onChange={(event) => setSport(event.target.value)}
            />
        <div>
            <label>
                Alpine
            </label>
            <input 
            type = 'radio'
            value = 'Alpine'
            name = 'activity'
            onChange={(event) => setActivity(event.target.value)}  
            />
            <label>
                Boarder Cross
            </label>
            <input 
            type = 'radio'
            value = 'Boarder cross'
            name = 'activity'
            onChange={(event) => setActivity(event.target.value)}  
            />
            <label>
                Slopestyle
            </label>
            <input 
            type = 'radio'
            value = 'Slopestyle'
            name = 'activity'
            onChange={(event) => setActivity(event.target.value)}  
            />
             <label>
                Halfpipe
            </label>
            <input 
            type = 'radio'
            value = 'Halfpipe'
            name = 'activity'
            onChange={(event) => setActivity(event.target.value)}  
            />
        </div>

        </div>

        <div>
            <label>
                Description
            </label>
            <input
            type='textbox'
            value={description}
            onChange={(event) => setDescription(event.target.value)}
            />
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