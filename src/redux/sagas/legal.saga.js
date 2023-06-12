import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

//this function will send a action.payload of our legal boolean to 
//our server route and will update from there
function* updateLegal(action) {
	try {
		yield axios.put(`/api/user/${action.payload.userID}`, action.payload);
	} catch {
		console.log('error updating legal term');
	}
}

function* legalSaga() {
	yield takeLatest('UPDATE_LEGAL', updateLegal);
}

export default legalSaga;
