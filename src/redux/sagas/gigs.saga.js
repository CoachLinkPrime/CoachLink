import { accordionSummaryClasses } from '@mui/material';
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

// call to database for upcoming gigs based on user's id
function* fetchUpcomingGigs() {
	try {
		const response = yield axios.get('/api/gig/upcoming');
		yield put({ type: 'SET_UPCOMING_GIGS', payload: response.data });
	} catch {
		console.log('error with fetchUpcomingGigs saga');
	}
}

function* postGigs(action) {
	try {
		const dbResponse = yield axios.post('/api/gig', action.payload);
		console.log('got the req', action.payload);

		yield put({ type: 'SAGA/FETCH_GIGS' });
	} catch {
		console.log('error in posting');
	}
}

function* deleteGig(action) {
	try {
		console.log('In saga deleteGig, got the request:', action.payload);
		yield axios.delete(`api/gig/${action.payload}`);
		yield put({ type: 'FETCH_UPCOMING_GIGS' });
	} catch {
		console.log('Could not connect with server in deleteGig in saga');
	}
}

function* updateGigWithCoach(action) {
	try {
		yield axios.put(`api/gig/updateGig`, action.payload);
		yield put({ type: 'FETCH_GIGS' });
	} catch {
		console.log('you are actually kinda nice');
	}
}

function* gigsSaga() {
	yield takeLatest('FETCH_GIGS', fetchGigs),
		yield takeLatest('FETCH_COMPLETED_GIGS', fetchCompletedGigs),
		yield takeLatest('FETCH_UPCOMING_GIGS', fetchUpcomingGigs),
		yield takeLatest('POST_GIG', postGigs);
	yield takeLatest('DELETE_GIG', deleteGig);
	yield takeLatest('UPDATE_GIG_WITH_COACH', updateGigWithCoach);
}

export default gigsSaga;
