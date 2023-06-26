import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Container, Button } from '@mui/material';
import './LegalPage.css';

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
			history.push('/profile')
		} else {
            //should we create a better sylistic thing than an alert?
            //many API choices
			alert('please agree to the terms to use the apps');
		}
	};

	return (
		<>
		<Container>
			<h2>Legal Page</h2>
			<p>This is where the legal documents go: </p>
			<div className="terms-container">
      <div className="terms-content">
        <h1>Terms and Conditions (Fictional)</h1>
        <p>
          Please read these fictional terms and conditions carefully before using our mobile application.
        </p>
        <ol>
          <li>
            <strong>Acceptance of Terms</strong>
            <p>
              By accessing or using our mobile application, you acknowledge and agree that these terms and conditions are entirely fictional and have no legal effect. They are provided for entertainment purposes only. If you do not agree with this disclaimer, please do not use the application.
            </p>
          </li>
          <li>
            <strong>Use of the Application</strong>
            <p>
              (a) You may use the application solely for fictional and imaginary purposes.
            </p>
            <p>
              (b) You agree not to rely on any information, services, or functionalities provided by the application, as they are not real or functional.
            </p>
            <p>
              (c) You shall not use the application for any real or genuine purposes or attempt to deceive others into believing that the application provides actual services or functionality.
            </p>
          </li>
          <li>
            <strong>Intellectual Property</strong>
            <p>
              (a) All intellectual property rights in the fictional application belong to the imaginary app developer.
            </p>
            <p>
              (b) You may not use, reproduce, modify, distribute, or create derivative works from any fictional information, software, products, or services obtained from the application.
            </p>
          </li>
          <li>
            <strong>Privacy Policy</strong>
            <p>
              (a) There is no real privacy policy associated with the fictional application.
            </p>
            <p>
              (b) No personal data is collected or processed within the fictional application.
            </p>
          </li>
          <li>
            <strong>Disclaimer of Warranties</strong>
            <p>
              (a) The fictional application is provided on an "as is" and "as available" basis. It does not provide any real services, functionalities, or warranties.
            </p>
            <p>
              (b) We disclaim all warranties, express or implied, including but not limited to warranties of merchantability, fitness for a particular purpose, and non-infringement, as they do not apply to the fictional application.
            </p>
          </li>
          <li>
            <strong>Limitation of Liability</strong>
            <p>
              We shall not be liable for any fictional or imaginary damages arising out of or in connection with the use of the application, as it is not real and has no actual functionality.
            </p>
          </li>
          <li>
            <strong>Modification of Terms</strong>
            <p>
              We reserve the right to modify or invent additional fictional terms and conditions at any time without prior notice. Your continued use of the fictional application after any modifications will constitute your acceptance of the fictional terms.
            </p>
          </li>
        </ol>
      </div>
    </div>
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
			<Button sx={{
				backgroundColor: '#7EBBF1',
				'&:hover': {
					backgroundColor: '#C6E5F3',
					color: 'black'
				},
				color: 'white'
				}} 
			onClick={forwardButton}>
				Continue
			</Button>
			</Container>
		</>
	);
}

export default LegalPage;
