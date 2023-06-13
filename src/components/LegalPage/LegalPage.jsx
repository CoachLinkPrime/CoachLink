import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

function LegalPage() {
    //this state will be used to store our legal status which will then be sent to redux
	const [legalStatus, setLegalStatus] = useState(false);
	const history = useHistory();
	const dispatch = useDispatch();
    //grab the user from our store so we can access the userID for update
	const user = useSelector((store) => store.user);

    //when our checkbox is checked, it turns our boolean from false to true
    //when the checkbox is not checked, our state changes from true to false
	const changeLegalState = () => {
		if (legalStatus === false) {
			setLegalStatus(true);
		} else {
			setLegalStatus(false);
		}
	};

    //if our legal status is true, then we will dispatch that info when the continue button is clicked, this will change the database. If the legal status is false, we send an alert telling the user.
	const forwardButton = () => {
		if (legalStatus === true) {
			dispatch({
				type: 'UPDATE_LEGAL',
				payload: {
					legalStatus: legalStatus,
					userID: user.id,
				},
			});
			history.push('/home')
		} else {
            //should we create a better sylistic thing than an alert?
            //many API choices
			alert('please agree to the terms to use the apps');
		}
	};

	return (
		<>
			<h2>Legal Page</h2>
			<p>This is where the legal documents go: </p>
			<br />
			<br />
			<input
				type='checkbox'
				name='legalCheck'
				id='legalCheck'
				onClick={changeLegalState}
			/>
			<label htmlFor='legalCheck'>I acknowledge these legal terms</label>
			<br />
			<button onClick={forwardButton}>Continue</button>
		</>
	);
}

export default LegalPage;
