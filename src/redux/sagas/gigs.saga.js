import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

//this issues our call to the server to where we will get our gigs array, we then send it away to the reducer to hold in our store
function* fetchGigs() {
	try {
		const response = yield axios.get('/api/gig/available');
		yield put({ type: 'SET_GIGS', payload: response.data });
	} catch {
		console.log('error getting gig response');
	}
}

// call to DB for past gigs based on user's id
function* fetchCompletedGigs() {
	try {
		const response = yield axios.get('/api/gig/past');
		yield put({ type: 'SET_COMPLETED_GIGS', payload: response.data });
	} catch {
		console.log('error with fetchPastGigs saga..!');
	}
}

function* gigsSaga() {
	yield takeLatest('FETCH_GIGS', fetchGigs),
	yield takeLatest('FETCH_COMPLETED_GIGS', fetchCompletedGigs);
}

export default gigsSaga;
